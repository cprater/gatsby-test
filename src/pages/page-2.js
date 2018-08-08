import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ data }) => {
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p className="test">Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      {data.person.edges.map(obj => {
        return (
          <h2>
            {obj.person.name}
          </h2>
        )
      })}
    </div>
  );
}

export default SecondPage

export const allPersonsQuery = graphql`
  query getAllPersons {
    person: allPersons {
      edges {
        person: node {
          name
          description
        }
      }
    }
  }
`;
