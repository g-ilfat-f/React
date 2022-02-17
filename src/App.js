import React from "react";
import Routers from "./pages/Routers";
import { Provider } from "react-redux";
import { store } from "./store";
import { AuthProvider } from "./hook/useAuth";

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Routers />
            </AuthProvider>
        </Provider>
    );
};

export default App;