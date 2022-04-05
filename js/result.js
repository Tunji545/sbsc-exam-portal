// import { showAlert } from './export-functions.js'

const modalButton = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')
const studentBio = document.querySelector('.studentBio')
let student = document.querySelector('.student')
const container = document.querySelector('.student-records')
const submit = document.querySelector('.submit')
const studentWrapper = document.querySelector('.students-wrapper')
let searchBtn = document.querySelector('.searh-btn')
let form = document.querySelector('.form-search')
let searhInput = document.querySelector('.input-search')

let students = JSON.parse(sessionStorage.getItem('studentScores'))

// Toggle Button
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.aside').classList.remove('d-none-lapi')
})
document.getElementById('close-icon').addEventListener('click', () => {
  document.querySelector('.aside').classList.add('d-none-lapi')
})

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

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let counter = 0
  let userInput = searhInput.value
  let pupil
  for (pupil of students) {
    if (userInput === pupil.firstName + ' ' + pupil.lastName) {
      counter++
      if (counter === 1) {
        console.log(pupil)
      }
    } else if (userInput === pupil.lastName + ' ' + pupil.firstName) {
      counter++
      if (counter === 1) {
        console.log(pupil)
      }
    } else if (userInput === pupil.firstName) {
      counter++
      if (counter === 1) {
        console.log(pupil)
      }
    } else if (userInput === pupil.lastName) {
      counter++
      if (counter === 1) {
        console.log(pupil)
      }
    } else {
      counter++
      if (counter === 1) {
        console.log(pupil)
      }
    }
  }
  console.log(pupil)
})
