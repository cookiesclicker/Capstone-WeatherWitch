const WeatherWitch = {
  async render() {
    return `
      <div class="weather-container">
        <h1 class="weather-title">WeatherWitch</h1>
        <div class="search-container">
          <input type="text" id="searchInput" placeholder="Masukkan lokasi anda disini..." tabindex="0">
          <button id="searchButton" tabindex="0">Cari</button>
        </div>
        <div class="weather-list" id="weather-list" tabindex="-1"></div>
        <div id="loading" class="loading-spinner" style="display:none;"></div>
      </div>
    `;
  },

  async afterRender() {
    // buat nambahin feature besok
  },
};

export default WeatherWitch;
