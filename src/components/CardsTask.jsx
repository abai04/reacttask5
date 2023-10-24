import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const cards = [
    {title: "card1", description: 'some text for card 1', image: ""},
    {title: "card2", description: 'some text for card 2', image: ""}
]

const CardsTask = () => {
    const [isShown, setShown] = useState("none")
    const [buttonShown, setButtonShown] = useState("")

    const changeState = () => {
        setShown("block")
        setButtonShown("none")
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cards[0].image} />
      <Card.Body>
        <Card.Title>{cards[0].title}</Card.Title>
        <Card.Text>
          {cards[0].description}
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', display: isShown }}>
      <Card.Img variant="top" src={cards[1].image} />
      <Card.Body>
        <Card.Title>{cards[1].title}</Card.Title>
        <Card.Text>
          {cards[1].description}
        </Card.Text>
      </Card.Body>
    </Card>
    <Button style={{display: buttonShown}} onClick={changeState}>ShowMore</Button>
        </div>
    );
};

export default CardsTask;