import { KeyboardCommandKey, Mail, Notifications } from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography,
} from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}));

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography
                    variant='h6'
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    sugeodj.dev
                </Typography>
                <KeyboardCommandKey
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                />
                <Search>
                    <InputBase placeholder='Search...' />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY='
                        onClick={e => setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src='https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY='
                    />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id='demo-positioned-menu'
                aria-labelledby='demo-positioned-button'
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
