import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import hackerNewsApi from "services/hackerNewsApi";

const initialState = {
    storyIds: [],
    storyData: [],
    savedNews: [],
    page: 0,
    isFetching: false,
    error: ''
}

export const fetchLatestStoryIds = createAsyncThunk('stories/fetchLatestStoryIds', async () => {
    const response = await hackerNewsApi.getLatestStoryIds()
    return response;
})

export const fetchStories = createAsyncThunk('stories/fetchStories', async (initStoryIds = undefined, { getState }) => {
    const { page, storyIds } = getState().stories;
    const response = await hackerNewsApi.getStoriesByPage(initStoryIds || storyIds, page);
    return response;
})

export const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        getSavedNews: (state) => {
            state.savedNews = JSON.parse(localStorage.getItem('savedNews') || '[]');
        },
        addSavedNews(state, action) {
            state.savedNews.push(action.payload);
            localStorage.setItem('savedNews', JSON.stringify(state.savedNews));
        },
        removeSavedNews(state, action) {
            state.savedNews = state.savedNews.filter(news => news.id !== action.payload);
            localStorage.setItem('savedNews', JSON.stringify(state.savedNews));
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchLatestStoryIds.pending, (state) => {
                state.isFetching = true
            })
            .addCase(fetchLatestStoryIds.fulfilled, (state, action) => {
                return {
                    ...state,
                    isFetching: false,
                    storyIds: action.payload
                }
            })
            .addCase(fetchStories.fulfilled, (state, action) => {
                return {
                    ...state,
                    storyData: [...state.storyData, ...action.payload],
                    page: state.page + 1
                }
            })
    }
})
export const { getSavedNews, addSavedNews, removeSavedNews } = storiesSlice.actions;
export default storiesSlice.reducer