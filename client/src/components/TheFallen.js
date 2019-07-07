import React, { Component } from 'react';
import BlkPanther from "../images/blkpanther.jpg";
import Drax from "../images/drax.jpg";
import DrStrange from "../images/drstrange.jpg";
import Falcon from "../images/falcon.jpg";
import Gamora from "../images/gamora.jpg";
import Groot from "../images/groot.jpg";
import Loki from "../images/loki.jpg";
import Mantis from "../images/mantis.jpg";
import NickFury from "../images/nickfury.jpg";
import ScarletWitch from "../images/scarletwitch.jpg";
import Shuri from "../images/shuri.jpg";
import Spiderman from "../images/spiderman.jpg";
import Starlord from "../images/starlord.jpg";
import Vision from "../images/vision.jpg";
import Wasp from "../images/wasp.jpg";
import WinterSoldier from "../images/wintersoldier.jpg";

export class TheFallen extends Component {
    render(){
        return(
            <div className="container">
                <h2>Never Forget...</h2>
                <div className="parent">
                <div className="child">
                    <img className="img-responsive" src={BlkPanther} alt="Black Panther - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Drax} alt="Drax - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={DrStrange} alt="Dr Strange - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Falcon} alt="Falcon - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Gamora} alt="Gamora - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Groot} alt="Groot - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Loki} alt="Loki - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Mantis} alt="Mantis - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={NickFury} alt="Nick Fury - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={ScarletWitch} alt="Scarlet Witch - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Shuri} alt="Shuri - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Spiderman} alt="Spiderman - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Starlord} alt="Starlord - a fallen avenger" />
                </div>  
                <div className="child">
                    <img className="img-responsive" src={Vision} alt="Vision - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={Wasp} alt="Wasp - a fallen avenger" />
                </div>
                <div className="child">
                    <img className="img-responsive" src={WinterSoldier} alt="Winter Soldier - a fallen avenger" />
                </div>                              
                </div>
            </div>
        )
    }
}

export default TheFallen;