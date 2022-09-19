import { useEffect } from 'react'
import ListItem from 'components/ListItem'
import ShowMoreButton from 'components/ShowMoreButton'
import { useDispatch, useSelector } from 'react-redux'
import { ListWrapper } from './styles';
import { fetchStories } from 'store/reducers/stories'

export default function List() {
    const dispatch = useDispatch();

    const { storyData, storyIds, isFetching, savedNews } = useSelector((state) => state.stories)
    const { selectedList } = useSelector((state) => state.app)
    useEffect(() => {
        if (storyIds.length && !storyData.length)
            dispatch(fetchStories(storyIds))
    }, [dispatch, storyIds, storyData])

    var data = selectedList === 'starred' ? savedNews : storyData

    return (
        <ListWrapper>{
            isFetching ? (<p>Loading...</p>) : (data.map((data) => <ListItem key={data.id} data={data} />))
        }
            <ShowMoreButton />
        </ListWrapper>
    )

}

