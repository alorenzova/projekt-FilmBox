// 3) hamburger menu pro malá zařízení - otestováno přes toggle device toolbar (a funguje)

const menuTlacitko = document.querySelector('#menu-tlacitko')
const menuPolozky = document.querySelector('#menu-polozky')
menuTlacitko.addEventListener('click', () => {
    menuPolozky.classList.toggle('show')
    if (menuPolozky.classList.contains('show')) {
		menuTlacitko.innerHTML = '<i class="fas fa-xmark"></i>'
	} else {
		menuTlacitko.innerHTML = '<i class="fas fa-bars"></i>'
	}
})