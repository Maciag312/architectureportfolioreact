import React from 'react';
import {setview, setcategories, setprojects, setchosenproject} from './store/actions';
import {connect} from 'react-redux';
import './fontpack.css';
import './transform.css';
import { CSSTransition } from 'react-transition-group';
import {SocialMediaIconsReact} from 'social-media-icons-react';

function Contactandaboutview(props) {
    // eslint-disable-next-line
 
    return (
        <div style={{width: "100%",marginLeft:"auto", marginRight: "auto", textAlign:"center", fontFamily: "Quicksand", fontSize: "21px", visibility: (props.view==="contact"||props.view==="about")? "visible":"hidden"}}>
                <CSSTransition
                    in={props.view==="contact"}
                    timeout={{
                        appear: 200,
                        enter: 400,
                        exit: 0,
                       }}
                    unmountOnExit
                    classNames="alert"

                    style={{marginLeft:"auto", marginRight: "auto" , fontSize: "calc(14px + 0.35rem)", paddingTop: "calc(120px + 8vw)"}}>
                    <div>
                    Feel free to contact me <span>😊</span> 
                        <br></br>

                        <a href="mailto:chris.krzysiek.przybylo@gmail.com">
                        chris.krzysiek.przybylo@gmail.com
                        </a>
                        <br></br>

                        <a href="tel:+48601980327">
                            +48 601 980 327
                        </a>
                        <br></br>
                        <br></br>
                        <div>
                            More content:
                        </div>

                        <div>
                            <div style={{display: "inline-block", padding: "10px"}}>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(138,58,185,1)" iconSize="5" roundness="24%" url="https://www.instagram.com/krzysiek_przybylo/" size="30" />
                            </div>
                            <div style={{display: "inline-block"}}>
                            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(59,89,152,1)" iconSize="5" roundness="24%" url="https://www.facebook.com/krzys.przybylo" size="30" />
                            </div>
                       </div>
                       </div>
                       
                </CSSTransition>

                <CSSTransition
                    in={props.view==="about"}
                    timeout={{
                        appear: 200,
                        enter: 400,
                        exit: 0,
                       }}
                    unmountOnExit
                    classNames="alert"

                    style={{marginLeft:"auto", marginRight: "auto" , fontSize: "calc(14px + 0.35rem)", paddingLeft: "calc(10% - 50px)"}}>
                    <div>
                        
                       <div style = {{width: "40%", textAlign:"left", float: "left"}}>
                           <p>My name is Krzysztof Przybyło and I'm a third-year-student of Architecture (Technical University of Gliwice). At the moment, I'm taking part in Erasmus + programme and studying at the University of Lisbon (Lisbon, Portugal).
</p>
<p>
    I've been interested in architecture for a couple of years now, but I have had a passion for art since I was a child. I have learnt to perceive the world globally and in detail. I understand that to discover and create one needs to get familiar with what has been discovered or created so far. I love listening to the way outstanding architects describe architecture. While designing, I'm looking for some novel and original solutions. I focus my attention on details, as I strongly believe that these are details that actually link the architecture with its recepients. I believe in architecture with soul, the architecture of space and mysteries.    
    </p>
    <p>
    Privately, I'm a sociable, enthusiastic and open person, willing to meet new people and visit new places. Travelling with its literal and metaphorical dimensions is my biggest passion. For me, travelling means, above all,  feeling the climate and uncovering values that are hidden and unnoticeable at the first sight. I'm an active, hard-working person who finishes what he has started. Moreover, I proved myself to be reliable with positive attitude towards all aspects of my work. I'm not afraid of challenges and I am able to work in a calm nad methodical manner to achieve the desired results quickly and efficiently, even uder pressure.
    </p>
    <p>
    In my opinion, appropriate tools are essential as they provide the basis for good planning and design. Appropriate techniques allow you to present your ideas and concepts adequately. That' s why I use and rely on techniques that I'm well familiar with. I'd like to add that I constantly continue to develop my professional skills.  
    </p>
    <p>

    I am working with:
- sketch (hand draw)
- Autocad
- 3ds max + corona
- Photoshop
- Archicad
</p>
                       
                    </div>
                    </div>
                </CSSTransition>

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
  )(Contactandaboutview);
