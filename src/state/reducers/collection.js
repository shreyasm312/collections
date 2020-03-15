import { handleActions, parseError } from '../../helpers';
import { collectionStructureActionTypes, STATUS } from '../constants';

export const collectionState = {
  getAllCollections: {
    data: {},
    loading: false,
    status: STATUS.IDLE
  },
  postCollection: {
    data: {},
    loading: false,
    status: STATUS.IDLE
  }
};
export default {
  collection: handleActions(
    {
      [collectionStructureActionTypes.GET_ALL_COLLECTIONS]: (
        draft,
        { payload }
      ) => {
        draft.getAllCollections.data = payload ? payload.data : {};
        draft.getAllCollections.status = STATUS.RUNNING;
        draft.getAllCollections.loading = true;
      },
      [collectionStructureActionTypes.GET_ALL_COLLECTIONS_SUCCESS]: (
        draft,
        { payload }
      ) => {
        draft.getAllCollections.data = payload ? payload.data : {};
        draft.getAllCollections.status = STATUS.SUCCESS;
        draft.getAllCollections.loading = false;
      },
      [collectionStructureActionTypes.GET_ALL_COLLECTIONS_FAILURE]: (
        draft,
        { payload }
      ) => {
        draft.getAllCollections.data = parseError(payload);
        draft.getAllCollections.status = STATUS.ERROR;
        draft.getAllCollections.loading = false;
      },
      [collectionStructureActionTypes.POST_COLLECTION]: (
        draft,
        { payload }
      ) => {
        draft.postCollection.data = payload ? payload.data : {};
        draft.postCollection.status = STATUS.RUNNING;
        draft.postCollection.loading = true;
      },
      [collectionStructureActionTypes.POST_COLLECTION_SUCCESS]: (
        draft,
        { payload }
      ) => {
        draft.postCollection.data = payload ? payload.data : {};
        draft.postCollection.status = STATUS.SUCCESS;
        draft.postCollection.loading = false;
      },
      [collectionStructureActionTypes.POST_COLLECTION_FAILURE]: (
        draft,
        { payload }
      ) => {
        draft.postCollection.data = parseError(payload);
        draft.postCollection.status = STATUS.ERROR;
        draft.postCollection.loading = false;
      }
    },
    collectionState
  )
};
