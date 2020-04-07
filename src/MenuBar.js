import React from 'react';
import {setview, setcategories, setprojects} from './store/actions';
import {connect} from 'react-redux';
import './fontpack.css';
import './transform.css';
import { CSSTransition } from 'react-transition-group';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import styled from 'styled-components';

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
        setcategories(cat)
        setCategoryElements(cat.map(c=><div onClick={handleCategoryClick(c.id)} className='transform disable-select' style={{cursor: "pointer", color: c.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{c.name}</div>))
        if(tcat.id!==val){
            const va = props.projects.filter(p=>p.catg===val)[0].id
            var projcs = props.projects;
            projcs.find(p=>p.selected===true).selected=false;
            projcs[va].selected=true;
            setprojects(projcs)
            const fdprojects = projcs.filter(e=>e.catg===props.categories.find(c=>c.selected===true).id)
            setProjectElements(fdprojects.map(p=><div className='transform disable-select' onClick={handleProjectClick(p.id)} value={p.id} style={{cursor: "pointer", color: p.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{p.name}</div>))
            setSlidervalue(fdprojects[0].id)
        }

    }
    const [categoryElements, setCategoryElements] = React.useState(props.categories.map(c=><div onClick={handleCategoryClick(c.id)} style={{cursor: "pointer", color: c.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{c.name}</div>))

    const handleProjectClick = (val) => (event) => {
        var projcs = props.projects;
        projcs.find(p=>p.selected===true).selected=false;
        projcs[val].selected=true; 
        setprojects(projcs)
        setProjectElements(projcs.filter(e=>e.catg===props.categories.find(c=>c.selected===true).id).map(p=><div className='transform disable-select' onClick={handleProjectClick(p.id)} value={p.id} style={{cursor: "pointer", color: p.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{p.name}</div>))
        setSlidervalue(val)
    }
    const [projectElements, setProjectElements] = React.useState(props.projects.filter(e=>e.catg===props.categories.find(c=>c.selected===true).id).map(p=><div className='transform disable-select' onClick={handleProjectClick(p.id)} value={p.id} style={{cursor: "pointer", color: p.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{p.name}</div>))

    const [volume, setVolume] = React.useState(10)

    const updateProjectsAndCategories=(project_id) => {
        var val = project_id
        var projcs = props.projects;
        projcs.find(p=>p.selected===true).selected=false;
        projcs[val].selected=true; 
        var chosenCategory = projcs[val].catg;
        props.categories.find(c=>c.selected===true).selected=false;
        var ctgs = props.categories;
        ctgs[chosenCategory].selected=true;
        setcategories(ctgs);
        setCategoryElements(ctgs.map(c=><div onClick={handleCategoryClick(c.id)} className='transform disable-select' style={{cursor: "pointer", color: c.selected===true? "black":"lightgrey", paddingLeft: "15px", float: "left"}}>{c.name}</div>))
        setprojects(projcs)
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
            setClickedProjects(true)
        }else if(val==='a'){
            setClickedAbout(true)
        }else{
            setClickedContact(true)
        }
    }
    const handleArrowClick = (v) => (e) =>{
        updateProjectsAndCategories(v)
    }
    return (
        <div style={{width: "100%", display: "inline", backgroundColor: "red", textAlign:"center", fontFamily: "Quicksand", fontSize: "21px"}}>
            <hr style ={{border: "0.5px solid lightgrey"}}></hr>
                <div className='transform disable-select' onClick={handleClick('p')} value="projects"style={{float: "left", width: "28%", cursor: "pointer", color: clickedProjects===true ? "black":"lightgrey"}}>PROJECTS</div>
                <div  className='transform disable-select' onClick={handleClick('a')} value="about" style={{float: "left", width: "43.5%",cursor: "pointer", color: clickedAbout===true ? "black":"lightgrey"}}>ABOUT</div>
                <div  className='transform disable-select' onClick={handleClick('c')} value="contact" style={{float: "left", width: "28%",cursor: "pointer", color: clickedContact===true ? "black":"lightgrey"}}>CONTACT</div>
                <br></br>


                <CSSTransition
                    in={clickedProjects}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    style={{float: "left", textAlign: "left", paddingLeft: "calc(16% - 70px)", width: "80%", fontSize: "20px"}}>
                    <div style={{display: "inline"}}>
                        {categoryElements}
                    </div>
                </CSSTransition>



                <CSSTransition
                    in={clickedProjects}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    style={{float: "left",textAlign: "left", paddingLeft: "calc(16% - 63px)", width: "80%", fontSize: "20px"}}>
                    <div style={{display: "inline"}}>
                      {projectElements}
                    </div>
                </CSSTransition>

                <br></br>

                <CSSTransition
                    in={clickedProjects}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    style = {{width: "35%", paddingTop: "30px", marginLeft: "auto", marginRight: "auto"}}>
                        <div style={{display: "inline"}}> 

                            <Styles opacity={0.5+slidervalue/20} color={"lightgrey"}>
                                <div style = {{fontFamily:"DM Sans", color: "lightgrey", fontSize: "28px", cursor: "pointer"}} className="disable-select" onClick={handleArrowClick(slidervalue<=0? slidervalue:slidervalue-1)} >
                                    &lt;
                                </div>
                                <input ref={input => input && input.focus()} type='range' value = {slidervalue} min={0} max={props.projects.length-1} className='slider' onChange={handleOnChange}></input>
                                <div style = {{fontFamily:"DM Sans", color: "lightgrey", fontSize: "28px", cursor: "pointer"}} className="disable-select" onClick={handleArrowClick(slidervalue>=props.projects.length-1? slidervalue:slidervalue+1)}>
                                    &gt;
                                </div>
                            </Styles>
                          
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
  )(MenuBar);