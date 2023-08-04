import { useState } from "react";

import { CommentsType } from "../types/types";

export const useCommentsList = () => {
  const [commentsList, setCommentsList] = useState<[] | CommentsType[]>(() => {
    const storedComments = localStorage.getItem("comments");
    if (!storedComments) return [];
    return JSON.parse(storedComments);
  });

  const addComment = ({
    email,
    comment,
    date
  }: {
    email: string;
    comment: string;
    date: string;
  }) => {
    const id = Math.floor(Math.random() * 1000000);
    setCommentsList((state: CommentsType[]) => {
      const newState = [...state, { id, email, comment, date }];
      localStorage.setItem("comments", JSON.stringify(newState));
      return newState;
    });
  };

  const removeComment = (id: number) => {
    setCommentsList((state: CommentsType[]) => {
      const newState = state.filter((comment) => comment.id !== id);
      localStorage.setItem("comments", JSON.stringify(newState));
      return newState;
    });
  };

  return { commentsList, addComment, removeComment };
};
