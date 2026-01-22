const createBtn = document.querySelector('.btn')
const notesContainer = document.querySelector('.notes-container')
let notes = document.querySelectorAll('.input-box')

const getUpdate = () => {
    localStorage.getItem('notes')
}

getUpdate()

const updateNote = () => {
    localStorage.setItem('notes', notesContainer.innerHTML)
}

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
        updateNote()
    } else if (e.target.tagName = 'P') {
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = () => {
                updateNote()
            }
        })
    }
})
