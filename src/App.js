import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {user,loginWithRedirect,isAuthenticated,logout}=useAuth0()
  console.log("current user",user)
  const login_with_Redirect=()=>{
    loginWithRedirect()
  }
  return (
    <div className="App">
      <h1>auth with auth0</h1>
     {  isAuthenticated && <h2>Hello {user.name}</h2>}
      {
        isAuthenticated?<button onClick={(e)=>{logout()}}>LogOut</button>:  <button onClick={login_with_Redirect}>login_with_Redirect</button>
      }
    
    </div>
  );
}

export default App;
