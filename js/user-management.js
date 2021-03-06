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
      } else if (input.type === 'tel') {
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

      const lecturerData = Object.assign({}, ...arr)
      lecturerData.id = 'qw' + new Date().getTime().toString()
      studentArr = JSON.parse(sessionStorage.getItem('lecturerData')) || []
      studentArr.push(lecturerData)
      container.classList.add('show-records')
      showAlert('Item Added', 'success')
    } else if (input.value && editFlag) {
      const tdCollection = [...editElement.children]
      insertToTableRow(tdCollection)
      showAlert('value changed', 'success')
      submit.textContent = 'submit'
      inputEls.map((input) => {
        input.value = ''
      })
      // edit Local Storage
      editsessionStorage(editId, inputEls[i].value)
      setBackToDefault()
    } else {
      showAlert('Please, enter value', 'danger')
    }
  })
  sessionStorage.setItem('lecturerData', JSON.stringify(studentArr))
  let data = JSON.parse(sessionStorage.getItem('lecturerData'))
  student.textContent = `You have ${studentArr.length} students`

  studentBio.innerHTML = ''
  for (let student of data) {
    studentBio.innerHTML += `
            <tr id='${student.id}' class="flex space-between wrap">
                  <td class="d-none-mobile">${student.firstName}</td>
                  <td>${student.lastName}</td>
                  <td>${student.status}</td>
                  <td>${student.gender}</td>
                  <td>${student.faculty}</td>
                  <td class="d-none-mobile">${student.department}</td>
                  <td class="d-none-mobile ecclipsis">${student.email}</td>
                  <td class="d-none-mobile">${student.phoneNo}</td>
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
const displaylecturerData = () => {
  if (sessionStorage.getItem('lecturerData')) {
    const studentArr = JSON.parse(sessionStorage.getItem('lecturerData'))
    studentArr.forEach((student) => {
      console.log(student)
      const {
        department,
        firstName,
        lastName,
        faculty,
        gender,
        status,
        phoneNo,
        email,
        id,
      } = student
      studentBio.innerHTML += `
        <tr id='${id}' class="flex space-between wrap">
              <td class="d-none-mobile">${firstName}</td>
              <td>${lastName}</td>
              <td>${status}</td>
              <td>${gender}</td>
              <td>${faculty}</td>
              <td class="d-none-mobile">${department}</td>
              <td class="d-none-mobile ecclipsis">${email}</td>
              <td class="d-none-mobile">${phoneNo}</td>
              <td class="flex">
              <button type="button" class="edit-btn"><img src="../images/editBtn.png" class="edit"></button>
              <button type="button" class="delete-btn"><img src="../images/trash.png" class="delete"></button>
              </td>
            </tr>
      `
    })
  }
}
displaylecturerData()

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
  let items = JSON.parse(sessionStorage.getItem('lecturerData'))
  items = items.filter((item) => item.id !== id)
  sessionStorage.setItem('lecturerData', JSON.stringify(items))
  student.textContent = `You have ${items.length} students`
}

// Edit from Local Storage
const editsessionStorage = (id, value) => {
  let items = JSON.parse(sessionStorage.getItem('lecturerData'))
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  sessionStorage.setItem('lecturerData', JSON.stringify(items))
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
  inputEls[0].value = tdColl[0].innerHTML
  inputEls[1].value = tdColl[1].innerHTML
  inputEls[2].value = tdColl[2].innerHTML
  inputEls[3].value = tdColl[3].innerHTML
  inputEls[4].value = tdColl[4].innerHTML
  inputEls[5].value = tdColl[5].innerHTML
  inputEls[6].value = tdColl[6].innerHTML
  inputEls[7].value = tdColl[7].innerHTML
}

const insertToTableRow = (tdColl) => {
  tdColl[0].innerHTML = inputEls[0].value
  tdColl[1].innerHTML = inputEls[1].value
  tdColl[2].innerHTML = inputEls[2].value
  tdColl[3].innerHTML = inputEls[3].value
  tdColl[4].innerHTML = inputEls[4].value
  tdColl[5].innerHTML = inputEls[5].value
  tdColl[6].innerHTML = inputEls[6].value
  tdColl[7].innerHTML = inputEls[7].value
}
