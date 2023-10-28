import React,{useState} from 'react'

export const Comment = () => {
const [comment, setComment] = useState("");
const [comments, setComments] = useState([]);


const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
        <div className="commentmain-container">
      <div className="comment-flexbox">
        <h3 className="comment-text">Leave your Feedback</h3>

        <textarea
          value={comment}
          onChange={onChangeHandler}
          className="commentinput-box"
          placeholder='Mention your email: leave your comment based on your interaction with our website'
        />
        <button onClick={onClickHandler} className="comment-button">
          Submit
        </button>
        
        {comments.map((text) => (
            <div className='ccouter'>
        <div className="comment-container">
            {text}
            </div>
            </div>
      ))}
      </div>
    </div>
  )
}
