// import createView from "../createView.js"
//
// export default function InsertMovie(props) {
//     return `
// <form class="container">
//     <h1>Add Movie</h1>
//     <form>
//         <label for="movieText" class="form-label">Movie</label>
//         <input class="form-control" list="datalistOptions" id="dogFactText" placeholder="Enter a Movie">
//         <button class="form-control" id="insert-btn">Add Movie</button>
//     </form>
// </div>
// `;
// }
//
// export function InsertMovieEvents() {
//     const addButton = document.querySelector("#insert-btn");
//     addButton.addEventListener("click", addMovie);
// }
//
// function addMovie() {
//     const factInput = document.querySelector("#movieText");
//     const fact = factInput.value.trim();
//     if (fact.length < 1) {
//         console.log("Movie cannot be blank");
//         return;
//     }
//
//
//     const requestOptions = {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': DOG_QUOTE_API_KEY
//         },
//         body: JSON.stringify([fact])
//     }
//     fetch("https://vanilla-ringed-winterberry.glitch.me/movies", requestOptions)
//         .then(function (response) {
//             if(!response.ok) {
//                 console.log("add movie error: " + response.status);
//             } else {
//                 console.log("add movie ok");
//                 createView("/movie");
//             }
//         });
// }