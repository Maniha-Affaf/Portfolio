
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className='mb-12 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 item-center'>
    <img className="mx-2 x-10"  src={logo} alt='logo'/>


    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <FaLinkedin />
    <FaGithub/>
    <SiGmail/>

    </div>
    </nav>
  )
}

export default Navbar
