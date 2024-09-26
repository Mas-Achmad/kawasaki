import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />

            {/* Menambahkan jarak antara Navbar dan konten */}
            <div className="mt-20 flex-1 flex items-center justify-center">
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        {isLogin ? 'Login' : 'Daftar'}
                    </h1>

                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-semibold" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-semibold" htmlFor="password">Kata Sandi</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
                                required
                            />
                        </div>

                        {!isLogin && (
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-semibold" htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:ring-green-500"
                                    required
                                />
                            </div>
                        )}

                        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition duration-200 ease-in-out transform hover:scale-105 active:scale-95">
                            {isLogin ? 'Masuk' : 'Daftar'}
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm">
                        {isLogin ? 'Belum punya akun?' : 'Sudah punya akun?'}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-green-500 underline ml-1"
                        >
                            {isLogin ? 'Daftar' : 'Masuk'}
                        </button>
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
