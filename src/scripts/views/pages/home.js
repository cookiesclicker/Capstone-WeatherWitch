/* eslint-disable no-use-before-define */
const Home = {
  async render() {
    return `
    <div class="about-us-container">
    <div class="card home-app-card">
    <div class="card-info-home">
    <img src="./images/logo.png" alt="Logo Home">
    <h1>Welcome to WeatherWitch</h1>
    <h3>Temukan Aktivitas Terbaik Berdasarkan Cuaca di Lokasi Anda</h3>
    <p>Cuaca tidak harus menjadi penghalang untuk menikmati hari Anda. Dengan WeatherWise, kami membantu Anda menemukan kegiatan yang sempurna, apakah itu di dalam ruangan atau di luar ruangan, sesuai dengan kondisi cuaca di sekitar Anda.</p>
    </div>
  </div>
  </div>
  `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
  },

};
export default Home;

document.addEventListener('DOMContentLoaded', () => {
  const heroElement = document.getElementById('hero');

  function checkHash() {
    if (window.location.hash === '#/home') {
      heroElement.style.display = 'none';
    } else {
      heroElement.style.display = 'block';
    }
  }

  window.addEventListener('hashchange', checkHash);
  checkHash(); // Initial check
});
