import {isLoggedIn} from "../../auth.js";

export default function Navbar(props) {
    const loggedIn = isLoggedIn();

    // everyone can see home
    let html = `
        <nav class="navbar navbar-expand-lg bg-dark justify-content-center">
            <a class="jalopy-nav" href="/" data-link>Home</a>`;

    // everyone can see add movie
    html = html + `<a class="jalopy-nav" href="/movies" data-link>Add Movie</a>`;


    // only logged in can see user info and logout
    // if(loggedIn) {
    //     html = html + `<a class="jalopy-nav" href="/users" data-link>User Info</a>
    //         <a href="/logout" data-link>Logout</a>`;
    // } else {
    //     // if not logged in, can see login and register
    //     html = html + `<a class="jalopy-nav" href="/login" data-link>Login</a>
    //     <a class="jalopy-nav" href="/register" data-link>Register</a>`;
    // }


    html = html + `</nav>`;
    return html;
}