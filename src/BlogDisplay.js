import styles from "./BlogDisplay.module.css";

const BlogDisplay = (props) => {
  function createMarkup() {
    return { __html: `${props.content.slice(0, 85)}...` };
  }
  const formatDate = () => {
    let date = new Date(props.datePublished);
    return date.toDateString();
  };

  return (
    <li className={styles["blog-display-wrapper"]}>
      <h2 className={styles["blog-display-title"]}>{props.title}</h2>
      <h4 className={styles["blog-display-date"]}>{formatDate()}</h4>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </li>
  );
};

export default BlogDisplay;
