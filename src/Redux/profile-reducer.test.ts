import { v1 } from "uuid";
import {addPostAC, profileReducer, updateNewPostAC} from "./profile-reducer";



describe("profileReducer", () => {
    let state = {
        posts: [
            { id: v1(), message: "Post 1", likesCount: 0 },
            { id: v1(), message: "Post 2", likesCount: 0 },
        ],
        newPostText: "",
    };

    it("should add a new post to the state", () => {
        const action = addPostAC();
        const newState = profileReducer(state, action);
        expect(newState.posts.length).toBe(3);
        expect(newState.posts[2].message).toBe("");
        expect(newState.posts[2].likesCount).toBe(0);
    });

    it("should update the new post text in the state", () => {
        const newText = "New post text";
        const action = updateNewPostAC(newText);
        const newState = profileReducer(state, action);
        expect(newState.newPostText).toBe(newText);
    });
});