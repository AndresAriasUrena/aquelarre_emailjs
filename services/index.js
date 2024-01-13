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
      query GetRecentPosts() {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          titulo
          autor {
            nombre
            foto {
              url
            }
          }
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
                    json
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

// export const getFeaturedPosts = async () => {
//     const query = gql`
//       query GetFeaturedPost() {
//         posts(where: {featuredPost: true}) {
//           autor {
//             nombre
//             foto {
//               url
//             }
//           }
//           imagenPresentacion {
//             url
//           }
//           titulo
//           slug
//           createdAt
//         }
//       }   
//     `;
  
//     const result = await request(graphqlAPI, query);
  
//     return result.posts;
//   };

export const getEditorialPosts = async () => {
    const query = gql`
      query GetEditorialPost() {
        posts(
          where: {featuredPost: true}
          last:1
          ) {
          extracto
          autor {
            nombre
            foto {
              url
            }
          }
          imagenPresentacion {
            url
          }
          titulo
          slug
          createdAt
        }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };

  export const getAdjacentPosts = async (createdAt, slug) => {
    const query = gql`
      query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
        next:posts(
          first: 1
          orderBy: createdAt_ASC
          where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
        ) {
          titulo
          imagenPresentacion {
            url
          }
          createdAt
          slug
        }
        previous:posts(
          first: 1
          orderBy: createdAt_DESC
          where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
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
  
    const result = await request(graphqlAPI, query, { slug, createdAt });
  
    return { next: result.next[0], previous: result.previous[0] };
  };

  export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categorias_some: {slug: $slug}}) {
          edges {
            cursor
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
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
  };