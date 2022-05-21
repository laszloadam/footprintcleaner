window.fbAsyncInit = function () {
    FB.init({
        appId: '733089071220758',
        cookie: true,
        xfbml: true,
        version: 'v13.2'
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
      FB.api(733089071220758|KXAietZhYI6z9CmCWVq_ifluIGI, {fields: 'last_name'}, function(response) {
        console.log(response);
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
