import {action} from 'typesafe-actions';
import { Comment } from '../../../models';
import { CommentsTypes } from './types';


export const loadRequest = (storyId: number) => action(CommentsTypes.LOAD_REQUEST, { storyId });
export const loadSuccess = (data?: Comment[]) => action(CommentsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(CommentsTypes.lOAD_FAILURE);
