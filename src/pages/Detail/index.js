import { useCallback, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import hackerNewsApi from 'services/hackerNewsApi';
import CommentItem from 'components/CommentItem';
import ListItem from 'components/ListItem';

export default function Detail() {
  let { id } = useParams();

  const [item, setItem] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchItem = useCallback(() => {
    hackerNewsApi
      .getItem(id)
      .then((res) => setItem(res))
      .catch((err) => console.log(err));
  }, [id]);

  const fetchComments = useCallback(() => {
    if (item?.kids) {
      Promise.all(item.kids.map((id) => hackerNewsApi.getItem(id))).then((data) =>
        setComments(data)
      );
    }
  }, [item]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <ul>
      {item && item.type !== 'story' ? <Navigate to="/404" /> : ''}
      {item ? <ListItem data={item} /> : ''}
      {comments.length ? (
        comments.map((data) => <CommentItem key={data.id} data={data} />)
      ) : (
        <span>No Comment yet...</span>
      )}
    </ul>
  );
}
