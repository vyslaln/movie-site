// Handle dynamic movie details loading based on URL parameters
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const movieTitleParam = urlParams.get('title');

    // Decode the title parameter from the URL
    const decodedTitle = movieTitleParam ? decodeURIComponent(movieTitleParam) : "Movie Title";

    // Comprehensive sample descriptions database based on keywords
    const movieDescriptions = {
        "John Wick": "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
        "The Shawshank Redemption": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
        "The Grand Budapest Hotel": "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
        "Interstellar": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft to find a new planet for humans."
    };

    // Find matching description or use a default one
    let description = "Detailed information, synopsis, and overview for this movie will appear here. Enjoy exploring Flixora!";
    for (let key in movieDescriptions) {
        if (decodedTitle.includes(key)) {
            description = movieDescriptions[key];
            break;
        }
    }

    // Guess genre and poster based on URL title or use defaults
    let posterPath = "../images/cinema.png";
    if (movieTitleParam) {
        // Map common titles to their respective images if available
        if (decodedTitle.includes("Shawshank")) posterPath = "../images/esaretin-bedeli.png";
        else if (decodedTitle.includes("John Wick")) posterPath = "../images/john-wick.png";
        else if (decodedTitle.includes("Budapest")) posterPath = "../images/budapeşte-hoteli.png";
        else if (decodedTitle.includes("Interstellar")) posterPath = "../images/interstellar.png";
        else {
            // Generic fallback or try to match filenames if possible
            posterPath = `../images/cinema.png`;
        }
    }

    // Update DOM elements with dynamic details
    document.getElementById('detail-title').textContent = decodedTitle;
    document.getElementById('detail-genre').innerHTML = `<strong>Genre:</strong> Feature Film`;
    if (posterPath !== "../images/cinema.png") {
        document.getElementById('detail-poster').src = posterPath;
    } else {
        // Fallback placeholder image or text styling
        document.getElementById('detail-poster').src = "../images/cinema.png";
    }
    document.getElementById('detail-poster').alt = decodedTitle;
    document.getElementById('detail-description').textContent = description;

    // Watchlist button action on detail page
    const addBtn = document.getElementById('detail-add-watchlist');
    addBtn.addEventListener('click', function () {
        let watchlist = JSON.parse(localStorage.getItem('flixora_watchlist')) || [];
        const exists = watchlist.some(movie => movie.title === decodedTitle);

        if (!exists) {
            watchlist.push({ 
                id: decodedTitle, 
                title: decodedTitle, 
                poster: posterPath, 
                genre: "Feature Film", 
                year: "2026" 
            });
            localStorage.setItem('flixora_watchlist', JSON.stringify(watchlist));
            alert(`"${decodedTitle}" added to your watchlist!`);
        } else {
            alert(`"${decodedTitle}" is already in your watchlist!`);
        }
    });
});