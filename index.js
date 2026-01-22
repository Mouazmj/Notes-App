const createBtn = document.querySelector('.btn')
const notesContainer = document.querySelector('.notes-container')
let input = document.querySelectorAll('.input-box')

createBtn.addEventListener('click', () => {
    let p = document.createElement('p')
    let img = document.createElement('img')
    p.className = 'input-box'
    p.setAttribute('contenteditable', 'true')
    img.src = './images/delete.png'
    notesContainer.appendChild(p).appendChild(img)
})

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
    }
})
