import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className="styles.comment">
      <Avatar hasBorder={false} src="https://github.com/andriott7.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>AndRiott</strong>
              <time
                title='August 08, 2022 - 15h30'
                dateTime="2022-08-08 15:30:00"
              >
                About 1h ago
              </time>
            </div>

            <button
              // onClick={}
              title='Delete Comment'>
              <Trash size={20} />
            </button>
          </header>

          <p> Awesome post, congrats buddy!! </p>
        </div>
        <footer>
          <ThumbsUp size={20} />
          Applause <span></span>
        </footer>

      </div>
    </div>
  )
}