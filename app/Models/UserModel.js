import { AsyncStorage } from 'react-native'
import ApiManager from '../Helpers/Network/Api';
import { Actions } from 'react-native-router-flux';
// import ApiConstants from '../Constants/api';



export default class UserModel {
    static myInstance = null;
    static getInstance() {
        if (UserModel.myInstance === null) {
            UserModel.myInstance = new UserModel();
        }
        return this.myInstance;
    }

    static access_token = null;
    static refresh_token = null;
    static tenant = undefined;
    static notifications = null;

    isAuth() {
        if (UserModel.access_token) {
            return true
        }
        return false
    }

    signOut() {
        Actions.login();
        AsyncStorage.removeItem('access_token');
        AsyncStorage.removeItem('refresh_token');
        UserModel.access_token = null;
        UserModel.refresh_token = null;
        UserModel.tenant = undefined;
    }



    login(params, successCallback, failureCallback) {
        ApiManager.getInstance().login(params,
            function resSuccess(data) {
                AsyncStorage.setItem('access_token', data.access_token);
                AsyncStorage.setItem('refresh_token', data.refresh_token);
                UserModel.access_token = data.access_token;
                UserModel.refresh_token = data.refresh_token;
                successCallback(data)
            },
            function resFailed(error) {
                failureCallback(error)
            }
        )
    }

}