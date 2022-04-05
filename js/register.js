// Register
const saveSignUpData = () => {
  let fu_name, e_mail, psw, con_pass
  ;(fu_name = document.querySelector('#fu_name').value),
    (e_mail = document.querySelector('#e_mail').value),
    (psw = document.querySelector('#psw').value),
    (con_pass = document.querySelector('#con_pass').value)

  console.log(fu_name, e_mail, psw, con_pass)

  let login_records = new Array()
  if ((((fu_name != e_mail) != psw) != con_pass) != '') {
    login_records = JSON.parse(localStorage.getItem('signupdata'))
    if (
      login_records.some((v) => {
        return v.e_mail === e_mail
      })
    ) {
      alert('Email Already Exist')
    }
    if (
      login_records.some((v) => {
        return v.psw === v.con_pass
        // v.psw === psw
      })
    ) {
      alert('Password is Not the Same')
    } else {
      login_records.push({
        fu_name: fu_name,
        e_mail: e_mail,
        psw: psw,
        con_pass: con_pass,
      })
    }
  } else {
    alert('Fill the Form')
  }
  localStorage.setItem('signupdata', JSON.stringify(login_records))
}

// Login
// login validation
var attempt = 5 // Variable to count number of attempts.
function validate() {
  var email = document.querySelector('#email').value
  var pswd = document.querySelector('#pswd').value
  attempt-- //Decrement by one
  alert(`You have ${attempt} Attempt Left`)
  if (attempt === 0) {
    document.querySelector('#email').disabled = true
    document.querySelector('#pswd').disabled = true
    document.querySelector('#submit').disabled = true
    return false
  }
}

// Login
const loginData = () => {
  let email = document.querySelector('#email').value
  let pswd = document.querySelector('#pswd').value

  login_records = JSON.parse(localStorage.getItem('signupdata'))
  // console.log(login_records)
  for (v of login_records) {
    if (v.e_mail === email && v.psw === pswd) {
      window.open(`dashboard.html`)
    }
  }
}
