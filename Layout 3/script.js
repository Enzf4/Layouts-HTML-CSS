open_menu.addEventListener('click', () =>{
    menu.style.display = 'flex'

    body.style.overflow = 'hidden'
    
    setTimeout(() => {
        menu.style.opacity = '1'
    }, 10)
})

close_menu.addEventListener('click', () => {
    menu.style.opacity = '0'

    body.style.overflow = 'visible'

    setTimeout(() => {
        menu.removeAttribute('style')

    }, 200)
})