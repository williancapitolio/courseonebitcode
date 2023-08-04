import { useCommentsList } from "./hooks/useCommentsList";

import { FormComment } from "./components/FormComment";
import { ListComment } from "./components/ListComment";

export const App = () => {
  const { commentsList, addComment, removeComment } = useCommentsList();

  return (
    <>
      <FormComment onAdd={addComment} />

      {commentsList.length > 0 ? (
        commentsList.map(({ id, email, comment }) => (
          <ListComment
            key={id}
            id={id}
            email={email}
            comment={comment}
            onRemove={removeComment}
          />
        ))
      ) : (
        <div style={{ width: "100%" }}>
          <h2 style={{ textAlign: "center" }}>Sem comentários</h2>
        </div>
      )}
    </>
  );
};
