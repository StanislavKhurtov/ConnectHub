import {addPostAC} from "../../../../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppRootState} from "../../../../../../Redux/redux-store";
import {connect} from "react-redux";
import {PostType} from "../../../../../../Redux/type";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
};

type MapDispatchToPropsType = {
    addPost: (newPostText:string) => void

};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText:any) => {
           dispatch(addPostAC(newPostText));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

