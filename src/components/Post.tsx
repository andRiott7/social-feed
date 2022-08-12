import { useState, useEffect } from 'react'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import styles from './Post.module.css';

export function Post(props: any) {
  const [comments, setComments] = useState([
    'Awesome post buddy, congrats!!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment() {
    event!.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event!.target.setCustomValidity('');
    setNewCommentText(event!.target.value);
  }

  function deleteComment(commentToDelete: any) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid() {
    event!.target.setCustomValidity('This field is required');
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  // const publishedDateFormatted = new Intl.DateTimeFormat('en-US', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // }).format(props.publishedAt);

  const publishDateFormatted = format(props.publishedAt, "MM dd 'at' HH:mm'h'", { locale: enUS })
  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, { locale: enUS, addSuffix: true })

  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <p>{props.author.role} </p>
          </div>
        </div>
        <time title={publishDateFormatted} dateTime={props.publishedAt.toISOString()} > {publishedDateRelativeToNow} </time>
      </header>

      <div className={styles.content} >
        {props.content.map((line: any) => {
          if (line.type === 'paragraph') {
            return (<p key={line.content} > {line.content} </p>)
          } else if (line.type === 'link') {
            return <p key={line.content}  > <a href="#" target="_blank"> {line.content} </a> </p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Leave your comment </strong>
        <textarea
          name="comment"
          placeholder="Leave a mesage"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>
        <button type="submit" disabled={isNewCommentEmpty} > Comment </button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          )
        })}
      </div>
    </article>
  )
}