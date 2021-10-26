import { User } from './userTypes';

export interface SearchDataPayload {
  searchData: User[];
  append: boolean;
}

export interface GetSearchDataPayload {
  userName: string;
  page: number;
}

export interface WhoToFollowPayload {
  page: number;
  perPage: number;
  index: number;
}
