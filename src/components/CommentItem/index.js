import React, { useCallback, useEffect, useState } from 'react';
import parse from 'html-react-parser';

import { Comment, Description, Text } from './styles';
import { timeAgo } from 'utils';
import hackerNewsApi from 'services/hackerNewsApi';

export default function CommentItem({ data }) {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(() => {
    if (data?.kids) {
      Promise.all(data.kids.map((id) => hackerNewsApi.getItem(id))).then((data) =>
        setComments(data)
      );
    }
  }, [data]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  if (data.deleted || data.dead) {
    return;
  }

  return (
    <Comment>
      <Description>
        {data.by} {timeAgo(data.time)}
      </Description>
      <Text>{parse(data.text)}</Text>
      {comments.map((data) => (
        <CommentItem key={data.id} data={data} />
      ))}
    </Comment>
  );
}
