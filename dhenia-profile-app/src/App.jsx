import React, { useState } from 'react'; // Jangan lupa useState ini wajib ada
import './App.css';

import y from './assets/y.png';
import leaf from './assets/leaf.png';
import red from './assets/red.png';
// Memanggil asset gambar zodiak
import zodiac from './assets/zodiac.png'; 

function App() {
  
  // State untuk memunculkan dan menyembunyikan popup
  const [showZodiac, setShowZodiac] = useState(false);

  // Dummy Data 5 Film
  const favoriteMovies = [
    { id: 1, title: "Knives Out", image: "https://en.wikipedia.org/wiki/Special:FilePath/Knives_Out_poster.jpeg"},
    { id: 2, title: "White Chicks", image: "https://en.wikipedia.org/wiki/Special:FilePath/White_chicks.jpg"},
    { id: 3, title: "Mean Girls", image: "https://en.wikipedia.org/wiki/Special:FilePath/Mean_Girls_film_poster.png" },
    { id: 4, title: "His and Hers", image: "https://en.wikipedia.org/wiki/Special:FilePath/His_And_Hers_Netflix_series_poster.jpeg" },
    { id: 5, title: "Evil Dead (2013)", image:"https://en.wikipedia.org/wiki/Special:FilePath/EvilDead2013Poster.jpg" }
  ];

  return (
    <div className="app-container">
      <div className="profile-card">
        
        <img src={leaf} alt="Leaf Decoration" className="leaf-deco" />
        <img src={red} alt="Red Flower Decoration" className="red-deco" />

        {/* --- BAGIAN ATAS: PROFIL --- */}
        <div className="photo-container">
          <img src={y} alt="Dhenia Putri Nuraini" className="main-photo" />
        </div>

        <div className="bottom-section">
          <div className="content-left">
            <h1 className="title">
              <span className="title-im">I'm</span> <span className="title-name">Dhenia Putri Nuraini</span>
            </h1>
            <p className="text-green">
              A person who love to design and like to learn new things to gain knowledge. Born on 19<sup>th</sup> of November 2004.
            </p>
          </div>

          {/* Kolom Kanan */}
          <div className="content-right">
            
            {/* --- TOMBOL & POPUP KUSTOM --- */}
            <div className="btn-wrapper">
            
              {showZodiac && (
                <div className="zodiac-popup">
                  {/* Ikon Teks diganti dengan Gambar Asset */}
                  <div className="popup-icon">
                    <img src={zodiac} alt="Scorpio Zodiac" />
                  </div>
                  <div className="popup-info">
                    <h3>Scorpio<br/>November 19<sup>th</sup></h3>
                    <p>Creative, observant, and strong-willed.</p>
                  </div>
                </div>
              )}

              {/* Tombol onClick ini sekarang mengubah state showZodiac */}
              <button className="zodiac-btn" onClick={() => setShowZodiac(!showZodiac)}>
                My Zodiac
              </button>
              
            </div>
            {/* ---------------------------------- */}
            
            <h2 className="job-title">Current Job:</h2>
            <p className="text-green">
              I am a college student at Universitas Teknologi Bandung and heavily involved in campus organizations
            </p>
          </div>
        </div>

        {/* --- BAGIAN BAWAH: FAVORITE MOVIE --- */}
        <div className="movie-section">
          <h2 className="movie-section-title">Favorite Movie</h2>
          <div className="movies-grid">
            {favoriteMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <div className="movie-image-container">
                  {/* Gambar film asli */}
                  <img src={movie.image} alt={movie.title} />
                </div>
                <div className="movie-title-bar">
                  <p>{movie.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;