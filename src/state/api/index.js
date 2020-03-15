import { getAPI, postAPI } from '../../utils/crud';

export const getAllCollectionsAPI = () => getAPI('collection');
export const postCollectionAPI = ({ data }) => postAPI(data, 'collection');
