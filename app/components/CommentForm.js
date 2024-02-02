"use client";

import { useState } from "react";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmitComment = () => {
    console.log(comment);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold">Write Your Comment</h2>
      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <input
            value={comment}
            onChange={handleCommentChange}
            type="text"
            className="w-full p-2 rounded-md bg-slate-300 text-slate-700 dark:bg-slate-700 dark:text-slate-200"
          />
        </div>
        <button
          onClick={handleSubmitComment}
          className="py-2 px-10 bg-current rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
