const scrollLinks = document.querySelectorAll('.header__link[data-to]');
scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener('click', function (e) {
        document.body.classList.remove('active_scroll');
        document.querySelector('.header__menu-icon').classList.remove('active')
        document.querySelector('.header__menu').classList.remove('active')
        const block = document.getElementById(e.target.dataset.to)
        block.scrollIntoView({behavior: "smooth"});
    })
})

const menuIcon = document.querySelector('.header__menu-icon')
if (menuIcon) {
	const menuCont = document.querySelector('.header__menu')
	menuIcon.addEventListener("click", function(e) {
		menuIcon.classList.toggle('active')
		menuCont.classList.toggle('active')
		document.body.classList.toggle('active_scroll')
	})
}

const contactButtons = document.querySelectorAll('.form-button')
if (contactButtons) {
    contactButtons.forEach(button => {
	    button.addEventListener("click", function(e) {
            const popUp = document.querySelector('.send-form__pop-up')
            popUp.classList.toggle("active")
            document.body.classList.toggle('active_scroll')
	    })
    })
}
