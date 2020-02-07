import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as replysAPI from '../lib/api/replys';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'replys/INITIALIZE';
const [
  LIST_REPLYS,
  LIST_REPLYS_SUCCESS,
  LIST_REPLYS_FAILURE,
] = createRequestActionTypes('replys/LIST_REPLYS');
const SET_ORIGINAL_REPLY = 'replys/WRITE_REPLY';
const [
  UPDATE_REPLY,
  UPDATE_REPLY_SUCCESS,
  UPDATE_REPLY_FAILURE,
] = createRequestActionTypes('replys/UPDATE_REPLY')

export const initialize = createAction(INITIALIZE);
export const writeReply = createAction(WRITE_REPLY, ({ replytext }) =>({
  replytext,
}))
export const setOriginalReply = createAction(SET_ORIGINAL_REPLY, reply => reply);
export const updateReply = createAction(
  UPDATE_REPLY,
  ({ rno, replytext }) => ({
    rno,
    replytext,
  })
)
export const listReplys = createAction(
  LIST_REPLYS,
  ({ bno }) => ({ bno }),
);

const writeReplySaga = createRequestSaga(WRITE_REPLY, replysAPI.writeReply);
const updateReplySaga = createRequestSaga(UPDATE_REPLY, replysAPI.updateReply);
const listReplysSaga = createRequestSaga(LIST_REPLYS, replysAPI.listReplys);
export function* replysSaga() {
  yield takeLatest(WRITE_REPLY, writeReplySaga);
  yield takeLatest(UPDATE_REPLY, updateReplySaga);
  yield takeLatest(LIST_REPLYS, listReplysSaga);
}

const initialState = {
  replys: null,
  error: null,
  bno: null,
};

const replys = handleActions(
  {
    [LIST_REPLYS_SUCCESS]: (state, { payload: replys }) => ({
      ...state,
      replys,
    }),
    [LIST_REPLYS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default replys;


////// reply replys 파일 나눠야됨