import { WhiteLogo } from '../assets/image';
import { RiInstagramLine, RiTiktokLine, RiYoutubeLine, RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-[#114232] text-white p-8 font-poppins">
            <div className="container mx-auto flex justify-between items-start">
                <div className="max-w-xs">
                    <img src={WhiteLogo} alt="Petani GO logo" className="h-24 mb-4 ml-4" />
                    <p className="text-2xl font-semibold">Petani GO</p>
                    <div className="space-y-2 mt-2">
                        <div className="flex items-center gap-2">
                            <RiMapPinLine className="text-4xl" />
                            <p className="text-sm">Nongsa Digital Park, Jl. Hang Tuah, Nongsa, Kota Batam, Kepulauan Riau, Indonesia.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiPhoneLine className="text-lg" />
                            <p className="text-sm">+62 8123456789</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiMailLine className="text-lg" />
                            <p className="text-sm">taniyouth@petanigo.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 flex flex-col space-y-4 ml-24 mt-12">
                    <h3 className="font-bold text-xl">Navigasi</h3>
                    <div className="space-y-3">
                        <a href="#" className="flex items-center gap-2 hover:text-[#326B59] text-base">
                            <span>Tentang Kami</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-[#326B59] text-base">
                            <span>Artikel</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-[#326B59] text-base">
                            <span>Berita</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-[#326B59] text-base">
                            <span>Modul</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-[#326B59] text-base">
                            <span>Forum Diskusi</span>
                        </a>
                    </div>
                </div>
                <div className="space-y-4 w-1/4 mt-12">
                    <h3 className="font-bold text-xl">Forum Diskusi</h3>
                    <input 
                        type="text" 
                        placeholder="Kirim Pesan" 
                        className="p-2 text-black text-sm w-full rounded-md font-poppins" 
                    />
                    <h3 className="font-bold text-xl mt-4">Ikuti Kami</h3>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-[#326B59] text-2xl">
                            <RiInstagramLine />
                        </a>
                        <a href="#" className="hover:text-[#326B59] text-2xl">
                            <RiTiktokLine />
                        </a>
                        <a href="#" className="hover:text-[#326B59] text-2xl">
                            <RiYoutubeLine />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm">© 2024 PetaniGO Organization. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;