import { useAuthContext } from "../../auth/use-auth-context";
import { Link } from "react-router-dom";
import { paths } from "../../routes/path";

export default function LoginSection() {
    const { login } = useAuthContext();

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const password = form.password.value;

        try {
            await login(username, password);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-2">
                        <div>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm"
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                        {/* <div className="self-end">
                            <Link to={paths.auth.forgotPassword} className="font-medium text-slate-600 hover:text-slate-500">
                                Forgot Password?
                            </Link>
                        </div> */}
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
                            Sign in
                        </button>
                    </div>

                    <div className="text-sm text-center">
                        <Link to={paths.auth.register} className="font-medium text-slate-600 hover:text-slate-500">
                            Dont Have an Account? Register Now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}