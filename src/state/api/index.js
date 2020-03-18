import { getAPI, postAPI } from '../../utils/crud';

export const getAllCollectionsAPI = ({ data }) => getAPI(data);
export const postCollectionAPI = ({ data }) => postAPI(data, 'collection');
