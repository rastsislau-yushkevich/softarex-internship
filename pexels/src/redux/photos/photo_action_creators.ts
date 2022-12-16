import { put, takeEvery } from "@redux-saga/core/effects";
import { Photo } from "../../types"
import { PhotosResponse, SearchParams } from "../redux_types";
import { FETCH_PHOTOS, SET_CURRENT_RESPONSE, SET_HEADER_PHOTO, SET_PHOTOS, SET_QUERY } from "./photo_action_types"

const setPhotos = (photos: Photo[]) => ({
    type: SET_PHOTOS,
    photos
})

const loadPhotos = (params: SearchParams) => ({
    type: FETCH_PHOTOS,
    params
})

const setQuery = (query: string) => ({
    type: SET_QUERY,
    query
})

const setHeaderPhoto = (photo: Photo) => ({
    type: SET_HEADER_PHOTO,
    photo
})

const setCurrentResponse = (response: PhotosResponse) => ({
    type: SET_CURRENT_RESPONSE, 
    response
})

function* fetchPhotos(action: any) {
    const { page, perPage, query } = action.params;
    const data: Response = yield fetch(`https://api.pexels.com/v1/${query ? 'search' : 'curated'}/?${query ? `query=${query}` : ''}&per_page=${perPage}&page=${page}`, {
        headers: { Authorization: String(process.env.REACT_APP_AUTHORIZATION) }
    });
    const photos: PhotosResponse = yield data.json();
    yield put(setCurrentResponse(photos));
    if(perPage === 1) {
        yield put(setHeaderPhoto(photos.photos[0]))
    } else {
        yield put(setPhotos(photos.photos));
    }
}

function* watcherPhotos() {
    yield takeEvery(FETCH_PHOTOS, fetchPhotos);
}

export { setPhotos, watcherPhotos, loadPhotos, setQuery }