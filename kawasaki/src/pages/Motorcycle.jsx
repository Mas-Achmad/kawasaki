import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import DucatiImage from '../../public/Ducati.png'; 
import NinjaH2Image from '../../public/Ninja-H2.png';

const Motorcycle = () => {
    const motorcycles = [
        {
            name: 'Ducati Panigale V4',
            image: DucatiImage,
            description: 'Ducati Panigale V4 menawarkan performa tinggi dan teknologi mutakhir, memberikan pengalaman berkendara yang luar biasa.',
            price: 'Rp 600.000.000',
            details: [
                'Mesin V4 1103cc',
                'Tenaga maksimum: 214 hp',
                'Torsi maksimum: 124 Nm',
                'Berat: 198 kg',
            ]
        },
        {
            name: 'Kawasaki Ninja H2',
            image: NinjaH2Image,
            description: 'Kawasaki Ninja H2 menggabungkan daya supercharged dengan desain aerodinamis yang canggih.',
            price: 'Rp 750.000.000',
            details: [
                'Mesin 998cc supercharged',
                'Tenaga maksimum: 231 hp',
                'Torsi maksimum: 141.7 Nm',
                'Berat: 238 kg',
            ]
        },
        {
            name: 'Ducati Monster 1200',
            image: DucatiImage,
            description: 'Ducati Monster 1200 adalah motor naked yang memberikan performa dan kenyamanan luar biasa.',
            price: 'Rp 400.000.000',
            details: [
                'Mesin L-Twin 1198cc',
                'Tenaga maksimum: 147 hp',
                'Torsi maksimum: 124 Nm',
                'Berat: 189 kg',
            ]
        },
        {
            name: 'Kawasaki Ninja 650',
            image: NinjaH2Image,
            description: 'Kawasaki Ninja 650 adalah motor sport yang ideal untuk pemula dengan gaya sporty dan performa yang baik.',
            price: 'Rp 200.000.000',
            details: [
                'Mesin parallel-twin 649cc',
                'Tenaga maksimum: 68 hp',
                'Torsi maksimum: 65.7 Nm',
                'Berat: 191 kg',
            ]
        },
        {
            name: 'Ducati Scrambler Icon',
            image: DucatiImage,
            description: 'Ducati Scrambler Icon adalah motor retro yang memadukan gaya klasik dengan teknologi modern.',
            price: 'Rp 300.000.000',
            details: [
                'Mesin L-Twin 803cc',
                'Tenaga maksimum: 73 hp',
                'Torsi maksimum: 67 Nm',
                'Berat: 170 kg',
            ]
        },
        {
            name: 'Kawasaki Z900',
            image: NinjaH2Image,
            description: 'Kawasaki Z900 adalah naked bike yang menawarkan performa kuat dan pengendalian yang lincah.',
            price: 'Rp 400.000.000',
            details: [
                'Mesin inline-four 948cc',
                'Tenaga maksimum: 125 hp',
                'Torsi maksimum: 98.6 Nm',
                'Berat: 210 kg',
            ]
        },
        {
            name: 'Ducati Hypermotard 950',
            image: DucatiImage,
            description: 'Ducati Hypermotard 950 menggabungkan performa yang sporty dengan desain yang agresif.',
            price: 'Rp 450.000.000',
            details: [
                'Mesin L-Twin 937cc',
                'Tenaga maksimum: 114 hp',
                'Torsi maksimum: 96 Nm',
                'Berat: 200 kg',
            ]
        },
        {
            name: 'Kawasaki ZX-10R',
            image: NinjaH2Image,
            description: 'Kawasaki ZX-10R adalah motor sport yang dirancang untuk kecepatan dan kontrol maksimum.',
            price: 'Rp 900.000.000',
            details: [
                'Mesin 998cc',
                'Tenaga maksimum: 210 hp',
                'Torsi maksimum: 113 Nm',
                'Berat: 206 kg',
            ]
        },
        {
            name: 'Ducati Streetfighter V4',
            image: DucatiImage,
            description: 'Ducati Streetfighter V4 adalah naked bike dengan performa mendebarkan dan desain yang memukau.',
            price: 'Rp 800.000.000',
            details: [
                'Mesin V4 1103cc',
                'Tenaga maksimum: 208 hp',
                'Torsi maksimum: 123 Nm',
                'Berat: 178 kg',
            ]
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {motorcycles.map((motorcycle, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
                            <img
                                src={motorcycle.image}
                                alt={motorcycle.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">{motorcycle.name}</h2>
                            <p className="text-gray-300 mb-2">{motorcycle.description}</p>
                            <p className="text-lg font-bold text-green-500 mb-2">{motorcycle.price}</p>
                            <h3 className="text-xl font-semibold mb-1">Detail:</h3>
                            <ul className="list-disc list-inside text-gray-300">
                                {motorcycle.details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Motorcycle;
