document.addEventListener('DOMContentLoaded',function(){
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const sobrename = document.querySelector('.profile-username');
    const link = document.querySelector('.profile-link');
    const numeros = document.querySelector('.numbers')
    const numerosItem = document.querySelector('.numbers-item')
    
    



    fetch('https://api.github.com/users/evenilsonguerreiro')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            sobrename.innerText = json.login;
            link.href = json.html_url;
            numerosItem.innerText = json.public_repos;
            
            
            
            
            
            
            
            
        })

})
   

