import { stat } from "fs"
import { Photo } from "../../types"
import { PhotosState } from "../redux_types"
import { SET_HEADER_PHOTO, SET_PHOTOS } from "./photo_action_types"

const initialState = {
    photos: [],
    photo: {} as Photo
}

export default (state: PhotosState = initialState, action: any) => {
    switch(action.type) {
        case SET_PHOTOS: {
            return({
                ...state, 
                // photos: [...state.photos].concat(action.photos)
                photos: action.photos
            })
        };
        case SET_HEADER_PHOTO: {
            return({
                ...state, 
                photo: action.photo
            })
        }
        default: return({
            ...state
        })
    }
}