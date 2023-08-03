import { useState } from "react";

interface CommentsInterface {
  id: number;
  email: string;
  comment: string;
}

interface State {
  state: CommentsInterface[];
}

export const useCommentsList = () => {
  const [commentsList, setCommentsList] = useState([]);

  const addComment = ({email, comment}: {email: string, comment: string}) => {
    const id = Math.floor(Math.random() * 1000000);
    setCommentsList((state: []) => {
      const newState = [...state, {id, email, comment}]
      return newState;
    })
  }

  return commentsList, addComment;
}