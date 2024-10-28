import Image from 'next/image';
import Link from 'next/link';

// Navbar component
const Navbar = () => {
  return (
    <nav className="flex justify-center lg:justify-between items-center px-10 py-4">
      {/* Logo section with hover effect */}
      <div className="cursor-pointer">
        <Image 
          src="/logoipsum-331.svg" 
          alt="logo" 
          width={180} 
          height={180} 
          className="transform transition duration-300 hover:scale-110"
        />
      </div>
      {/* Navigation links, hidden on small screens */}
      <div className="lg:flex gap-8 xl:gap-20 hidden lg:pr-10">
        <Link 
          href="#" 
          className="font-bold text-sm hover:text-[#38b6ff] uppercase transition duration-300"
        >
          home
        </Link>
        <Link 
          href="#" 
          className="font-bold text-sm hover:text-[#38b6ff] uppercase transition duration-300"
        >
          about
        </Link>
        <Link 
          href="#" 
          className="font-bold text-sm hover:text-[#38b6ff] uppercase transition duration-300"
        >
          services
        </Link>
        <Link 
          href="#" 
          className="font-bold text-sm hover:text-[#38b6ff] uppercase transition duration-300"
        >
          contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
