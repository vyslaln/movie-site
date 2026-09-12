// Genre Filter
const genreSelect = document.getElementById('genre-select');
const movieItems = document.querySelectorAll('.movie-list li, .movie-grid li');
const sectionTitle = document.querySelector('.mlist-container .section-title');

genreSelect.addEventListener('change', function () {
    const selectedGenre = this.value;
    const selectedText = this.options[this.selectedIndex].text;

    movieItems.forEach(function (item) {
        if (selectedGenre === '' || item.getAttribute('data-genre') === selectedGenre) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });

    if (sectionTitle) {
        sectionTitle.textContent = selectedGenre === '' ? 'All Movies' : selectedText + ' Movies';
    }
});