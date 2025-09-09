document.getElementById("date-range").addEventListener("focus", () => { 
  document.querySelector(".errLogs").innerHTML = "" 
})

document.getElementById('schedule-btn')?.addEventListener('click', async () => {
    const output = document.getElementById("task-output")
    output.innerHTML = ""

    const dateRange = document.getElementById('date-range').value
    if (!dateRange) {
        return document.querySelector(".errLogs").innerHTML = `
            <div class="alert">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1hbGVydC1pY29uIGx1Y2lkZS1jaXJjbGUtYWxlcnQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSI4IiB5Mj0iMTIiLz48bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiLz48L3N2Zz4=" />
                <p>É necessário informar a data de início e a data de término para continuar.</p>
            </div>
            `.trim()
    }

    const taskTimeFrom = dateRange.split("to")[0].trim()
    const taskTimeTo = dateRange.split("to")[1].trim()

    inputDate.clear()
    
    try {
        const response = await fetch(`${API_BASE_URL}/logs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            "dateStart": taskTimeFrom.trim(),
            "dateEnd": taskTimeTo.trim()
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

