import { v1 } from "uuid";
import {addMessageAC, dialogsReducer} from "./dialogs-reducer";



describe("dialogsReducer", () => {
    test("should add a new message to the state", () => {
        // Arrange
        const initialState = {
            dialogs: [
                { id: v1(), name: "Stanislav" },
                { id: v1(), name: "Egor" },
            ],
            messages: [{ id: v1(), message: "Hi" }],
        };

        const action = addMessageAC("New message");

        // Act
        const newState = dialogsReducer(initialState, action);

        // Assert
        expect(newState.messages.length).toBe(2);
        expect(newState.messages[1].message).toBe("New message");
    });


});

describe("addMessageAC", () => {
    test("should create an action to add a new message", () => {
        // Arrange
        const message = "New message";

        // Act
        const action = addMessageAC(message);

        // Assert
        expect(action.type).toBe("ADD-MESSAGE");
        expect(action.message).toBe(message);
    });
});