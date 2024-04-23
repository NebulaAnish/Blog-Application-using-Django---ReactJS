import PropTypes from 'prop-types';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-[100vh] w-full bg-slate-200">
            <NavBar />
            {children}
            <Footer />
        </div>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;