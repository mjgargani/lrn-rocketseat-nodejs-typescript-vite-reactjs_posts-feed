import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import PropTypes from 'prop-types'
import { newDate } from '../utils/date'

export function Comment({
    author,
    avatar,
    content,
    publishedAt,
    applauses,
    onApplaudComment,
    onDeleteComment,
}) {
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

Comment.propTypes = {
    author: PropTypes.string,
    avatar: PropTypes.string,
    content: PropTypes.string,
    publishedAt: PropTypes.instanceOf(Date),
    applauses: PropTypes.number,
    onApplaudComment: PropTypes.func,
    onDeleteComment: PropTypes.func,
}
