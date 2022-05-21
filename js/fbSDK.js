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
      FB.api(EAAKavZAmtyBYBAH8N4ytinqsgavzZALWOnxEZATBIMib9Cgq29vXOF8Vh8b1kxWkZBkD3ZAzO96hI8bTSpWv8fDCbuePK326P0g9dCZAkdeW2R9T8sGfsJFzqvWxqfIjTwKRq5Dsf00Ww31fe3ZAjk19uEbSZA8gGU6GYFVSjdiNpLaImqwI2dUN9ETu3dB7yEKez9YfMw6s0WGY97sAKZCbooV7FrWHqU2oZD, {fields: 'last_name'}, function(response) {
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
