// Movie Detail Page: Load Data from URL Parameters
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);

    const title = urlParams.get('title') ? decodeURIComponent(urlParams.get('title')) : "Movie Title";
    const poster = urlParams.get('poster') ? decodeURIComponent(urlParams.get('poster')) : "../images/cinema.png";
    const genre = urlParams.get('genre') ? decodeURIComponent(urlParams.get('genre')) : "Feature Film";

    document.getElementById('detail-title').textContent = title;
    document.getElementById('detail-genre').innerHTML = `<strong>Genre:</strong> ${genre}`;
    document.getElementById('detail-poster').src = poster;
    document.getElementById('detail-poster').alt = title;
    document.getElementById('detail-description').textContent =
        "Detailed information, synopsis, and cast overview for this movie will appear here. Enjoy exploring Flixora!";

    const addBtn = document.getElementById('detail-add-watchlist');
    addBtn.addEventListener('click', function () {
        let watchlist = JSON.parse(localStorage.getItem('flixora_watchlist')) || [];
        const exists = watchlist.some(movie => movie.title === title);

        if (!exists) {
            watchlist.push({ id: title, title: title, poster: poster, genre: genre, year: "2026" });
            localStorage.setItem('flixora_watchlist', JSON.stringify(watchlist));
            alert(`"${title}" added to your watchlist!`);
        } else {
            alert(`"${title}" is already in your watchlist!`);
        }
    });
});