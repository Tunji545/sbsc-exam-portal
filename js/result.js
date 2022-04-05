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
let studentName = document.querySelector('.student-name')
let studentMatric = document.querySelector('.student-matric')
let studentDepart = document.querySelector('.student-department')
let studentLevel = document.querySelector('.student-level')
let studentYear = document.querySelector('.student-year')

let students = JSON.parse(sessionStorage.getItem('studentScores'))
let studentsData = JSON.parse(sessionStorage.getItem('studentData'))
console.log({ students: studentsData })
console.log({ scores: students })

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

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let counter = 0
  let userInput = searhInput.value
  let pupil
  for (pupil of students) {
    if (userInput === pupil.firstName + ' ' + pupil.lastName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName

        studentLevel.textContent = pupil.level
        studentDepart.textContent = pupil.department
        studentLevel.textContent = pupil.level
        studentYear.textContent = pupil.yearEnrolled
      }
    } else if (userInput === pupil.lastName + ' ' + pupil.firstName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo
        studentDepart.textContent = pupil.department
        studentLevel.textContent = pupil.level
        studentYear.textContent = pupil.yearEnrolled
      }
    } else if (userInput === pupil.firstName) {
      counter++
      if (counter === 1) {
        console.log(pupil.firstName + ' ' + pupil.lastName)
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo
        studentDepart.textContent = pupil.department
        studentLevel.textContent = pupil.level
        studentYear.textContent = pupil.yearEnrolled
      }
    } else if (userInput === pupil.lastName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo
        studentDepart.textContent = pupil.department
        studentLevel.textContent = pupil.level
        studentYear.textContent = pupil.yearEnrolled
      }
    } else {
      console.log('none')
    }
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let counter = 0
  let userInput = searhInput.value
  let pupil
  for (pupil of studentsData) {
    if (userInput === pupil.firstName + ' ' + pupil.lastName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName

        studentMatric.textContent = pupil.matricNo
        studentDepart.textContent = pupil.department
        studentLevel.textContent = pupil.level
        studentYear.textContent = pupil.yearEnrolled
      }
    } else if (userInput === pupil.lastName + ' ' + pupil.firstName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo
        studentDepart.textContent = pupil.department
        studentLevel.textContent = pupil.level
        studentYear.textContent = pupil.yearEnrolled
      }
    } else if (userInput === pupil.firstName) {
      counter++
      if (counter === 1) {
        console.log(pupil.firstName + ' ' + pupil.lastName)
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo
        studentDepart.textContent = pupil.department
        studentLevel.textContent = pupil.level
        studentYear.textContent = pupil.yearEnrolled
      }
    } else if (userInput === pupil.lastName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo
        studentDepart.textContent = pupil.department
        studentLevel.textContent = pupil.level
        studentYear.textContent = pupil.yearEnrolled
      }
    } else {
      console.log('none')
    }
  }
})
