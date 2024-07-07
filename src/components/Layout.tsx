import Navbar from './Navbar'
import BookItem from './BookItem'
import NotFound from './NotFound'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Hero from './Hero'

function Layout() {
  return (
    <div className='bg h-screen items-center justify-center'>
        <Navbar/>
        <Hero/>
        {/* <SignIn/> */}
        {/* <SignUp/> */}
        {/* <NotFound/> */}
        {/* <BookItem/> */}
    </div>
  )
}

export default Layout