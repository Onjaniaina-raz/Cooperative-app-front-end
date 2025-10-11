import { navLinks } from '@/constants'
import Link from 'next/link'
import Navlink from './Navlink'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className='flex items-center justify-between h-20 px-5 xl:px-20 bg-white'>

      <Link href={"/cooperative_management/home"}>
        <h5 className='text-coop-2 text-xl font-semibold font-[SpaceMono]'>Transp'Or Cooperative</h5>
      </Link>

      <nav className='pe-5 font-[RedHatDisplay] max-md:hidden'>
        <ul className='flex items-center gap-4 lg:gap-8'>
          {navLinks.map((link, index) => (
            <li key={index}>
            <Navlink href={link.url} label={link.label} />
          </li>
          ))}
        </ul>
      </nav>

          <MobileMenu />

    </header>
  )
}

export default Header
