document.getElementById("task-name")?.addEventListener("focus", () => {
  document.querySelector(".errGlpi").innerHTML = ""
})

document.getElementById("task-password")?.addEventListener("focus", () => {
  document.querySelector(".errGlpi").innerHTML = ""
})

document.getElementById('monitor-btn')?.addEventListener('click', () => {
    document.querySelector(".errGlpi").innerHTML = `
      <div class="alertGlpi">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1hbGVydC1pY29uIGx1Y2lkZS1jaXJjbGUtYWxlcnQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PGxpbmUgeDE9IjEyIiB4Mj0iMTIiIHkxPSI4IiB5Mj0iMTIiLz48bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiLz48L3N2Zz4=" />
          <p>Usuário e senha incorretos.</p>
      </div>
      `.trim()
  connectMonitorWs()
})