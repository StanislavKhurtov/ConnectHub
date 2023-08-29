import { v1 } from "uuid";
import { profileReducer, addPostAC, updateNewPostAC, setUserProfile } from "./profile-reducer";

describe("profileReducer", () => {
    let initialState = {
        posts: [
            { id: v1(), message: "Hi", likesCount: 15 },
            { id: v1(), message: "How is your it-kamasutra", likesCount: 14 },
            { id: v1(), message: "yo", likesCount: 9 },
            { id: v1(), message: "полный пипец", likesCount: 10 },
            { id: v1(), message: "Hi", likesCount: 25 },
        ],
        newPostText: "",
        profile: null,
    };

    it("should add a new post to the state", () => {
        const text = "New post";
        const action = addPostAC();
        const newState = profileReducer(initialState, action);

        expect(newState.posts.length).toBe(initialState.posts.length + 1);
        expect(newState.posts[newState.posts.length - 1].message).toBe("");
        expect(newState.posts[newState.posts.length - 1].likesCount).toBe(0);
    });

    it("should update the new post text in the state", () => {
        const text = "New post text";
        const action = updateNewPostAC(text);
        const newState = profileReducer(initialState, action);

        expect(newState.newPostText).toBe(text);
    });

    it("should set the user profile in the state", () => {
        const profile = { name: "John Doe", age: 25 };
        const action = setUserProfile(profile);
        const newState = profileReducer(initialState, action);

        expect(newState.profile).toBe(profile);
    });
});