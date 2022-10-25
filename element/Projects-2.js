import Portfolio2 from "../component/portfolio-2";
import BlogSlider from "../component/blogSlider";


function Projects2() {
    return (
      <>
        {/* <!-- Projects --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg17.png)","backgroundSize":"cover","backgroundPosition":"top center","backgroundRepeat":"no-repeat"}}>
			<div className="container" style={{maxWidth:"80%"}}>
				<div className="section-head style-3 text-center">
					<h6 className="sub-title text-primary bgl-primary m-b15">Student Case</h6>
					<h2 className="title">Take A Look At Our Student Case</h2>
				</div>
				{/*<Portfolio2/>*/}
				<BlogSlider/>
			</div>
		</section>
      </>
    )
  }
  
  export default Projects2;