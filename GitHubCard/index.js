import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//const axios = require('axios');

axios.get("https://api.github.com/users/cyasmani")
  .then(response => {
    const maindiv = document.querySelector(".cards");
    const divider1 = document.querySelector(".card");
    
    
    maindiv.appendChild(myself(response.data));
   
    
    

  }) .catch(err => {

    console.log("error displayed", err);


  })



/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function myself(data) {

  //created elements
  const divider1 = document.createElement("div");
  const image1 = document.createElement("img");
  const divider2 = document.createElement("div");
  const header3 = document.createElement("h3");
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p")
  const paragraph3 = document.createElement("p")
  const anchor = document.createElement("a");
  const paragraph4 = document.createElement("p");
  const paragraph5 = document.createElement("p");
  const paragraph6 = document.createElement("p");

  const maindiv = document.querySelector(".cards")

  //added classes to elements
  divider1.classList.add("card");
  divider2.classList.add("card-info");
  header3.classList.add("name");
  paragraph1.classList.add("username");

  //appended elements
  maindiv.appendChild(divider1);
  divider1.appendChild(image1);
  divider1.appendChild(divider2);
  divider2.appendChild(header3);
  divider2.appendChild(paragraph1);
  divider2.appendChild(paragraph2);
  divider2.appendChild(paragraph3);
  paragraph3.appendChild(anchor);
  divider2.appendChild(paragraph4);
  divider2.appendChild(paragraph5);
  divider2.appendChild(paragraph6);

  image1.setAttribute("src", `${data.avatar_url}`);
  header3.textContent = data.name;
  paragraph1.textContent = data.login;
  paragraph2.textContent = data.location;
  paragraph3.textContent = "Profile:";
  anchor.textContent = data.url;
  paragraph4.textContent = data.followers;
  paragraph5.textContent = data.following;
  paragraph6.textContent = `Bio: ${data.bio}`

  return myself;
  




}

//console.log(myself(information))

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
