import { put, takeEvery } from "@redux-saga/core/effects";
import { Photo } from "../../types"
import { PhotosResponse, SearchParams } from "../redux_types";
import { FETCH_PHOTOS, SET_HEADER_PHOTO, SET_PHOTOS } from "./photo_action_types"

const setPhotos = (photos: Photo[]) => ({
    type: SET_PHOTOS,
    photos
})

const loadPhotos = (params: SearchParams) => ({
    type: FETCH_PHOTOS,
    params
})

const setHeaderPhoto = (photo: Photo) => ({
    type: SET_HEADER_PHOTO,
    photo
})

function* fetchPhotos(action: any) {
    const { page, perPage } = action.params;
    console.log(perPage)
    const data: Response = yield fetch(`https://api.pexels.com/v1/curated/?per_page=${perPage}&page=${page}`, {
        headers: {Authorization: "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"}
    });
    const photos: PhotosResponse = yield data.json();
    if(perPage === 1) {
        console.log("asdadssa"+photos.photos[0])
        yield put(setHeaderPhoto(photos.photos[0]))
    } else {
        yield put(setPhotos(photos.photos));
    }
}

function* watcherPhotos() {
    yield takeEvery(FETCH_PHOTOS, fetchPhotos);
}

export { setPhotos, watcherPhotos, loadPhotos }