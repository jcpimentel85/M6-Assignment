// // GLOBAL VARIABLES
// let id
// let name
// let ext
// let email
// let department 
// let submit
// let output



// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// GET THE DOM ELEMENTS
let empId       = $('empId')
let name        = $('name')
let ext         = $('ext')
let email       = $('email')
let department  = $('department')
let submit      = $('submit')
let output      = $('output')

// function addEmp() {
//     console.log (`ID: ${empid}`)
//     console.log (`Name: ${name}`)
//     console.log (`Extension: ${ext}`)
//     console.log (`Email: ${email}`)
//     console.log (`Department: ${department}`)
//  }

function addEmp() {
submit.addEventListener('click', () => {    
    console.log (`ID: ${empId}`)
    console.log (`Name: ${name}`)
    console.log (`Extension: ${ext}`)
    console.log (`Email: ${email}`)
    console.log (`Department: ${department}`)
    })
}
