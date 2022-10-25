import Header from "../layout/header-2";
import Link from "next/link";
import {Card,Button} from "react-bootstrap";
import {useRouter} from "next/router";
import styles from './blogHome.module.scss'


function BlogHome() {
    const router = useRouter()
    const hotBlogs = [
        {id:1,title:"热点新闻1"},
        {id:2,title:"热点新闻2"},
        {id:3,title:"热点新闻3"},
        {id:4,title:"热点新闻4"},
    ]
    const blogTypes = [
        {id:1,title:"新闻类型1"},
        {id:2,title:"新闻类型2"},
        {id:3,title:"新闻类型3"},
        {id:4,title:"新闻类型4"},
        {id:5,title:"新闻类型5"},
        {id:6,title:"新闻类型6"},
        {id:7,title:"新闻类型7"},
        {id:8,title:"新闻类型8"},
    ]
    const hotBlogsShow = hotBlogs.map((item) => {
        return(
            <div className="col-lg-6 col-md-6">
                <Card style={{width:"100%"}}>
                    <Card.Img style={{borderRadius:"0"}} variant="top" src="../images/blog/blog-grid-2/pic1.jpg" />
                    <Card.Body>
                        <Card.Text>
                            <h5>{item.title}</h5>
                        </Card.Text>
                        <Card.Text>
                            Some quick example text to build on the
                        </Card.Text>
                        {/*<Button variant="primary">Detail</Button>*/}
                    </Card.Body>
                    <Card.Footer style={{borderRadius:'0'}}>
                        <small className="text-muted" >Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    })
    const blogTypesShow = blogTypes.map((item) => {
        return(
            <div onClick={() => {router.push({pathname:'/blog-grid-2',query:{blogType:item.title}})}} className="col-lg-3 col-md-6 col-6">
                <Card>
                    <Card.Img variant="top" src="../images/blog/blog-grid-2/pic2.jpg" />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    })
    return(
        <>
            <Header/>
            <div className="page-content bg-white">
                {/* <!-- Banner  --> */}
                <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{ backgroundImage: "url(images/banner/bnr6.png)" }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1>Blogs</h1>
                            {/* <!-- Breadcrumb Row --> */}
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                                </ul>
                            </nav>
                            {/* <!-- Breadcrumb Row End --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Banner End --> */}
            </div>
            <div className="container" style={{maxWidth:"100%"}}>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <Card style={{height:"96.5%"}}>
                            <Card.Img style={{borderRadius:"0"}} variant="top" src="../images/blog/blog-grid-2/pic2.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.Some quick example text to build on the card title and make up the bulk of
                                    the card's content.Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                {/*<Button variant="primary">Go somewhere</Button>*/}
                            </Card.Body>
                            <Card.Footer style={{borderRadius:'0'}}>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="row">
                            {hotBlogsShow}
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:"2vw"}}>
                    {blogTypesShow}
                </div>
            </div>
        </>
    )
}
export default BlogHome