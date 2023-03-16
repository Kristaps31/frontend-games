import "../componenets_CSS/CommentsCard.css"

const CommentCard = ({comment}) => {
  return (
    <section key={comment.comment_id} className="commentsCard">
   <p className="div1">Comment by: {comment.author}</p>
   <p className="div2">Posted: {comment.created_at}</p>
   <p className="div3">{comment.body}</p>
   <p className="div4">Votes: {comment.votes}</p>
    </section>
  )
}

export default CommentCard