import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import KawasakiLogo from '../../public/Kawasaki-logo.png'; 
const About = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

          
            <div className="py-10"></div>

            <div className="container mx-auto py-10">
                <h1 className="text-4xl font-bold text-center mb-8">Tentang Kawasaki</h1>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                        <h2 className="text-3xl font-semibold mb-4">Sejarah Perusahaan</h2>
                        <p className="text-gray-300 mb-4">
                            Kawasaki Heavy Industries, Ltd. didirikan pada tahun 1896 dan telah menjadi pelopor dalam industri otomotif dan
                            mesin. Dengan komitmen untuk inovasi dan kualitas, Kawasaki telah menghadirkan berbagai produk yang
                            mencakup sepeda motor, mesin, dan teknologi transportasi.
                        </p>
                        <p className="text-gray-300">
                            Sepeda motor Kawasaki dikenal di seluruh dunia karena performa yang luar biasa, desain yang menawan, dan
                            teknologi mutakhir. Dari model legendaris seperti Ninja hingga motor touring yang nyaman, Kawasaki
                            menawarkan pengalaman berkendara yang tak terlupakan.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src={KawasakiLogo}
                            alt="Kawasaki Motorcycles"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-semibold mb-4">Misi Kami</h2>
                    <p className="text-gray-300 mb-4">
                        Misi kami adalah untuk terus menghadirkan inovasi dan performa dalam setiap produk yang kami ciptakan. Kami berkomitmen untuk memberikan
                        pengalaman berkendara yang aman, menyenangkan, dan berkesan bagi semua pengguna Kawasaki di seluruh dunia.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-3xl font-semibold mb-4">Visi Kami</h2>
                    <p className="text-gray-300 mb-4">
                        Visi kami adalah menjadi pemimpin global dalam industri otomotif dan mesin, dengan fokus pada keberlanjutan, inovasi,
                        dan kepuasan pelanggan. Kami ingin terus menghadirkan produk yang memenuhi kebutuhan dan harapan pelanggan di
                        era modern ini.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
