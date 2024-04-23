import AuthLayout from '../../../layout/auth';
import RegisterSection from '../../../section/auth/RegisterSection';

function RegisterRoute() {
    return (
        <AuthLayout>
            <RegisterSection />
        </AuthLayout>
    );
}

export { RegisterRoute }