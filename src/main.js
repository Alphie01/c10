import React,{useState,useEffect} from 'react'
import './App.css';
import {useParams , Link} from 'react-router-dom';
import pages from './pages.json';
import {Container , Row , Col} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
function Main() {
    let { topicId } = useParams();
    const [Pagenum, setPagenum] = useState(0);
    const [Main, setMain] = useState(true);
    const [Konuşmacı, setKonuşmacı] = useState(false)
    const [Sponsor, setSponsor] = useState(false)
    const [Partner, setPartner] = useState(false)
    const [Contact, setContact] = useState(false)
    const [ClosedScreen, setClosedScreen] = useState(false)
    const [animatedScren, setanimatedScren] = useState(false)
    const [MobileNav, setMobileNav] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
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
    }, [])
    if(isTabletOrMobile){
        return(
            <div className="mobile_main">
<div className={ClosedScreen?"opacity_0":(isTabletOrMobile?"mobile_main_screen":"main_screen")}>
                                            <div className="main_screen_top_nav">
                                                <div className="bloked">
                                                    <h2>{topicId}</h2>
                                                </div>
                                                <div className="buttons">
                                                    <div className="button yellow" onClick={(e)=>{
                                                        e.preventDefault();
                                                        setanimatedScren(true)
                                                        setClosedScreen(true)
                                                    }}></div>
                                                    <Link to={"/"}>
                                                        <div className="button red" onClick={(e)=>{
                                                        }}>
                                                            X
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
    
                <div className={MobileNav?"mobil_nav_pc active":"mobil_nav_pc"}>
    
                <div className={MobileNav?"burger act":"burger"} onClick={
                    (e)=>{
                        e.preventDefault();
                        setMobileNav(!MobileNav)
                    }
                }>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <div className={Main?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(true)
                }}>
                    <div className="dot"></div>
                    <h2>Kamp detayları</h2>
                </div>
                <div className={Konuşmacı?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(true)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h2>Kamp Konuşmacılar</h2>
                </div>
                <div className={Sponsor?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(true)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h2>Kamp Sponsorları</h2>
                </div>
                <div className={Partner?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(true)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h2>Kamp Partnerlerı</h2>
                </div>
                <div className={Contact?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(true)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h2>İletişim</h2>
                </div>
                
                
            </div>
    
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
                                                <div className="col-lg-6 col-sm-12">
                                                    <h3>
                                                    {
                                                        pages[Pagenum].desc
                                                    }
                                                    </h3>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <img src={
                                                        pages[Pagenum].img
                                                    } className={"mobil_img"} alt=""/>
                                                </div>
                                            </div>
                                            <div className="mt-5"></div>
                                            <div className="row mt-5 mb-5">
                                                
                                                {
                                                    pages[Pagenum].campInfo.map(adds=>(
                                                            <div className="col-lg-4 mt-5 col-sm-12 campInfo">
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
    
                                            <div className="container">
                                                <div className="row mt-5 mb-5">
                                                    <div className="col-lg-6 col-sm-12">
                                                    <table className="table">
                                                        
                                                        <tbody>
                                                            {
                                                                pages[Pagenum].events.map(adds=>(
                                                                            <tr>
                                                                                <th scope="row"><h3>{adds.id}</h3></th>
                                                                                <td className="col-4"><h3>
                                                                                    {adds.speakers}
                                                                                </h3></td>
                                                                                <td className="col-4">
                                                                                <h4>
                                                                                    {adds.date}
                                                                                </h4>
                                                                                </td>

                                                                            </tr>
                                                                        ))
                                                            }
                                                            
                                                        </tbody>
                                                        </table>
                                                    
                                                    
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                                                        {
                                                            pages[Pagenum].time1?(
                                                                <Calendar value={[new Date(2021, 1, 27), new Date(2021, 2, 11)]}/>
                                                            ):(
                                                                <>
                                                                    {
                                                                        pages[Pagenum].time2?(
                                                                            <Calendar value={new Date(2021, 2, 20)}/>
                                                                        ):(
                                                                            <Calendar value={[new Date(2021, 2, 23), new Date(2021, 3, 8)]}/>
                                                                        )
                                                                    }
                                                                </>
                                                            )
                                                        }
                                                    </div>
    
                                                </div>
                                            </div>
    
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
                                                                        <div className="col-lg-6 col-sm-12 mt-5">
                                                                            {
                                                                                
                                                                                    <div>
                                                                                        <img className={"mobil__speaker_img"} src={adds.img}></img>
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
                                                                                    
                                                                                        <div className="col-lg-4 col-sm-12 mt-5">
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
                                                                                                
                                                                                                    <div className="col-lg-4 col-sm-12 mt-5">
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
                                                                            <div className="mobil_contact">
                                                                                
                                                                                    {
                                                                                        pages[Pagenum].contact.map(contact=>(
                                                                                            <a href={contact.link}>
                                                                                                <i className={contact.name}></i>
                                                                                            </a>
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
                
    
            </div>
        )
    }else{
        return (
            <div className="Main">
                <div className={ClosedScreen?"opacity_0":(isTabletOrMobile?"mobile_main_screen":"main_screen")}>
                                            <div className="main_screen_top_nav">
                                                <div className="bloked">
                                                    <h2>{topicId}</h2>
                                                </div>
                                                <div className="buttons">
                                                    <div className="button yellow" onClick={(e)=>{
                                                        e.preventDefault();
                                                        setanimatedScren(true)
                                                        setClosedScreen(true)
                                                    }}></div>
                                                    <Link to={"/"}>
                                                        <div className="button red" onClick={(e)=>{
                                                        }}>
                                                            X
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
    
                <div className={isTabletOrMobile?"display_none":"nav_pc"}>
    
                
                <div className={Main?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(true)
                }}>
                    <div className="dot"></div>
                    <h2>Kamp detayları</h2>
                </div>
                <div className={Konuşmacı?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(true)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h2>Kamp Konuşmacılar</h2>
                </div>
                <div className={Sponsor?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(true)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h2>Kamp Sponsorları</h2>
                </div>
                <div className={Partner?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(true)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(false)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h2>Kamp Partnerlerı</h2>
                </div>
                <div className={Contact?"navlink active":"navlink"} onClick={(e)=>{
                    e.preventDefault()
                    setPartner(false)
                    setSponsor(false)
                    setKonuşmacı(false)
                    setContact(true)
                    setMain(false)
                }}>
                    <div className="dot"></div>
                    <h2>İletişim</h2>
                </div>
                
                
            </div>
    
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
                                                <div className="col-lg-6 col-sm-12">
                                                    <h3>
                                                    {
                                                        pages[Pagenum].desc
                                                    }
                                                    </h3>
                                                </div>
                                                <div className="col-lg-6 col-sm-12">
                                                    <img src={
                                                        pages[Pagenum].img
                                                    } alt=""/>
                                                </div>
                                            </div>
                                            <div className="row mt-5 mb-5">
                                                
                                                {
                                                    pages[Pagenum].campInfo.map(adds=>(
                                                            <div className="col-lg-4 col-sm-12 campInfo">
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
    
                                            <div className="container">
                                                <div className="row mt-5 mb-5">
                                                    <div className="col-lg-6 col-sm-12">
                                                    <table className="table">
                                                        
                                                        <tbody>
                                                            {
                                                                pages[Pagenum].events.map(adds=>(
                                                                            <tr>
                                                                                <th scope="row"><h3>{adds.id}</h3></th>
                                                                                <td><h3>
                                                                                    {adds.speakers}
                                                                                </h3></td>
                                                                                <td>
                                                                                <h4>
                                                                                    {adds.date}
                                                                                </h4>
                                                                                </td>
                                                                                <td>
                                                                                    <h4>{adds.talk}</h4>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                            }
                                                            
                                                        </tbody>
                                                        </table>
                                                    
                                                    
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                                                        {
                                                            pages[Pagenum].time1?(
                                                                <Calendar value={[new Date(2021, 1, 27), new Date(2021, 2, 11)]}/>
                                                            ):(
                                                                <>
                                                                    {
                                                                        pages[Pagenum].time2?(
                                                                            <Calendar value={new Date(2021, 2, 20)}/>
                                                                        ):(
                                                                            <Calendar value={[new Date(2021, 2, 23), new Date(2021, 3, 8)]}/>
                                                                        )
                                                                    }
                                                                </>
                                                            )
                                                        }
                                                    </div>
    
                                                </div>
                                            </div>
    
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
                                                                        <div className="col-lg-6 col-sm-12 mt-5">
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
                                                                                    
                                                                                        <div className="col-lg-4 col-sm-12 mt-5">
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
                                                                                                
                                                                                                    <div className="col-lg-4 col-sm-12 mt-5">
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
                                                                                            <a href={contact.link}>
                                                                                                <i className={contact.name}></i>
                                                                                            </a>
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
                
    
            </div>
        )
    }
}

export default Main
