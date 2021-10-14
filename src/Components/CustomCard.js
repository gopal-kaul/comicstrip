import ReactCardFlip from "react-card-flip";
import { useState } from "react";

import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
const CustomCard = ({ gameImg, gameName }) => {
  const [flip, setFlip] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFlip(true);
  };
  return (
    <div>
      <ReactCardFlip
        isFlipped={flip}
        flipDirection="horizontal"
        flipSpeedFrontToBack={1}
      >
        <>
          <button
            style={{ backgroundColor: "transparent", borderStyle: "hidden"}}
            onClick={handleClick}
          >
            <img top width="100%" src="assets/card_back.png" alt={gameName} style={{borderRadius:"4%"}}/>
          </button>
        </>
        <Card style={{width:232, height:348}}>
          <CardImg top width="100%" src={`assets/${gameImg}`} alt={gameName} />
          <CardBody>
            <CardTitle tag="h3" style={{textAlign: "center"}}>{gameName}</CardTitle>
          </CardBody>
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default CustomCard;
