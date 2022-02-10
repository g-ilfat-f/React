import React from "react";
import Routers from "./pages/Routers";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@mui/material';


const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<CircularProgress />} >
                <Routers />
            </PersistGate>
        </Provider>
    );
};

export default App;