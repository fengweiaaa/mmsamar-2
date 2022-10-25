import Slider from "react-slick";

function TeamSlider() {
  const teamData = [
    {id:1,name:'Teacher1',position:'Team Leader1'},
    {id:2,name:'Teacher2',position:'Team Leader2'},
    {id:3,name:'Teacher3',position:'Team Leader3'},
    {id:4,name:'Teacher4',position:'Team Leader4'},
    {id:5,name:'Teacher5',position:'Team Leader5'},
    {id:6,name:'Teacher6',position:'Team Leader6'},
  ]
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1	,
          infinite: true,
          dots: true,
        },
      },
	  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],

  };
  let teamShow = teamData.map((item) => {
    return(
        <div
      className="item wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
      key={item.id}
    >
      <div className="dlab-team style-1 m-b10">
        <div className="dlab-media">
          <a>
            <img src="images/team/pic2.jpg" alt="" />
          </a>
        </div>
        <div className="dlab-content">
          <div className="clearfix">
            <h4 className="dlab-name">
              <a>{item.name}</a>
            </h4>
            <span className="dlab-position">{item.position}</span>
            <h6>Msc NTU,Msc Mornash</h6>
          </div>
          <ul className="dlab-social-icon primary-light">
            <li>
              <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  })
  return (
    <>
      <div className="section-head style-1 text-center" style={{marginTop:"4vw"}}>
        <h6 className="sub-title bgl-primary m-b20 text-primary">Team</h6>
        <h2 className="title">Our Best Expertise</h2>
      </div>
      <Slider{...settings} className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full">
            {teamShow}
      </Slider>
    </>
  );
}

export default TeamSlider;
