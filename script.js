const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search")
const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    const card = `
        <div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="Akshat Sharma">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong></li>
                    <li>${data.following}<strong>Following</strong></li>
                    <li>${data.public_repos}<strong>Repositories</strong></li>
                </ul>

                <div id="repos">
                  
                </div>
            </div>
        </div>
    `
    main.innerHTML = card;
    getRepos(username)
}


// first call
getUser("1axat")
