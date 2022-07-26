import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    console.log(props);

    let html = `
    <h1>Movies</h1>
    <table id="my-quotes " class="table  table-striped"> `;

    //add a table row for each table element
    for (let i = 0; i < props.movies.length; i++) {
        html += `
        <tr>
        <td>
        "${props.movies[i].title}"  
       
</td>
</tr>
 <tr>
        <td>
      
       
</td>
</tr>

        `
    }
    html+= `
   </table>
  
`;

    return  html

}

export function HomeEvents() {
    // // TODO: use an enum for message type
    // // const authority = getUserRole();
    // const user = getUser();
    // if(!user) {
    //     showNotification("Welcome visitor", "secondary");
    // } else {
    //     showNotification("Welcome " + user.userName, "info");
    // }

}