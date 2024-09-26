import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import BanImage from '../../public/Ban.png'; 
const Contact = () => {
    const contacts = [
        {
            title: 'Ban Sporty',
            description: 'Ban untuk performa tinggi dengan traksi yang maksimal.',
            price: 'Rp 1.500.000'
        },
        {
            title: 'Ban Touring',
            description: 'Ban yang dirancang untuk perjalanan jarak jauh dengan kenyamanan maksimal.',
            price: 'Rp 1.800.000'
        },
        {
            title: 'Ban Off-road',
            description: 'Ban yang cocok untuk medan berat dan off-road.',
            price: 'Rp 2.000.000'
        },
        {
            title: 'Ban Musim Dingin',
            description: 'Ban yang dirancang khusus untuk cuaca dingin dan salju.',
            price: 'Rp 2.200.000'
        },
        {
            title: 'Ban Balap',
            description: 'Ban yang dioptimalkan untuk kecepatan dan pengendalian yang tajam.',
            price: 'Rp 3.000.000'
        },
        {
            title: 'Ban Cruiser',
            description: 'Ban yang memberikan kenyamanan dan gaya untuk berkendara santai.',
            price: 'Rp 1.600.000'
        },
        {
            title: 'Ban Trail',
            description: 'Ban yang dirancang untuk sepeda motor trail dan medan sulit.',
            price: 'Rp 2.500.000'
        },
        {
            title: 'Ban City',
            description: 'Ban yang ideal untuk penggunaan sehari-hari di kota.',
            price: 'Rp 1.200.000'
        },
        {
            title: 'Ban Eco',
            description: 'Ban yang ramah lingkungan dengan efisiensi bahan bakar yang lebih baik.',
            price: 'Rp 1.400.000'
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contacts.map((contact, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105">
                            <img
                                src={BanImage}
                                alt={contact.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">{contact.title}</h2>
                            <p className="text-gray-300 mb-2">{contact.description}</p>
                            <p className="text-lg font-bold mb-1">Harga: <span className="text-gray-300">{contact.price}</span></p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
