import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { addItem } from '../Redux/CartSlice';

const products = [
    
        { id: 1, title: 'Fresh Corn on the Cob',   
          description: 'Highlights the simplicity and appeal of this classic summer vegetable.', 
          price: 10, 
          colors: ['Red', 'Green', 'Blue'], 
          img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600' 
        },
      
        { id: 2, title: 'Cooked Seafood', 
          description: 'Combining the comforting aroma of freshlly cooked seafood.',
           price: 20, 
           colors: ['Red', 'Blue', 'Green'], 
           img: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          },
          
        { id: 3, 
          title: 'Four Macaron', 
          description: 'This mouth-watering treat promises a perfect balance of sweetness and indulgence.', 
          price: 30, 
          colors: ['Mint', 'White', 'Gay'], 
          img: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=600' 
        },
      
        { id: 4, 
          title: 'Hamburger and Fries', 
          description: 'A classic duo of a juicy beef patty layered with melted cheese.',
           price: 40, 
           colors: ['Lavender', 'Coral', 'Lime'], 
           img: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600' 
          },
      
        { id: 5, 
          title: 'Vegetable Salad', 
          description: 'A colorful medley of fresh vegetables, from crisp lettuce to vibrant bell peppers and juicy cherry tomatoes, tossed in a light vinaigrette. ',
           price: 50, 
           colors: ['Plum', 'Gold', 'Olive'], 
           img: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600' 
          
        },
      
        { id: 6, 
          title: 'Grilled Pork Ribb', 
          description: 'Tender pork ribs, marinated and grilled to perfection',
          price: 60,
          colors: ['Peach', 'Silver', 'Brown'],
           img: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          },
        { id: 7, 
          title: 'Pasta', 
          description: ' Pasta tossed in a rich, creamy sauce, studded with sun-dried tomatoes and fresh basil leaves. ',
           price: 70, 
           colors: ['Violet', 'Salmon', 'Purple'],
            img: 'https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600' 
          },
      
        { id: 8, 
          title: 'Burrito', 
          description: 'A hearty burrito wrapped in a warm tortilla, filled with seasoned rice, tender beans, succulent grilled chicken.',
           price: 80, 
           colors: ['Sepia', 'NavyBlue', 'Black,'], 
           img: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600' 
          },
      
        { id: 9, 
          title: 'Cooked Meat with Vegetables', 
          description: 'Succulent slices of tender meat, cooked to perfection and accompanied by a colorful array of lightly sautéed vegetables.',
           price: 90, 
           colors: ['Melon', 'Green', 'Orange'], 
           img: 'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
           },
      
        { id: 10, 
          title: 'Pasta Prawn', 
          description: 'Pasta entwined with succulent prawns, bathed in a garlic-infused olive oil. ', 
          price: 100, 
          colors: ['Red', 'Green', 'Yellow'], 
          img: 'https://images.pexels.com/photos/1150447/pexels-photo-1150447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
         },
      ];
      

const Store = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };
  const cardStyle = {
    marginBottom: '20px',
    
    width: '23rem',
    height: '30rem',
     

  };

 
  return (
    <Container className="mt-4">
            <h1>Our Menu</h1>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id} className="mb-4">
            <Card style={cardStyle}>
            <Card.Img variant="top" src={product.img} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ width: '100%', height: '60px', objectFit: 'cover' }}>{product.description} </Card.Text>
                <Card.Text style={{marginTop: '5px'}}>R{product.price}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
