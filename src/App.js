import Card from "./Components/CustomCard";
import { Container, Row, Col } from "reactstrap";
function App() {
  const row1 = [
    {
      gameName: "Grand Theft Auto V",
      gameImg: "deathnote.jpg",
    },
    {
      gameName: "Need For Speed: Most Wanted 2012",
      gameImg: "deathnote.jpg",
    },
    {
      gameName: "Red Dead Redemption II",
      gameImg: "deathnote.jpg",
    },
    {
      gameName: "Counter Strike: Global-Offensive",
      gameImg: "deathnote.jpg",
    },
    {
      gameName: "VALORANT",
      gameImg: "deathnote.jpg",
    },
  ];
  const row2 = [
    {
      gameName: "Player's Unknown Battle Grounds",
      gameImg: "deathnote.jpg",
    },
    {
      gameName: "HALO",
      gameImg: "deathnote.jpg",
    },
    {
      gameName: "Fall Guys",
      gameImg: "deathnote.jpg",
    },
    {
      gameName: "Rocket League",
      gameImg: "deathnote.jpg",
    },
    {
      gameName: "Genshin Impact",
      gameImg: "deathnote.jpg",
    },
  ];
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "assets/back.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container style={{ paddingTop: "0.25%" }}>
        <h1
          style={{
            fontFamily: "Patrick Hand",
            fontWeight: 900,
            fontSize: "7rem",
            textAlign: "center",
          }}
        >
          COMIC STRIP
        </h1>
        <Row className="myRow" style={{ marginBottom: "2.5%" }}>
          {row1.map((item, index) => {
            return (
              <Col key={index}>
                <Card gameImg={item.gameImg} gameName={item.gameName} />
              </Col>
            );
          })}
        </Row>
        <Row className="myRow">
          {row2.map((item, index) => {
            return (
              <Col key={index}>
                <Card gameImg={item.gameImg} gameName={item.gameName} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
