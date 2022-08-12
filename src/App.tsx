import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css'
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andriott7.png',
      name: 'Thiago Andriotti',
      role: 'CFO | Crackland Tech'
    },
    content: [
      { type: 'paragraph', content: 'Good morning fellas' },
      { type: 'paragraph', content: 'There is one more time to do the same project, again.' },
      { type: 'paragraph', content: 'Lets get it!' },
      { type: 'link', content: 'andriott.com' },
    ],
    publishedAt: new Date('2022-08-08 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/john-doe.png',
      name: 'John Doe',
      role: 'Web Developer | Crackland Tech'
    },
    content: [
      { type: 'paragraph', content: 'Whats happened to me?" he thought. It wasnt a dream. His room, a proper human room altho' },
      { type: 'paragraph', content: 'On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform' },
      { type: 'link', content: 'andriott.com' },
    ],
    publishedAt: new Date('2022-08-08 15:00:00')
  },
]

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
          }
        </main>
      </div>

    </div>
  )
}
