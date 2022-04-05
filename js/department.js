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
const studentWrapper = document.querySelector('.students-wrapper')

// Toggle Button
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.aside').classList.remove('d-none-lapi')
})
document.getElementById('close-icon').addEventListener('click', () => {
  document.querySelector('.aside').classList.add('d-none-lapi')
})

let editElement
let editFlag = false
let editId = ''

let inputEls = document.querySelectorAll('input')
inputEls = [...inputEls]

modalButton.addEventListener('click', () => {
  modalOverlay.classList.toggle('open-modal')
  studentWrapper.classList.add('students-height')
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
          [key]: input.value.slice(0, 12),
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
      studentArr = JSON.parse(sessionStorage.getItem('studentData')) || []
      studentArr.push(studentData)
      container.classList.add('show-records')
      showAlert('Item Added', 'success')
    } else if (input.value && editFlag) {
      const tdCollection = [...editElement.children]
      insertToTableRow(tdCollection)
      showAlert('value changed', 'success')
      submit.textContent = 'submit'
      // edit Local Storage
      editsessionStorage(editId, inputEls[i].value)
      setBackToDefault()
    } else {
      showAlert('Please, enter value', 'danger')
    }
  })
  sessionStorage.setItem('studentData', JSON.stringify(studentArr))
  let data = JSON.parse(sessionStorage.getItem('studentData'))
  student.textContent = `You have ${studentArr.length} students`

  studentBio.innerHTML = ''
  for (let student of data) {
    studentBio.innerHTML += `
            <tr id='${student.id}' class="flex space-between wrap">
                  <td class="d-none-mobile">${student.yearEnrolled}</td>
                  <td>${student.courses}</td>
                  <td>${student.firstName}</td>
                  <td>${student.lastName}</td>
                  <td>${student.matricNo}</td>
                  <td class="d-none-mobile">${student.level}</td>
                  <td class="d-none-mobile">${student.department}</td>
                  <td class="d-none-mobile">${student.email}</td>
                  <td class="flex">
                  <button type="button" class="edit-btn"><img src="../images/editBtn.png" class="edit"></button>
                  <button type="button" class="delete-btn"><img src="../images/trash.png" class="delete"></button>
                  </td>
                </tr>
          `
  }
  setToDefault()
  submit.textContent = 'Register'
})

// Output
const displayStudentData = () => {
  if (sessionStorage.getItem('studentData')) {
    const studentArr = JSON.parse(sessionStorage.getItem('studentData'))
    studentArr.forEach((student) => {
      const {
        email,
        firstName,
        lastName,
        level,
        department,
        matricNo,
        yearEnrolled,
        courses,
        id,
      } = student
      studentBio.innerHTML += `
        <tr id='${id}' class="flex space-between wrap">
              <td class="d-none-mobile">${yearEnrolled}</td>
              <td>${courses}</td>
              <td>${firstName}</td>
              <td>${lastName}</td>
              <td>${matricNo}</td>
              <td class="d-none-mobile">${level}</td>
              <td class="d-none-mobile">${department}</td>
              <td class="d-none-mobile">${email}</td>
              <td class="flex">
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

// Set to default
const setToDefault = () => {
  inputEls.map((input) => {
    input.value = ''
  })
  editFlag = false
  editId = ''
  submit.textContent = 'submit'
}

// Remove from local storage
const removeFromsessionStorage = (id) => {
  let items = JSON.parse(sessionStorage.getItem('studentData'))
  items = items.filter((item) => item.id !== id)
  sessionStorage.setItem('studentData', JSON.stringify(items))
  student.textContent = `You have ${items.length} students`
}

// Edit from Local Storage
const editsessionStorage = (id, value) => {
  let items = JSON.parse(sessionStorage.getItem('studentData'))
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  sessionStorage.setItem('studentData', JSON.stringify(items))
}

// Select table row button
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
        container.style.paddingBottom = '0'
      }
      showAlert('Item removed', 'danger')
      setToDefault()
      // remove from local storage;
      removeFromsessionStorage(id)
    })
  }
  if (e.target.classList.contains('edit')) {
    let editEl = e.target.parentElement
    editEl.addEventListener('click', () => {
      modalOverlay.classList.toggle('open-modal')
      editElement = editEl.parentElement.parentElement
      console.log(editElement.id)
      const tdCollection = [...editElement.children]
      insertToInputValue(tdCollection)
      editFlag = true
      editId = editElement.id
      submit.textContent = 'edit'
    })

    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('open-modal')
    })
  }
})
const insertToInputValue = (tdColl) => {
  inputEls[8].value = tdColl[0].innerHTML
  inputEls[9].value = tdColl[1].innerHTML
  inputEls[0].value = tdColl[2].innerHTML
  inputEls[1].value = tdColl[3].innerHTML
  inputEls[2].value = tdColl[4].innerHTML
  inputEls[3].value = tdColl[5].innerHTML
  inputEls[4].value = tdColl[6].innerHTML
  inputEls[5].value = tdColl[7].innerHTML
}

const insertToTableRow = (tdColl) => {
  tdColl[0].innerHTML = inputEls[8].value
  tdColl[1].innerHTML = inputEls[9].value
  tdColl[2].innerHTML = inputEls[0].value
  tdColl[3].innerHTML = inputEls[1].value
  tdColl[4].innerHTML = inputEls[2].value
  tdColl[5].innerHTML = inputEls[3].value
  tdColl[6].innerHTML = inputEls[4].value
  tdColl[7].innerHTML = inputEls[5].value
}
