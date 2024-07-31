import React from 'react';
import { Container, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {motion, } from 'framer-motion'
import storeImage1 from '../Images/img1.jpg';
import storeImage2 from '../Images/img2.jpg';
import LazyLoad from 'react-lazyload';

const LandingPage = () => {
    const explainProduct = {
        hidden: { opacity: 0, y:"-30px"},
        show: { 
          opacity: 1, 
          y:"0", 
          transition:{
            delay:3.0,
            ease:"easeInOut"
          }
        }
      }
      const typingContainer = {
        hidden: { opacity: 0},
        show: { 
          opacity: 1,
          transition:{
            staggerChildren: 0.14,

          }}
      }
      const typingText = {
        hidden: { opacity: 0, y:"-30px"},
        show: { 
          opacity: 1, 
          y:"0",
          transition:{
        
            ease:'easeInOut',
          }
        }
      }

     
      const imgProduct1 = {
       
        hidden: { 
          opacity: 0,
          y:'400px',
          width:'400px'
        },
        show: { 
          opacity: 1,
          y:0,
          width:'300px',
          height: '380px',
          transition:{
            duration:1.5,
            delay:2.7,
            ease:"easeInOut"
          }
        }
        
      }
      const imgProduct2 = {
        hidden: { 
          opacity: 0,
          y:'500px',
          x:'80px',
          width:'150px'
        },
        show: { 
          opacity: 1,
          y:0,
          x:0,
          width:'270px',
          transition:{
            duration:2.0,
            delay:4.0,
            ease:"easeInOut"
          }
        }
      }
     
    return(
        <Container className='mt-5'>
            <Accordion className= "section">
                <div className='left'>
            <motion.h1 className='text' variants={typingContainer} initial="hidden" animate="show">
              {  
                Array.from("Welcome To Feastly").map((word,i) => (
              <motion.span key={i} variants={typingText}>{word}</motion.span>
              ))
            }
            </motion.h1>

                <motion.p className='intro' variants={explainProduct} initial="hidden" animate="show">
                Welcome to Feastly, your ultimate web app for all things food! Feastly is designed to make your culinary shopping experience as 
                enjoyable and effortless as possible, offering a vast selection of grocery items, gourmet ingredients, and specialty foods right 
                at your fingertips.   
                </motion.p>
                <Link to = "/store">
                <Button ClassName='browserNamae'varient = "dark">Browse Store</Button>
                </Link>
                </div>
                <div className='right'>
                <LazyLoad height={200} offset={100}>
                     <motion.img src={storeImage1} alt="Front1" className='img1' variants={imgProduct1} initial="hidden" animate="show" />
                     </LazyLoad>
                     <LazyLoad height={200} offset={100}>
                     <motion.img src={storeImage2} alt="Front2" className='img2' variants={imgProduct2} initial="hidden" animate="show" />
                     </LazyLoad>
                </div>
            </Accordion>
        </Container>
    )
}

export default LandingPage;