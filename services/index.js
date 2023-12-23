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
                where: {slug_not: $slug, AND: {categorias_some: {slug_in: $categorias}}}
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
    `;
    const result = await request(graphqlAPI, query, {categorias, slug});

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

export const getPostsDetails = async (slug) =>{
    const query = gql `
        query GetPostDetails($slug: String!) {
            post(where: {slug: $slug }){
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
                contenido {
                    raw
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query, {slug});

    return result.post;
}

export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    });

    return result.json();
}