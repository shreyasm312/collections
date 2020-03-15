import { all, fork } from 'redux-saga/effects';
import collection from './collection';

export default function* root() {
  yield all([fork(collection)]);
}
