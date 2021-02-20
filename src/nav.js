import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
function Nav() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    if(isTabletOrMobile){
        return(
            <div className="entrence">
                <div className="mobil_align">
                    <Link to={"/Python"}>
                        <div className="boxs">
                            <img src="./img/Aılogs_python.png" alt="" srcset=""/>
                        </div>
                    </Link>
                    
                        <div className="boxs"><Link to={"./AiMlSummit"}>
                            <img src="./img/Aılogs_summit.png" alt="" srcset=""/> </Link>
                        </div>
                   
                    <Link to={"./Tensorflow"}>
                        <div className="boxs">
                            <img src="./img/aılogs_tensor.png" alt="" srcset=""/>
                        </div>
                    </Link>
                </div>
                <div className="logo">
                    <img src="./img/aılogs_logo.png" alt=""/>
                </div>
                <div className="mobile_top">
                    <img src="./img/aılogs_logo.png" alt=""/>
                </div>
            </div>
        )
    }else{
        return (
            <div className={"entrence"}>
                <div className="align">
    
                    <div className="boxs">
                        <div className="box1">
                            <img src="./img/Aılogs_python.png" alt="" srcset=""/>
                        </div>
                        <div className="box2 bg_yellow bs_yellow">
                            <h1>Katılımcılarımıza sıfırdan, Python temelleri ve önemli kütüphanelerden öğretmeyi amaçlıyoruz</h1>
                            <Link to={"./Python"}><h4>Daha fazlası</h4></Link>
                        </div>
                    </div>
    
                    <div className="boxs">
                        <div className="box1">
                            <img src="./img/Aılogs_summit.png" alt="" srcset=""/>
                        </div>
                        <div className="box2 bg_green bs_green">
                            <h1>Katılımcılarımıza yapay zeka ve makine öğrenmesinin mantığını ve işleyişini öğretmeyi amaçlıyoruz.</h1>
                            <Link to={"./AiMlSummit"}><h4>Daha fazlası</h4></Link>
                        </div>
                    </div>
    
                    <div className="boxs">
                        <div className="box1 bg_orange">
                            <img src="./img/aılogs_tensor.png" alt="" srcset=""/>
                        </div>
                        <div className="box2 bg_orange bs_orange">
                            <h1>Katılımcılarımızın AI & ML dünyasına giriş yapmasını ve belirli bir yeterliliğe ulaşmasını amaçlıyoruz.</h1>
                            <Link to={"./Tensorflow"}><h4>Daha fazlası</h4></Link>
                        </div>
                    </div>
    
                </div>
            
                <div className="logo">
                    <img src="./img/aılogs_logo.png" alt=""/>
                </div>
                <div className="top">
                    <img src="./img/aılogs_logo.png" alt=""/>
                </div>
            </div>
        )
    }
}

export default Nav
