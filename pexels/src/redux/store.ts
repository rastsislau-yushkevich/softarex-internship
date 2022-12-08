import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherPhotos } from "./photos/photo_action_creators";
import photo_reducer from "./photos/photo_reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({photos: photo_reducer}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherPhotos);

export { store }