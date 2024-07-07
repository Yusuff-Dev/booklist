import Logo from "./Logo"
import Notification from "./Notification"
import Profile from "./Profile"
import Search from "./Search"

function Navbar() {
    return (
        <nav className='w-full'>
            <div className="container flex items-center gap-2 justify-between py-5">
                <Logo />
                <Search />
                <div className="flex items-center gap-6">
                    <Notification />
                    <Profile />
                </div>
            </div>
        </nav>
    )
}

export default Navbar