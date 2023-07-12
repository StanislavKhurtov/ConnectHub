import React from "react";
import main from './Main.module.css';
import {Navbar} from "./Section/Navbar/Navbar";
import {Profile} from "./Section/Profile/Profile";
import {Dialogs} from "./Section/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./Section/News/News";
import {Settings} from "./Section/Settings/Settings";
import {Music} from "./Section/Music/Music";
import {DialogsDataType, MessagesDataType, PostType} from "../../Redux/State";



type MainProps = {
    posts: PostType[];
    dialogs: DialogsDataType[];
    messages: MessagesDataType[];
    addPost:(postMessage: string) =>void
};

export const Main: React.FC<MainProps> = (props) => {
    return (
        <div className={main.main}>
            <div className={main.main__container}>
                <Navbar/>
                <div className={main.body}>
                    <Route path='/profile' render={() => <Profile posts={props.posts} addPost={props.addPost}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs}
                                                                  messages={props.messages}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </div>
    );
}






