import React from "react";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import "./CardItem.css";

const CardItem = ({ data }) => {
  return (
    <div className="cardItem">
      <Card>
        <Card.Content>
          <Image src={data.img} alt="Wallpaper del juego" />
          <Card.Header id="title">{data.name}</Card.Header>
          <Card.Meta id="info">{data.platform}</Card.Meta>
          <Card.Meta id="info">{data.price}</Card.Meta>
          <Card.Description id="descripcion">
            {data.description}
          </Card.Description>
        </Card.Content>
        <Card.Description>
          <span>El precio no incluye impuestos</span>
        </Card.Description>
        <Card.Description>
          <span>Stock: {data.stock}</span>
        </Card.Description>

        <button>
          <Link to={`/detail/${data.gameID}`} id="link">
            Ver más
          </Link>
        </button>
      </Card>
    </div>
  );
};

export default CardItem;
