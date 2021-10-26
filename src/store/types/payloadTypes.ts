import { User } from './userTypes';

export interface SearchDataPayload {
  searchData: User[];
  append: boolean;
}

export interface GetSearchDataPayload {
  userName: string;
  page: number;
}
