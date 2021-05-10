import React from 'react';
import Container from '../Container/Container';
import {faqContents} from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Faq = () => (
  <Container>
    <Hero titleText={faqContents.title} image={faqContents.image}/>
    <p>{faqContents.content}</p>
  </Container>
);

export default Faq; 