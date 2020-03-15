import { createActions } from 'redux-actions';
import { collectionStructureActionTypes } from '../constants';

export const { getAllCollections, postCollection } = createActions({
  [collectionStructureActionTypes.GET_ALL_COLLECTIONS]: data => ({ data }),
  [collectionStructureActionTypes.POST_COLLECTION]: data => ({ data })
});
