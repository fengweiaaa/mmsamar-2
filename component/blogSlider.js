import Link from 'next/link';
import { useState } from 'react';
import Slider from "react-slick";

function BlogSlider() {
    const [asd, setAsd] = useState();
    const settings = {
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed:5000,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode:false,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				
			  }
			},
		]
    };
    const renderArrows = () => {
        return (
            <div className="owl-nav">
                <div
                    className="owl-prev"
                    onClick={() => asd.slickPrev()}
                >
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div
                    className="owl-next"
                    onClick={() => asd.slickNext()}
                >
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        );
    };
    const caseData = [
        {id:1}, {id:2}, {id:3}, {id:4}, {id:5},{id:6},
    ]
    const caseDataShow = caseData.map((item) => {
        return(
            <div
                key={item.id}
                className="item wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
            >
                <div className="dlab-blog style-1 bg-white text-center" style={{outline:"1px solid red"}}>
                    <div className="dlab-media">
                        <img src="images/case.png" alt=""/>
                    </div>
                    <div className="dlab-info" style={{padding:"0 30px 30px 30px"}}>
                        <div className="dlab-meta meta-bottom">
                            <ul>
                                <li>
                                    <div style={{textAlign:"left"}}>
                                        <div style={{height:"5vw",width:"5vw",outline:"1px solid red"}}>
                                            <img style={{borderRadius:"50%",outline:"1px solid red"}} height="100%" width="100%" src="../images/blog/blog-grid-2/pic2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li className="post-date">
                                    <div style={{textAlign:"left"}}>
                                        <h5>新加坡管理大学</h5>
                                        <div>科学硕士专业</div>
                                        <i className="flaticon-clock m-r10"></i>
                                        7 March, 2020
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <div className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary" style={{"position":"relative"}}>
                <Slider ref={c => setAsd(c)}
                {...settings} 
                >
                    {caseDataShow}
                </Slider>
                {renderArrows()}
            </div>
        </>
    );
}

export default BlogSlider;
