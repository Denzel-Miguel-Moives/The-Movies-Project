import createView from "../createView.js"
import {showNotification} from "../messaging.js";


export default function EditMovie(props) {
    console.log(props);
    return `
        <form class="container">
            <h1>Edit Movie</h1>
            <form>
                <label for="movieInput" class="form-label">Movie</label>
                <input class="form-control" list="datalistOptions" id="movieI" placeholder="Enter Movie">

                <label for="ratingInput" class="form-label">Rating</label>
                <input class="form-control" list="datalistOptions" id="ratingI" placeholder="Enter Rating">

                <button class="form-control" id="edit-btn">Edit Movie</button>
            </form>
        </div>
`;
}


export function EditMovieEvents() {
    const editButton = document.querySelector("#edit-btn");
    editButton.addEventListener("click", editMovie);
}

function editMovie() {
    // 1. validate the data (movie and rating)
    const movieI = document.querySelector("#movieI");
    const movieT = movieI.value.trim();

    const ratingI = document.querySelector("#ratingI");
    let ratingT = ratingI.value.trim();

    if(movieT.length < 1) {
        showNotification("Please fill in Movie", "danger");
        return;
    }
    if(ratingT.length < 1) {
        ratingT = "Enter Rating";
    }

    const movieE = {
        title: movieT,
        rating: ratingT
    }


    const requestOptions = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movieE)
    }
    const dataID = this.getAttribute('data-id')
    fetch(`https://vanilla-ringed-winterberry.glitch.me/movies/${dataID}`, requestOptions)
        .then(function(response) {
            if(!response.ok) {
                console.log("edit movie error: " + response.status);
            } else {
                console.log("edit movie ok");
                createView("/");
            }
        });

}