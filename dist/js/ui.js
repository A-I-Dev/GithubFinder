class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        let profileHTML = 
        `
            <div id="profileContent">
                <div class='card card-body mb-3'>
                    <div class='row'>
                        <div class='col-md-3 mb-3'>
                            <img class='img-fluid mb-2' src='${user.avatar_url}'>
                            <a href='${user.html_url}' target='_blank' class='btn btn-primary btn-block'>View Profile</a>
                        </div>
                        <div class='col-md-9'>
                            <div class='mb-3'>
                                <span class='badge badge-primary'>Public Repos: ${user.public_repos}</span>
                                <span class='badge badge-secondary'>Public Gists: ${user.public_gists}</span>
                                <span class='badge badge-success'>Followers: ${user.followers}</span>
                                <span class='badge badge-info'>Following: ${user.following}</span>
                            </div>

                            <ul class='list-group'>
                                <li class='list-group-item'>Company: ${user.company}</li>
                                <li class='list-group-item'>Website: ${user.blog}</li>
                                <li class='list-group-item'>Location: ${user.location}</li>
                                <li class='list-group-item'>Member since: ${user.created_at}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 class='page-heading mb-3'>Latest Repos</h3>
                <div id='repos'></div>
            </div>
        `;

        this.profile.insertAdjacentHTML('beforeend', profileHTML);
    }

    showRepos(repos) {
        let output = '';
        repos.forEach(repo => {
            output += 
            `
                <div class='card card-body mb-2'>
                    <div class='row'>
                        <div class='col-md-6'>
                            <a href='${repo.html_url}' target='_blank'>${repo.name}</a>
                        </div>
                        <div class='col-md-6'>
                            <span class='badge badge-primary'>Stars: ${repo.stargazers_count}</span>
                            <span class='badge badge-secondary'>Watchers: ${repo.watchers_count}</span>
                            <span class='badge badge-success'>Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repos').insertAdjacentHTML('beforeend', output);
    }

    showAlert(message, className) {
        this.clearAlertMessage();
        const searchContainer = document.querySelector('.searchContainer');
        const alertMessage = `<div class='${className}'>${message}</div>`;
        searchContainer.insertAdjacentHTML('afterbegin', alertMessage);
        setTimeout(() => {
            this.clearAlertMessage();
        }, 1000);
    }

    clearAlertMessage() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) currentAlert.remove();
    };

    clearProfile() {
        const profileContent = document.getElementById('profileContent');
        if(profileContent) profileContent.remove();
    }
}