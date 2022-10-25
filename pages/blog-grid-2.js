import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Link from 'next/link';
import {Pagination} from "react-bootstrap";
import {useState} from "react";
import {useRouter} from "next/router";


function BlogGrid2() {
	const router = useRouter()
	let [active,setActive] = useState(1)
	const blogs = [
		{id:1,title:"Blog1"},
		{id:2,title:"Blog2"},
		{id:3,title:"Blog3"},
		{id:4,title:"Blog4"},
		{id:5,title:"Blog5"},
		{id:6,title:"Blog6"},
		{id:7,title:"Blog7"},
		{id:8,title:"Blog8"},
		{id:9,title:"Blog9"},
	]
	let blogsShow = blogs.map((item) => {
		return(
			<div className="col-lg-4 col-md-6" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="dlab-blog style-1 m-b50 bg-white">
					<div className="dlab-info">
						<div className="dlab-meta">
							<ul>
								<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
								<li className="post-author"><i className="flaticon-user m-r10"></i>By Johne Doe</li>
								<li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
								<li className="post-share"><i className="flaticon-share"></i>
									<ul>
										<li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li>
										<li><a className="fa fa-twitter" href="https://ads.twitter.com/login"></a></li>
										<li><a className="fa fa-linkedin" href="https://in.linkedin.com/"></a></li>
									</ul>
								</li>
							</ul>
						</div>
						<h4 className="dlab-title">
							<Link href="/blog-details-2"><a>Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis lectus vel euismod.</a></Link>
						</h4>
						<p className="m-b0">Maecenas aliquet quam sed tellus cursus, eget sodales elit luctus. Proin blandit sed arcu sed ultricies. Fusce ac ligula vel enim fermentum blandit. </p>
						{/*<div className="dlab-media dlab-img-effect zoom">*/}
						{/*	<img src="images/blog/blog-grid/pic1.jpg" alt=""/>*/}
						{/*</div>*/}
					</div>

					<div className="dlab-media dlab-img-effect zoom">
						<img src="images/blog/blog-grid/pic1.jpg" alt=""/>
					</div>
				</div>
			</div>
		)
	})
	let items = [];
	for (let number = 1; number <= 10; number++) {//重写分页功能
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
  return (
   <>
	<Header2/>
      <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>{ router.query.blogType }</h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/blogHome"><a>Back</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">{ router.query.blogType }</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		
		{/* <!-- Blog Large --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container" style={{maxWidth:"80%"}}>
				<div className="row">
					{blogsShow}
                </div>
				<div className="row">
					{paginationBasic}
				</div>
			</div>
		</section>
		
	</div>
    </>
  )
}

export default BlogGrid2;