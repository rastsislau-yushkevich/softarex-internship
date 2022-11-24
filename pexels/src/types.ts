type Photo = {
    id: number,
    width: number,
    height: number,
    url: string,
    photographer: string,
    photographer_url: string,
    photographer_id: number,
    avg_color: string,
    src: PhotoVariants,
    liked: boolean,
    alt: string
}

type PhotoVariants = {
    original: string,
    large2x: string,
    large: string,
    medium: string,
    small: string,
    portrait: string,
    landscape: string,
    tiny: string
}

type PhotoItem = {
    item: Photo
}

export type { Photo, PhotoVariants, PhotoItem }