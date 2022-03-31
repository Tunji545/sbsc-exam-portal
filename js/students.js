const modalButton = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')
const form = document.querySelector('form')
const studentBio = document.querySelector('.studentBio')
const student = document.querySelector('.student')
const alert = document.querySelector('.alert')
const mainAlert = document.querySelector('.mainAlert')
const container = document.querySelector('.student-records')
const submit = document.querySelector('.submit')

let editElement
let editFlag = false
let editId = ''

let inputEls = document.querySelectorAll('input')
inputEls = [...inputEls]

modalButton.addEventListener('click', () => {
  modalOverlay.classList.toggle('open-modal')
})

closeBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal')
})

// Form
const arr = []
let studentArr = []
form.addEventListener('submit', (e) => {
  e.preventDefault()
  inputEls.map((input) => {
    if (input.value && !editFlag) {
      if (input.type === 'text') {
        let key = input.id
        const obj = {
          [key]: input.value,
        }
        arr.push(obj)
      } else if (input.type === 'number') {
        let key = input.id
        const obj = {
          [key]: input.value,
        }
        arr.push(obj)
      } else if (input.type === 'email') {
        let key = input.id
        const obj = {
          [key]: input.value,
        }
        arr.push(obj)
      } else {
        let key = input.id
        const obj = {
          [key]: input.value,
        }
        arr.push(obj)
      }

      const studentData = Object.assign({}, ...arr)
      studentData.id = 'qw' + new Date().getTime().toString()
      studentArr = JSON.parse(localStorage.getItem('studentData')) || []
      studentArr.push(studentData)
      showAlert('Item Added', 'success')
      container.classList.add('show-records')
      // displayStudentData()
    } else if (input.value && editFlag) {
    } else {
      showAlert('Please, enter value', 'danger')
    }
  })
  localStorage.setItem('studentData', JSON.stringify(studentArr))
  let data = JSON.parse(localStorage.getItem('studentData'))
  student.textContent = `You have ${studentArr.length} students`

  studentBio.innerHTML = ''
  for (let student of data) {
    studentBio.innerHTML += `
            <tr id='${student.id}'>
                  <td>${student.yearEnrolled}</td>
                  <td>${student.firstName}</td>
                  <td>${student.lastName}</td>
                  <td>${student.matricNo}</td>
                  <td>${student.gradeScore}</td>
                  <td>${student.honours}</td>
                  <td>${student.email}</td>
                  <td>
                  <button type="button" class="edit-btn"><img src="../images/editBtn.png" class="edit"></button>
                  <button type="button" class="delete-btn"><img src="../images/trash.png" class="delete"></button>
                  </td>
                </tr>
          `
  }
  setToDefault()
})

// Output
const displayStudentData = () => {
  if (localStorage.getItem('studentData')) {
    const studentArr = JSON.parse(localStorage.getItem('studentData'))
    studentArr.forEach((student) => {
      const {
        email,
        firstName,
        lastName,
        gradeScore,
        honours,
        matricNo,
        yearEnrolled,
        id,
      } = student
      studentBio.innerHTML += `
        <tr id='${id}'>
              <td>${yearEnrolled}</td>
              <td>${firstName}</td>
              <td>${lastName}</td>
              <td>${matricNo}</td>
              <td>${gradeScore}</td>
              <td>${honours}</td>
              <td>${email}</td>
              <td>
              <button type="button" class="edit-btn"><img src="../images/editBtn.png" class="edit"></button>
              <button type="button" class="delete-btn"><img src="../images/trash.png" class="delete"></button>
              </td>
            </tr>
      `
    })
  }
}
displayStudentData()

const showAlert = (text, action) => {
  alert.textContent = text
  mainAlert.textContent = text

  alert.classList.add(`alert-${action}`)
  mainAlert.classList.add(`alert-${action}`)

  setTimeout(() => {
    alert.textContent = ''
    mainAlert.textContent = ''
    alert.classList.remove(`alert-${action}`)
    mainAlert.classList.remove(`alert-${action}`)
  }, 1000)
}

// set to default
const setToDefault = () => {
  inputEls.map((input) => {
    input.value = ''
  })
  editFlag = false
  editId = ''
  submit.textContent = 'submit'
}

const removeFromLocalStorage = (id) => {
  let items = JSON.parse(localStorage.getItem('studentData'))
  items = items.filter((item) => item.id !== id)
  localStorage.setItem('studentData', JSON.stringify(items))
  student.textContent = `You have ${items.length} students`
}

// select table row button
studentBio.addEventListener('click', (e) => {
  // select delete button
  if (e.target.classList.contains('delete')) {
    let deleteBtn = e.target.parentElement
    deleteBtn.addEventListener('click', () => {
      const element = deleteBtn.parentElement.parentElement
      const id = element.id
      studentBio.removeChild(element)
      if (studentBio.children.length === 0) {
        container.classList.remove('show-records')
      }
      showAlert('Item removed', 'danger')
      setToDefault()
      // remove from local storage;
      removeFromLocalStorage(id)
    })
  }
  if (e.target.classList.contains('edit')) {
    let editEl = e.target.parentElement
    editEl.addEventListener('click', () => {
      modalOverlay.classList.toggle('open-modal')
      const element = editEl.parentElement.parentElement
      const tdCollection = [...element.children]
      tdCollection.map((td) => {})
    })

    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open-modal')
    })
  }
})
