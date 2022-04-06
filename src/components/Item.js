import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/HomePage/ItemPage/${item.id}`}  state={item}>
                <Card.Img src={item.image} ></Card.Img>
            </Link>
            <Card.Body>

                <Link to="/ItemPage">
                    <Card.Title as="div">
                        <strong>{item.item_name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="h3">
                    ${item.price}
                </Card.Text>
            </Card.Body>


        </Card>
    )
}

export default Item;

// This page is a child of homepage. It is being rendered from the homepage
// This page CANNOT have the itemPage as a child. I mean it can but we should not do it like that
