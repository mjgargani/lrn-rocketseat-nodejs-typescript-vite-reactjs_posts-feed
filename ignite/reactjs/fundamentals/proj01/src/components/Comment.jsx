import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import PropTypes from 'prop-types'
import { newDate } from '../utils/date'

export function Comment({content, publishedAt}) {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/46717827?v=4"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rodrigo</strong>
                            <time
                                title={newDate(publishedAt).dateFormat}
                                dateTime={publishedAt}
                            >
                                {newDate(publishedAt).relativeDate}
                            </time>
                        </div>
                        <button title="Deletar comentário">
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
    content: PropTypes.string,
    publishedAt: PropTypes.instanceOf(Date),
}
