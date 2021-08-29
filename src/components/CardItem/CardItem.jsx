import React from "react";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ItemCount from "../itemCount/itemCount";
import "./CardItem.css";

const CardItem = ({ data }) => {
  return (
    <div className="cardItem">
      <Card>
        <Card.Content>
          <Image src={data.img} alt="Wallpaper del juego" />
          <Card.Header id="title">{data.name}</Card.Header>
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
        <ItemCount stock={data.stock} />
      </Card>
    </div>
  );
};

export default CardItem;
