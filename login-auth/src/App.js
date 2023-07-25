import { useEffect } from "react";
import "./App.css";
import RouteController from "./components/Routes/Routes";
import { useAuthContext } from "./hooks/useAuthContext";
function App() {
    const { user } = useAuthContext();

    return (
        <div className="App">
            <RouteController></RouteController>
        </div>
    );
}

export default App;
