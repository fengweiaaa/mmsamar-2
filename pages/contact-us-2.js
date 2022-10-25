import Link from "next/link";
import Quote2 from "../element/quote-2";
import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import ModalVideo from 'react-modal-video';
import {useState} from "react";


function ContactUs2() {
	const [isOpen, setOpen] = useState(false)
  return (
    <>
	<Header2/>
	<div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>Contact Us</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">About Us</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		<section className="content-inner-2">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-1">
							<h6 className="sub-title bgl-primary m-b20 text-primary">Watch Us</h6>
							<h2 className="title m-b15">Watch How Our Team Help You To Achive Goal</h2>
							<p>Suspendisse euismod eget lacus quis mattis. Nunc ut auctor justo, et pulvinar lorem nteger tempor nisi venenatis</p>
						</div>
						<div className="row">
							<div className="col-lg-12 col-md-6">
								<div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
									<div className="icon-bx-sm bg-white">
										<Link href="#">
											<a  className="icon-cell text-primary">
												<i className="flaticon-chat"></i>
											</a>
										</Link>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b5">Online Support</h4>
										<p>Quisque efficitur consequat turpis, eget consequat risus vulputate eunc ligula.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-12 col-md-6">
								<div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
									<div className="icon-bx-sm bg-white">
										<Link href="#">
											<a className="icon-cell text-primary">
												<i className="flaticon-bullhorn"></i>
											</a>
										</Link>
									</div>
									<div className="icon-content">
										<h4 className="dlab-title m-b5">Worldwide Marketing</h4>
										<p>Quisque efficitur consequat turpis, eget consequat risus vulputate eunc ligula.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="video-bx style-3">
							<img src="images/video/pic3.jpg" alt=""/>
							<div className="video-btn">
								<a href="#" className="popup-youtube" onClick={()=> setOpen(true)}><i className="flaticon-play"></i></a>
							</div>
						</div>
						{/*poster={} src={}*/}
						<ModalVideo poster="images/video/pic3.jpg"  channel='youtube' autoplay isOpen={isOpen} videoId="UpolBSznWp0" onClose={() => setOpen(false)} />
					</div>
				</div>
			</div>
		</section>
	</div>

       </>
  )
}

export default ContactUs2;