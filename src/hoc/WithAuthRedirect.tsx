import React from 'react';
import {Redirect} from "react-router-dom";
import {AppRootState} from "../Redux/redux-store";
import {connect} from "react-redux";

//types

type MapStateToPropsRedirectType = {
    isAuth: boolean
}
let mapStateToPropsRedirect = (state: AppRootState): MapStateToPropsRedirectType => ({
    isAuth: state.auth.isAuth
});
export const WithAuthRedirect = (Component: any): any => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect<MapStateToPropsRedirectType,any,any,AppRootState>(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedRedirectComponent
};







