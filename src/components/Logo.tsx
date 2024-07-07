import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';

function Logo() {
    return (
        <div>
            <Link to='/' className='text-white flex items-center gap-2'>
                <div>
                    <img src={logo} alt="logo icon" />
                </div>
                <div className="">
                    <span className="text-[#6200EE]">Books</span> List
                </div>
            </Link>
        </div>
    )
}

export default Logo