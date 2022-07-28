import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";
import createView from "../createView.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    console.log(props);

    let html = `
   <div class="container">

      <!--
        - Movie of the month
      -->
      <section class="banner">
        <div class="banner-card">

          <img src="../assets/John_Wick.jpeg" class="banner-img" alt="">

          <div class="card-content">
          <h3> Movie of the month: </h3>
           <hr> 
           <h2 class="card-title">John Wick: Chapter 3 - Parabellum</h2>
                 
            <div class="card-info">
            

              <div class="genre">
                <ion-icon name="film"></ion-icon>
                 
                <span>Action/Thriller</span>
              </div>

              <div class="year">
                <ion-icon name="calendar"></ion-icon>
                <span>2019</span>
              </div>

              <div class="duration">
                <ion-icon name="time"></ion-icon>
                <span>2h 11m</span>
              </div>

              <div class="quality">4K</div>

            </div>

           
          </div>

        </div>
      </section>
<!--      Title for the movie listing -->
     <h1><em>Top Box Office</em></h1>
 `;
let imagePath = [
    "assets/Hulk.jpeg",
    "assets/Spiderman.jpeg",
    "assets/Pulp_Fiction.jpeg",
    "assets/BruceLee.jpeg",
    "assets/The_Dark_Knight.jpeg",
    "assets/GodFarther.jpeg",
    "assets/StarWars.jpeg",
    "assets/ForrestGump.jpeg",
    "assets/Titanic.jpeg",
    "assets/ComingSoon.jpeg",
    "assets/ComingSoon.jpeg",
    "assets/ComingSoon.jpeg",
    "assets/ComingSoon.jpeg",
    "assets/ComingSoon.jpeg",
    "assets/ComingSoon.jpeg",
    "assets/ComingSoon.jpeg",
    "assets/ComingSoon.jpeg",



]



    //add a table row for each table element
    for (let i = 0; i < props.movies.length; i++) {



        html += `
        <!--
          Movie section 
        -->

        <div class="flex-grid">

          <div class="movie-card">

            <div class="card-head">
              <img src="${imagePath[i]}" width="1px" height="em" class="card-img">

              <div class="card-overlay">

                <div class="bookmark">
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="rating">
                  <ion-icon name="star-outline"></ion-icon>
                  <span>${props.movies[i].rating}</span>
                </div>

                <div class="play">
                  <ion-icon name="play-circle-outline"></ion-icon>
                </div>

              </div>
            </div>

            <div class="card-body">
              <h3 class="card-title"style="color:rgb(138, 0, 252);" >${props.movies[i].title}</h3>
                <button class="edit-btn" data-id="${props.movies[i].id}">Edit</button>
                <button class="delete-btn" data-id="${props.movies[i].id}">Delete</button>
              <div class="card-info">
                <span class="genre" style="color:rgb(138, 0, 252);"> ${props.movies[i].genre}</span>
                
              </div>
            </div>
            <!--end of card  -->
          </div>
        </div>
            `;
    }
    html+= `
   </div>
  

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


