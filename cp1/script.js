function generateRandomMovie() {
    var movieTitles = ['The Godfather', 'Pulp Fiction', 'The Shawshank Redemption', 'The Dark Knight', 'Forrest Gump'];
    var randomIndex = Math.floor(Math.random() * movieTitles.length);
    var randomMovie = movieTitles[randomIndex];
    var movieTitleElement = document.getElementById('movie-title');
    movieTitleElement.textContent = randomMovie;
  }