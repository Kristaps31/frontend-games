import React from 'react'
import "../componenets_CSS/CommentBox.css"

function CommentBox() {
  return (
    <div className='comment-div'>
    
    <div className='comment-box'>
    <input placeholder="Name" type="text" />
    <input id="comment-input" type="text" placeholder='Add a comment...' rows="4" />
    </div>

    <div className="comment-form-actions">
    <button className='commentButton' type="submit">Post</button>
    </div>
    </div>
  )
}

export default CommentBox;
