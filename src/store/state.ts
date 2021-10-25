interface types {
  avatarUrl: string;
  eventsUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  gravatarId: string;
  htmlUrl: string;
  id: number;
  login: string;
  nodeId: string;
  organizationsUrl: string;
  receivedEventsUrl: string;
  reposUrl: string;
  score: number;
  siteAdmin: boolean;
  starredUrl: string;
  subscriptionsUrl: string;
  type: string;
  url: string;
}
export const state = {
  data: {},
  searchData: [] as unknown as types,
  accessToken: '',
  loggingIn: false,
  loading: false,
  loginError: '',
  searchUser: {},
};

export type StateType = typeof state;
