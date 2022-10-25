import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Link from "next/link";

function MajorCard(props) {
    const { major } = props
    let majorShow = major.map((item) => {
        return(
            <div className="col-lg-4 col-md-6">
                <Card>
                    <Card.Img variant="top" src="../images/blog/blog-grid-2/pic2.jpg" />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Link>
                            <Link href={{pathname:"/majorFilter",query:{title:item.title}}}>See More</Link>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    })
    return(
        <div className="container" style={{minWidth:"80%"}}>
            <div className="row" style={{margin:"0 auto"}}>
                {majorShow}
            </div>
        </div>
    )
}
export default MajorCard