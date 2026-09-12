document.addEventListener('DOMContentLoaded', () => {
    // Arama Modalı İşlemleri
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const closeSearchModal = document.getElementById('close-search-modal');
    const movieSearchInput = document.getElementById('movie-search-input');
    const searchResultsContainer = document.getElementById('search-results');

    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', () => {
            searchModal.style.display = 'flex';
            setTimeout(() => movieSearchInput.focus(), 50);
        });

        const closeModalFn = () => {
            searchModal.style.display = 'none';
            movieSearchInput.value = '';
            searchResultsContainer.innerHTML = '';
        };

        closeSearchModal.addEventListener('click', closeModalFn);

        window.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                closeModalFn();
            }
        });
    }

    // Canlı Arama
    if (movieSearchInput) {
        movieSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResultsContainer.innerHTML = '';

            if (query === '') return;

            const movieItems = document.querySelectorAll('#movies-grid-container li');
            let matches = [];

            movieItems.forEach(item => {
                const title = item.getAttribute('data-title') || '';
                const poster = item.getAttribute('data-poster') || '';
                const link = item.querySelector('a')?.getAttribute('href') || '#';

                if (title.toLowerCase().includes(query)) {
                    matches.push({ title, poster, link });
                }
            });

            if (matches.length > 0) {
                matches.forEach(movie => {
                    const resultItem = document.createElement('a');
                    resultItem.href = movie.link;
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <img src="${movie.poster}" alt="${movie.title}">
                        <span>${movie.title}</span>
                    `;
                    searchResultsContainer.appendChild(resultItem);
                });
            } else {
                searchResultsContainer.innerHTML = '<p style="text-align: center; color: #888; padding: 15px; font-size: 14px;">No movies found.</p>';
            }
        });
    }

    // Çıkış (Log Out) İşlemi
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = 'login.html';
        });
    }
});