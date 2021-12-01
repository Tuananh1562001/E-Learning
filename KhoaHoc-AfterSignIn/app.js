// profile thầy 3
let modal = document.getElementById('myModal')
let closeBtn = modal.getElementsByClassName('close')[0]
let triggerModal = document.querySelector('body > div.gallery.row > div:nth-child(1) > div > center > button')


closeBtn.addEventListener('click', function(el) {
    modal.style.display = 'none'
})

triggerModal.onclick = function (el) {
    modal.style.display = "block"
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







