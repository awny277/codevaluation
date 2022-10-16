import Link from "next/link";

function Posts({ posts }) {
  return (
    <div>
      hello from Posts
      {posts.map((ele, idx) => {
        return (
          <div key={idx}>
            <h3>
              {ele.id} {ele.title}
            </h3>
            <p>{ele.body}</p>
            <Link href={`/posts/${ele.id}`}>
              <a>go to Link {ele.id}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Posts;
// getStaticProps
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // console.log(data);
  console.log("hello from Server");
  return {
    props: {
      posts: data,
    },
  };
}
