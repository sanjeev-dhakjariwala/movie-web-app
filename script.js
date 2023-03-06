//Search Input
const searchInput = document.getElementById("movieName");
const searchResult = document.getElementById("result");
const searchBtn = document.getElementById("searchMovieBtn");

//api key
const apiKey = "9a1b027b";

//Stores the info of the movie fetched from the API
let movie = {};
//Stores the previous favourite movies in an array from local storage
const prevFavMovie = JSON.parse(localStorage.getItem("movieData"));
//Stores the current fav which will be added
let favMovie = [];
if (prevFavMovie?.length >= 1) {
  favMovie.push(...prevFavMovie);
}

const searchMovie = () => {
  const searchWord = searchInput.value;
  let url = `https://www.omdbapi.com/?t=${searchWord}&apikey=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Clear the previous search results
      searchResult.innerHTML = "";
      movie = data;
      // Render the new search results
      if (!movie.Error) {
        //display the Movie card according to the result
        const movieCard = `
        <div
        class="mx-auto w-full h-full lg:w-80 lg:h-112 border rounded-lg overflow-hidden shadow-md bg-white"
      >
        <img
          class="w-full h-40"
          src="${movie.Poster}"
          alt="Placeholder image"
        />
        <div class="px-4 py-2">
          <div class="flex flex-row relative mb-2" id="addFav">
            <h2 class="font-bold text-black text-2xl ">${movie.Title}(${movie.Year})</h2>
            <img class="mx-4" src="./media/heart.svg" alt="heart" />
            <div
            class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-pink-900 opacity-0 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
            >
            <p class="font-bold ">Add to favorite</p>
        </div>
      </div>
          <p class="text-black"> ${movie.Plot} </p>
      </div>
        <div class="flex justify-center mb-3">
          <a href="movie-details.html">
            <button class="hover:btnBg text-white font-bold py-2 px-4 rounded btnBg">
            More Info
            </button>
          </a>
        </div>
      </div>
      `;
        localStorage.setItem("movie", JSON.stringify(movie));
        searchWord !== ""
          ? searchResult.insertAdjacentHTML("beforeend", movieCard)
          : "";
        //getting the favourite div to perform the necessary options
        const addFav = document.getElementById("addFav");
        //adding the click function for favourite div
        const addFavClick = () => {

          const isPresent = favMovie.some(
            (obj) => JSON.stringify(obj) === JSON.stringify(movie)
          );

          if (isPresent) {
            alert("Movie already exists!!");
          } else {
            favMovie.push(movie);
            alert("Added to Favorites");
          }
          localStorage.setItem("movieData", JSON.stringify(favMovie));
        };
        addFav.addEventListener("click", addFavClick);
      } else {
        searchResult.insertAdjacentHTML(
          "beforeend",
          `<p class="text-center text-white text-2xl">No Movies found</p>`
        );
      }
    })
    .catch((error) => console.log(error));
};
//adding click event listener to the search movie button
searchBtn.addEventListener("click", searchMovie);
//adding input event listener to the input element
searchInput.addEventListener("input", searchMovie);
