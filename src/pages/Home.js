import { Title } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box>
            <Title>Home</Title>
            <div>
                <Link to='/login'>Sign in</Link>
            </div>
            <br />
            <div>
                <Link to='/signup'>Sign up</Link>
            </div>
        </Box>
    );
};

export default Home;