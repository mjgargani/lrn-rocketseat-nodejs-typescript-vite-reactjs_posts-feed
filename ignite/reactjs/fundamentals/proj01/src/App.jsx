import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        author="Rodrigo Gargani"
                        content="Lorem ipsum dolor sit amet..."
                    />
                    <Post author="Rodrigo Gargani" content="Second test" />
                </main>
            </div>
        </>
    )
}
