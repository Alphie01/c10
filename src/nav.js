import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div className={"entrence"}>
            <div className="align">

                <div className="boxs">
                    <div className="box1">
                        
                    </div>
                    <div className="box2">
                        <h1>Katılımcılarımıza sıfırdan, Python temelleri ve önemli kütüphanelerden olan Numpy, Pandas ve Matplotlib'i öğretmeyi amaçlıyoruz</h1>
                        <Link></Link>
                    </div>
                </div>

                <div className="boxs">
                    <div className="box1">
                        
                    </div>
                    <div className="box2">
                        <h1>Katılımcılarımıza yapay zeka ve makine öğrenmesinin mantığını ve işleyişini öğretmeyi amaçlıyoruz.</h1>
                        <Link></Link>
                    </div>
                </div>

                <div className="boxs">
                    <div className="box1">
                        
                    </div>
                    <div className="box2">
                        <h1>Katılımcılarımızın AI & ML dünyasına giriş yapmasını ve belirli bir yeterliliğe ulaşmasını amaçlıyoruz.</h1>
                        <Link></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nav
