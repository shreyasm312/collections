import { all, takeLatest } from 'redux-saga/effects';
import { collectionStructureActionTypes } from '../constants';
import { saga } from '../../utils/saga';
import { getAllCollectionsAPI, postCollectionAPI } from '../api';

const getAllCollections = () =>
  saga(
    getAllCollectionsAPI,
    collectionStructureActionTypes.GET_ALL_COLLECTIONS
  );
const postCollection = ({ payload }) =>
  saga(
    postCollectionAPI,
    collectionStructureActionTypes.POST_COLLECTION,
    payload
  );

export default function* root() {
  yield all([
    takeLatest(
      collectionStructureActionTypes.GET_ALL_COLLECTIONS,
      getAllCollections
    ),
    takeLatest(collectionStructureActionTypes.POST_COLLECTION, postCollection)
  ]);
}
