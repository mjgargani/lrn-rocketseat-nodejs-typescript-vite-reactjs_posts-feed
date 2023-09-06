import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { newDate } from '../utils/date'

interface CommentProps {
    author: string
    avatar: string
    content: string
    publishedAt: Date
    applauses: number
    onApplaudComment: (...args: any) => void
    onDeleteComment: (...args: any) => void
}
export function Comment({
    author,
    avatar,
    content,
    publishedAt,
    applauses,
    onApplaudComment,
    onDeleteComment,
}: CommentProps) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={avatar} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author}</strong>
                            <time
                                title={newDate(publishedAt).dateFormat}
                                dateTime={publishedAt.toISOString()}
                            >
                                {newDate(publishedAt).relativeDate}
                            </time>
                        </div>
                        <button
                            title="Deletar comentário"
                            onClick={onDeleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={onApplaudComment}>
                        <ThumbsUp />
                        Aplaudir <span>{applauses}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
