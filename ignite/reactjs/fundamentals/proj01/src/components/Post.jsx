import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import PropTypes from 'prop-types';
import ptBR from 'date-fns/locale/pt-BR';
export function Post({ author, content, publishedAt }) {
    const dateFormat = format(publishedAt, "d de LLLL às HH:mm'h'", { locale: ptBR });
    const relativeDate = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={dateFormat}
                    dateTime={publishedAt.toISOString()}
                >
                    {relativeDate}
                </time>
            </header>

            <div className={styles.content}>
                { 
                    content.map((el, i) => {
                        const element = el.type;
                        if(element === 'p'){
                            return (<p key={i}>{el.content}</p>)
                        }
                        if(element === 'a'){
                            return (<p key={i}><a href={el.content} target='_blank' rel="noreferrer">{el.content}</a></p>)
                        }
                    })
                }
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
              <Comment />
              <Comment />
              <Comment />
            </div>
        </article>
    )
}

Post.propTypes ={
    author: PropTypes.object,
    content: PropTypes.arrayOf(PropTypes.object),
    publishedAt: PropTypes.instanceOf(Date)
}