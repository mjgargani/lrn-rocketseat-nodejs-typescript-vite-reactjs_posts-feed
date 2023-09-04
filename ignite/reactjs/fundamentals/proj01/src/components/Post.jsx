import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { newDate } from '../utils/date'

export function Post({ author, content, publishedAt }) {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: 'Rodrigo G. Oliveira',
            avatar: 'https://avatars.githubusercontent.com/u/46717827?v=4',
            content: 'Post bem legal',
            publishedAt: new Date(Date.now()),
        },
    ])
    const [commentInput, setCommentInput] = useState('')

    const handleComments = (event) => {
        event.preventDefault()

        const newComments = [
            {
                id: comments.length + 1,
                author: 'User ' + Date.now(),
                avatar: `https://xsgames.co/randomusers/assets/avatars/pixel/${Math.round(Math.random()*53)}.jpg`,
                content: commentInput,
                publishedAt: new Date(Date.now()),
            },
            ...comments,
        ]

        setComments(newComments)
        setCommentInput('')
    }

    const handleCommentInput = (event) => {
        event.preventDefault()
        const { target } = event
        const newCommentInput = target.value
        setCommentInput(newCommentInput)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={newDate(publishedAt).dateFormat}
                    dateTime={publishedAt.toISOString()}
                >
                    {newDate(publishedAt).relativeDate}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((el) => {
                    const element = el.type
                    if (element === 'p') {
                        return <p key={el.content}>{el.content}</p>
                    }
                    if (element === 'a') {
                        return (
                            <p key={el.content}>
                                <a
                                    href={el.content}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {el.content}
                                </a>
                            </p>
                        )
                    }
                })}
            </div>

            <form className={styles.commentForm} onSubmit={handleComments}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    onChange={handleCommentInput}
                    value={commentInput}
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type="submit" disabled={commentInput === ''}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((item) => (
                    <Comment
                        key={item.content}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        publishedAt={item.publishedAt}
                    />
                ))}
            </div>
        </article>
    )
}

Post.propTypes = {
    author: PropTypes.object,
    content: PropTypes.arrayOf(PropTypes.object),
    publishedAt: PropTypes.instanceOf(Date),
}
