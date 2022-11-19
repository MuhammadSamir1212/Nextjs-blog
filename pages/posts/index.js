import AllPosts from "../../components/posts/AllPosts";
import { getFeaturedPosts } from "../../lib/PostsUtil";

export default function AllPostspage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
