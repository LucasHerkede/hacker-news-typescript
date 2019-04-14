import {action} from 'typesafe-actions';
import { Comment } from '../../../models';
import { StoriesTypes } from './types';


export const loadRequest = (storyId: number) => action(StoriesTypes.LOAD_REQUEST, { storyId });
export const loadSuccess = (data?: Comment[]) => action(StoriesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(StoriesTypes.lOAD_FAILURE);
