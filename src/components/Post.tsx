import { useState, useEffect, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import styles from './Post.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link';
  content: string
}
interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[]
}

export function Post(
  // props: any 
  { author, publishedAt, content }: PostProps
) {
  const [comments, setComments] = useState([
    'Awesome post buddy, congrats!!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event!.preventDefault()
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event!.target.setCustomValidity('');
    setNewCommentText(event!.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event!.target.setCustomValidity('This field is required');
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  // const publishedDateFormatted = new Intl.DateTimeFormat('en-US', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // }).format(props.publishedAt);

  const publishDateFormatted = format(publishedAt, "MM dd 'at' HH:mm'h'", { locale: enUS })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: enUS, addSuffix: true })

  return (
    <article className={styles.post}>

      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <p>{author.role} </p>
          </div>
        </div>
        <time title={publishDateFormatted} dateTime={publishedAt.toISOString()} > {publishedDateRelativeToNow} </time>
      </header>

      <div className={styles.content} >
        {content.map((line: any) => {
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