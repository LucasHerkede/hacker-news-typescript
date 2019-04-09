import {action} from 'typesafe-actions';
import { Story } from '../../../models';
import { StoriesTypes } from './types';


export const loadRequest = (storyId: number) => action(StoriesTypes.LOAD_REQUEST, { storyId });
export const loadSuccess = (data: Story) => action(StoriesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(StoriesTypes.lOAD_FAILURE);
