// Handle adding movies to the local storage watchlist with duplicate prevention
document.addEventListener("DOMContentLoaded", function () {
    const addButtons = document.querySelectorAll('.add-watchlist-btn');

    addButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const li = this.closest('li');
            const title = li.getAttribute('data-title');
            const poster = li.getAttribute('data-poster');
            const genre = li.getAttribute('data-genre');

            let watchlist = JSON.parse(localStorage.getItem('flixora_watchlist')) || [];
            const exists = watchlist.some(movie => movie.title === title);

            if (!exists) {
                watchlist.push({ id: title, title: title, poster: poster, genre: genre, year: "2026" });
                localStorage.setItem('flixora_watchlist', JSON.stringify(watchlist));
                alert(`"${title}" added to your watchlist!`);
            } else {
                alert(`Error: "${title}" is already in your watchlist!`);
            }
        });
    });
});