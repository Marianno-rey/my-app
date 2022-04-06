import "../styles/styles.css";
import {useState, useEffect} from 'react';
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Item  from '../components/Item';

function Homepage() {
  const [products, setProducts] = useState([])

  useEffect(() => {

      async function fetchProducts() {
          
          const { data } = await axios.get('http://34.123.91.205/search/')
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