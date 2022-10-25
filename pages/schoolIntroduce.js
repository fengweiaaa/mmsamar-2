import Header2 from "../layout/header-2";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect,useState} from "react";
import {Card,Button,Accordion,Badge,Image,Carousel,Table,InputGroup,FormControl} from "react-bootstrap";
import styles from './schoolIntroduce.module.scss'
import React from 'react';
import GoogleMapReact from 'google-map-react';
import SimpleForm from "../component/simpleForm";



function SchoolIntroduce() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    let router = useRouter()
    let item = router.query.item
    useEffect(() => {
        console.log(item)
    },[item])
    let subjectLeve = [
        {id:1,name:"本科课程",count:11},
        {id:2,name:"预科课程",count:5},
        {id:3,name:"硕士课程",count:13},
        {id:4,name:"大专课程",count:20},
    ]
    let subjectLeveShow = subjectLeve.map((item) => {
        return(
            //defaultActiveKey='0'
            <Accordion defaultActiveKey='0'>
                <Card>
                    <Card.Header style={{backgroundColor:"lightblue",borderRadius:"20px"}}>
                        <Accordion.Toggle as={Button}  variant="link" eventKey="0">
                            { item.name } <Badge variant="light">{ item.count }</Badge>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        {/*<Card.Body>Hello! I'm the body</Card.Body>*/}
                        <Card.Body>
                            {/*<ListGroup className="list-group-flush">*/}
                            {/*    <ListGroupItem>Cras justo odio</ListGroupItem>*/}
                            {/*    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>*/}
                            {/*    <ListGroupItem>Vestibulum at eros</ListGroupItem>*/}
                            {/*</ListGroup>*/}
                            <Table>
                                <thead>
                                <tr>
                                    <th>学科</th>
                                    <th>学制</th>
                                    <th>学费</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    })
    let schoolBanner = [
        {id:1,img:"images/banner/bnr6.png"},
        {id:2,img:"images/banner/majorbnr.png"},
        {id:3,img:"images/banner/bnr6.png"},
    ]
    let schoolBannerShow = schoolBanner.map((item) => {
        return(
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={item.img}
                    alt="First slide"
                />
            </Carousel.Item>
        )
    })
    let cooperUniversity = [
        {id:1,img:"images/testImages/schoollogo.png",name:"GoodUniversity"},
        {id:2,img:"images/testImages/schoollogo.png",name:"BadUniversity"},
        {id:3,img:"images/testImages/schoollogo.png",name:"GoodUniversity"},
        {id:4,img:"images/testImages/schoollogo.png",name:"GoodUniversity"},
        {id:5,img:"images/testImages/schoollogo.png",name:"GoodUniversity"},
    ]
    let cooperUniversityShow = cooperUniversity.map((item) => {
        return(
            cooperUniversity !== ""?<div className="col-lg-2 col-md-2" style={{margin:'1vw auto'}}>
                <img style={{borderRadius:"20px"}} width="100%" src={item.img} alt=""/>
                <h5 style={{textAlign:"center",marginTop:"1vw",width:"100%"}}>{item.name}</h5>
            </div>:<div>No cooperUniversity</div>
        )
    })
    return(
        <>
            <Header2></Header2>
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/majorbnr.png)"}}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1>{ item }</h1>
                            {/* <!-- Breadcrumb Row --> */}
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li onClick={()=>{router.back()}} className="breadcrumb-item" ><div><a>{router.query.schoolType}</a></div></li>
                                    <li className="breadcrumb-item active" aria-current="page">{ item }</li>
                                </ul>
                            </nav>
                            {/* <!-- Breadcrumb Row End --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{minWidth:'100%',margin:"2vw auto",padding:"0"}}>
                <div>
                    <div className={styles.banner}>
                        <Carousel>
                            {schoolBannerShow}
                        </Carousel>
                        <div className={styles.logoImg}>
                            <Image src="images/testImages/schoollogo.png" rounded />
                        </div>
                    </div>
                    <h2 className={styles.schoolTitle}>{ item }</h2>
                    <div className="container" style={{minWidth:"90%"}}>
                        <div className="row">
                            <div className="col-lg-8">
                                <div style={{marginBottom:"1vw"}}>
                                    <Card.Title>Introduce</Card.Title>
                                </div>
                                <Card.Text>
                                    SCHOOL OF FOUNDATION STUDIES
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
                                    subjects and skills. The School also runs study tours
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
                                    subjects and skills. The School also runs study tours
                                </Card.Text>
                            </div>
                            <div className="col-lg-4">
                                <div style={{marginBottom:"1vw"}}>
                                    <Card.Title>Address</Card.Title>
                                </div>
                                <div>
                                    <div>
                                        21 Lower Kent Ridge Rd, 新加坡 11907721 Lower Kent Ridge Rd, 新加坡 119077
                                        experiential learning journeys and interactive activities that focus on different
                                    </div>
                                    <div>
                                        <div style={{ height: '400px', width: '100%' }}>
                                            <GoogleMapReact
                                                bootstrapURLKeys={{ key: "" }}
                                                defaultCenter={defaultProps.center}
                                                defaultZoom={defaultProps.zoom}
                                            >
                                            </GoogleMapReact>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='row justify-content-around'>
                                            <Button className="col-lg-3 col-md-3 col-5" variant="primary" style={{marginTop:'1vw',backgroundColor:"lightblue",border:"none"}}>Download</Button>
                                            <Button className="col-lg-3 col-md-3 col-5" variant="primary" style={{marginTop:'1vw',backgroundColor:"lightblue",border:"none"}}>Application</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container" style={{minWidth:"100%"}}>
                        <div className="row justify-content-around" style={{margin:"3vw auto",backgroundColor:"lightblue"}}>
                            <div className="col-lg-12" style={{marginTop:'1vw'}}>
                                <Card.Title>University Partners</Card.Title>
                            </div>
                            {cooperUniversityShow}
                        </div>
                    </div>
                    <div className="container" style={{minWidth:"90%"}}>
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div style={{marginBottom:"1vw"}}><Card.Title>Course</Card.Title></div>
                                {subjectLeveShow}
                            </div>
                            <div className="col-lg-4">
                                <SimpleForm/>
                                {/*<div style={{marginBottom:"1vw"}}><Card.Title>Fill in information</Card.Title></div>*/}
                                {/*<InputGroup className="mb-3" style={{marginTop:"2vw"}}>*/}
                                {/*    <FormControl*/}
                                {/*        placeholder="Username"*/}
                                {/*        aria-label="Username"*/}
                                {/*        aria-describedby="basic-addon1"*/}
                                {/*    />*/}
                                {/*</InputGroup>*/}
                                {/*<InputGroup className="mb-3" style={{marginTop:"2vw"}}>*/}
                                {/*    <FormControl*/}
                                {/*        placeholder="UserEmail"*/}
                                {/*        aria-label="UserEmail"*/}
                                {/*        aria-describedby="basic-addon1"*/}
                                {/*    />*/}
                                {/*</InputGroup>*/}
                                {/*<InputGroup className="mb-3" style={{marginTop:"2vw"}}>*/}
                                {/*    <FormControl*/}
                                {/*        placeholder="WhatsApp/Telegram"*/}
                                {/*        aria-label="WhatsApp/Telegram"*/}
                                {/*        aria-describedby="basic-addon1"*/}
                                {/*    />*/}
                                {/*</InputGroup>*/}

                                {/*<div style={{textAlign:"center",}}>*/}
                                {/*    <Button className="col-lg-3 col-md-3 col-5" variant="primary" style={{marginTop:'1vw',backgroundColor:"lightblue",border:"none"}}>Submit</Button>*/}
                                {/*</div>*/}

                            </div>
                        </div>

                    </div>
                    <div className="container" style={{minWidth:"100%"}}>
                        <div className="row justify-content-between" style={{margin:"3vw auto",backgroundColor:"lightgray"}}>
                            <div className="col-lg-12" style={{marginTop:'1vw'}}>
                                <Card.Title>Similar Schools</Card.Title>
                            </div>
                            {cooperUniversityShow}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SchoolIntroduce