import { request } from "config/axiosConfig";

export const getArticles = async (limit = 5) => {
  const { data } = await request.get(`posts`)
  return data.slice(0, 5)
}

export const fetcher = async (query, { variables } = {}) => {
  const res = await fetch(`https://telegraph.id/api/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json()
  return json
}
// export const fetcherWithPromise = async (query, { variables } = {}) => {
//   const res = await fetch(`https://telegraph.id/api/graphql`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query, variables }),
//   });

//   return await res.json()
// }

export const ALL_POSTS = `query AllPosts ($limit: Int) {
	posts(first: $limit) {
		nodes {
			content
      date
      excerpt
      slug
      title
      uri
      featuredImage {
        node {
          uri
          link
          sourceUrl
        }
      }
			author {
        node {
          avatar {
            url
          }
          name
        }
      }
		}
	}
}`

export const SINGLE_POST = `query singlePost ($id: ID!, $idType: PostIdType!) {
  post(
    id: $id
    idType: $idType
  ) {
    id
    date
    slug
    title
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
  }
  posts(first: 5) {
    nodes {
      date
      slug
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
					name
          avatar {
            url
          }
        }
      }
    }
  }
}`;



