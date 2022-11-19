import styles from "../../styles/posts-grid.module.css";
import PostItem from "./PostItem";

export default function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
