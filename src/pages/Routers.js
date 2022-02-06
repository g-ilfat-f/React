import { Box, Paper, ListItem, ListItemButton } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chats from './Chats';
import Profile from './Profile';
import NoChats from './NoChats';
import CommentIcon from '@mui/icons-material/Comment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';


const Routers = () => {
    return (
        <div className='menuApp'>
            <Box sx={{ display: 'flex' }}>
                <Paper elevation={0} sx={{ minWidth: 250, display: 'flex' }}>
                    <ListItem>
                        <HomeIcon color="disabled" />
                        <ListItemButton sx={{ height: 40 }}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <CommentIcon color="disabled" />
                        <ListItemButton sx={{ height: 40 }}>
                            <Link to='/Chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <AccountBoxIcon color="disabled" />
                        <ListItemButton sx={{ height: 40 }}>
                            <Link to='/Profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div className={'messager'}>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/chats/:chatId' element={<Chats />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NoChats />} />
                </Routes>
            </div>
        </div>
    );
};

export default Routers;