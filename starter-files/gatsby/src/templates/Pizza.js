import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { SEO } from '../components/SEO';

const StyledPizzaGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const SinglePizzaPage = ({ data: { pizza } }) => (
  <>
    <SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src} />
    <StyledPizzaGrid>
      <Img fluid={pizza.image.asset.fluid} />
      <div>
        <h2 className="mark">{pizza.name}</h2>
        <ul>
          {pizza.toppings.map((topping) => (
            <li key={topping.id}>{topping.name}</li>
          ))}
        </ul>
      </div>
    </StyledPizzaGrid>
  </>
);

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      id
      name
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        id
        name
        vegetarian
      }
    }
  }
`;

export default SinglePizzaPage;
