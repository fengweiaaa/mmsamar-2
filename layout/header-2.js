import Link from 'next/link';
import { useState } from 'react';

import aboutUs2 from "../pages/about-us-2";
function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
        <>
            <header className="site-header mo-left header-transparent">
                <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        info@example.com
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"></i> +91
                                        987-654-3210
                                    </li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="https://en-gb.facebook.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="https://www.instagram.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-twitter"
                                            href="https://twitter.com/login?lang=en"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <img className="custom-logo-white" src="images/logo-white.png" alt="" />
                                        <img className="custom-logo" src="images/logo-2.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                    <Link href="/contact-us-2">
                                        <a className="btn btn-primary rounded-xl gradient shadow">Get A Quote</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/logo-2.png" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">

                                    <li><Link href="/"><a>Home</a></Link></li>
                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>Schools</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                            <li><Link href={{pathname:'/about-us-2',query:{name:'Kindergarten'}}}><a>Kindergarten</a></Link></li>
                                            <li><Link href={{pathname:'/about-us-2',query:{name:'Prep College'}}}><a>Prep College</a></Link></li>
                                            <li><Link href="/pricing-table-2"><a>International Schools</a></Link></li>
                                            <li><Link href="/team-2"><a>Gov Uni</a></Link></li>
                                            <li><Link href="/coming-soon"><a>Private Uni</a></Link></li>
                                            <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                            <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/major"><a>Course</a></Link></li>
                                    {/*<li className={`${open === "course" ? "open" : ""}`}><a onClick={() => setOpen("course")}><span>Course</span><i className="fa fa-chevron-down"></i></a>*/}
                                    {/*    <ul className="sub-menu">*/}
                                    {/*        <li><Link href="/services-2"><a>Services</a></Link></li>*/}
                                    {/*        <li><Link href="/services-details-2"><a>Services Details</a></Link></li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Student Service</span><i className="fa fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><Link href="/services-2"><a>Services</a></Link></li>
                                            <li><Link href="/services-details-2"><a>Services Details</a></Link></li>
                                        </ul>
                                    </li>
                                    <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><Link href="/blogHome"><a>Blog Home</a></Link></li>
                                            <li><Link href="/blog-details-2"><a>Blog Details</a></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/contact-us-2"><a>About Us</a></Link></li>
                                    {/*<li><Link href='/fengweitest'><a>fengweitest</a></Link></li>*/}
                                    {/*<li className={`${open === "fengweitest" ? "open" : ""}`}><a onClick={() => setOpen("fengweitest")}><span>fengweitest</span><i className="fa fa-chevron-down"></i></a>*/}
                                    {/*    <ul className="sub-menu">*/}
                                    {/*        <li><Link href="/fengweitest"><a>fengweitest</a></Link></li>*/}
                                    {/*        <li><Link href="/fengweitestmenu"><a>fengweitestmenu</a></Link></li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}

                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="https://en-gb.facebook.com/">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="https://twitter.com/login?lang=en">
                                            <a className="fa fa-twitter"></a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/login">
                                            <a className="fa fa-linkedin"></a>
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;
