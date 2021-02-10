import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div className={"entrence"}>
            <div className="align">

                <div className="boxs">
                    <div className="box1">
                        <img src="./img/aılogs_python.png" alt="" srcset=""/>
                    </div>
                    <div className="box2">
                        <h1>Katılımcılarımıza sıfırdan, Python temelleri ve önemli kütüphanelerden olan Numpy, Pandas ve Matplotlib'i öğretmeyi amaçlıyoruz</h1>
                        <Link to={"./Python"}><h4>Daha fazlası</h4></Link>
                    </div>
                </div>

                <div className="boxs">
                    <div className="box1">
                        <img src="./img/aılogs_summit.png" alt="" srcset=""/>
                    </div>
                    <div className="box2">
                        <h1>Katılımcılarımıza yapay zeka ve makine öğrenmesinin mantığını ve işleyişini öğretmeyi amaçlıyoruz.</h1>
                        <Link to={"./AiSummit"}><h4>Daha fazlası</h4></Link>
                    </div>
                </div>

                <div className="boxs">
                    <div className="box1">
                        <img src="./img/aılogs_tensor.png" alt="" srcset=""/>
                    </div>
                    <div className="box2">
                        <h1>Katılımcılarımızın AI & ML dünyasına giriş yapmasını ve belirli bir yeterliliğe ulaşmasını amaçlıyoruz.</h1>
                        <Link to={"./Tensorflow"}><h4>Daha fazlası</h4></Link>
                    </div>
                </div>

            </div>
        
            <div className="logo">
                <img src="./img/aılogs_logo.png" alt=""/>
            </div>
        </div>
    )
}

export default Nav
