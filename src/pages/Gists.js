import { useCallback, useEffect } from 'react';
import { API_URL_PUBLIC } from '../contants/endpoints';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { getAllGists } from '../store/middleware';
import { selectGists, selectGistsError, selectGistsLoading } from '../store/gists/selectors';

const Gists = () => {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists());
    }

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback((gist) => (
        <li key={gist.id}>{gist.description || 'No description'}</li>
    ), []);

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    };

    return <ul>{gists?.map(renderGist)}</ul>
};

export default Gists;