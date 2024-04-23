import { Link } from "react-router-dom";
import { paths } from "../routes/path";
import PropTypes from "prop-types";
import { useAuthContext } from "../auth/use-auth-context";

function NavBar({ type }) {
    const { authenticated, logout } = useAuthContext();

    if (type === "auth") {
        return (
            <nav className="sticky inset-0 bg-[#7CCFF2] w-full z-50">
                <ul className="flex flex-row w-full h-full justify-center items-center">
                    <li className="p-6">
                        <Link to={paths.root}>📚Blog Reader📚</Link>
                    </li>
                </ul>
            </nav>
        );
    }
    return (
        <nav className="sticky inset-0 bg-[#7CCFF2] w-full z-50">
            <ul className="flex flex-row w-full h-full justify-between">
                <li className="p-6">
                    <Link to={paths.root}>Home</Link>
                </li>
                <li className="p-6">📚Blog Reader📚</li>
                <div>
                    <li className="p-6">
                        {authenticated ? <li className="p-6" onClick={() => logout()}>Logout</li> : <Link to={paths.auth.login}>Login</Link>}
                    </li>
                </div>
            </ul>
        </nav>
    );
}

NavBar.propTypes = {
    type: PropTypes.string,
};

export default NavBar;