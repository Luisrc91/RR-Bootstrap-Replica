import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function StoreListing() {
  return (
    <div style={{ margin: "auto" }}>
      <h2
        style={{
          fontSize: "36px",
          lineHeight: "50px",
          marginTop: "20px",
          textAlign: "center",
          fontWeight: "normal",
        }}
      >
        Browse stores in Houston
      </h2>

      <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <row style={{ width: "400px", boxShadow: "0px 2px 8px #9E9E9E",'borderRadius':'10px',  }}>
            {" "}
            <Col sm="1">
              <Row
                style={{
                  // border: "solid black 1px",
                  height: "100px",
                  flexDirection: "column",
                  justifyContent: "center",
                  
                }}
              >
                <Col xs=".5">
                  <Image
                    style={{
                      height: "55px",
                      width: "50px",
                      border: "1px solid #E8E9EB",
                    }}
                    src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png"
                    roundedCircle
                  />
                </Col>
                <Col>
                  <h5 style={{ fontWeight: "bold", padding:'0px 10px;'  }}>ALDI</h5>
                  <p style={{ margin:'0', padding:'0px 10px;'  }}>Delivery * Pickup</p>
                </Col>
              </Row>
            </Col>
          </row>

          <row style={{ width: "400px", boxShadow: "0px 2px 8px #9E9E9E",borderRadius:'10px' }}>
            {" "}
            <Col sm="1">
              <Row
                style={{
                  // border: "solid black 1px",
                  height: "100px",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Col xs=".5">
                  <Image
                    style={{
                      height: "55px",
                      width: "50px",
                      border: "1px solid #E8E9EB",
                    }}
                    src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png"
                    roundedCircle
                  />
                </Col>
                <Col style={{}}>
                  <h5 style={{fontSize:'20px', fontWeight: "bold", margin:'0',padding:'0px 10px;'  }}>Sprouts Farmers Market</h5>
                  <p style={{ margin:'0',padding:'0px 10px;'  }}> Delivery * Pickup</p>
                </Col>
              </Row>
            </Col>
          </row>

          <row style={{ borderRadius:'10px', width: "400px", boxShadow: "0px 2px 8px #9E9E9E" }}>
            {/* rgba(0,0,0,0.16) 0px 2px 8px; */}
            <Col sm="1">
              <Row
                style={{
                  // border: "solid black 1px",
                  height: "100px",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Col xs=".5">
                  <Image
                    style={{
                      height: "55px",
                      width: "50px",
                      border: "1px solid #E8E9EB",
                    }}
                    src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/57/29520839-7042-45a0-af82-54f973b4abe5.png"
                    roundedCircle
                  />
                </Col>
                <Col md="6" style={{display:'column'}}>
                  <h5 style={{  fontWeight: "bold", margin:'0',padding:'0px 10px;'  }}>Publix</h5>
                  <p style={{  margin:'0', padding:'0px 10px;' }}>Delivery</p>
                </Col>
              </Row>
            </Col>
          </row>
        </Row>
      </Container>
    </div>
  );
}

// style={{border:'solid black 1px', width:'500px' }}
