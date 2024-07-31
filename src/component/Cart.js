import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, ListGroup, Button, Form, Alert } from 'react-bootstrap';
import { removeItem, clearCart } from '../Redux/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector(state => state.cart);
  const [shipmentMethod, setShipmentMethod] = useState('Standard');
  const [showHelp, setShowHelp] = useState(false);

  const handleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <Container className="mt-4">
      <h2>Your Cart</h2>
      <ListGroup>
        {items.map(item => (
          <ListGroup.Item key={item.id}>
            {item.name} - R{item.price}
            <Button
              variant="danger"
              className="float-right m-1"
              onClick={() => dispatch(removeItem(item))}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h3 className="mt-3">Total: R{totalAmount}</h3>
      <Form.Group controlId="formShipment">
        <Form.Label>Shipment Method</Form.Label>
        <Form.Control className ="mb-2"   as="select" value={shipmentMethod} onChange={(e) => setShipmentMethod(e.target.value)}>
          <option>Standard</option>
          <option>Express</option>
        </Form.Control>
      </Form.Group>
      <Button className="m-2" variant="danger" onClick={() => dispatch(clearCart())}>Clear Cart</Button>
      <Button variant="info" onClick={handleHelp} >
        {showHelp ? 'Hide Help' : 'Help'}
      </Button>
      {showHelp && (
        <Alert variant="info" className="mt-3">
          <p>Standard Shipping: 5-7 business days.</p>
          <p>Express Shipping: 2-3 business days.</p>
        </Alert>
      )}
    </Container>
  );
};

export default Cart;
