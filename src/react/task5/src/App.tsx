import { useCommentsList } from "./hooks/useCommentsList";

import { FormComment } from "./components/FormComment";
import { ListComment } from "./components/ListComment";

export const App = () => {
  const { commentsList, addComment, removeComment } = useCommentsList();

  return (
    <>
      <FormComment onAdd={addComment} />

      {commentsList.length > 0 ? (
        commentsList.map(({ id, email, comment, date }) => (
          <ListComment
            key={id}
            id={id}
            email={email}
            comment={comment}
            date={date}
            onRemove={removeComment}
          />
        ))
      ) : (
        <h2 style={{ textAlign: "center" }}>Sem comentários</h2>
      )}
    </>
  );
};
