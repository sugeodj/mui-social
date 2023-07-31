import { AccountBox, Article, DarkMode, Diversity3, Group, Home, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';

const Sidebar = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary='Homepage' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#pages'>
                            <ListItemIcon>
                                <Article />
                            </ListItemIcon>
                            <ListItemText primary='Pages' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#groups'>
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary='Groups' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#marketplace'>
                            <ListItemIcon>
                                <Storefront />
                            </ListItemIcon>
                            <ListItemText primary='Marketplace' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#friends'>
                            <ListItemIcon>
                                <Diversity3 />
                            </ListItemIcon>
                            <ListItemText primary='Friends' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#settings'>
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#profile'>
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary='Profile' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#profile'>
                            <ListItemIcon>
                                <DarkMode />
                            </ListItemIcon>
                            <Switch />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;
