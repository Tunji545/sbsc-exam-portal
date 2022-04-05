if (!localStorage.getItem('messageData')) {
  let arr = []
  data = {
    userName: '',
    userEmail: '',
    userNumber: '',
    userMessage: '',
  }
  arr.push(data)
  localStorage.setItem('messageData', JSON.stringify(arr))
} else {
  console.log('Already set')
}
function submitMeassage() {
  const userName = document.querySelector('#userName')
  const userEmail = document.querySelector('#userEmail')
  const userNumber = document.querySelector('#userNumber')
  const userMessage = document.querySelector('#userMessage')

  if (
    userName.value === '' ||
    userEmail === '' ||
    userNumber === '' ||
    userMessage === ''
  ) {
    alert('wos wobi')
  } else {
    let ade = JSON.parse(localStorage.getItem('messageData'))
    mes = {
      userName: userName.value,
      userEmail: userEmail.value,
      userNumber: userNumber.value,
      userMessage: userMessage.value,
    }
    ade.push(mes)
    localStorage.setItem('messageData', JSON.stringify(ade))
  }
}
