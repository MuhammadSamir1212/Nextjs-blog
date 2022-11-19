import styles from "../../styles/featured-posts.module.css";
import PostsGrid from "../posts/PostsGrid";

export default function FeaturedPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
