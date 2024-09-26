import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
             
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-2">Tentang Kawasaki</h2>
                    <p className="text-sm mb-4">
                        Kawasaki adalah pemimpin dalam industri sepeda motor, menawarkan kinerja, inovasi, dan desain yang luar biasa. Kami berkomitmen untuk memberikan pengalaman berkendara terbaik bagi para penggemar motor di seluruh dunia.
                    </p>
                    <a href="#" className="hover:underline">Pelajari lebih lanjut</a>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-2">Produk</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Ninja ZX-25R</a></li>
                        <li><a href="#" className="hover:underline">Ninja H2</a></li>
                        <li><a href="#" className="hover:underline">Z900</a></li>
                        <li><a href="#" className="hover:underline">Versys 650</a></li>
                        <li><a href="#" className="hover:underline">KX250</a></li>
                        <li><a href="#" className="hover:underline">Ninja 1000SX</a></li>
                        <li><a href="#" className="hover:underline">Ninja 300</a></li>
                    </ul>
                </div>

          
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-2">Informasi Kontak</h2>
                    <p className="text-sm mb-2">Kawasaki Indonesia</p>
                    <p className="text-sm mb-2">Jl. Pahlawan No. 12, Jakarta</p>
                    <p className="text-sm mb-2">Telepon: (021) 12345678</p>
                    <p className="text-sm mb-4">Email: info@kawasaki.co.id</p>
                    <a href="#" className="hover:underline">Hubungi kami</a>
                </div>

               
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-2">Ikuti Kami</h2>
                    <p className="text-sm mb-4">Dapatkan berita terbaru dan penawaran eksklusif dengan mengikuti kami di media sosial.</p>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Facebook</a></li>
                        <li><a href="#" className="hover:underline">Instagram</a></li>
                        <li><a href="#" className="hover:underline">Twitter</a></li>
                        <li><a href="#" className="hover:underline">YouTube</a></li>
                        <li><a href="#" className="hover:underline">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm">© 2024 Kawasaki. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
