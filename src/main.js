import React,{useState,useEffect} from 'react'
import './App.css';
import {useParams , Link} from 'react-router-dom';
import pages from './pages.json';
import {Container , Row , Col} from 'react-bootstrap'
function Main() {
    let { topicId } = useParams();
    const [Pagenum, setPagenum] = useState(0);
    const [Main, setMain] = useState(true);
    const [Konuşmacı, setKonuşmacı] = useState(false)
    const [Sponsor, setSponsor] = useState(false)
    const [Partner, setPartner] = useState(false)
    const [Contact, setContact] = useState(false)
    useEffect(() => {
        if(topicId==="Python"){
            setPagenum(0);
        }else if(topicId==="AiSummit"){
            setPagenum(1);
        }else if(topicId==="Tensorflow"){
            setPagenum(2);
        }else{
            setPagenum(404)
        }
        console.log(Pagenum)
    }, [])
    return (
        <div className="Main">
            <div className="main_screen">
                {
                    Pagenum==-1?(
                        <div className="not_found">
                            <h1>
                                404 Sayfa Bulunamadı...
                            </h1>
                        </div>
                    ):(
                        <>
                            {
                                Main?(
                                    <div className="container mt-5">
                                        <div className="row height_50">
                                            <div className="col-6">
                                                <h3>
                                                {
                                                    pages[Pagenum].desc
                                                }
                                                </h3>
                                            </div>
                                            <div className="col-6">
                                                <h3>
                                                {
                                                    pages[Pagenum].img
                                                }
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="row mt-5">
                                            
                                            {
                                                pages[Pagenum].campInfo.map(adds=>(
                                                        <div className="col-4 campInfo">
                                                            {
                                                                
                                                                    <div>
                                                                        <i className={adds.icon}></i>
                                                                        <h4>
                                                                            {
                                                                                adds.text
                                                                            }
                                                                        </h4>
                                                                        <h5>
                                                                            {
                                                                                adds.subText
                                                                            }
                                                                        </h5>
                                                                    </div>
                                                                
                                                            }
                                                        </div>
                                                        ))
                                            }


                                        </div>
                                    </div>
                                ):(
                                    <>
                                        {
                                            Konuşmacı?(
                                                <div className="container mt-5 speaker">
                                                    <div className="row mt-5">
                                            
                                                        {
                                                            pages[Pagenum].speaker.map(adds=>(
                                                                    <div className="col-4 mt-5">
                                                                        {
                                                                            
                                                                                <div>
                                                                                    <img src={adds.img}></img>
                                                                                    <h4>
                                                                                        {
                                                                                            adds.name
                                                                                        }
                                                                                    </h4>
                                                                                    <h5>
                                                                                        {
                                                                                            adds.title
                                                                                        }
                                                                                    </h5>
                                                                                </div>
                                                                            
                                                                        }
                                                                    </div>
                                                                    ))
                                                        }


                                                    </div>
                                                </div>
                                            ):(
                                                <>
                                                    {
                                                        Sponsor?(
                                                            <div className="container mt-5 sponsor">
                                                                <div className="row mt-5">
                                                        
                                                                    {
                                                                        pages[Pagenum].sponsor.map(adds=>(
                                                                                
                                                                                    <div className="col-4 mt-5">
                                                                                        {
                                                                                            <Link>
                                                                                                <div>
                                                                                                    <img src={adds.img}></img>
                                                                                                    <h4>
                                                                                                        {
                                                                                                            adds.name
                                                                                                        }
                                                                                                    </h4>

                                                                                                </div>
                                                                                            </Link>
                                                                                        }
                                                                                    </div>
                                                                                
                                                                                ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        ):(
                                                            <>
                                                                {
                                                                    Partner?(
                                                                        <div className="container mt-5 sponsor">
                                                                            <div className="row mt-5">
                                                                    
                                                                                {
                                                                                    pages[Pagenum].partner.map(adds=>(
                                                                                            
                                                                                                <div className="col-4 mt-5">
                                                                                                    {
                                                                                                        <Link>
                                                                                                            <div>
                                                                                                                <img src={adds.img}></img>
                                                                                                                <h4>
                                                                                                                    {
                                                                                                                        adds.name
                                                                                                                    }
                                                                                                                </h4>

                                                                                                            </div>
                                                                                                        </Link>
                                                                                                    }
                                                                                                </div>
                                                                                            
                                                                                            ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    ):(
                                                                        <div className="contact">
                                                                            
                                                                                {
                                                                                    pages[Pagenum].contact.map(contact=>(
                                                                                        <Link>
                                                                                            <i className={contact.name}></i>
                                                                                        </Link>
                                                                                    ))
                                                                                }
                                                                            
                                                                        </div>
                                                                    )
                                                                }
                                                            </>
                                                        )
                                                    }
                                                </>
                                            )
                                        }
                                    </>
                                )
                            }
                        </>
                    )
                }
            </div>
            <div className="nav">
                <div className="navlink" onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(true)
                }}>
                    <div className="dot"></div>
                    <h1>Kamp detayları</h1>
                </div>
                <div className="navlink" onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(true)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h1>Kamp Konuşmacılar</h1>
                </div>
                <div className="navlink" onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(true)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h1>Kamp Sponsorları</h1>
                </div>
                <div className="navlink" onClick={(e)=>{
                    e.preventDefault()
                    setPartner(true)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h1>Kamp Partnerlerı</h1>
                </div>
                <div className="navlink" onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(true)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h1>İletişim</h1>
                </div>
                
                
            </div>


        </div>
    )
}

export default Main
