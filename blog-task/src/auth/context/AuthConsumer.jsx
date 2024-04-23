import { AuthContext } from './AuthContext';
import PropTypes from 'prop-types';

function AuthConsumer({ children }) {
  return (
    <AuthContext.Consumer>
      {(auth) => (auth.loading ? <div>loading...</div> : children)}
    </AuthContext.Consumer>
  );
}

AuthConsumer.propTypes = {
  children: PropTypes.node,
};

export { AuthConsumer };
