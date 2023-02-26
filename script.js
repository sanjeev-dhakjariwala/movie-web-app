//Search Input
const searchInput = document.getElementById("movieName");
const searchResult = document.getElementById("result");

const apiKey = "9a1b027b";

searchInput.addEventListener("input", () => {
  const searchWord = searchInput.value;
  let url = `http://www.omdbapi.com/?t=${searchWord}&apikey=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Clear the previous search results
      searchResult.innerHTML = "";
      const movie = data;
      // Render the new search results
      if (!movie.Error) {
        const movieCard = `
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div class="bg-gray-500 rounded-lg shadow-lg">
            <img class="w-full h-64" src="${movie.Poster}" alt="${movie.Title}">
            <div class="p-4">
              <h2 class="text-white font-bold text-xl mb-2">${movie.Title}(${movie.Year})</h2>
              <p class="text-white">${movie.Plot}</p>
            </div>
          </div>
        </div>
      `;
        searchWord !== ""
          ? searchResult.insertAdjacentHTML("beforeend", movieCard)
          : "";
      }
    })
    .catch((error) => console.log(error));
});
