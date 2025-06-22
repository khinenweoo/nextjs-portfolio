import Link from 'next/link';

import { FaGithub, FaLinkedin, FaLine, FaWhatsapp } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: "https://github.com/khinenweoo" },
    { icon: <FaLinkedin />, path: "https://linkedin.com/in/khinenweoo" },
    { icon: <FaWhatsapp />, path: "https://wa.me/66827322930" },
    { icon: <FaLine /> , path: "https://line.me/ti/p/Gsz0IDB13y"}

];

const Social = ({ containerStyles, iconStyles }: { containerStyles?: string; iconStyles?: string}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  );
}

export default Social