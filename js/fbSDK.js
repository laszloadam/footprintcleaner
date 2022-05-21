window.fbAsyncInit = function () {
    FB.init({
        appId: '547964330254908',
        cookie: true,
        xfbml: true,
        version: 'v13.0',
        "scopes":[
          "pages_show_list",
          "public_profile"
        ],
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
    if(response.status === 'connected'){
      console.log('Logged in and authenticated');

      FB.api("/me?fields=name,public_profile", function(response) {
        let datas = document.getElementById('datas')
        datas.innerHTML = `<p>Name: ${response.name}</p><p>Email: ${response.email}</p>`
      });
      
    } else {
      console.log('Not authenticated');
    }
  }

  
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function logout() {
    Fb.logout()
  }