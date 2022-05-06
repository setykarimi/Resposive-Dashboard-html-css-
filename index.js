const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-button");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector('.theme-toggler');

menuButton.addEventListener('click' , () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click' , () => {
    sideMenu.style.display = 'none'
})

themeToggler.addEventListener('click' , () =>{
      document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
      
})
