import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img
                className={styles.avatar}
                src="https://avatars.githubusercontent.com/u/46717827?v=4"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div>
                            <strong>Rodrigo</strong>
                            <time
                                title="11 de Maio às 08:13h"
                                dateTime="2022-05-11 08:13:30"
                            >
                                Publicado há 1h
                            </time>
                        </div>
                        <button title="Deletar comentário">
                          <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom!</p>
                </div>

                <footer>
                  <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                  </button>
                </footer>
            </div>
        </div>
    )
}
