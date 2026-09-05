// 404 Page component
import{Link,useLocation} from "react-router-dom";

function NotFound() {
    const location = useLocation();

    return (
        <main className="not-found">
            <h1>404 - Page Not Found</h1>

            <p>Invalid URL: {location.pathname}</p>

            <Link to="/">Back to Home</Link>
        </main>
    );
}

export default NotFound;