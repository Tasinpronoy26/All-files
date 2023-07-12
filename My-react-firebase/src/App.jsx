import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



function App() {

  const [userId, setUserId] = useState(null);

  const handleGoogleLogIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(result => {

        const user = result.user;
        console.log(user);
        setUserId(user)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGoogleLogOut = () => {

    signOut(auth, googleProvider)
      .then(() => {

        setUserId(null);

      }).catch((error) => {

        console.log(error)
      });

  }


  return (
    <>

      {userId ? <button onClick={handleGoogleLogOut}>Log out</button> :
      <button onClick={handleGoogleLogIn}>Log in</button>}

      {userId && <div>

        <h1>Name : {userId.displayName}</h1>
        <p>Email : {userId.email}</p>
        <img src={userId.photoURL} alt="" />



      </div>}

    </>
  )
}



export default App

