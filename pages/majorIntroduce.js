import Header2 from "../layout/header-2";
import React from "react";
import styles from "./majorIntroduce.module.scss"
import {useRouter} from "next/router";
import {Card,ListGroup,ListGroupItem} from "react-bootstrap";
import projects from "../element/projects";
import Projects from "../element/projects";
import SimpleForm from "../component/simpleForm";

function MajorIntroduce() {
    const router = useRouter()
    return(
        <>
            <Header2></Header2>
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/majorbnr.png)"}}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1>{router.query.name}</h1>
                            {/* <!-- Breadcrumb Row --> */}
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li onClick={()=>{router.push('major')}} className="breadcrumb-item" >Course</li>
                                    <li onClick={()=>{router.back()}} className="breadcrumb-item" >SubCourse</li>
                                    <li className="breadcrumb-item active" aria-current="page">{router.query.name}</li>
                                </ul>
                            </nav>
                            {/* <!-- Breadcrumb Row End --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{minWidth:"90%"}}>
                <div className="row">
                    <div className="col-lg-9 col-md-9">
                        <div className="container" style={{minWidth:"90%"}}>
                            <div className="row">
                                <h4 style={{margin:"2vw auto"}}>{router.query.name}</h4>
                            </div>
                            <div className="row align-items-center">
                                <h4 className="col-lg-7 col-md-7">
                                    <div>Award by<img src="images/testImages/schoollogo.png" alt=""/></div>
                                </h4>
                                <div className="col-lg-5 col-md-5">
                                    <h4>QS Ranking:173</h4>
                                    <h4>Times Ranking:184</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <p>subjects and skills. The School also runs study tours
                                        The School of Foundation Studies offers programmes that are designed
                                        to get young students started in their education journey in PSB Academy.
                                        These programmes will provide students with the knowledge as well as i
                                        nterpersonal skills, linguistic skills
                                        and general competence upon which to prepare the students for future education.
                                        Lessons within each course are designed with experiential learning journeys
                                        and interactive activities that focus on different subjects and skills. The
                                        School also runs study tours and short-term language skill workshops
                                        SCHOOL OF FOUNDATION STUDIES The School of Foundation Studies offers programme
                                        s that are designed to get young students started in their education journey in PSB Academy.
                                        These programmes will provide students with the knowledge as well as i nterpers
                                        onal skills, linguistic skills and general competence upon which to prepare the
                                        students for future education. Lessons within each course are designed with
                                        experiential learning journeys and interactive activities that focus on different
                                        subjects and skills. The School also runs study tours</p>
                                </div>
                            </div>
                            <div className="row" style={{backgroundColor:"lightblue",marginTop:"2vw"}}>
                                <div className="col-lg-12"  style={{margin:"1vw 0"}}>
                                    <h4>Program Overview</h4>
                                </div>
                                <Card.Body>
                                    <div className="col-lg-12">
                                        <ul className="row justify-content-around">
                                            <li className="col-lg-4 col-md-6">
                                                <h5>
                                        <span>
                                            <img style={{height:"30px",width:"30px"}} src="images/icon1/iconbook.png" alt=""/>&nbsp;&nbsp;
                                        </span>
                                                    <span>Academic Level:</span>
                                                    <span style={{opacity:.6}}>Bachelor</span>
                                                </h5>
                                            </li>
                                            <li className="col-lg-4 col-md-6">
                                                <h5>
                                        <span>
                                            <img style={{height:"30px",width:"30px"}} src="images/icon1/icontime.png" alt=""/>&nbsp;&nbsp;
                                        </span>
                                                    <span>Learning Mode:</span>
                                                    <span style={{opacity:.6}}>Full tIme/Part Time</span>
                                                </h5>
                                            </li>
                                            <li className="col-lg-4 col-md-6">
                                                <h5>
                                        <span>
                                            <img style={{height:"30px",width:"30px"}} src="images/icon1/iconhat.png" alt=""/>&nbsp;&nbsp;
                                        </span>
                                                    <span>Duration:</span>
                                                    <span style={{opacity:.6}}>18month</span>
                                                </h5>
                                            </li>
                                            <li className="col-lg-4 col-md-6" style={{marginTop:"1vw"}}>
                                                <h5>
                                        <span>
                                            <img style={{height:"30px",width:"30px"}} src="images/icon1/icondoc.png" alt=""/>&nbsp;&nbsp;
                                        </span>
                                                    <span>Academic Level:</span>
                                                    <span style={{opacity:.6}}>Bachelor</span>
                                                </h5>
                                            </li>
                                            <li className="col-lg-4 col-md-6" style={{marginTop:"1vw"}}>
                                                <h5>
                                        <span>
                                            <img style={{height:"30px",width:"30px"}} src="images/icon1/iconhome.png" alt=""/>&nbsp;&nbsp;
                                        </span>
                                                    <span>Academic Level:</span>
                                                    <span style={{opacity:.6}}>Bachelor</span>
                                                </h5>
                                            </li>
                                            <li className="col-lg-4 col-md-6" style={{marginTop:"1vw"}}>
                                                <h5>
                                        <span>
                                            <img style={{height:"30px",width:"30px"}} src="images/icon1/icondol.png" alt=""/>&nbsp;&nbsp;
                                        </span>
                                                    <span>Fees:</span>
                                                    <span style={{opacity:.6}}>$18281</span>
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </div>
                            <div>
                                <Projects/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div style={{position:"sticky",top:"200px",marginTop:"50px",boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",backgroundColor:"whitesmoke",textAlign:"center"}}>
                            <div>
                                <Card.Img variant="top" src="images/testImages/schoollogo.png" />
                                <div>
                                    <Card.Title>Card Title</Card.Title>
                                </div>
                                <Card.Text>
                                    ubjects and skills. The School also runs study tours
                                    The School of Foundation Studies offers programmes that are designed
                                    to get young students started in their education journey in PSB Academy.
                                    These programmes will provide students with the knowledge as well as i
                                    nterpersonal skills, linguistic skills
                                </Card.Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MajorIntroduce