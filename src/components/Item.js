import React from 'react'
import { Card } from 'react-bootstrap'

function Item({ item }) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={'${product.id}'}>
            </a>
            
            <Card.Body>
                <a href={'${product.id}'}>
                    <Card.Title as="div">
                        <strong>{item.item_name}</strong>
                    </Card.Title>
                </a>
                
                <Card.Text as="h3">
                    ${item.price}
                </Card.Text>
            </Card.Body>
            
            
        </Card>
    )
}

export default Item;