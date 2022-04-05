const alert = document.querySelector('.alert')
const mainAlert = document.querySelector('.mainAlert')
export const showAlert = (text, action) => {
  if (alert) {
    alert.textContent = text
  }
  mainAlert.textContent = text

  if (alert) {
    alert.classList.add(`alert-${action}`)
  }
  mainAlert.classList.add(`alert-${action}`)

  setTimeout(() => {
    if (alert) {
      alert.textContent = ''
    }
    mainAlert.textContent = ''
    if (alert) {
      alert.classList.remove(`alert-${action}`)
    }
    mainAlert.classList.remove(`alert-${action}`)
  }, 1000)
}
