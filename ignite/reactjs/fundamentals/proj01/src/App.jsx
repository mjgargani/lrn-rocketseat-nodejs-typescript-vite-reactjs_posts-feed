import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
    {
        id: Date.now() + 1,
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/46717827?v=4',
            name: 'Rodrigo G. Oliveira',
            role: 'admin',
        },
        content: [
            { type: 'p', content: 'Olá turma!' },
            { type: 'p', content: 'Esse é outro post teste!' },
            { type: 'a', content: 'https://roulette.gargani.dev/' },
        ],
        publishedAt: new Date(Date.now()),
    },
    {
        id: Date.now(),
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/46717827?v=4',
            name: 'Rodrigo G. Oliveira',
            role: 'admin',
        },
        content: [
            { type: 'p', content: 'Olá pessoal!' },
            { type: 'p', content: 'Esse é um post teste!' },
            { type: 'a', content: 'https://gargani.dev' },
        ],
        publishedAt: new Date(Date.now() - 7200000),
    },
]

export function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => (
                        <Post
                            key={post.id + post.content + post.publishedAt}
                            author={post.author}
                            role={post.role}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </>
    )
}
