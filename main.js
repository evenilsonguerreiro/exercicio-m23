document.addEventListener('DOMContentLoaded',function(){
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const sobrename = document.querySelector('.profile-username');
    const link = document.querySelector('.profile-link');
    const folloWing = document.querySelector('#following');
    const folloWers = document.querySelector('#followers');
    const reposElement = document.querySelector('#repos');
    
   
    
    
    



    fetch('https://api.github.com/users/evenilsonguerreiro')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            sobrename.innerText = json.login;
            link.href = json.html_url;
            folloWing.innerText = json.following;
            folloWers.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            
            
                
        })

})
   

