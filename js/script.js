// // GLOBAL VARIABLES
// let id
// let name
// let ext
// let email
// let department 
// let submit

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// GET THE DOM ELEMENTS
let empId       = $('empId')
let name        = $('name')
let ext         = $('ext')
let email       = $('email')
let department  = $('department')
let submit      = $('submit')

submit.addEventListener('click', (event) => {    
    console.log (`ID: ${empId.value}`)
    console.log (`Name: ${name.value}`)
    console.log (`Extension: ${ext.value}`)
    console.log (`Email: ${email.value}`)
    console.log (`Department: ${department.options[department.selectedIndex].text}`)
    //event.preventDefault()
})
