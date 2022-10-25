// import Image1 from "images/projects/grid/pic1";
import SimpleForm from "./simpleForm";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

function Portfolio() {
  const portfolio = [
    {
      title: "Introduction",
      category: ["Introduction"],
    },
    {
      title: "Fees",
      category: ["Fees"],
    },
    {
      title: "Enquire Now",
      category: ["Enquire Now"],
    },
    {
      title: "Entry Requirement",
      category: ["Entry Requirement"],
    },
    {
      title: "More Info",
      category: ["More Info"],
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "branding", "seo"],
      img: (
        <Image
          src="/images/projects/pic6.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-1 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "Enquire Now" ? "active" : ""}`}>
            <a
              active={filter === "Enquire Now"}
              onClick={() => setFilter("Enquire Now")}
            >
              Enquire Now
            </a>
          </li>
          <li className={`btn ${filter === "Introduction" ? "active" : ""}`}>
            <a
              active={filter === "Introduction"}
              onClick={() => setFilter("Introduction")}
            >
              Introduction
            </a>
          </li>
          <li className={`btn ${filter === "Fees" ? "active" : ""}`}>
            <a
              active={filter === "Fees"}
              onClick={() => setFilter("Fees")}
            >
              Fees
            </a>
          </li>
          <li className={`btn ${filter === "Entry Requirement" ? "active" : ""}`}>
            <a
              active={filter === "Entry Requirement"}
              onClick={() => setFilter("Entry Requirement")}
            >
              Entry Requirement
            </a>
          </li>
          <li className={`btn ${filter === "More Info" ? "active" : ""}`}>
            <a active={filter === "More Info"} onClick={() => setFilter("More Info")}>
              More Info
            </a>
          </li>
        </ul>
      </div>

      <div className="clearfix">
        <ul id="masonry" className="row" data-column-width="3">
          {projects.map((item) =>
            item.filtered === true ? (
              <>
                <div className="container" style={{minWidth:"95%"}}>
                  <div className="row">
                    <div className="col-lg-8 col-md-8">
                      <h4>{item.title}</h4>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <SimpleForm/>
                    </div>
                  </div>
                </div>
                {/*<li*/}
                {/*  className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"*/}
                {/*  data-wow-duration="2s"*/}
                {/*  data-wow-delay="0.1s"*/}
                {/*>*/}


                {/*  */}

                {/*  /!*<div className="dlab-box dlab-overlay-box style-1 m-b30">*!/*/}
                {/*  /!*  *!/*/}
                {/*  /!*  /!*<div className="dlab-info">*!/*!/*/}
                {/*  /!*  /!*  <h5 className="title">*!/*!/*/}
                {/*  /!*  /!*    <Link href="#"><a>{item.title}</a></Link>*!/*!/*/}
                {/*  /!*  /!*  </h5>*!/*!/*/}
                {/*  /!*  /!*  <p className="post-author">*!/*!/*/}
                {/*  /!*  /!*    By <Link href="#"><a>{item.author}</a></Link>*!/*!/*/}
                {/*  /!*  /!*  </p>*!/*!/*/}
                {/*  /!*  /!*</div>*!/*!/*/}
                {/*  /!*</div>*!/*/}

                {/*</li>*/}
              </>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
