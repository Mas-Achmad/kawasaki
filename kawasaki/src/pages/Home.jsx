import { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Home = () => {
    const [currentVideo, setCurrentVideo] = useState(0);

    const videos = [
        {
            title: 'Ducati Panigale V4',
            description: 'The Ducati Panigale V4 delivers world-class power and precision, combining Italian design with cutting-edge technology.',
            src: '/Ducati.mp4'
        },
        {
            title: 'Kawasaki Ninja H2',
            description: 'The Kawasaki Ninja H2 brings the ultimate combination of supercharged power and advanced aerodynamics, redefining the superbike experience.',
            src: '/Ninja H2.mp4' 
        }
    ];

    const ninjaH2Details = {
        image: '/Ninja-H2.png',
        advantages: [
            'Supercharged engine for unmatched power.',
            'Advanced aerodynamic design for stability at high speeds.',
            'Cutting-edge technology for enhanced rider experience.',
            'Aggressive styling that commands attention.'
        ],
        review: 'The Kawasaki Ninja H2 is the ultimate sportbike, offering a perfect balance of power, handling, and technology. Its supercharged engine and aerodynamic design make it a standout choice for riders seeking the thrill of performance.'
    };

    const ducatiDetails = {
        image: '/Ducati.png',
        advantages: [
            'Powerful V4 engine for superior performance.',
            'Innovative design with advanced aerodynamics.',
            'State-of-the-art electronics for optimal handling.',
            'Race-ready features for track enthusiasts.'
        ],
        review: 'The Ducati Panigale V4 is engineered for performance, blending cutting-edge technology with Italian artistry. Its race-inspired dynamics make it a true competitor on any track.'
    };

    useEffect(() => {
        const videoDuration = 15000; 
        const timer = setTimeout(() => {
            setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length);
        }, videoDuration);

        return () => clearTimeout(timer);
    }, [currentVideo]);

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="relative w-full h-screen">
                <video
                    key={currentVideo}
                    src={videos[currentVideo].src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-[95vh] max-h-[95vh] object-cover"
                    style={{ transform: 'translateY(-20px)' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-10">
                    <h1 className="text-5xl font-bold mb-4">{videos[currentVideo].title}</h1>
                    <p className="text-xl max-w-3xl">{videos[currentVideo].description}</p>
                </div>
            </div>

        
            <div className="bg-black py-20 h-[600px]">
                <div className="container mx-auto flex flex-row items-center h-full">
                    <div className="flex-1 text-left pr-8">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">Keunggulan Kawasaki Ninja H2</h2>
                        <p className="text-lg text-gray-300 mb-6">{ninjaH2Details.review}</p>
                        <div className="border-l-4 border-green-600 pl-4">
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">Keunggulan:</h3>
                            <ul className="list-disc list-inside text-gray-300">
                                {ninjaH2Details.advantages.map((advantage, index) => (
                                    <li key={index} className="mb-2">{advantage}</li> 
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src={ninjaH2Details.image}
                            alt="Kawasaki Ninja H2"
                            className="w-full max-w-[600px] rounded-lg shadow-lg" 
                        />
                    </div>
                </div>
            </div>

         
            <div className="bg-black py-20 h-[600px]">
                <div className="container mx-auto flex flex-row items-center h-full">
                    <div className="flex-1 text-left pr-8">
                        <h2 className="text-3xl font-bold text-red-600 mb-4">Keunggulan Ducati Panigale V4</h2>
                        <p className="text-lg text-gray-300 mb-6">{ducatiDetails.review}</p>
                        <div className="border-l-4 border-red-600 pl-4">
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">Keunggulan:</h3>
                            <ul className="list-disc list-inside text-gray-300">
                                {ducatiDetails.advantages.map((advantage, index) => (
                                    <li key={index} className="mb-2">{advantage}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src={ducatiDetails.image}
                            alt="Ducati Panigale V4"
                            className="w-full max-w-[600px] rounded-lg shadow-lg" 
                        />
                    </div>
                </div>
            </div>

           <Footer />
        </div>
    );
};

export default Home;
