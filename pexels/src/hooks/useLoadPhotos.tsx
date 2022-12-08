import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { loadPhotos } from "../redux/photos/photo_action_creators";

const useLoadPhotos = (page: number) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        dispatch(loadPhotos({page, perPage: 9}));
        setLoading(false);
    }, [page])

    return { loading }
}

export { useLoadPhotos }