(() => {
    const 
        searchUser = document.getElementById('searchUser'),
        github = new Github,
        ui = new UI
    ;

    searchUser.addEventListener('keyup', (e) => {
        const userText = e.target.value;

        if(userText !== ''){
            github.getUser(userText)
                .then(data => {
                    if(data.profileData.message === 'Not Found') {
                        ui.showAlert('User not found!', 'alert alert-danger');
                        ui.clearProfile();
                    }
                    else {
                        ui.clearProfile();
                        ui.showProfile(data.profileData);
                        ui.showRepos(data.reposData);
                    }
                });
        }
        else {
            ui.clearProfile();
        }
    })
})()