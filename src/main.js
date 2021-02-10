import React,{useState,useEffect} from 'react'
import './App.css';
import {useParams} from 'react-router-dom';
import pages from './pages.json';
import {Container , Row , Col} from 'react-bootstrap'
function Main() {
    let { topicId } = useParams();
    const [Pagenum, setPagenum] = useState(-1)
    useEffect(() => {
        if(topicId==="Python"){
            setPagenum(0);
        }else if(topicId==="AiSummit"){
            setPagenum(1);
        }else if(topicId==="Tensorflow"){
            setPagenum(2);
        }

    }, [])
    return (
        <div className="Main">
            <div className="main_screen">
                {
                    Pagenum==-1?(
                        <div className="">
                            <h1>
                                404 Page Not Found
                            </h1>
                        </div>
                    ):(
                        <div className="">
                            {
                                pages[Pagenum].campInfo.desc
                            }
                        </div>
                    )
                }
            </div>
            <div className="nav">
                
            </div>

        </div>
    )
}

export default Main
