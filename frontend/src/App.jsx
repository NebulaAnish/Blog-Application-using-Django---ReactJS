import { AuthProvider, AuthConsumer } from './auth/context';
import { RouterProvider } from 'react-router-dom'
import router from './routes';

export default function App() {
    return (
        <AuthProvider>
            <AuthConsumer>
                <RouterProvider router={router} />
            </AuthConsumer>
        </AuthProvider>
    );
}
