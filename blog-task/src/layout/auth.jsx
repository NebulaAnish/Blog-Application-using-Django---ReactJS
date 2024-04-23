import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-[100vh] w-full bg-slate-200">
            <NavBar type="auth" />
            {children}
        </div>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.node,
};

export default AuthLayout;