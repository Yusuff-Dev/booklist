import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your login logic here
    };

    return (
        <div className='bg-white rounded-[4px] py-12 px-7 shadow-lg basis-[450px]'>
            <h2 className='text-center text-4xl font-bold font-mulish mb-9'>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1 mb-4'>
                    <label htmlFor="username" className='text-sm font-medium'>Username</label>
                    <TextField size='small' id="outlined-basic" variant="outlined" placeholder='Input your name' />
                </div>
                <div className='flex flex-col gap-1 mb-9'>
                    <label htmlFor="password" className='text-sm font-medium'>Password</label>
                    <TextField size='small' id="outlined-basic" variant="outlined" placeholder='Input your password' />
                </div>
                <div>
                    <Button
                        variant="contained"
                        className='w-full !font-mulish !capitalize !text-base'>Submit
                    </Button>
                    <p className='flex items-center gap-1 justify-center mt-3 text-sm font-light'>
                        Have you not an account?
                        <Link to='/signup' className='text-blue-600'>Go to sign un</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;

{/* <input
type="text"
id="username"
value={username}
onChange={handleUsernameChange}
/> */}

{/* <input
type="password"
id="password"
value={password}
onChange={handlePasswordChange}
/> */}