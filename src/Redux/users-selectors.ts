/*
users: state.usersPage.items,
pageSize: state.usersPage.pageSize,
totalCount: state.usersPage.totalCount,
currentPage: state.usersPage.currentPage,
isFetching: state.usersPage.isFetching,
followingInProgress: state.usersPage.followingInProgress
*/

import {AppRootState} from "Redux/redux-store";

export const getUser = (state:AppRootState) => {
  return state.usersPage.items
}

export const getPageSize = (state:AppRootState) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state:AppRootState) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state:AppRootState) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:AppRootState) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:AppRootState) => {
    return state.usersPage.followingInProgress
}
