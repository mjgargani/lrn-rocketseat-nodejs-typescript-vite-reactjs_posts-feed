import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import PropTypes from 'prop-types'
import { newDate } from '../utils/date'

export function Comment({ author, avatar, content, publishedAt, deleteComment }) {
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
                                dateTime={publishedAt}
                            >
                                {newDate(publishedAt).relativeDate}
                            </time>
                        </div>
                        <button title="Deletar comentário" onClick={deleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
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

Comment.propTypes = {
    author: PropTypes.string,
    avatar: PropTypes.string,
    content: PropTypes.string,
    publishedAt: PropTypes.instanceOf(Date),
    deleteComment: PropTypes.func
}
