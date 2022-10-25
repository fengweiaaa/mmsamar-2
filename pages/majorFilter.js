import Header2 from "../layout/header-2";
import Link from "next/link";
import MajorCard from "../component/allCards/majorCard/majorCard";
import Footer2 from "../layout/footer-2";
import {Card, Form, ListGroup, ListGroupItem, Pagination, Button,InputGroup,FormControl} from "react-bootstrap";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";



function MajorFilter() {
    const router = useRouter()
    useEffect(() => {
        console.log(router.query.title)
    },[])
    let subMajorData = [
        {id:1,name:'软件工程'},
        {id:2,name:'计算机科学'},
        {id:3,name:'新闻传媒'},
        {id:4,name:'工商管理'},
        {id:5,name:'审计学'},
        {id:6,name:'会计学'},
        {id:7,name:'人文科学'},
        {id:8,name:'新闻艺术'},
        {id:9,name:'舞蹈专业'},
    ]
    let [active,setActive] = useState(1)
    let subMajorShow = subMajorData.map((item) => {
        return(
            <div className="col-lg-4 col-md-6" key={ item.id }>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="../images/blog/blog-grid-2/pic2.jpg" />
                    {/*<Card.Body>*/}

                    {/*    /!*<Card.Text>*!/*/}
                    {/*    /!*    School*!/*/}
                    {/*    /!*</Card.Text>*!/*/}
                    {/*</Card.Body>*/}
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><Card.Title>{ item.name }</Card.Title></ListGroupItem>
                        <ListGroupItem>School Name</ListGroupItem>
                        <ListGroupItem>Time:      12month</ListGroupItem>
                        <ListGroupItem>Time:      12month</ListGroupItem>
                        <ListGroupItem>Money:$12232.00</ListGroupItem>
                        <ListGroupItem
                            style={{textDecoration:"underline",cursor:'pointer'}}
                            onClick={() => {router.push({pathname:"majorIntroduce",query:{name:item.name}})}}
                        >See Details</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
        )
    })
    let items = [];
    for (let number = 1; number <= 3; number++) {//重写分页功能
        items.push(
            <Pagination.Item key={number}  onClick={() => {setActive(active = number)}} active={active === number}>
                {number}
            </Pagination.Item>,
        );
    }
    let prevDisabled = false
    function prev() {//封装向前方法
        if (active > 1){
            setActive(active = active - 1)
            console.log(1,active)
        }
    }
    function next() {
        if (active < 10){
            setActive(active = active + 1)
        }
    }
    const paginationBasic = (
        <div style={{margin:"0 auto"}}>
            <Pagination>
                <Pagination.Prev onClick={prev}/>
                {items}
                <Pagination.Next onClick={next} />
            </Pagination >
            <br />
        </div>
    );
   return(
       <div>
           <Header2></Header2>
           <div className="page-content bg-white">
               <div className="dlab-bnr-inr overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/majorbnr.png)"}}>
                   <div className="container">
                       <div className="dlab-bnr-inr-entry">
                           <h1>Chose Course</h1>
                           {/* <!-- Breadcrumb Row --> */}
                           <nav aria-label="breadcrumb" className="breadcrumb-row">
                               <ul className="breadcrumb">
                                   <li className="breadcrumb-item"><Link href="/major"><a>Course</a></Link></li>
                                   <li className="breadcrumb-item active" aria-current="page">Chose Course</li>
                               </ul>
                           </nav>
                           {/* <!-- Breadcrumb Row End --> */}
                       </div>
                   </div>
               </div>
               <div className="container" style={{minWidth:"90%",marginTop:"3vw"}}>
                   <div className="row">
                       <div className="col-lg-3">
                           <Form>
                               <h4 style={{textAlign:"center"}}>Chose To Filter</h4>
                               <br/>
                               <Form.Group>
                                   <Form.Label>Study Level</Form.Label>
                                   <Form.Control as="select" className="col-lg-12">
                                       <option>Large select</option>
                                   </Form.Control>
                                   <br/><br/>
                                   <Form.Label>Main Subject</Form.Label>
                                   <Form.Control as="select" className="col-lg-12">
                                       <option>Default select</option>
                                   </Form.Control>
                                   <br/><br/>
                                   <Form.Label>Sub Subject</Form.Label>
                                   <Form.Control as="select" className="col-lg-12">
                                       <option>Default select</option>
                                   </Form.Control>
                                   <br/><br/>
                                   <div style={{textAlign:"center"}}>
                                       <Button variant="primary" type="button">
                                           Search
                                       </Button>
                                   </div>
                               </Form.Group>
                           </Form>
                       </div>
                       <div className="col-lg-9">
                           <div className="container" style={{minWidth:"90%"}}>
                               <div className="row" style={{marginBottom:"1.5vw"}}>
                                   <InputGroup className="mb-3">
                                       <FormControl
                                           placeholder="Recipient's username"
                                           aria-label="Recipient's username"
                                           aria-describedby="basic-addon2"
                                       />
                                       <InputGroup.Append>
                                           <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                                       </InputGroup.Append>
                                   </InputGroup>
                               </div>
                           </div>
                           <div className="container" style={{minWidth:"100%"}}>
                               <div className="row">
                                   {subMajorShow}
                               </div>
                           </div>
                           <div className="container" style={{minWidth:"100%"}}>
                               <div className="row">
                                   {paginationBasic}
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   )
}
export default MajorFilter