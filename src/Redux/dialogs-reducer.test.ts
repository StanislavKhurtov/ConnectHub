import { v1 } from "uuid";
import {addMessageAC, dialogsReducer} from "./dialogs-reducer";
import {DialogsPageType} from "./type";


describe("dialogsReducer", () => {
    let state: DialogsPageType = {
        messages: [
            { id: v1(), message: "Message 1" },
            { id: v1(), message: "Message 2" },
        ]
    };

    it("should add a new message to the state", () => {
        const newMessage = "New message";
        const action = addMessageAC(newMessage);
        const newState = dialogsReducer(state, action);
        expect(newState.messages.length).toBe(3);
        expect(newState.messages[2].id).toBeDefined();
        expect(newState.messages[2].message).toBe(newMessage);
    });

    it("should return the same state if the action type is unknown", () => {
        const action = { type: "UNKNOWN_ACTION_TYPE" };
        const newState = dialogsReducer(state, action);
        expect(newState).toBe(state);
    });
});