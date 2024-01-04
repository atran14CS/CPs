/*
 * Name: Akira Tran
 *
 * This is the JavaScript portion for the movies.html the purpose for this script
 * is to generate a random movie when #button is click and add movie title with their
 * rating when #list-btn is clicked.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * main function controls which button assoicates to which call back function upon
   * click.
   */
  function init() {
    let button = qs('#button');
    button.addEventListener("click", generateRandMov);
    let listButton = qs('#list-btn');
    listButton.addEventListener("click", createMovieList);
  }

  /**
   * generate random movie from movieTitles by picking a random number
   * Then change the current image to new movie title image.
   */
  function generateRandMov() {
    const movieTitles = ["god-father.jpg", "pulb-fiction.jpg", "shawshank.jpg",
    "dark-knight-rises.jpeg", "john-wick-2.jpg"];
    let randomIndex = Math.floor(Math.random() * movieTitles.length);
    let randomMovie = movieTitles[randomIndex];
    let changeImage = id("movie-box");
    changeImage.src = "random-movies/" + randomMovie;
    changeImage.classList.toggle("dashed");
  }

  /**
   * Takes user input of their favorite movie and the rating and adds it to a list
   */
  function createMovieList() {
    let newMovie = gen("li");
    newMovie.classList.add("movie-item");
    let movieTitle = id("movie-title").value;
    let movieRating = id("rating").value;
    newMovie.textContent = movieTitle + " " + movieRating;
    id("movie-list").appendChild(newMovie);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

})();
