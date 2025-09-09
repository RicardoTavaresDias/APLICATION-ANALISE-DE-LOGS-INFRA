// Configurações fictícias (substitua por endpoints reais)
const API_BASE_URL = 'http://localhost:3333'
const WS_TASKS_URL = 'ws://localhost:3333'
const WS_MONITOR_URL = 'ws://api.example.com/ws-monitor'

function addMessage(outputId, message, isError = false) {
    const output = document.getElementById(outputId)
    if (!output) return
    const p = document.createElement('p')
    p.innerHTML += `<p style="white-space: pre; margin: 0; margin-left: 5px;" >${message}</p>`
    if (isError) p.classList.add('error')
    output.appendChild(p)
    output.scrollTop = output.scrollHeight
}

let taskWs, monitorWs

  taskWs = new WebSocket(WS_TASKS_URL)
    taskWs.onopen = () => addMessage('task-output', 'Conexão servidor estabelecida.')
    taskWs.onmessage = (event) => addMessage('task-output', event.data)
    taskWs.onclose = () => addMessage('task-output', 'Conexão fechada.')


function connectMonitorWs() {
    monitorWs = new WebSocket(WS_MONITOR_URL)
    monitorWs.onopen = () => addMessage('monitor-output', 'Monitoramento iniciado.')
    monitorWs.onmessage = (event) => addMessage('monitor-output', event.data)
    monitorWs.onclose = () => addMessage('monitor-output', 'Monitoramento encerrado.')
}

document.getElementById('schedule-btn')?.addEventListener('click', async () => {
    const output = document.getElementById("task-output")
    output.innerHTML = ""

    const dateRange = document.getElementById('date-range').value.split("to")
    if (dateRange[0] === "") {
        addMessage('task-output', '<p>É necessário informar a data de início e a data de término para continuar.</p>', true)
    }

    const taskTimeFrom = dateRange[0].trim()
    const taskTimeTo = dateRange[1].trim()
    
    try {
        const response = await fetch(`${API_BASE_URL}/logs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "dateStart": taskTimeFrom.split("T")[0],
              "dateEnd": taskTimeTo.split("T")[0]
            })
        })
        if (response.ok) {
            addMessage('task-output', '<p class="sucess">✅ Logs Concluido!</p>')
        } else {
            addMessage('task-output', '<p>É necessário informar a data de início e a data de término para continuar.</p>', true)
        }
    } catch (error) {
        addMessage('task-output', 'Erro de conexão.', true)
    }
})

document.getElementById('monitor-btn')?.addEventListener('click', () => {
    connectMonitorWs()
})