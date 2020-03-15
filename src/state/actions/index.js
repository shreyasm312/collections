import { createActions } from 'redux-actions';
import { collectionsStructureActionTypes } from '../constants/index';

export const { getAllCollections, postCollection } = createActions({
  [collectionsStructureActionTypes.GET_ALL_COLLECTIONS]: data => ({ data }),
  [collectionsStructureActionTypes.POST_COLLECTION]: data => ({ data })
});
