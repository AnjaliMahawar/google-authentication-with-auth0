import { gapi } from "gapi-script";
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
const clientId = "785585079773-vvtvbsh9g7kjd4jmotahqg1mq2f1laem.apps.googleusercontent.com";
function Login() {
   

  
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    }
    gapi.load('client:auth2', initClient);
  }, []);
  const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      setShowloginButton(true);
      setShowlogoutButton(false);
  };

  return (
      <div>
          { showloginButton ?
              <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign In"
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
              /> : null}

          { showlogoutButton ?
              <GoogleLogout
                  clientId={clientId}
                  buttonText="Sign Out"
                  onLogoutSuccess={onSignoutSuccess}
                  isSignedIn={false}
              >
              </GoogleLogout> : null
          }
      </div>
  );
}
export default Login;