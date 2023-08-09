import { useEffect } from "react";
import "./App.css";
import RouteController from "./components/Routes/Routes";
import { useAuthContext } from "./hooks/useAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <RouteController></RouteController>
        </div>
    );
}

export default App;
