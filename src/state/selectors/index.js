import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectPostCollection = createSelector([selectCollection], file =>
  file ? file.postCollection : {}
);
export const selectGetAllCollections = createSelector(
  [selectCollection],
  file => (file ? file.getAllCollections : {})
);
