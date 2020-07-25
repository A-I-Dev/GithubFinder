class Github {
    constructor() {
        this.client_id = '115f68acecf4043979e6';
        this.client_secret = '435f830b3e17f210cd93331fa1403c6ec19d1c91';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const 
            profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`),
            repoResponse = await fetch(`https://api.github.com/users/${user}/repos?repos_per_page=${this.repos_count}&sort=${this.repos_count.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`),
            profileData = await profileResponse.json(),
            reposData = await repoResponse.json()
        ;
        return {
            profileData,
            reposData
        };
    }
}