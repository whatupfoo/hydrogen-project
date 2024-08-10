import {useLoaderData} from '@remix-run/react';

export function meta() {
    return [
      {title: 'Hydrogen'},
      {description: 'A custom storefront powered by Hydrogen'},
    ];
  }

  export async function loader({context}) {
    return await context.storefront.query(COLLECTIONS_QUERY);
  }
  
  export default function Index() {
    const {collections} = useLoaderData();
    console.log(collections);
    return (
      <div>
        <h1>Hello from the home page!</h1>
      </div>
    );
  }

  const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
      }
    }
  }
`;