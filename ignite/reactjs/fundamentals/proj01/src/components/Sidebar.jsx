import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=25"
                alt="Profile Cover"
            />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/46717827?v=4" />
                <strong>Rodrigo Gargani Oliveira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a rel="stylesheet" href="">
                    <PencilLine size={20} /> Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
