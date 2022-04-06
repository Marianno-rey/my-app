import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({ item }) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/HomePage/ItemPage/${item.id}`} >
                <Card.Img src={item.image}></Card.Img>
            </a>
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