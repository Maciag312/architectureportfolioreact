import React from 'react';
import {setview, setcategories, setprojects} from './store/actions';
import {connect} from 'react-redux';
import './fontpack.css';
import './transform.css';
import { CSSTransition } from 'react-transition-group';


function Projectview(props) {
    

    const [showfirst, setShowfirst] = React.useState(true)
    const [showsecond, setShowsecond] = React.useState(false)   

    
    return (
        <div style={{width: "100%", textAlign:"center", alignItems: "center" , fontFamily: "Quicksand", fontSize: "21px"}}>
            

                <CSSTransition
                    in={showfirst}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    style={{float: "left", textAlign: "left", paddingLeft: "calc(16% - 70px)", width: "80%", fontSize: "20px"}}>
                    <div style={{display: "inline"}}>
                        dsa
                    </div>
                </CSSTransition>



                <CSSTransition
                    in={showsecond}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    style={{float: "left",textAlign: "left", paddingLeft: "calc(16% - 63px)", width: "80%", fontSize: "20px"}}>
                    <div style={{display: "inline"}}>
                        sdas
                    </div>
                </CSSTransition>


        

        </div>
    );
}

const mapStateToProps = (state) => ({
    view: state.view,
    projects: state.projects,
    categories: state.categories
  });
  
export default connect(
    mapStateToProps,
    {setview,setcategories, setprojects}
  )(Projectview);