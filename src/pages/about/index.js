import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";


export const About = () => {

  const pdfd=()=>{
    setTimeout(()=>{
      toast.success("cv download sucess");
    },3000)
  }
  return (
    
    <HelmetProvider>
  
      <Container className="About-header">
        <center style={{ padding: "20px" }}>
          <img
            src={dataabout.profileimage}
            style={{
              borderRadius: "50%",
              width: "210px",
              height: "265px",
              objectFit: "cover",
              display: "inside",
              margin: "0 auto",
            }}
            alt="Profile"
          />

          <h5>0:0●━━━━━━━━━━━4:30ㅤ</h5>

          <h5>🎵🎵 ❚❚ ◁ 🎵🎵</h5>
          <h5>True music lover🎶</h5>

          <h5>🅴🅽🆃🆁🅴🅿🆁🅴🅽🅴🆄🆁</h5>

          <h4>🕉Namha shivaya</h4>
          <button className="btn ac_btn" onClick={pdfd} >
          <a href='merocv.pdf'  download='avtart cv my-2 lg:my-0'> DOWNLODA CV</a>
                   
                  </button>
        </center>

        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            
        
            
          
     
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
      
    </HelmetProvider>
   
  );
};
