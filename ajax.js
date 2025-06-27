
document.addEventListener("DOMContentLoaded", ()=>{
    alert("Carregou!!!")

    // const tag = document.querySelector("h4").
    
    // console.log(tag)

    fetch("https://api.github.com/users/nilson-nascimento") 
        .then(function(answer){
            // console.log(answer.json(), "Fetch Funcionou")
            return answer.json()
        })
        .then(function(data){
            // const name = data.name

            document.querySelector(".profile-name").innerHTML = data.name
            document.querySelector(".profile-avatar").src = data.avatar_url
            document.querySelector(".profile-username").innerHTML = data.login
            document.querySelector(".profile-bio").innerHTML = data.bio
            document.querySelector("#repos").innerHTML = data.public_repos
            document.querySelector("#followers").innerHTML = data.followers
            document.querySelector("#following").innerHTML = data.following
            document.querySelector(".profile-link").href = data.html_url
        })

})