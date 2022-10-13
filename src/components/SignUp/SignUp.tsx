import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../AuthContext/AuthContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import config from "../../config";
import styles from "./SignUp.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";

type Inputs = {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

function SignUp() {
    const auth = getAuth(config);
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const value = useContext(UserContext);

    function signUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("The user was successfully created")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // ..
                alert(errorCode);
            });
    }

    useEffect(() => {
        if (value.user) {
            navigate("/home")
        }
    })

    return (
        <div className={styles["background-img"]}>
        <div className={styles["inner-container"]}>
            <h1 className={styles["title"]}>JOIN US!</h1>
            <input className={styles["input"]} type={"email"} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
            <input className={styles["input"]} type={"password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
            <button className={styles["button"]} onClick={signUp}>SIGN UP</button>
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
    )
}

export default SignUp; 