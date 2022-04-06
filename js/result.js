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
let studentCourse = document.querySelector('.student-course')
let studentExam = document.querySelector('.student-exam')
let studentTest = document.querySelector('.student-test')
let studentTotal = document.querySelector('.student-total')
let studentGrade = document.querySelector('.student-grade')
let studentGpa = document.querySelector('.student-gpa')

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

        studentLevel.textContent = pupil.level || '300'
        studentDepart.textContent = pupil.department || 'Agric'
        studentYear.textContent = pupil.yearEnrolled || '2020'
        if (studentCourse.textContent === pupil.course_code) {
          studentExam.textContent = pupil.exam || '50'
          studentTest.textContent = pupil.test || '20'
          studentTotal.textContent = pupil.total || '70'
          studentGrade.textContent = pupil.grade || 'A'
          // if(pupil.grade >= "70") {
          //   student.Gpa = "5"
          // }
          // else if(pupil.grade >= "60") {
          //   student.Gpa = "4"
          // }
          // else if(pupil.grade >= "50" ) {
          //   student.Gpa = "3"
          // }
          // else if(pupil.grade >= "40") {
          //   student.Gpa = "2"
          // }
          // else {

          // }
          pupil.grade >= '70'
            ? (student.Gpa = '5')
            : pupil.grade >= '60'
            ? (student.Gpa = '4')
            : pupil.grade >= '50'
            ? (student.Gpa = '3')
            : pupil.grade >= '40'
            ? (student.Gpa = '2')
            : (student.Gpa = '1')
        }
      }
    } else if (userInput === pupil.lastName + ' ' + pupil.firstName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo || '100001'
        studentDepart.textContent = pupil.department || 'Agric'
        studentLevel.textContent = pupil.level || '300'
        studentYear.textContent = pupil.yearEnrolled || '2020'
        if (studentCourse.textContent === pupil.course_code) {
          studentExam.textContent = pupil.exam || '50'
          studentTest.textContent = pupil.test || '20'
          studentTotal.textContent = pupil.total || '70'
          studentGrade.textContent = pupil.grade || 'A'
          pupil.grade >= '70'
            ? (student.Gpa = '5')
            : pupil.grade >= '60'
            ? (student.Gpa = '4')
            : pupil.grade >= '50'
            ? (student.Gpa = '3')
            : pupil.grade >= '40'
            ? (student.Gpa = '2')
            : (student.Gpa = '1')
        }
      }
    } else if (userInput === pupil.firstName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo || '100001'
        studentDepart.textContent = pupil.department || 'Agric'
        studentLevel.textContent = pupil.level || '300'
        studentYear.textContent = pupil.yearEnrolled || '2020'

        if (studentCourse.textContent === pupil.course_code) {
          studentExam.textContent = pupil.exam || '50'
          studentTest.textContent = pupil.test || '20'
          studentTotal.textContent = pupil.total || '70'
          studentGrade.textContent = pupil.grade || 'A'
          pupil.grade >= '70'
            ? (student.Gpa = '5')
            : pupil.grade >= '60'
            ? (student.Gpa = '4')
            : pupil.grade >= '50'
            ? (student.Gpa = '3')
            : pupil.grade >= '40'
            ? (student.Gpa = '2')
            : (student.Gpa = '1')
        }
      }
    } else if (userInput === pupil.lastName) {
      console.log(studentCourse)
      console.log(pupil.course_code)
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo || '100001'
        studentDepart.textContent = pupil.department || 'Agric'
        studentLevel.textContent = pupil.level || '300'
        studentYear.textContent = pupil.yearEnrolled || '2020'

        if (studentCourse.textContent === pupil.course_code) {
          studentExam.textContent = pupil.exam || '50'
          studentTest.textContent = pupil.test || '20'
          studentTotal.textContent = pupil.total || '70'
          studentGrade.textContent = pupil.grade || 'A'
          pupil.grade >= '70'
            ? (student.Gpa = '5')
            : pupil.grade >= '60'
            ? (student.Gpa = '4')
            : pupil.grade >= '50'
            ? (student.Gpa = '3')
            : pupil.grade >= '40'
            ? (student.Gpa = '2')
            : (student.Gpa = '1')
        }
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
        studentMatric.textContent = pupil.matricNo || '100001'
        studentDepart.textContent = pupil.department || 'Agric'
        studentLevel.textContent = pupil.level || '300'
        studentYear.textContent = pupil.yearEnrolled || '2020'

        if (studentCourse.textContent === pupil.course_code) {
          studentExam.textContent = pupil.exam || '50'
          studentTest.textContent = pupil.test || '20'
          studentTotal.textContent = pupil.total || '70'
          studentGrade.textContent = pupil.grade || 'A'
          pupil.grade >= '70'
            ? (student.Gpa = '5')
            : pupil.grade >= '60'
            ? (student.Gpa = '4')
            : pupil.grade >= '50'
            ? (student.Gpa = '3')
            : pupil.grade >= '40'
            ? (student.Gpa = '2')
            : (student.Gpa = '1')
        }
      }
    } else if (userInput === pupil.lastName + ' ' + pupil.firstName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo || '100001'
        studentDepart.textContent = pupil.department || 'Agric'
        studentLevel.textContent = pupil.level || '300'
        studentYear.textContent = pupil.yearEnrolled || '2020'

        if (studentCourse.textContent === pupil.course_code) {
          studentExam.textContent = pupil.exam || '50'
          studentTest.textContent = pupil.test || '20'
          studentTotal.textContent = pupil.total || '70'
          studentGrade.textContent = pupil.grade || 'A'
          pupil.grade >= '70'
            ? (student.Gpa = '5')
            : pupil.grade >= '60'
            ? (student.Gpa = '4')
            : pupil.grade >= '50'
            ? (student.Gpa = '3')
            : pupil.grade >= '40'
            ? (student.Gpa = '2')
            : (student.Gpa = '1')
        }
      }
    } else if (userInput === pupil.firstName) {
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo || '100001'
        studentDepart.textContent = pupil.department || 'Agric'
        studentLevel.textContent = pupil.level || '300'
        studentYear.textContent = pupil.yearEnrolled || '2020'

        if (studentCourse.textContent === pupil.course_code) {
          studentExam.textContent = pupil.exam || '50'
          studentTest.textContent = pupil.test || '20'
          studentTotal.textContent = pupil.total || '70'
          studentGrade.textContent = pupil.grade || 'A'
          pupil.grade >= '70'
            ? (student.Gpa = '5')
            : pupil.grade >= '60'
            ? (student.Gpa = '4')
            : pupil.grade >= '50'
            ? (student.Gpa = '3')
            : pupil.grade >= '40'
            ? (student.Gpa = '2')
            : (student.Gpa = '1')
        }
      }
    } else if (userInput === pupil.lastName) {
      console.log(studentCourse)
      console.log(pupil.course_code)
      counter++
      if (counter === 1) {
        studentName.textContent = pupil.firstName + ' ' + pupil.lastName
        studentMatric.textContent = pupil.matricNo || '100001'
        studentDepart.textContent = pupil.department || 'Agric'
        studentLevel.textContent = pupil.level || '300'
        studentYear.textContent = pupil.yearEnrolled || '2020'

        if (studentCourse.textContent === pupil.course_code) {
          studentExam.textContent = pupil.exam || '50'
          studentTest.textContent = pupil.test || '20'
          studentTotal.textContent = pupil.total || '70'
          studentGrade.textContent = pupil.grade || 'A'
          pupil.grade >= '70'
            ? (student.Gpa = '5')
            : pupil.grade >= '60'
            ? (student.Gpa = '4')
            : pupil.grade >= '50'
            ? (student.Gpa = '3')
            : pupil.grade >= '40'
            ? (student.Gpa = '2')
            : (student.Gpa = '1')
        }
      }
    } else {
      console.log('none')
    }
  }
})
