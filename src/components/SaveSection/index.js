import { useCallback } from 'react';

import { FaStar, FaRegStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addSavedNews, removeSavedNews } from 'store/reducers/stories';

import { SaveSectionWrapper } from './styles';

export default function SaveSection({ data }) {
  const dispatch = useDispatch();
  const { savedNews } = useSelector((state) => state.stories);

  const isSaved = savedNews.find((news) => news.id === data.id);

  const handleClick = useCallback(() => {
    if (isSaved) {
      dispatch(removeSavedNews(data.id));
    } else {
      dispatch(addSavedNews(data));
    }
  }, [isSaved, data]);

  return (
    <SaveSectionWrapper onClick={() => handleClick()}>
      {isSaved ? <FaStar /> : <FaRegStar />}
      {isSaved ? ' saved' : ' save'}
    </SaveSectionWrapper>
  );
}
