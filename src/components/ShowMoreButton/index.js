import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from 'store/reducers/stories';
import { Button } from './styles';

export default function ShowMoreButton() {
  const dispatch = useDispatch();
  const { storyIds, storyData } = useSelector((state) => state.stories);
  const { selectedList } = useSelector((state) => state.app);

  if (selectedList === 'starred' || !storyData.length || storyIds.length === storyData.length) {
    return;
  }

  return <Button onClick={() => dispatch(fetchStories(storyIds))}>show more</Button>;
}
