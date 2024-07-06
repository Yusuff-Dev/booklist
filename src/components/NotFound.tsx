import { Button } from '@mui/material'
import notFound from '../assets/notFound.webp'
import { Link } from 'react-router-dom'
function NotFound() {

    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className='contianer flex flex-col justify-center items-center gap-[72px]'>
            <div>
                <img src={notFound} alt="not found undraw illustration" />
            </div>
            <div className='flex gap-3 items-center'>
                <Button variant='contained'>
                    <Link to='/'>go home page</Link>
                </Button>
                <Button onClick={reloadPage} variant='outlined'>reload page</Button>
            </div>
        </div>
    )
}

export default NotFound