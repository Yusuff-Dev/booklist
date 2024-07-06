import NotFound from './NotFound'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Layout() {
  return (
    <div className='bg h-screen container flex items-center justify-center'>
        {/* <SignIn/> */}
        <SignUp/>
        {/* <NotFound/> */}
    </div>
  )
}

export default Layout