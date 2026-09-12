document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('watchlist-container');
    const genreSelect = document.getElementById('watchlist-genre-select');

    if (!container) return;

    function renderWatchlist(selectedGenre = "") {
        let watchlist = JSON.parse(localStorage.getItem('flixora_watchlist')) || [];
        container.innerHTML = '';

        // Filtreleme işlemi
        const filteredList = selectedGenre 
            ? watchlist.filter(movie => movie.genre === selectedGenre) 
            : watchlist;

        if (filteredList.length > 0) {
            filteredList.forEach((movie) => {
                const col = document.createElement('div');
                col.className = 'col-md-3 col-sm-6';
                col.innerHTML = `
                    <div class="card h-100 bg-dark text-white shadow-sm">
                        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}" style="height: 300px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text text-muted small">Genre: ${movie.genre}</p>
                            <div class="mt-auto d-flex justify-content-between align-items-center">
                                <a href="movie-detail.html?title=${encodeURIComponent(movie.title)}" class="btn btn-sm btn-outline-light">Details</a>
                                <button onclick="removeFromList('${movie.id}')" class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(col);
            });
        } else {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-muted" style="font-size: 1.1rem;">No movies found in this category.</p>
                    <a href="movies.html" class="btn btn-danger mt-2">Explore Movies</a>
                </div>
            `;
        }
    }

    // Sayfa ilk yüklendiğinde tüm listeyi getir
    renderWatchlist();

    // Select menüsü değiştiğinde filtrele
    if (genreSelect) {
        genreSelect.addEventListener('change', function () {
            renderWatchlist(this.value);
        });
    }
});

// Listeden Film Silme Fonksiyonu
function removeFromList(id) {
    let watchlist = JSON.parse(localStorage.getItem('flixora_watchlist')) || [];
    watchlist = watchlist.filter(movie => movie.id !== id);
    localStorage.setItem('flixora_watchlist', JSON.stringify(watchlist));
    location.reload();
}