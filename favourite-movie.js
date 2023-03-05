let movieData = JSON.parse(localStorage.getItem("movieData"));
const result = document.getElementById("result");
console.log(`<<<<MOVIE DATA`);
console.log(movieData);

// Render the initial movie list
renderMovies();

function renderMovies() {
  let str = ``;
  movieData.forEach((movie, index) => {
    str =
      str +
      `<div
          class="mx-auto w-full h-full lg:w-80 lg:h-112 border rounded-lg overflow-hidden shadow-md bg-white"
        >
          <img
            class="w-full h-40"
            src="${movie.Poster}"
            alt="Placeholder image"
          />
          <div class="px-4 py-2 delete-button" data-index="${index}">
            <div class="flex flex-row relative">
              <h2 class="text-lg font-bold text-black">${movie.Title}(${movie.Year})</h2>
              <img class="mx-4" src="./media/trash.svg" alt="heart" />
              <div
              class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-pink-900 opacity-0 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
              >
              <p class="">Delete from favorite</p>
          </div>
        </div>
            <p class="text-black"> ${movie.Plot} </p>
        </div>
        
        </div>`;
  });

  if (str !== "") {
    result.innerHTML = str;
  } else {
    searchResult.insertAdjacentHTML(
      "beforeend",
      `<p class="text-center text-white text-2xl">No Movies found</p>`
    );
  }
  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the movie at the clicked index from the movie data array
      const index = button.dataset.index;
      alert("Are you sure you want to delete?");
      movieData.splice(index, 1);

      // Save the updated movie data to local storage
      localStorage.setItem("movieData", JSON.stringify(movieData));

      // Re-render the movie list
      renderMovies();
    });
  });
}
