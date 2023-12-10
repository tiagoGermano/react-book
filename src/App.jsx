import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Tiago Germanox"
            content="My first post"
          />

          <Post
            author="Tiago Germanox"
            content="My first post"
          />
        </main>
      </div>
    </>
  )
}

export default App
