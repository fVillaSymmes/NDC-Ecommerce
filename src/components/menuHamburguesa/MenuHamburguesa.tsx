'use client'

export const MenuHamburguesa = () => {
    const menuToggle = document.getElementById('menu-toggle')
    const mobileMenu = document.getElementById('mobile-menu')

    menuToggle!.addEventListener('click', function () {
        mobileMenu!.classList.toggle('hidden')
    })
    return <div>MenuHamburguesa</div>
}
