import React from 'react';
import {setview, setcategories, setprojects, setchosenproject} from './store/actions';
import {connect} from 'react-redux';
import './fontpack.css';
import './transform.css';
import { CSSTransition } from 'react-transition-group';
import {useEffect} from 'react'
import "./transform.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';


const HoverLazyLoadImage = styled(LazyLoadImage)`
    :not(:hover) {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%); 
	}
`

function Home(props) {
    // eslint-disable-next-line
 
    const [counter, setCounter] = React.useState(0)
    const homeElements = [{id: 3, sdesc: "CGI exterior inspired by Villa Neo House.", title: "CGI exterior", imgbw: "exteriorczb-min.jpg", img: "exteriorkolor-min.jpg"}, {id: 1, sdesc: "Site Chapel proposal for competition organised by ARKxSITE.", title: "Site Chapel", imgbw: "Akonkurs1czb-min.jpg", img: "Akonkurs1kolor-min.jpg"}, {id: 6, sdesc: "CGI interior inspired by apartment situated in Brooklyn.", title: "CGI interior", imgbw: "newyorkczb-min.jpg", img: "newyorkkolor-min.jpg"}, {id: 7, sdesc: "CGI close-up with coffee.", title: "CGI close-up", imgbw: "closeup2czb-min.jpg", img: "closeup2kolor-min.jpg"}, {id: 8, sdesc: "Logo proposal for Mazda Motor Corporation.", title: "COMPETITION Mazda Design", imgbw: "mazdaczb-min.jpg", img: "mazdakolor-min.jpg"}]
    const maxcounter = homeElements.length
    var c = 0
   
 const images = require.context('./store/imgs', true);
    // const imgbw = images('./' + this.props.chosenproject.imgbw);
    // const img = images('./' + this.props.chosenproject.img);


    useEffect(() => {
        const interval = setInterval(() => {
            handleCounterChange(c+1)
        }, 3400);
        return () => handleCounterChange(c+1);
      }, []);

    const handleCounterChange = (coutr) => {
        if(coutr>=maxcounter) c = 0
        else c = coutr
        setCounter(c)
        console.log(c)
    }

    return (
        <div>
        {props.view=="home"? 
            <div style={{width: "100%",marginLeft:"auto", marginRight: "auto", textAlign:"center", fontFamily: "Quicksand", fontSize: "21px", position: "relative"}}>
                <div>
                    {homeElements.map((e,i)=>
                    <svg style={{width: "30", height: "4", paddingLeft:"8px"}} >
                        <rect className="transform2" style={{width: "30", height: "4", fill: counter==i? "grey" : "lightgrey"}}></rect>
                    </svg> 
                    )}

                </div>   
                {homeElements.map((e,i)=>
                    <CSSTransition
                    
                    in={counter==i}
                    timeout={{
                        appear: 600,
                        enter: 400,
                        exit: 200,
                       }}
                    unmountOnExit
                    classNames="alert"

                    style={{marginLeft:"auto", textAlign:"left", marginRight: "auto" , width:"100%", fontSize: "calc(14px + 0.35rem)", paddingTop: "calc(10px + 2vw)", position:"absolute", top: "0"}}>
                        <div>
                        <div style={{fontSize: "calc(16px + 0.5vw)", paddingLeft:"calc(10vw - 50px)", paddingBottom: "15px"}}>{e.title}</div>
                        <div style={{fontSize: "calc(16px + 0.5vw)", paddingLeft:"calc(11vw - 48px)", paddingBottom: "15px", color:"lightgrey", fontSize: "18px"}}>{e.sdesc}</div>

                        <div id="container" style={{position: "relative", height: "calc(32vw + 60px)",marginLeft: "auto", marginRight: "auto"}}>
                            <HoverLazyLoadImage className="transform2" alt = "" src={images('./' + e.img)} style={{position: "absolute",top: 0,height: "calc(32vw + 60px)", width: "calc(80vw + 100px)", left: "calc(10% - 50px)", display: "block", objectFit: "cover", opacity: 1}}></HoverLazyLoadImage>
                        
                        </div>
                        <div></div>
                    </div>
                       
                    </CSSTransition>
                )}<div style={{height: "100px"}}></div>       
            </div>:<div></div>}</div>
            
        
    );
}

const mapStateToProps = (state) => ({
    view: state.view,
    projects: state.projects,
    categories: state.categories,
    chosenproject: state.chosenproject
  });
  
export default connect(
    mapStateToProps,
    {setview,setcategories, setprojects, setchosenproject}
  )(Home);
