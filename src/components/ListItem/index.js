import React from 'react';

import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';
import SaveSection from 'components/SaveSection';
import { timeAgo } from 'utils';

export default function ListItem({ data }) {
  const commentUrl = `/news/${data.id}`;
  const host = data.url ? <Host>{`(${new URL(data.url).host})`}</Host> : '';
  return (
    <Item>
      <ExternalLink href={data.url || commentUrl}>
        <Title>
          {' '}
          {data.title} {host}
        </Title>
      </ExternalLink>
      <Description>
        {data.score} {data.score > 1 ? 'points' : 'point'} by{' '}
        <CommentLink href={commentUrl} rel="noopener noreferrer nofollow" target="_blank">
          {data.by}
        </CommentLink>{' '}
        {timeAgo(data.time)}
        {' | '}
        <CommentLink href={commentUrl} rel="noopener noreferrer nofollow" target="_blank">
          {data.descendants} {data.descendants > 1 ? 'comments' : 'comment'}
        </CommentLink>
        {' | '}
        <SaveSection data={data} />
      </Description>
    </Item>
  );
}
