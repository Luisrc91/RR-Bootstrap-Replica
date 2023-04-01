import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";

function Background() {
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexBasis:'auto'}}>
      <div>
      <Card style={{ width: "1300px", minHeight: "250px", marginBottom: "50px", backgroundColor: "#DEEED6", border: 'none'}} className="text-black">
        
        <Card.ImgOverlay style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
          <Card.Title style={{ fontSize: "2.5em", fontWeight: "bold" }}>Order groceries for delivery or pickup today</Card.Title>
          <Card.Text style={{ fontSize: "1em" }}>
            Whatever you want from local stores, brought right to your door.
          </Card.Text>
          {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </Card.ImgOverlay>
        
      </Card>
      </div>
      <div>
        <Card.Img  style={{ height: "250px", width: "20%",position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
          src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
          alt="Card image"
        />

      </div>
    </div>
  );
}

export default Background;
