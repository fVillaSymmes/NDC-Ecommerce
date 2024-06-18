'use client'
import { useState } from 'react'

export const NavbarBurgerMenu = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isOpen, setIsOpen] = useState(false)

    function toggleBurgerMenu() {
        setIsOpen((open) => !open)
        console.log(isOpen)
    }

    return (
        <>
            <div className='flex items-center'>
                <button
                    id='menu-toggle'
                    type='button'
                    className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
                    onClick={toggleBurgerMenu}
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
                className={`w-full md:block md:w-auto ${
                    isOpen ? '' : 'hidden'
                }`}
                id='mobile-menu'
            >
                <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
                    {children}
                </ul>
            </div>
        </>
    )
}
