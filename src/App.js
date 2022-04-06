import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user,setUser] =useState({});

  const googleProvider =new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const heandleGooglesignIn = () =>{
    signInWithPopup(auth,googleProvider)
    .then(result =>{
      const user =result.user;
      setUser(user);
      console.log(user);
    }).catch(error =>{
      console.log(error);
    })
  }
  const heandelGithubSignIn =() =>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
      const user =result.user;
      setUser(user);
      console.log(user);
    }).catch(error =>{
      console.error(error);
    })
  }
  const heandelSignOut = () =>{
    signOut(auth)
    .then(() =>{
      setUser({})
    }).catch(() =>{
      setUser({})
    })

  }
  return (
    <div className="App">
      {
        user.email ? <button onClick={heandelSignOut}>SignOut</button> 
       :<>
       <button onClick={heandleGooglesignIn}>Google Sign In</button>
       <button onClick={heandelGithubSignIn}>Github Sign In</button>
       </>
      }

      <h2>Name :{user.displayName}</h2>
      <p>{user.email}</p>
      <img src={user.photoUrl} alt="" />
    </div>
  );
}

export default App;
