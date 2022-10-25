import {Card,Button} from "react-bootstrap";
import {useEffect, useState} from "react";

import {useRouter} from "next/router";
import {Router} from "next/router";

// import './schoolCard.css'

function SchoolCard(props) {
    const router = useRouter()
    let { schoolType } = props
    let schoolData = [
        {id:1,name:'School Name1',text:'1Some quick example text to build on the card title and make up the bulk ofs co1Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:2,name:'School Name2',text:'2Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:3,name:'School Name3',text:'3Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:4,name:'School Name4',text:'4Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:5,name:'School Name5',text:'5Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:6,name:'School Name6',text:'5Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:7,name:'School Name7',text:'4Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:8,name:'School Name8',text:'5Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:9,name:'School Name9',text:'5Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
    ]
    const [mySchoolData,setmySchoolData] = useState(schoolData)
    useEffect(() => {
        console.log(123)
    },[schoolType])

    function toSchoolIntroduce(item,schoolType){//携带学校id跳转到学校介绍页
        router.push({pathname:'/schoolIntroduce',query:{item:item,schoolType}})
    }
    // function getMore() {
    //     setmySchoolData(
    //         mySchoolData.concat(schoolData2)
    //     )
    //     console.log(mySchoolData)
    // }

    let schoolData2 = [
        {id:11,name:'School Name11',text:'4Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:12,name:'School Name12',text:'5Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
        {id:13,name:'School Name13',text:'5Some quick example text to build on the card title and make up the bulk ofs content',img:'../images/blog/blog-grid-2/pic1.jpg'},
    ]
    let allSchool = mySchoolData.map((item,index) => {
        return(
            <div className="col-lg-4 col-md-6" key={index} style={{marginTop:"2vw"}}>
                <Card style={{height:"100%"}}>
                    <Card.Img variant="top" src={mySchoolData[0].img} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.text}
                        </Card.Text>
                        <Button variant="primary" onClick={() => {toSchoolIntroduce(item.name,schoolType)}}>School Details</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })
    return(
        <section>
            <div className="container" style={{minWidth:"80%"}}>
                <div className="row">
                    {allSchool}
                </div>
            </div>
            <div style={{textAlign:"center",marginTop:"3vw"}}>
                <Button variant="info" onClick={()=>{setmySchoolData(mySchoolData.concat(schoolData2))}}>Get More</Button>
            </div>
        </section>
    )
}
export default SchoolCard