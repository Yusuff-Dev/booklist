import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Profile() {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
        </div>
    )
}

export default Profile