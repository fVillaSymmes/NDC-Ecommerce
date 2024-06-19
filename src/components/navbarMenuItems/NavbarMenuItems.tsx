import Link from 'next/link'

interface Props {
    text: string
    url: string
}

export const NavbarMenuItems = ({ text, url }: Props) => {
    return (
        <>
            <li>
                <Link
                    href={url}
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                    {text}
                </Link>
            </li>
        </>
    )
}
