import { stat } from "fs"
import { Photo } from "../../types"
import { PhotosResponse, PhotosState } from "../redux_types"
import { FETCH_PHOTOS, SET_CURRENT_RESPONSE, SET_HEADER_PHOTO, SET_PHOTOS, SET_QUERY } from "./photo_action_types"

const initialState = {
    photos: [],
    photo: {} as Photo,
    query: "",
    currentResponse: {} as PhotosResponse,
    isLoading: false
}

export default (state: PhotosState = initialState, action: any) => {
    switch(action.type) {
        case FETCH_PHOTOS: {
            return({
                ...state, 
                isLoading: true
            })
        }
        case SET_PHOTOS: {
            return({
                ...state, 
                photos: [...state.photos].concat(action.photos),
                isLoading: false
            })
        };
        case SET_HEADER_PHOTO: {
            return({
                ...state, 
                photo: action.photo,
                isLoading: false
            })
        };
        case SET_QUERY: {
            return({
                ...state, 
                query: action.query
            })
        };
        case SET_CURRENT_RESPONSE: {
            return({
                ...state, 
                currentResponse: action.response
            })
        }
        default: return state
    }
}