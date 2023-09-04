import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
    {
        id: 2,
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
        publishedAt: new Date('2023-09-03 19:00'),
    },
    {
        id: 1,
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
        publishedAt: new Date('2023-09-03 18:44'),
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
                            key={post.id}
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
