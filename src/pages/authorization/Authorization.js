import React, {useState} from "react";
import "./Authorization.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
//import {Link} from 'react-router-dom';

const Authorization = () => {
    const [iin, setIIN] = useState("");


    const handleIINChange = (e) => {
        const {name, value} = e.target;
        setIIN(value);
    };

    const handleCheck = () => {
        window.alert("Hello")
    };
    return(
        <>
        <Header />
        <div className = "authContainer">
            <div className = "authLeft">
                <div className = "authLeftMain">
                    <div className = "authLeftMainTop">
                         <label className = "authLeftTopL">Здравствуйте</label>
                    </div>
                    <div className = "authLeftMainRow">
                        <label className = "authLeftMainH">ИИН получателя</label>
                        <input className = "authLeftMainI" placeholder="Введите ваш ИИН" value = {iin} onChange = {handleIINChange}></input>
                    </div>
                    <button className = "authLeftMainButton" onClick = {handleCheck}>Авторизоваться</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Authorization