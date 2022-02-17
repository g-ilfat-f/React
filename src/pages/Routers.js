import { Box, Paper, ListItem, ListItemButton, Button } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Chats from './Chats';
import Profile from './Profile';
import NoChats from './NoChats';
import CommentIcon from '@mui/icons-material/Comment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import Gists from './Gists';
import RequiredAuth from '../hocs/RequiredAuth';
import SignUp from './SignUp';
import Login from './Login';
import useAuth from '../hook/useAuth';


const Routers = () => {
    const auth = useAuth();

    return (
        <div className='menuApp'>
            <Box sx={{ display: 'flex' }}>
                <Paper elevation={0} sx={{ minWidth: 250, display: 'flex' }}>
                    <ListItem disablePadding>
                        <HomeIcon color="disabled" />
                        <ListItemButton sx={{ height: 40 }}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <CommentIcon color="disabled" />
                        <ListItemButton sx={{ height: 40 }}>
                            <Link to='/Chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <AccountBoxIcon color="disabled" />
                        <ListItemButton sx={{ height: 40 }}>
                            <Link to='/Profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 40 }}>
                            <Link to='/gists'>Gists</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 40, width: 100 }}>
                            <Link to='/signup'>Sign up</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 40 }}>
                            <Link to='/login'>Login</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ height: 40, width: 100 }}>
                            <Button onClick={() => auth.signout()}>Sign out</Button>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div className={'messager'}>
                <Routes>
                    <Route exact element={<Home />} />
                    <Route path='/' exact element={<Home message={'Privet'} />} />
                    <Route path='/login' exact element={<Login />} />
                    <Route path='/signup' exact element={<SignUp />} />
                    <Route element={<RequiredAuth />} >
                        <Route path='/chats/' exact element={<NoChats />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/gists' element={<Gists />} />
                    </Route>
                    <Route path='*' element={<NoChats />} />
                </Routes>
            </div>
        </div>
    );
};

export default Routers;