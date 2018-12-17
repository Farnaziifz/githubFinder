const github = new Github 
const ui = new UI
const searchUser = document.getElementById('searchUser')

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value

  if(userText !== '') {
    // make http call 
    github.getUser(userText) 
      .then(data => {
        console.log(data)
        if(data.profile.message === 'Not Found') {
          // show alert
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // show profile
          ui.showProfile(data.profile)
        }
      })
  } else {
    // clear the profile
    ui.clearProfile()
  }
})