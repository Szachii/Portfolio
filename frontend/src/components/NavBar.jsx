import  { useState } from 'react';
import { myname } from '../constants/images';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='w-full h-20 fixed top-0 left-0 backdrop-blur-sm bg-customLight/25 shadow-sm flex justify-between items-center p-4 z-20'>
      <div className="logo">
        <img src={myname} alt="logo" className='w-32' />
      </div>
      {/* Desktop Menu */}
      <ul className='hidden md:flex text-costomHighBlue font-bold flex-row gap-7 relative'>
        <li className='relative group'>
          <Link to='/about'>About</Link>
          <span className='absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-2 w-2 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300'></span>
        </li>
        <li className='relative group'>
          <Link to='/skills'>Skills</Link>
          <span className='absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-2 w-2 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300'></span>
        </li>
        <li className='relative group'>
          <Link to='/work'>Works</Link>
          <span className='absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-2 w-2 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300'></span>
        </li>
        <li className='relative group'>
          <Link to='/testimonials'>Testimonials</Link>
          <span className='absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-2 w-2 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300'></span>
        </li>
        <li className='relative group'>
          <Link to='/contact'>Contact</Link>
          <span className='absolute left-1/2 -translate-x-1/2 bottom-[-6px] h-2 w-2 bg-blue-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300'></span>
        </li>
      </ul>
      {/* Mobile Menu Toggle */}
      <div className='md:hidden'>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='text-costomHighBlue'>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-white font-semibold shadow-lg flex flex-col items-center space-y-4 py-4 z-10 transform transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <Link to='/about' onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        <Link to='/skills' onClick={() => setIsMobileMenuOpen(false)}>Skills</Link>
        <Link to='/work' onClick={() => setIsMobileMenuOpen(false)}>Works</Link>
        <Link to='/testimonials' onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
        <Link to='/contact' onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}
