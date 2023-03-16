import "../componenets_CSS/CommentsCard.css"

const CommentCard = (comment) => {
  return (
    <section className="commentsCard">
   <p className="div1">Comment by: {comment.comment.author}</p>
   <p className="div2">Posted: {comment.comment.created_at}</p>
   <p className="div3">{comment.comment.body}</p>
   <p className="div4">Votes: {comment.comment.votes}</p>
    </section>
  )
}

export default CommentCard