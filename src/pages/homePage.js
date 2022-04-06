import "../styles/styles.css";
import {useState, useEffect} from 'react';
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Item  from '../components/Item';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

      async function fetchProducts() {
          
          const { data } = await axios.get('http://34.123.91.205/get-items/')
          setProducts(data)
      }
      
      fetchProducts()

  }, [])

  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(item => (
                <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
                    <Item item={item} />
                </Col>
            ))}
        </Row>
    </div>
)
}


export default Homepage;

// This page should firstly render all items. 
// This page should then conditionally render the item page directly from here.
// Only one thing needs to be passed to the ItemPage and that is "item" ex <ItemPage item={item} />
// Almost certainly requires refactoring.
// Current implementation assumes ItemPage is a child of Item

