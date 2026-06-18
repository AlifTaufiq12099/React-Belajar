import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaLinkedinIn, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import productsData from '../assets/productsData.json';
import testimoniData from '../assets/testimoniData.json';

export default function Guest() {
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <main>
        {/* 2. Hero / Banner */}
        <section id="home" className="relative pt-20 pb-20 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Kolom Kiri */}
              <div className="max-w-2xl">
                <div className="text-slate-500 font-semibold text-lg mb-4">
                  Makanan Lezat, Pengiriman Cepat
                </div>  
                
                <h1 className="text-5xl lg:text-6xl font-extrabold text-[#1F2937] leading-[1.2] mb-6">
                  Pesan, Nikmati Dan Tumbuh Lebih Baik Bersama <span className="text-[#FF7A59]">Sedap</span>
                </h1>
                
                <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
                  Tentukan apa yang ingin Anda capai dengan hidangan favorit Anda. Apakah Anda mencari makanan yang sehat, cepat saji, atau sekadar memanjakan lidah Anda hari ini?
                </p>

                {/* Rating Badges */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-10">
                  <div className="flex items-center space-x-3">
                    <FcGoogle className="text-4xl" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-slate-800">4.5</span>
                        <div className="flex text-amber-400 text-sm">
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-amber-400/50"/>
                        </div>
                      </div>
                      <span className="text-sm text-slate-500">Best Rated On Google</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-[#0077b5] text-white p-2 rounded-md">
                      <FaLinkedinIn className="text-xl" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-slate-800">4.7</span>
                        <div className="flex text-amber-400 text-sm">
                          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-amber-400/50"/>
                        </div>
                      </div>
                      <span className="text-sm text-slate-500">Best Rated On LinkedIn</span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/login" className="inline-flex justify-center items-center px-8 py-3.5 bg-[#FF7A59] text-white font-semibold rounded-full hover:bg-[#E86A4C] transition-all shadow-xl shadow-[#FF7A59]/30">
                    Mulai Pesan
                  </Link>
                  <a href="#produk" onClick={(e) => scrollToSection(e, 'produk')} className="inline-flex justify-center items-center px-8 py-3.5 bg-[#40C9A2] text-white font-semibold rounded-full hover:bg-[#35A887] transition-all">
                    Lihat Menu
                  </a>
                </div>
              </div>

              {/* Kolom Kanan */}
              <div className="relative lg:ml-auto mt-12 lg:mt-0 flex justify-center">
                {/* Pattern Background matching the image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[url('https://www.transparenttextures.com/patterns/geometric-leaves.png')] opacity-20 -z-10"></div>
                
                {/* Image */}
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="Delicious Food" 
                  className="w-full max-w-md mx-auto rounded-full object-cover shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <div className="bg-[#FF7A59] py-8 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white divide-x divide-white/20">
              <div className="flex items-center gap-4 pl-4 md:pl-0">
                <span className="text-4xl md:text-5xl font-bold">230</span>
                <span className="text-sm leading-tight">Restoran<br/>Mitra Kami</span>
              </div>
              <div className="flex items-center gap-4 pl-6">
                <span className="text-4xl md:text-5xl font-bold">7k</span>
                <span className="text-sm leading-tight">Pelanggan<br/>Setia Sedap</span>
              </div>
              <div className="flex items-center gap-4 pl-6">
                <span className="text-4xl md:text-5xl font-bold">99%</span>
                <span className="text-sm leading-tight">Kepuasan<br/>Pelanggan</span>
              </div>
              <div className="flex items-center gap-4 pl-6">
                <span className="text-4xl md:text-5xl font-bold">10+</span>
                <span className="text-sm leading-tight">Tahun Pengalaman<br/>Terbaik</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Tentang Sedap (About) */}
        <section id="tentang" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Sisi Gambar (Left) */}
              <div className="relative flex justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FFD1C6] rounded-full -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600&h=800" 
                  alt="Tentang Sedap" 
                  className="rounded-full shadow-lg w-full max-w-sm object-cover h-[500px]"
                />
              </div>

              {/* Sisi Teks (Right) */}
              <div>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FF7A59]/30 text-[#FF7A59] font-medium text-sm mb-6 gap-2">
                   <span className="bg-[#FF7A59] text-white p-1 rounded-full"><FaCheckCircle size={12}/></span>
                  Tentang Kami
                </div>
                <h2 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Semua Yang Anda Butuhkan Untuk Menikmati Sajian Lezat
                </h2>
                <p className="text-slate-500 mb-8 text-lg leading-relaxed">
                  Sedap terintegrasi dengan berbagai restoran terbaik untuk memberikan pengalaman kuliner yang mulus. Kemudahan dalam memesan dan kecepatan pengiriman membuat Anda dapat menikmati hidangan favorit kapan saja dan di mana saja.
                </p>
                
                <Link to="/about" className="inline-flex items-center text-[#FF7A59] font-semibold hover:text-[#E86A4C] group mb-10 text-lg border-b border-[#FF7A59] pb-1">
                  Selengkapnya 
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Blockquote */}
                <div className="mt-4">
                  <p className="italic text-slate-600 font-medium mb-4 text-lg">"Berbagai menu pilihan yang tersedia benar-benar membantu saya menghemat waktu dalam mencari makanan favorit setiap hari."</p>
                  <div className="flex items-center">
                    <img src="https://plus.unsplash.com/premium_photo-1723514489790-18b9a81cbf09?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   " alt="User Avatar" className="w-12 h-12 rounded-full shadow-sm" />
                    <div className="ml-4">
                      <p className="text-sm font-bold text-slate-800">Clayton N. Ziegler</p>
                      <p className="text-xs text-slate-500">Pelanggan Setia @Sedap</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Produk Unggulan */}
        <section id="produk" className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FF7A59]/30 text-[#FF7A59] font-medium text-sm mb-4 gap-2">
                  <span className="bg-[#FF7A59] text-white p-1 rounded-full"><FaStar size={12}/></span>
                  Menu Andalan
               </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Fitur Utama Dan Produk Kami</h2>
              <p className="text-slate-500 text-lg">Produk kami menonjol dengan performa tinggi, memberikan kecepatan pengiriman yang luar biasa dan hidangan yang higienis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsData.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-14 h-14 bg-red-50 text-[#FF7A59] rounded-xl flex items-center justify-center text-2xl mb-6">
                    🍝
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{item.name}</h3>
                  <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                  <p className="text-slate-500 text-sm mb-4">
                    Nikmati {item.name.toLowerCase()} dengan bumbu rempah pilihan yang menggugah selera.
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-[#FF7A59]">{formatRupiah(item.price)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Ulasan Pengguna (Testimoni) */}
        <section id="testimoni" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#FF7A59]/30 text-[#FF7A59] font-medium text-sm mb-4 gap-2">
                   <span className="bg-[#FF7A59] text-white p-1 rounded-full"><FaStar size={12}/></span>
                   Testimoni
                </div>
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Ulasan Terbaik Dari Pelanggan Kami</h2>
                <p className="text-slate-500 text-lg">Siapa saja yang cocok menggunakan layanan kami sehingga dampaknya maksimal dan manfaatnya terasa nyata.</p>
              </div>
              <a href="#produk" onClick={(e) => scrollToSection(e, 'produk')} className="hidden md:inline-flex items-center justify-center px-8 py-3 bg-[#FF7A59] text-white font-medium rounded-full hover:bg-[#E86A4C] transition-colors mt-6 md:mt-0">
                Lihat Selengkapnya <FaArrowRight className="ml-2"/>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimoniData.slice(0, 5).map((testi, index) => (
                <div key={testi.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex text-amber-400 text-sm mb-6">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <p className="text-slate-600 mb-8 italic leading-relaxed">
                    "{testi.review}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${testi.name.replace(' ', '+')}&background=FF7A59&color=fff&rounded=true&bold=true`}
                      alt={testi.name} 
                      className="w-12 h-12 rounded-full border-2 border-slate-100"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-slate-800">{testi.name}</h4>
                      <p className="text-sm text-slate-500">Pelanggan Sedap</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#FF7A59] py-20 relative overflow-hidden">
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Berlangganan mailing list kami dan ikuti perkembangan terbaru
                </h2>
                <p className="text-white/80 text-lg">
                  Sedap siap memberikan informasi promo dan menu baru langsung ke kotak masuk Anda.
                </p>
              </div>
              <div className="lg:ml-auto w-full max-w-md">
                <form className="flex flex-col gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your E-mail address" 
                    className="w-full px-6 py-4 rounded-full outline-none text-slate-700 bg-white"
                    required
                  />
                  <button type="submit" className="w-full px-6 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-[#FF7A59] transition-colors">
                    SUBSCRIBE US
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
  );
}
