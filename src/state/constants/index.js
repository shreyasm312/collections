import { keyMirror } from '../../helpers';

export const STATUS = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error'
};

export const collectionStructureActionTypes = keyMirror({
  GET_ALL_COLLECTIONS: undefined,
  GET_ALL_COLLECTIONS_SUCCESS: undefined,
  GET_ALL_COLLECTIONS_FAILURE: undefined,
  POST_COLLECTION: undefined,
  POST_COLLECTION_SUCCESS: undefined,
  POST_COLLECTION_FAILURE: undefined
});
