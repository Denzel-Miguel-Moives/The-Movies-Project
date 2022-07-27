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
        <a href="/movies" data-id="${props.movies[i].id}">Edit</a>
        <button class="delete-btn" data-id="${props.movies[i].id}">Delete</button>
        </td>
        </tr>
        `;
    }
    html+= `
   </table>
  
`;

    return  html

}


export function HomeEvents() {

    let deleteBtn = document.getElementsByClassName('delete-btn');
    for (let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener('click', deleteMovie)


    }

}

function  deleteMovie() {
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

    // const user = getUser();
    // if(!user) {
    //     showNotification('Welcome', 'secondary')
    // } else {
    //     showNotification('Welcome' + user.userName, 'info')
    // }
