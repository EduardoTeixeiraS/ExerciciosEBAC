$(document).ready(function() {
    fetch('https://api.github.com/users/EduardoTeixeiraS')
        .then(function(res) {
            return res.json()
        })
        .then(function(json) {
            $('#avatar').attr('src', json.avatar_url)
            $('#name').text(json.name)
            $('#username').text(json.login)
            $('#repos').text(json.public_repos)
            $('#followers').text(json.followers)
            $('#following').text(json.following)
            $('#link').attr('href', json.html_url)
        })
})