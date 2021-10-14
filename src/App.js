import Card from "./Components/CustomCard";
import { Container, Row, Col } from "reactstrap";
function App() {
  const row1 = [
    {
      gameName: "Road Rash",
      gameImg: "roadrash.jpg",
    },
    {
      gameName: "Mario",
      gameImg: "mario.jpg",
    },
    {
      gameName: "Contra",
      gameImg: "contra.jpg",
    },
    {
      gameName: "Prince of Persia",
      gameImg: "pop.jpg",
    },
    {
      gameName: "Grand Theft Auto: Vice City",
      gameImg: "gta-vc.jpg",
    },
  ];
  const row2 = [
    {
      gameName: "VALORANT",
      gameImg: "valorant.jpg",
    },
    {
      gameName: "Fireboy & Watergirl",
      gameImg: "fbandwg.jpg",
    },
    {
      gameName: "Tomb Raider",
      gameImg: "tombraider.webp",
    },
    {
      gameName: "Clash of Clans",
      gameImg: "coc.jpg",
    },
    {
      gameName: "HALO",
      gameImg: "halo.jpg",
    },
  ];
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/back.png"})`,
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
