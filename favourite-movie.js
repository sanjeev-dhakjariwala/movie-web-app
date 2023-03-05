const result = document.getElementById("result");

// Render the initial movie list
renderMovies();

function renderMovies() {
  // Create an empty string to hold the HTML
  let htmlStr = "";
  let movieData = JSON.parse(localStorage.getItem("movieData"));

  if (!movieData) {
    console.log(`NO MOVIES`);
    result.innerHTML = `<div class="my-auto ml-4"><p class="text-2xl font-bold mt-2 text-white">No Movies found</p></div>`;
  } else {
    // Loop through the movie data and add the HTML for each movie
    movieData.forEach((movie, index) => {
      htmlStr += `
    <div
    class="mx-auto w-full h-full lg:w-80 lg:h-112 border rounded-lg overflow-hidden shadow-md bg-white"
    >
      <!-- Adding movie Image -->
      <img
        class="w-full h-40"
        src="${movie.Poster}"
        alt="Placeholder image"
      />
    <div class="px-4 py-2 delete-button" data-index="${index}">
      <div class="flex flex-row relative">
        <!-- Adding Movie Title and Year-->
        <h2 class="text-lg font-bold text-black">${movie.Title}(${movie.Year})</h2>
        <img class="mx-4" src="./media/trash.svg" alt="heart" />
        <div
        class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-pink-900 opacity-0 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
        >
        <p class="">Delete from favorite</p>
      </div>
    </div>
      <!-- Adding Movie Plot-->
      <p class="text-black"> ${movie.Plot} </p>
  </div>
  </div>
    `;
    });

    // Add the HTML to the page
    result.innerHTML = htmlStr;

    // Add event listeners for the delete buttons
    document.querySelectorAll(".delete-button").forEach((button) => {
      button.addEventListener("click", () => {
        // Get the index of the movie to delete
        const index = button.dataset.index;
        alert(`Are you sure you want to delete the movie?`);
        // Remove the movie from the movieData array
        movieData.splice(index, 1);

        // Save the updated movie data to local storage
        localStorage.setItem("movieData", JSON.stringify(movieData));

        // Check if there are any movies left
        if (movieData.length === 0) {
          // If there are no movies left, clear the HTML
          result.innerHTML = "";
        } else {
          // Otherwise, re-render the movie list
          renderMovies();
        }
      });
    });
  }
}
