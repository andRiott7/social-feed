import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1653914134725-132185009689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />
      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://github.com/andriott7.png" />
        <div
          className={styles.name}>
          <strong> Thiago Andriotti </strong>
        </div>
        <span className={styles.role}> Web Developer </span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size="18" />
          Edit your profile
        </a>
      </footer>
    </aside>
  );
}