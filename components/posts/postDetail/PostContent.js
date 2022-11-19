import ReactMarkdown from "react-markdown";
import styles from "../../../styles/post-content.module.css";
import PostHeader from "./PostHeader";

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/${post.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
