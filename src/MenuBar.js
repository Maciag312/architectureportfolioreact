import React from 'react';
import {setview, setcategories, setprojects, setchosenproject} from './store/actions';
import {connect} from 'react-redux';
import './fontpack.css';
import './transform.css';
import { CSSTransition } from 'react-transition-group';
import 'react-rangeslider/lib/index.css';
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const sliderThumbStyles = (props) => (`
        width: 4px;
        height: 20px;
        background: ${props.color}
        opacity: ${props.opacity};
        -webkit-transition: .3s;
        transition: all .3s;
`)


const Styles = styled.div`
color: #FF0000;
display: flex;
align-items: center;
.slider{
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 1.5px
    cursor: pointer;
    border-radius: 1.5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
        -webkit-appearance: none;
        appearance: none;
        ${props => sliderThumbStyles(props)}
    }
}
`;


function MenuBar(props) {
    // eslint-disable-next-line
    const matches = useMediaQuery('(min-width:600px)');
    const [clickedProjects, setClickedProjects] = React.useState(true);
    const [clickedAbout, setClickedAbout] = React.useState(false);
    const [clickedContact, setClickedContact] = React.useState(false);

   
    const [slidervalue, setSlidervalue] = React.useState(0);
    // const loadProject = (id, name) => {alert(id + name); }

    const handleCategoryClick = (val) => (event) => {
        
        var cat = props.categories;
        var tcat = cat.find(p=>p.selected===true);
        tcat.selected = false;
        cat[val].selected=true;
        props.setcategories(cat)
        setCategoryElements(cat.map(c=><div onClick={handleCategoryClick(c.id)} className='transform disable-select' style={{cursor: "pointer", color: c.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{c.name}</div>))
        if(tcat.id!==val){
            const va = props.projects.filter(p=>p.catg===val)[0].id
            var projcs = props.projects;
            projcs.find(p=>p.selected===true).selected=false;
            projcs[va].selected=true;
            props.setchosenproject(projcs[va])
            props.setprojects(projcs)
            const fdprojects = projcs.filter(e=>e.catg===props.categories.find(c=>c.selected===true).id)
            setProjectElements(fdprojects.map(p=><div className='transform disable-select' onClick={handleProjectClick(p.id)} value={p.id} style={{cursor: "pointer", color: p.selected===true? "black":"lightgrey", paddingLeft: "15px", float:"left"}}>{p.name}</div>))
            setSlidervalue(fdprojects[0].id)
        }

    }
    const [categoryElements, setCategoryElements] = React.useState(props.categories.map(c=><div onClick={handleCategoryClick(c.id)} style={{cursor: "pointer", color: c.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{c.name}</div>))

    const handleProjectClick = (val) => (event) => {
        var projcs = props.projects;
        projcs.find(p=>p.selected===true).selected=false;
        projcs[val].selected=true; 
        props.setchosenproject(projcs[val])
        props.setprojects(projcs)
        setProjectElements(projcs.filter(e=>e.catg===props.categories.find(c=>c.selected===true).id).map(p=><div className='transform disable-select' onClick={handleProjectClick(p.id)} value={p.id} style={{cursor: "pointer", color: p.selected===true? "black":"lightgrey", paddingLeft: "15px", float:"left"}}>{p.name}</div>))
        setSlidervalue(val)
    }
    const [projectElements, setProjectElements] = React.useState(props.projects.filter(e=>e.catg===props.categories.find(c=>c.selected===true).id).map(p=><div className='transform disable-select' onClick={handleProjectClick(p.id)} value={p.id} style={{cursor: "pointer", color: p.selected===true? "black":"lightgrey", paddingLeft: "15px", float:"left"}}>{p.name}</div>))



    const updateProjectsAndCategories=(project_id) => {
        var val = project_id
        var projcs = props.projects;
        projcs.find(p=>p.selected===true).selected=false;
        console.log(val+"project to be updated")
        projcs[val].selected=true; 
        props.setchosenproject(projcs[val])
        var chosenCategory = projcs[val].catg;
        props.categories.find(c=>c.selected===true).selected=false;
        var ctgs = props.categories;
        ctgs[chosenCategory].selected=true;
        props.setcategories(ctgs);
        setCategoryElements(ctgs.map(c=><div onClick={handleCategoryClick(c.id)} className='transform disable-select' style={{cursor: "pointer", color: c.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{c.name}</div>))
        props.setprojects(projcs)
        setProjectElements(projcs.filter(e=>e.catg===props.categories.find(c=>c.selected===true).id).map(p=><div className='transform disable-select' onClick={handleProjectClick(p.id)} value={p.id} style={{cursor: "pointer", color: p.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{p.name}</div>))
        setSlidervalue(val)

    }

    const handleOnChange = (e) => {
        updateProjectsAndCategories(e.target.value)
    }

    const handleClick = (val) => (event) => {
        setClickedAbout(false)
        setClickedContact(false)
        setClickedProjects(false)
        if(val==='p'){
            props.setview("projects")
            setClickedProjects(true)
        }else if(val==='a'){
            props.setview("about")
            setClickedAbout(true)
        }else{
            props.setview("contact")

            setClickedContact(true)
        }
    }
    const handleArrowClick = (v) => (e) =>{
        if(v>=0||v<props.projects.length)
        updateProjectsAndCategories(v)
    }
    return (
        <div>
        <div  className='transform disable-select' onClick={()=>props.setview("home")} style={{paddingLeft: "calc(15% - 50px)", paddingTop:"12px", cursor: "pointer", paddingBottom: "8px",  fontSize:"28px", fontFamily: "Quicksand"}}>
          KRZYSZTOF PRZYBYŁO
        </div>
        <div style={{width: "100%", display: "inline", backgroundColor: "red", textAlign:"center", fontFamily: "Quicksand", fontSize: "21px"}}>
            <hr style ={{border: "0.5px solid lightgrey"}}></hr>
                <div className='transform disable-select' onClick={handleClick('p')} value="projects"style={{float: "left", width: "30%", cursor: "pointer", color: clickedProjects===true ? "black":"lightgrey"}}>PROJECTS</div>
                <div  className='transform disable-select' onClick={handleClick('a')} value="about" style={{float: "left", width: "40%",cursor: "pointer", color: clickedAbout===true ? "black":"lightgrey"}}>ABOUT</div>
                <div  className='transform disable-select' onClick={handleClick('c')} value="contact" style={{float: "left", width: "30%",cursor: "pointer", color: clickedContact===true ? "black":"lightgrey"}}>CONTACT</div>
                <br></br>
                <CSSTransition
                    in={clickedProjects&&(props.view!=="home")}
                    timeout={{
                        appear: 200,
                        enter: 400,
                        exit: 0,
                       }}
                    classNames="alert"
                    unmountOnExit
                    style={{float: "left", textAlign: "left", paddingLeft: "calc(16% - 70px)", width: "calc(84% + 35px)", fontSize: "calc(14px + 0.35rem)"}}>
                    <div style={{display: "inline"}}>
                        {categoryElements}
                    </div>
                </CSSTransition>



                <CSSTransition
                    in={clickedProjects&&(props.view!=="home")}
                    timeout={{
                        appear: 200,
                        enter: 400,
                        exit: 0,
                       }}
                     classNames="alert"
                    unmountOnExit
                    style={{float: "left",textAlign: "left", paddingLeft: "calc(16% - 63px)", width: "calc(84% + 31px)", fontSize: "calc(14px + 0.35rem)"}}>
                    <div style={{display: "inline"}}>
                      {projectElements}
                    </div>
                </CSSTransition>

                <br></br>

                <CSSTransition
                    in={clickedProjects&&(props.view!=="home")}
                    timeout={{
                        appear: 200,
                        enter: 400,
                        exit: 0,
                       }}
                    classNames="alert"
                    unmountOnExit
                    style = {{width: "calc(250px + 18vw)", paddingTop: "calc(50px - 0.5vw)", paddingBottom: "calc(30px - 2vw)", marginLeft: "auto", marginRight: "auto"}}>
                        <div>
                        <div style={{display: "inline"}}> 

                            <Styles opacity={0.5+slidervalue/20} color={"lightgrey"} style={{width: "100%"}}>
                                <div style = {{fontFamily:"DM Sans", color: "lightgrey", fontSize: "28px", cursor: "pointer"}} className="disable-select" onClick={handleArrowClick(slidervalue<=0? slidervalue:slidervalue-1)} >
                                    &lt;
                                </div>
                                <input ref={input => input && input.focus()} type='range' value = {slidervalue} min={0} max={props.projects.length-1} className='slider' onChange={handleOnChange}></input>
                                <div style = {{fontFamily:"DM Sans", color: "lightgrey", fontSize: "28px", cursor: "pointer"}} className="disable-select" onClick={handleArrowClick(slidervalue>=props.projects.length-1? slidervalue:slidervalue+1)}>
                                    &gt;
                                </div>
                            </Styles>
                          
                        </div>
                        </div>
                        
                </CSSTransition>

        </div>
        </div>
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
  )(MenuBar);
