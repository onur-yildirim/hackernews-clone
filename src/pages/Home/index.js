import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import List from 'components/List'
import { fetchLatestStoryIds, getSavedNews } from 'store/reducers/stories'


export default function Home() {

    const dispatch = useDispatch();
  
    useEffect(() => {
      const fetchIds = () => {
        dispatch(fetchLatestStoryIds());
      }
      fetchIds();
    }, [dispatch])
  
    useEffect(() => {
      dispatch(getSavedNews());
    }, [dispatch]);
    return(
        <List />
    )
}