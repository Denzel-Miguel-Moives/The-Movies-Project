import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";
import createView from "../createView.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    console.log(props);

    let html = `
    <h1>Movies</h1>
    <table id="movies" class="table  table-striped"> `;

    //add a table row for each table element
    for (let i = 0; i < props.movies.length; i++) {
        html += `
        <tr>
        <td>
        ${props.movies[i].title}  ${props.movies[i].rating}
<!--        <a data-link href="/EditMovies.js">Edit</a>-->
        <button class="edit-btn" data-id="${props.movies[i].id}">Edit</button>
        <button class="delete-btn" data-id="${props.movies[i].id}">Delete</button>
        </td>
        </tr>
        `;
    }
    html+= `
   </table>
<!-- Edit Modal -->

<!-- /Modal -->
`;

    return  html

}


export function HomeEvents() {

    let deleteBtn = document.getElementsByClassName('delete-btn');
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', deleteMovie)
    }

    // let editBtn = document.getElementsByClassName('edit-btn');
    // for (let i = 0; i < editBtn.length; i++) {
    //     editBtn[i].addEventListener('click', editMovie)
    // }

}

    function deleteMovie() {
        const requestOptions = {
            method: "DELETE",
        }
        const dataID = this.getAttribute('data-id')
        fetch(`https://vanilla-ringed-winterberry.glitch.me/movies/${dataID}`, requestOptions)
            .then(function (response) {
                if (!response.ok) {
                    console.log("error: " + response.status);
                } else {
                    console.log("add ok");
                    createView("/");
                }
            });
    }
let editBtn = document.getElementsByClassName('edit-btn')
for (let i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener("click", function () {

        // let userMovieTitle = prompt("enter movie")
        let newMovie = ""

        // newMovie = userMovieTitle
        let editMovies = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: newMovie})
        }

        let dataID = props.movies[i].id;

        fetch(`https://vanilla-ringed-winterberry.glitch.me/movies/${dataID}`, editMovies)
            .then(function (response) {
                if (!response.ok) {
                    console.log("movie added error: " + response.status);
                } else {
                    console.log("movie updated");
                    createView('/');
                }
            });

    })
}


//     function editMovie() {
//         let userInput = prompt("Enter Movie name")
//         let newMovie = ""
//         newMovie = userInput
//     const requestOptions = {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newMovie)
//     }
//     const dataID = movies[0].id
//     fetch(`https://vanilla-ringed-winterberry.glitch.me/movies/${dataID}`, requestOptions)
//         .then(function (response) {
//             if (!response.ok) {
//                 console.log("error: " + response.status);
//             } else {
//                 console.log("add ok");
//                 createView("/");
//             }
//         });
//
// }


