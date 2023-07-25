import { useAuthContext } from "../../hooks/useAuthContext";

function HomePage() {
    const { user, dispatch } = useAuthContext();

    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default HomePage;
