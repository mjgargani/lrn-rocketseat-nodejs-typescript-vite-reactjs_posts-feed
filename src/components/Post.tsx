import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'
import { newDate } from '../utils/date'

interface Author {
    name: string
    role: string
    avatarUrl: string
}

interface Content {
    type: 'p' | 'a'
    content: string
}
interface PostProps {
    author: Author
    publishedAt: Date
    content: Content[]
}
export function Post({ author, content, publishedAt }: PostProps) {
    const [comments, setComments] = useState([
        {
            id: Date.now() + 3,
            author: 'User ' + Date.now(),
            avatar: `https://xsgames.co/randomusers/assets/avatars/pixel/${Math.round(
                Math.random() * 53
            )}.jpg`,
            content: 'Post bem legal',
            publishedAt: new Date(Date.now()),
            applauses: Math.ceil(Math.random() * 100),
        },
    ])
    const [commentInput, setCommentInput] = useState('')

    const handleComments = (event: React.FormEvent) => {
        event.preventDefault()

        const newComments = [
            {
                id: Date.now(),
                author: 'User ' + Date.now(),
                avatar: `https://xsgames.co/randomusers/assets/avatars/pixel/${Math.round(
                    Math.random() * 53
                )}.jpg`,
                content: commentInput,
                publishedAt: new Date(Date.now()),
                applauses: 0,
            },
            ...comments,
        ]

        setComments(newComments)
        setCommentInput('')
    }

    const handleCommentInput = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        event.preventDefault()
        const { target } = event
        target.setCustomValidity('')
        const newCommentInput = target.value
        setCommentInput(newCommentInput)
    }

    const handleInvalidComment = (
        event: React.InvalidEvent<HTMLTextAreaElement>
    ) => {
        const { target } = event
        target.setCustomValidity('Esse campo é obrigatório')
    }

    const deleteComment = (id: number) => {
        const newComments = comments.filter((el) => el.id !== id)
        setComments(newComments)
    }

    const applaudComment = (id: number) => {
        const newComments = comments.map((el) =>
            el.id === id ? { ...el, applauses: el.applauses + 1 } : el
        )
        setComments(newComments)
    }

    const isCommentDisabled = commentInput.trim() === ''

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
                        return <p key={el.content + Date.now()}>{el.content}</p>
                    }
                    if (element === 'a') {
                        return (
                            <p key={el.content + Date.now()}>
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
                    onInvalid={handleInvalidComment}
                    required
                />
                <footer>
                    <button type="submit" disabled={isCommentDisabled}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((item) => (
                    <Comment
                        key={
                            item.id +
                            item.content +
                            item.author +
                            item.publishedAt
                        }
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        publishedAt={item.publishedAt}
                        applauses={item.applauses}
                        onApplaudComment={() => applaudComment(item.id)}
                        onDeleteComment={() => deleteComment(item.id)}
                    />
                ))}
            </div>
        </article>
    )
}
