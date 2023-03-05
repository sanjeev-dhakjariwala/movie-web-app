let movieDetails = JSON.parse(localStorage.getItem("movie"));
const result = document.getElementById("result");

let res = `
<div
class="mt-24 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
>
<div class="md:flex">
  <div class="md:flex-shrink-0">
    <img
      class="h-48 w-full md:h-full md:w-48"
      src="${movieDetails.Poster}"
      alt="card image"
    />
  </div>
  <div class="p-8">
    <div class="uppercase tracking-wide text-4xl text-black font-bold">
      ${movieDetails.Title}
    </div>
    <div class="flex items-center">
      <p class="font-bold">${movieDetails.imdbRating}</p>
      <img
        class="w-4 h-4 ml-2"
        src="./media/star-icon.svg"
        alt="star"
      />
    </div>
    <div class="flex items-center mt-4">
      <p class="font-bold mr-2">${movieDetails.Rated}</p>
      <p class="font-bold mr-2">${movieDetails.Year}</p>
      <p class="font-bold mr-2">${movieDetails.Runtime}</p>
    </div>
    <div class="flex items-center mt-4">
      <p class="font-bold mr-2">${movieDetails.Genre}</p>
    </div>
    <p class="mt-2 text-lg font-bold">Cast:</p>
    <p class="text-black">
      ${movieDetails.Actors}
    </p>
    <p class="mt-2 text-lg font-bold">Director:</p>
    <p class="text-black">${movieDetails.Director}</p>
    <p class="mt-2 text-lg font-bold">Plot:</p>
    <p class="text-black">
      ${movieDetails.Plot}
    </p>
  </div>
</div>
</div>
`;

result.innerHTML = res;
