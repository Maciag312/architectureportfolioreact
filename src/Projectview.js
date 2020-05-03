import React from 'react';
import {setview, setprojects, setchosenproject} from './store/actions';
import {connect} from 'react-redux';
import './fontpack.css';
import './transform.css';
import { CSSTransition } from 'react-transition-group';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {LazyLoadComponent} from "react-lazy-load-image-component";
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import CircularProgress from '@material-ui/core/CircularProgress';
import {isMobile} from 'react-device-detect';

class Projectview extends React.Component {
    

    constructor(props){
        super(props);
        this.state = {show: true, theposition: 0, movescr: 0};

    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
       
        if (this.props.chosenproject.id !== prevProps.chosenproject.id) {
            this.setState({show:!this.state.show})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      console.log(scrolled)
        this.setState({
          theposition: scrolled,
          movescr: winScroll
        })
      }

     

    render(){
    const images = require.context('./store/imgs', true);
    const img = images('./' + this.props.chosenproject.img);
    const download = () => {
        var element = document.createElement("a");
        var file = new Blob(
          [
            images("./"+this.props.chosenproject.scheme)
          ],
          { type: "image/*" }
        );
        element.href = URL.createObjectURL(file);
        element.download = this.props.chosenproject.scheme;
        element.click();
      };
    return (

      <div>{this.props.view==="projects"?
        <div style={{width: "100%", textAlign:"center", alignItems: "center" , fontFamily: "Quicksand", fontSize: "21px"}}>
                <CSSTransition
                    in={!this.state.show}
                    
                    timeout={{
                        appear: 200,
                        enter: 400,
                        exit: 0,
                       }}
                    classNames="alert"
                    unmountOnExit
                    style={{textAlign: "left", marginLeft: "auto", marginRight: "auto", width: "100%", fontSize: "20px", visibility: (!this.state.show&&(this.props.view==="projects"))? "visible":"hidden"}}>
                    <div style={{display: "inline"}}>
                    <div style={{fontSize: "calc(16px + 0.5vw)", width: "calc(80% + 100px)", paddingBottom: "15px", marginLeft: "calc(10% - 25px)", paddingTop: (this.state.theposition*this.state.theposition*50).toString()+"px"}}>{this.props.chosenproject.title}</div>
                    <div id="container" style={{position: "relative", height: "calc(32vw + 60px)"}}>
                    <LazyLoadImage alt = ""  src={img} style={{position: "absolute", top: 0,height: "calc(32vw + 60px)", width: "calc(80% + 50px)", left: "calc(10% - 25px)",display: "block", objectFit: "cover", filter: "grayscale("+ (100-this.state.movescr/3)+"%)"}}></LazyLoadImage>

                    </div>
                    
                    <div style={{float: "left", textAlign: "left", paddingTop: "20px", paddingLeft: "calc(10% - 25px)", width: "calc(80% + 50px)", fontSize: "calc(14px + 0.35rem)"}}>
                            {this.props.chosenproject.desc}
                        </div>
                        {this.props.chosenproject.scheme !== "dummy.png"?
                        <div style={{height: "calc(45vw + 300px)", width: "calc(80% + 50px)",marginLeft: "calc(10% - 25px)", paddingTop:"200px"}}>
                            {isMobile?
                                <a 
                                href={images("./" + this.props.chosenproject.scheme)}
                                download
                                onClick={() => download()}
                                style={{paddingLeft: "calc(12% - 30px)"}}
                                >
                                <i>
                                View schema
                                </i>
                                </a>
                            :
                            <LazyLoadComponent placeholder={<CircularProgress style={{marginLeft: "50%"}} disableShrink />}>
                                <PinchZoomPan step={1.7} doubleTapBehavior={"zoom"}>
                                    <img src={images("./" + this.props.chosenproject.scheme)} alt="test" />
                                </PinchZoomPan>
                             </LazyLoadComponent>
                        
                            }
                        </div>
                        : <div style={{height:"200px"}}></div>}
                    </div>

                </CSSTransition>


                <CSSTransition
                    in={this.state.show}
                    timeout={{
                        appear: 200,
                        enter: 400,
                        exit: 0,
                       }}
    
                    classNames="alert"
                    unmountOnExit
                    style={{textAlign: "left", marginLeft: "auto", marginRight: "auto", width: "100%", fontSize: "20px", visibility: (this.state.show&&this.props.view==="projects")? "visible":"hidden"}}>
                    <div style={{display: "inline"}}>
                    <div style={{fontSize: "calc(16px + 0.5vw)", width: "calc(80% + 100px)", paddingBottom: "15px", marginLeft: "calc(10% - 25px)", paddingTop: (this.state.theposition*this.state.theposition*50).toString()+"px"}}>{this.props.chosenproject.title}</div>
                    <div id="container" style={{position: "relative", height: "calc(32vw + 60px)"}}>
                         <LazyLoadImage alt = ""  src={img} style={{position: "absolute", top: 0,height: "calc(32vw + 60px)", width: "calc(80% + 50px)", left: "calc(10% - 25px)",display: "block", objectFit: "cover", filter: "grayscale("+ (100-this.state.movescr/3)+"%)"}}></LazyLoadImage>
                       
                    </div>
                    
                    <div style={{float: "left", textAlign: "left", paddingTop: "20px", paddingLeft: "calc(10% - 25px)", width: "calc(80% + 50px)", fontSize: "calc(14px + 0.35rem)"}}>
                            {this.props.chosenproject.desc}
                        </div>
                        {this.props.chosenproject.scheme !== "dummy.png"?
                        <div style={{height: "calc(45vw + 300px)", width: "calc(80% + 50px)",marginLeft: "calc(10% - 25px)", paddingTop:"200px"}}>
                            {isMobile?
                                <a 
                                href={images("./" + this.props.chosenproject.scheme)}
                                download
                                onClick={() => download()}
                                style={{paddingLeft: "calc(12% - 30px)"}}
                                >
                                <i>
                                View schema
                                </i>
                                </a>
                            :
                            <LazyLoadComponent placeholder={<CircularProgress style={{marginLeft: "50%"}} disableShrink />}>
                                <PinchZoomPan step={1.7} doubleTapBehavior={"zoom"}>
                                    <img src={images("./" + this.props.chosenproject.scheme)} alt="test" />
                                </PinchZoomPan>
                             </LazyLoadComponent>
                        
                            }
                        </div>
                        : <div style={{height:"200px"}}></div>}
                    </div>

                </CSSTransition>


        

        </div>:<div></div>}</div>
    );
    }
}

const mapStateToProps = (state) => ({
    view: state.view,
    chosenproject: state.chosenproject,
    projects: state.projects
  });
  
export default connect(
    mapStateToProps,
    {setview, setprojects, setchosenproject}
  )(Projectview);