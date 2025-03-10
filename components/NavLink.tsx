import Link from 'next/link';

interface NavLinkProps {
    href: string;
    title?: string;
}

const NavLink = ({ href, title } : NavLinkProps) => {
    return (
        <Link 
            href={href} 
            className="block py-2 pl-3 pr-3 text-[#ADB7BE] md:text-lg sm:text-xl rounded md:p-0 hover:text-white"
        >{title}
        </Link>
    );
}

export default NavLink;