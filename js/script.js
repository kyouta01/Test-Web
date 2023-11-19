// Toogle Class active

const navbarNav = document.querySelector(' .navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const searchForm= document.querySelector('.search-form');
const searchBox=document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) =>{
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};



const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

////////////////////////
/* Animasi Page Scroll*/
////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    animateOnLoad();
  
    // Tambahkan event listener untuk animasi tambahan saat melakukan scroll
    window.addEventListener('scroll', function() {
      animateOnScroll('animasi-scroll1');
      animateOnScroll('animasi-scroll2');
      animateOnScroll('animasi-scroll3');
    });
  
    function animateOnLoad() {
      const element = document.getElementById('animasi-dimuat');
      if (!element) return;
  
      const positionFromTop = element.getBoundingClientRect().top;
  
      // Tambahkan kelas animate-in hanya jika elemen terlihat di viewport saat halaman dimuat
      if (positionFromTop - window.innerHeight <= 0) {
        element.classList.add('animasi-in');
      }
    }
  
    function animateOnScroll(id) {
      const element = document.getElementById(id);
      if (!element) return;
  
      const positionFromTop = element.getBoundingClientRect().top;
  
      // Tambahkan kelas animate-in saat elemen muncul di viewport saat di-scroll
      if (positionFromTop - window.innerHeight <= 0) {
        element.classList.add('animasi-in');
      }
    }
  
    // Ketika halaman di-refresh, atur posisi scroll ke paling atas
    window.onload = function() {
      scrollToTop();
    };
  
    // Fungsi untuk mengatur posisi scroll ke paling atas
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
  });
  
/////////////////////
/*ICON Halaman Page*/
/////////////////////

document.addEventListener('DOMContentLoaded', function() {
    const facebookIcon = document.getElementById('facebookIcon');
    const twitterIcon = document.getElementById('twitterIcon');
    const instagramIcon = document.getElementById('instagramIcon');
  
    if (facebookIcon) {
      facebookIcon.addEventListener('click', function() {
        // Ganti URL sesuai dengan link Facebook Anda
        window.location.href = 'https://web.facebook.com/faiz.khairan.509';
      });
    }
  
    if (twitterIcon) {
      twitterIcon.addEventListener('click', function() {
        // Ganti URL sesuai dengan link Twitter Anda
        window.location.href = 'https://www.instagram.com/kyouta_summer01/';
      });
    }
  
    if (instagramIcon) {
      instagramIcon.addEventListener('click', function() {
        // Ganti URL sesuai dengan link Instagram Anda
        window.location.href = 'https://twitter.com/PlaytitanX';
      });
    }
  });
  