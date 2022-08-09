import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(props: any) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src="https://github.com/andriott7.png" />
          {/* <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <p>{props.content} </p>
          </div> */}

          <div className={styles.authorInfo}>
            <strong>Metatron</strong>
            <p>CFO | Crackland Tech</p>
          </div>
        </div>
        <time title="August 08, 2022 - 10:45 am" dateTime="2022-08-08 10:45" > About 1h ago </time>
      </header>
      <div className={styles.content} >
        <p> Good morning fellas </p>
        <p> There is one more time to do the same, again.</p>
        <p> Let's get it!</p>
        <p> <a href="http://www.andriott.com" target="_blank">andriott.com</a> </p>
        <p>  #feedproject #reactjs #vite #letsgetit </p>
      </div>

      <form className={styles.commentForm}>
        <strong> Leave your comment </strong>
        <textarea placeholder="Leave a mesage" ></textarea>
        <button type="submit"> Comment </button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}