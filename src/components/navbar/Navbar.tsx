import { NavbarMenuItems } from '../navbarMenuItems/NavbarMenuItems'
import { NavbarBurgerMenu } from '../navbarBurgerMenu/NavbarBurgerMenu'
import Link from 'next/link'

const navItems = [
  { text: 'Fechas', url: '/fechas' },
  { text: 'Tienda', url: '/tienda' },
  { text: 'Contacto', url: '/contacto' },
]

export const Navbar = () => {
  return (
    <nav className='rounded-b-lg border border-gray-200 bg-white px-2 py-2.5 shadow sm:px-4 dark:border-gray-700 dark:bg-gray-800'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <Link
          href='/'
          className='flex items-center'
        >
          <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
            Niños del Cerro
          </span>
          {/* Cuando se llega a una página con ascensor a través del Navbar, se corre este span que dice "Niños del cerro" */}
        </Link>

        <NavbarBurgerMenu>
          {navItems.map((navItem) => (
            <NavbarMenuItems
              key={navItem.text}
              {...navItem}
            />
          ))}
        </NavbarBurgerMenu>
      </div>
    </nav>
  )
}
