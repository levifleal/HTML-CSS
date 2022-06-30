const btn = document.getElementById('btn')
function togglemenu(){
    
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btn.addEventListener('click', togglemenu)
