import Footer2 from '../layout/footer-2';
import Header2 from '../layout/header-2';
import MajorCard from "../component/allCards/majorCard/majorCard";
import Link from "next/link";


function Major() {
    let major=[
        {id:1,title:'软件工程'},
        {id:2,title:'通信工程'},
        {id:3,title:'制造工程'},
        {id:4,title:'医药工程'},
        {id:5,title:'开发工程'},
        {id:6,title:'管理工程'},
    ]
    return (
        <>
            <Header2/>
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/majorbnr.png)"}}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1>Course</h1>
                            {/* <!-- Breadcrumb Row --> */}
                            <nav aria-label="breadcrumb" className="breadcrumb-row">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Course</li>
                                </ul>
                            </nav>
                            {/* <!-- Breadcrumb Row End --> */}
                        </div>
                    </div>
                </div>
                <div>
                    <MajorCard major={major}></MajorCard>
                </div>
            </div>
        </>
    )
}

export default Major;