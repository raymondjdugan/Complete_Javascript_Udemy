// Selecting, creating and deleting dome elements
// Selecting

document.documentElement // Selects the document DOM element
document.head // Selects the head of the document
document.body // selects the entire body of the document
document.querySelector()
document.querySelectorAll()
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()

// Creating and inserting elements
let message = document.createElement('div') // Creates a div
message.innerHTML
message.prepend()
message.append()

// Delete elements
// .remove()

// Setting styles
message.style.backgroundColor = 'color'
getComputeStyle(element).style

getBoundingClientRect()
window.scrollY

// Oldway
// window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY)
// const s1coords = section1.getBoundingClientRect();
// window.scrollTo({
//     left: s1coords.left + window.scrollX,
//     top: s1coords.top + window.scrollY,
//     behavior: "smooth",
// })

// ES6 way - Only works in modern browsers
section1.scrollIntoView({
    behavior: "smooth"
})

// Passing arguments to event handler functions
