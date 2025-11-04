import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ULRDn3ZMWn1shouoH--MA8OJrFmK1aI", //TODO: Add your api key
  authDomain: "idp-clone.firebaseapp.com",
  projectId: "idp-clone",
  storageBucket: "idp-clone.firebasestorage.app",
  messagingSenderId: "704275243689",
  appId: "1:704275243689:web:2b7a906388961fc8c6ffb8",
  measurementId: "G-5P0N2Q3KQE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function SignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email, 
                password
            );
            const user = userCredential.user;

            await setDoc(doc(db, "Idp_Users", user.uid), {
                name: name,
                email: email,
                phone: phone,
                password: password,
            });

            navigate('/');
            
            setName('');
            setEmail('');
            setPhone('');
            setPassword('');

        } catch (error) {s
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <h2>Create an Account !</h2>
                
                <label>Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <label>Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <label>Phone</label>
                <input 
                    type="tel" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                />
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/pages/white-link/SignIN">Sign In</Link></p>
            </form>


        </div>
    );
}

export default SignupForm;