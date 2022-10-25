import Portfolio from "../component/portfolio";

function Projects() {
    return (
        <>
            <section className="content-inner" >
                <div className="container" style={{minWidth:"100%"}}>
                    <div className="section-head style-1 text-center">
                        <h4 className="title">
                            Detailed Information
                        </h4>
                    </div>

                    <Portfolio />
                </div>
            </section>
        </>
    );
}

export default Projects;
