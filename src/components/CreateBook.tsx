import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '12px',
    p: '24px 28px',
    outline: 'none',
};

function CreateBook() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <button onClick={handleOpen} className="bg-dark-blue text-white py-[10px] px-6 rounded-[4px]">
                + Create a book
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='flex items-center justify-between'>
                        Create a book
                        <button>
                            <HighlightOffIcon onClick={handleClose} />
                        </button>
                    </Typography>
                    <TextField fullWidth label="ISBN" id="fullWidth" size='small' className='!my-7'/>
                    <Box className="flex gap-3 items-center">
                        <Button className="!border-dark-blue !text-dark-blue grow !font-medium !text-[16px] !capitalize" variant='outlined' onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="!bg-dark-blue !text-white grow !capitalize !font-medium !text-[16px]">
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default CreateBook