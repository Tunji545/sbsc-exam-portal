const student = document.querySelector('.student')
const stud = document.querySelector('.stud')
const depart = document.querySelector('.department')
// import { showAlert } from './export-functions.js'

// showAlert('danger', 'danger')
// Toggle Button
const students = JSON.parse(sessionStorage.getItem('studentData'))

document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.aside').classList.remove('d-none-lapi')
})
document.getElementById('close-icon').addEventListener('click', () => {
  document.querySelector('.aside').classList.add('d-none-lapi')
})
const departments = []
const departs = students.map((student) => {
  if (!departments.includes(student.department)) {
    departments.push(student.department)
  }
})

student.textContent = `You have ${students.length} students`
depart.textContent = departments.length

stud.textContent = students.length
