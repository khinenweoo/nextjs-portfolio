import Link from 'next/link';

interface NavLinkProps {
    href: string;
    title?: string;
}

const NavLink = ({ href, title } : NavLinkProps) => {
    return (
        <Link 
            href={href} 
            className="block py-2 pl-3 pr-3 uppercase text-[15px] font-[600] text-dark/90 dark:text-light md:text-lg sm:text-xl rounded md:p-0 hover:text-violet-400 dark:hover:text-white"
        >{title}
        </Link>
    );
}

export default NavLink;