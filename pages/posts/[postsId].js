import Head from "next/head";
import Link from "next/link";

function Post({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        <h3>
          {post.id} {post.title}
        </h3>
        <p>{post.body}</p>
        <Link href={"/posts"}> back to posts</Link>
      </div>
    </div>
  );
}

export default Post;
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: { postsId: `${post.id}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postsId}`
  );
  const data = await response.json();
  console.log("Hello from Post" + params.postsId);
  return {
    props: {
      post: data,
    },
  };
}
