const user = document.getElementById("task-name")

user?.addEventListener("focus", () => {
  document.querySelector(".errGlpi").innerHTML = ""
})

const password = document.getElementById("task-password")

password?.addEventListener("focus", () => {
  document.querySelector(".errGlpi").innerHTML = ""
})

document.getElementById('monitor-btn')?.addEventListener('click', async () => {
  const output = document.getElementById("monitor-output")
  output.innerHTML = ""
  
  if(user.value === "" || password.value === "" ){
    return document.querySelector(".errGlpi").innerHTML = `
      <div class="alertGlpi">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1hbGVydC1pY29uIGx1Y2lkZS1jaXJjbGUtYWxlcnQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSI4IiB5Mj0iMTIiLz48bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiLz48L3N2Zz4=" />
          <p>Preencher os campos usuário e senha.</p>
      </div>
      `.trim()
  }
  
  addMessage('monitor-output', '<p>Acessando GLPI...</p>')
  console.log(dateLogs)
  
  try {
        document.getElementById("monitor-btn").disabled = true
        const response = await fetch(`${API_BASE_URL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "user": user.value.trim(),
              "password": password.value.trim()
            })
        })

        const responseJson = await response.json()

        if (response.ok) {
            addMessage('monitor-output', '<p class="sucess">✅ Processo Concluido.</p>')
        } else {
           addMessage('monitor-output', `<p>${responseJson.message}</p>`, true)
        }
        
    } catch (error) {
        addMessage('monitor-output', 'Erro de conexão.', true)
    } finally {
      document.getElementById("monitor-btn").disabled = false
    }

  connectMonitorWs()
})