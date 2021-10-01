import React,{useEffect,useState} from "react";
import {useHistory} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/header/header';
import './intro.css';
import Docker_image from '../../image/docker-cover.png'

export default class Introduction extends React.Component{

    constructor(props){
        super(props);
        this.props ={

        }
    }

    componentDidCatch(){
        AOS.init();
    }

    render(){
        
        return(
            <div>
                <Header/>
                    <div className="space-140"></div>
                    <div className = "covid-intro">
                        <div className="container-intro">
                            <div className="title-covid">
                                <p data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="item-title">Covid-19?<br/>
                                    <span>But your <span className="highlight-color">Infomations</span><br/></span>
                                    <span>is <span className="highlight-color">Trusted?</span></span>
                                </p>
                                <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000" style={{marginTop:'8px'}}>
                                    <p className="covid-description">Lorem Ipsum is simply dummy text of the printing and typeset <br/> industry. Ipsum is simply dummy text.</p>
                                </div>
                                <div className="space-24"></div>
                                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className ="container-btn-covid">
                                    <div className='btn btn-tracking' onClick={()=>{
                                        this.props.history.push({
                                            pathname:'/primary'
                                        })
                                    }}>
                                        <div className="box-btn">
                                            <p className="text-btn">Let’s Tracking </p>
                                            <i class='bx bx-right-arrow-alt'></i>
                                        </div>
                                    </div>
                                    <div className="btn btn-readmore">
                                        <div className="box-btn">
                                            <p className="text-btn">Documents </p>
                                            <i class='bx bx-right-arrow-alt'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="image-docker">
                                <img className="item-image" alt="" src={Docker_image}/>
                            </div>
                        </div>
                    </div>
                    <div className="space-140"></div>
                    <div className="project-ower">
                        <div className="layout-project-ower">
                            <div className="con-project-ower">
                                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="330">
                                    <p className="title-project-ower">Project’s <span className="highlight-color">Owners</span></p>
                                    <p className="des-project-ower">Lorem Ipsum is simply dummy text of the printing and typeset industry.<br/> Ipsum is simply dummy text.</p>
                                </div>
                                <div className="profile-project-ower">
                                    <div className="con-profile" data-aos-delay="100" data-aos-duration="1200" data-aos-offset="400" data-aos="fade-up">
                                        <div className="img-user"></div>
                                        <div className="info-user">
                                            <p className="text-name-info-user"><span className="highlight-color">Ds.</span> Lê Kim Hùng</p>
                                            <p className="text-des-info-user">Lorem Ipsum is simply dummy text of the printing<br/> and typeset industry.</p>
                                        </div>
                                    </div>
                                    <div className="con-profile" data-aos-delay="300" data-aos-duration="1200" data-aos-offset="400" data-aos="fade-up">
                                        <div className="img-user"></div>
                                        <div className="info-user">
                                            <p className="text-name-info-user"><span className="highlight-color">Ds.</span> Lê Kim Hùng</p>
                                            <p className="text-des-info-user">Lorem Ipsum is simply dummy text of the printing<br/> and typeset industry.</p>
                                        </div>
                                    </div>
                                    <div className="con-profile" data-aos-delay="500" data-aos-duration="1200" data-aos-offset="400" data-aos="fade-up">
                                        <div className="img-user"></div>
                                        <div className="info-user">
                                            <p className="text-name-info-user"><span className="highlight-color">Ds.</span> Lê Kim Hùng</p>
                                            <p className="text-des-info-user">Lorem Ipsum is simply dummy text of the printing<br/> and typeset industry.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-100"></div>
                    <div className="layout-wh-data">
                        <div className="con-wh-data">
                            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" className="img-wh-data" data-aos-delay="100" data-aos-offset="0" data-aos-duration="500"></div>
                            <div className="content-wh-data" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
                                <p className="title-wh-data">Where is <span className="highlight-color">Data</span> ?</p>
                                <p className="des-wh-data">Lorem Ipsum is simply dummy text of the printing and typeset industry. Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typeset industry. Ipsum is simply dummy text.</p>
                                <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" className ="container-btn-covid" style={{marginTop:"24px"}}>
                                    <div className='btn btn-tracking'>
                                        <div className="box-btn">
                                            <p className="text-btn">Let’s Tracking </p>
                                            <i class='bx bx-right-arrow-alt'></i>
                                        </div>
                                    </div>
                                    <div className="btn btn-readmore">
                                        <div className="box-btn">
                                            <p className="text-btn">Documents </p>
                                            <i class='bx bx-right-arrow-alt'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-100"></div>
            </div>
            
        )
    }
    
}
