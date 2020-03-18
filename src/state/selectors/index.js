import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectPostCollection = createSelector(
  [selectCollection],
  collection => (collection ? collection.postCollection : {})
);
export const selectGetAllCollections = createSelector(
  [selectCollection],
  collection => (collection ? collection.getAllCollections : {})
);
