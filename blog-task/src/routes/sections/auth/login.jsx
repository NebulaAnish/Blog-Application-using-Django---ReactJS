import AuthLayout from '../../../layout/auth';
import LoginSection from '../../../section/auth/LoginSection';

function LoginRoute() {
    return (
        <AuthLayout>
            <LoginSection />
        </AuthLayout>
    );
}

export { LoginRoute }