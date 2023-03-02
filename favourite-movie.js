let movieData = JSON.parse(localStorage.getItem("movieData"));
const result = document.getElementById("result");
console.log(`<<<<MOVIE DATA`);
console.log(movieData);

let str = ``;
movieData.forEach((movie) => {
  str =
    str +
    `<div
        class="mx-auto w-full h-full lg:w-80 lg:h-112 border rounded-lg overflow-hidden shadow-md bg-gray-500"
      >
        <img
          class="w-full h-40"
          src="${movie.Poster}"
          alt="Placeholder image"
        />
        <div class="px-4 py-2">
          <div class="flex flex-row relative" id=${movie.imdbID}>
            <h2 class="text-lg font-bold">${movie.Title}(${movie.Year})</h2>
            <img class="mx-4" src="./media/trash.svg" alt="heart" />
            <div
            class="absolute inset-0 flex items-center justify-center text-white font-bold text-xl bg-pink-900 opacity-0 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
            >
            <p>Delete from favorite</p>
        </div>
      </div>
          <p> ${movie.Plot} </p>
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
