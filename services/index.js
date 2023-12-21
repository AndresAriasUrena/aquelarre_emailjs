import { graphql } from 'graphql';
import { request, gql } from 'graphql-request';

const graphqlAPI= process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () =>{
    const query = gql `
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        autor {
                            bio
                            nombre
                            id
                            foto {
                                url
                            }
                        }
                        createdAt
                        slug
                        titulo
                        extracto
                        imagenPresentacion {
                            url
                        }
                        categorias {
                            name
                            slug
                        }
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}

export const getRecentPosts = async () => {
    const query = gql`
      query GetPostDetails() {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          titulo
          imagenPresentacion {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };

export const getSimilarPosts = async (categorias, slug) =>{
    const query = gql`
        query GetPostDetails($slug: String!, $categorias: [String!]){
            posts(
                where: { slug_not: slug, AND: {categories_some: { slug_in: $categorias}}}
                last: 3
            ){
                titulo
                imagenPresentacion {
                    url
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.posts;
}

export const getCategories = async () => {
    const query = gql`
     query GetCategories {
        categorias {
            name
            slug
        }
     }
    `
    const result = await request(graphqlAPI, query);

    return result.categorias;
}