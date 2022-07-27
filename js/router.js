import Home, {HomeEvents} from "./views/Home.js";
import InsertMovie, {InsertMovieEvents} from "./views/Add New Movie.js";
import EditMovie, {EditMovieEvents} from "./views/EditMovies.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";


/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {
                movies: {
                    url: "https://vanilla-ringed-winterberry.glitch.me/movies",
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            },
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/movies': {
            returnView: InsertMovie,
            state: {
                movies: {
                    url: "https://vanilla-ringed-winterberry.glitch.me/movies",
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            },
            uri: '/insert-movie',
            title: 'Insert Movie',
            viewEvent: InsertMovieEvents
        },
        '/editMovies': {
            returnView: EditMovie,
            state: {
                movies: {
                    url: "https://vanilla-ringed-winterberry.glitch.me/movies",
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            },
            uri: '/edit-movie',
            title: 'Edit Movie',
            viewEvent: EditMovieEvents
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: UserIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: UserEvents
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}