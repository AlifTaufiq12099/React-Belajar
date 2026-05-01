import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-2xl">
      {/* Large 404 */}
      <div className="animate-bounce">
        <h1 
          className="text-8xl md:text-9xl lg:text-[10rem] font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-2xl mb-6"
          style={{ fontFamily: 'var(--font-extrabold)' }}
        >
          404
        </h1>
      </div>
      
      {/* Message */}
      <div className="max-w-md mx-auto">
        <h2 
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Oops! Halaman Tidak Ditemukan
        </h2>
        <p 
          className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Maaf, halaman yang kamu cari tidak ada di sini. Mungkin sudah dipindah atau salah ketik URL.
        </p>
      </div>
      
      {/* Illustration */}
      <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-8 shadow-2xl transform hover:scale-110 transition-all duration-300">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.343 3.94a1.114 1.114 0 00-1.187 0 12.002 12.002 0 00-4.372 7.764 1.114 1.114 0 00.944 1.342 12.002 12.002 0 008.816 0 1.114 1.114 0 00.944-1.342 12.002 12.002 0 00-4.372-7.764zM20 12a8 8 0 11-16.001 0A8 8 0 0120 12z" />
        </svg>
      </div>
      
      {/* Action Button */}
      <Link
        to="/"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span>Kembali ke Beranda</span>
      </Link>
      
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .shake-error {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

