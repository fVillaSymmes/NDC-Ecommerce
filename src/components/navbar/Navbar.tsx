import { NavbarMenuItems } from '../navbarMenuItems/NavbarMenuItems'
import { NavbarBurgerMenu } from '../navbarBurgerMenu/NavbarBurgerMenu'

const navItems = [{ text: 'Fechas' }, { text: 'Tienda' }, { text: 'Contacto' }]

export const Navbar = () => {
    return (
        <nav className='bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a href='/' className='flex items-center'>
                    <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                        Niños del Cerro
                    </span>
                </a>

                <NavbarBurgerMenu>
                    {navItems.map((navItem) => (
                        <NavbarMenuItems key={navItem.text} {...navItem} />
                    ))}
                </NavbarBurgerMenu>
            </div>
        </nav>
    )
}
