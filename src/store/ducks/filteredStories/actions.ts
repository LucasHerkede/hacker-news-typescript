import {action} from 'typesafe-actions';
import { Story } from '../../../models';
import { FilteredStoriesTypes } from './types';


export const loadRequest = (page: number) => action(FilteredStoriesTypes.LOAD_REQUEST, { page });
export const loadSuccess = (data: Story[]) => action(FilteredStoriesTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(FilteredStoriesTypes.lOAD_FAILURE);
