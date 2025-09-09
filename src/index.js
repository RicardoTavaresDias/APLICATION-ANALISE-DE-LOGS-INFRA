// Configurações fictícias (substitua por endpoints reais)
const API_BASE_URL = 'http://localhost:3333'
const WS_TASKS_URL = 'ws://localhost:3333/ws1'
const WS_MONITOR_URL = 'ws://localhost:3333/ws2'

function addMessage(outputId, message, isError = false) {
    const output = document.getElementById(outputId)
    if (!output) return
    const p = document.createElement('p')
    p.innerHTML += `<p style="white-space: pre; margin: 0; margin-left: 5px;" >${message}</p>`
    if (isError) p.classList.add('error')
    output.appendChild(p)
    output.scrollTop = output.scrollHeight
}

let taskWs
let monitorWs

  taskWs = new WebSocket(WS_TASKS_URL)
    taskWs.onopen = () => addMessage('task-output', 'Conexão servidor estabelecida.')
    taskWs.onmessage = (event) => addMessage('task-output', event.data)
    taskWs.onclose = () => addMessage('task-output', 'Conexão fechada.')



    monitorWs = new WebSocket(WS_MONITOR_URL)

    monitorWs.onopen = () => addMessage('monitor-output', 'Monitoramento iniciado.')
    monitorWs.onmessage = (event) => addMessage('monitor-output', event.data)
    monitorWs.onclose = () => addMessage('monitor-output', 'Monitoramento encerrado.')
