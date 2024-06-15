'use client'
//Idealmente el navbar completo no debería ser use client. Solo los trocitos que así lo requieran
import { useRef } from 'react'
import { NavbarMenuItems } from '../navbarMenuItems/NavbarMenuItems'

const navItems = [{ text: 'Tienda' }, { text: 'Contacto' }]

export const Navbar = () => {
    // Hay que determinar un tipo adecuado para el useRef aquí
    const menuHamburguesa = useRef<any>(null)
    return (
        <nav className='bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
                <a href='/' className='flex items-center'>
                    <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                        Niños del Cerro
                    </span>
                </a>

                <div className='flex items-center'>
                    <button
                        id='menu-toggle'
                        type='button'
                        className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
                        onClick={() =>
                            // ¿Qué es este onClick funcional pero ordinarísimo?
                            menuHamburguesa.current.className ==
                            'w-full md:block md:w-auto hidden'
                                ? (menuHamburguesa.current.className =
                                      'w-full md:block md:w-auto')
                                : (menuHamburguesa.current.className =
                                      'w-full md:block md:w-auto hidden')
                        }
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='h-6 w-6'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16m-7 6h7'
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className='w-full md:block md:w-auto hidden'
                    id='mobile-menu'
                    ref={menuHamburguesa}
                    //Este ref es por ahora el trozo del código que me evita hacer el navbar 'use Server'
                >
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                        {navItems.map((navItem) => (
                            <NavbarMenuItems key={navItem.text} {...navItem} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
