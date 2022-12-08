import { Photo } from "../types"

type StoreState = {
    photos: PhotosState
}

type PhotosResponse = {
    page: number,
    per_page: number,
    photos: Photo[],
    total_results: number,
    next_page: string,
    prev_page: string
}

type PhotosState = {
    photos: Photo[],
    photo: Photo
}

type SearchParams = {
    page: number,
    perPage: number
}

export type { StoreState, PhotosResponse, PhotosState, SearchParams }