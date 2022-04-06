import { Button, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import Item from '../components/Item';
import axios from 'axios';
const Admin = () => {
  // Add, delete and modify items
  const deleteItem = useState('');
  const editItem = useState('');
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchProducts() {

      const { data } = await axios.get('http://34.123.91.205/search/')
      setProducts(data)
    }

    fetchProducts()

  }, [])
  // display orders, display users, and modify user status
  return (
    <div>
      <Button>Show Orders</Button>
      <Button>Show Users</Button>
      <Button>Show Products</Button>
      <Button>Edit products</Button>
      <div>
        <Row>
          {products.map(item => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Admin;