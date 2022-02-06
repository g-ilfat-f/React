import React from "react";
import Routers from "./pages/Routers";
import { Provider } from "react-redux";
import { store } from "./store";


const App = () => {
    return (
        <Provider store={store}>
            <Routers />
        </Provider>
    );
};

export default App;