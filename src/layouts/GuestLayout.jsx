import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import LogoSedap from '../components/LogoSedap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-white font-poppins text-slate-800 selection:bg-[#FF7A59] selection:text-white">
      {/* Navbar / Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/guest" className="flex items-center gap-2">
                 <LogoSedap />
              </Link>
            </div>
            
            {/* Nav Menu */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Tentang', 'Produk', 'Testimoni', 'Kontak'].map((item, idx) => (
                <a key={idx} href={`#${item.toLowerCase()}`} className={`font-medium transition-colors duration-300 ${idx === 0 ? 'text-[#FF7A59]' : 'text-slate-600 hover:text-[#FF7A59]'}`}>
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="hidden md:inline-flex text-slate-600 hover:text-[#FF7A59] font-medium">
                Login
              </Link>
              <Link to="/register" className="inline-flex items-center justify-center px-6 py-2.5 bg-[#FF7A59] text-white font-medium rounded-full hover:bg-[#E86A4C] transition-colors shadow-lg shadow-[#FF7A59]/30">
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      {/* Footer */}
      <footer className="bg-[#0F172A] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Info */}
            <div className="lg:col-span-2 pr-8">
              <Link to="/guest" className="inline-block mb-6">
                <LogoSedap isLight={true} />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Laporan komprehensif, visualisasi data, dan wawasan untuk menganalisis pesanan makanan Anda dengan lebih baik.
              </p>
              
              {/* Partner Logos */}
              <div className="mt-8">
                <h4 className="text-slate-500 text-sm font-semibold mb-4 uppercase tracking-wider">Mitra Pembayaran & Logistik</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <img src="https://placehold.co/100x40/00AA13/ffffff?text=Gojek" alt="Gojek" className="h-10 rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://placehold.co/100x40/00B14F/ffffff?text=Grab" alt="Grab" className="h-10 rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://placehold.co/100x40/EE4D2D/ffffff?text=Shopee" alt="Shopee" className="h-10 rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://placehold.co/100x40/4C3494/ffffff?text=OVO" alt="OVO" className="h-10 rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            {/* Links 1 */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Solusi</h4>
              <ul className="space-y-4">
                {['Enterprise', 'Mitra Restoran', 'Pelanggan Setia'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-400 hover:text-[#FF7A59] text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Perusahaan</h4>
              <ul className="space-y-4">
                {['Tentang Kami', 'Berita & Pers', 'Pelanggan Kami', 'Kepemimpinan', 'Karir'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-400 hover:text-[#FF7A59] text-sm transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Hubungi Kami</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF7A59] mt-0.5">📍</span>
                  <span>Jl. Kuliner Juara No. 123,<br/>Jakarta Selatan, 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF7A59]">✉️</span>
                  <a href="mailto:hello@sedap.id" className="hover:text-[#FF7A59] transition-colors">hello@sedap.id</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF7A59]">📞</span>
                  <a href="tel:+6281122334455" className="hover:text-[#FF7A59] transition-colors">+62 811 2233 4455</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 pt-8 border-t border-slate-800">
            <p>2026 © Sedap - Design crafted by <span className="text-red-500">♥</span> MarkeyThemes</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <div className="flex space-x-4 mr-6">
                  {[
                    { Icon: FaFacebookF, url: "https://facebook.com" },
                    { Icon: FaTwitter, url: "https://twitter.com" },
                    { Icon: FaInstagram, url: "https://instagram.com" },
                    { Icon: FaLinkedinIn, url: "https://linkedin.com" }
                  ].map((item, i) => (
                    <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-800 hover:bg-[#FF7A59] hover:text-white transition-colors">
                      <item.Icon size={14} />
                    </a>
                  ))}
                </div>
              <a href="#" className="hover:text-white transition-colors">Terms Of Us</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 bg-[#FF7A59] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#E86A4C] transition-colors cursor-pointer">
            ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
