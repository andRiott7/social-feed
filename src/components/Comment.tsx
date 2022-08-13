
import { useState, useEffect } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment(
  // props: any
  { content,
    onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeCount() {
    setLikeCount((state) => {
      return state + 1
    });
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andriott7.png" alt="" />
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
              onClick={handleDeleteComment}
              title='Delete Comment'>
              <Trash size={20} />
            </button>
          </header>

          <p> {content} </p>
        </div>
        <footer>
          <button onClick={handleLikeCount} >
            <ThumbsUp size={20} />
            Applause <span> {likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  )
}