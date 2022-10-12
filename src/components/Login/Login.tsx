import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import login from "../../assets/login.jpg";
import styles from "./Login.module.css";
import config from "../../config";
import { AiFillFacebook } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";

function Login(){
    const auth = getAuth(config);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("This user is successfully signed in")
        navigate("/home")
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
    });
    }

    return (
        <>
        <div className={styles["background-img"]}>
            <div className={styles["inner-container"]}>
                <h2 className={styles["title"]}>Paradise</h2>
            {/* <img className="bg-[url('../assets/login.jpg')]" src={login}/> */}
                <p className="font-primary font-bold text-[16px] leading-8">Welcome back fashionista</p>
                <input className={styles["input"]} type={"email"} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input className={styles["input"]} type={"password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button className={styles["button"]} onClick={signIn}>SIGN IN</button>
                <br />
                <div className={styles["button-1"]}>
                <div>FACEBOOK</div>
                <AiFillFacebook />
                </div>
                <div className={styles["button-2"]}>
                <div>TWITTER</div>
                <RiTwitterLine />
                </div>
            </div>
        </div>
        </>
    );
}

export default Login; 