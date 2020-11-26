// SAMPLE APIS IS DOWN, WE DON'T HAVE BEERS!

import React from 'react';
import { graphql } from 'gatsby';

export default function BeersPage({ data }) {
  console.log(data);

  return (
    <>
      <p>Hey! I'm the Beers page</p>
    </>
  );
}

// export const query = graphql`
//   query {
//     allBeer {
//       nodes {
//         id
//         name
//         price
//         image
//         rating {
//           average
//           reviews
//         }
//       }
//     }
//   }
// `;
