import UserModel from "../../Models/UserModel";
import { Actions } from "react-native-router-flux";

// import Constants from 'expo-constants';
// import Encryption from '../Shared/Encryption';


export default class NetworkHandler {
    static myInstance = null;
    static getInstance() {
        if (NetworkHandler.myInstance === null) {
            NetworkHandler.myInstance = new NetworkHandler();
        }
        return this.myInstance;
    }

    getNetworkRequest(url, token, serviceParams, successCallback, failureCallback) {
        console.log('parameters are : ' + JSON.stringify(serviceParams));

        if (serviceParams != null) {
            url = url + '?'
            for (const [key, value] of Object.entries(serviceParams)) {
                url = url + key + '=' + value + '&'
            }
            url = url.slice(0, -1)
        }

        console.log(url)
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': token ? `Bearer ${token}` : null,
            },
        })
            .then((response) => {
                console.log('initial: ', response)
                if (response.status === 401) {
                    UserModel.getInstance().signOut();
                }
                return response.json()
            })
            .then(responseJson => {
                console.log('Responce from server is ', responseJson)
                if (responseJson.error) {
                    console.log('GET FAIL')
                    failureCallback(responseJson.error_description);
                } else if (responseJson.status) {
                    if (responseJson.status === 'success') {
                        successCallback(responseJson)
                    } else {
                        failureCallback(responseJson.message);
                    }
                } else {
                    failureCallback('Something Went Wrong')
                }
            })
            .catch(error => {
                failureCallback('network exception occured in network call with Error: ' + error);
            });
    }
    postNetworkRequest(url, token, serviceParams, successCallback, failureCallback) {
        console.log('parameters are : ' + JSON.stringify(serviceParams));
        console.log('URL: ', url)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': token ? `Bearer ${token}` : null,
            },
            body: JSON.stringify(serviceParams)
        })
            .then((response) => {
                if (response.status === 401) {
                    UserModel.getInstance().signOut();
                }
                console.log('PEHLA JSON: ', response)
                return response.json()
            })
            .then(responseJson => {
                console.log('Responce from server is ', responseJson)
                if (responseJson.error) {
                    console.log('GET FAIL')
                    failureCallback(responseJson.error_description);
                } else if (responseJson.status) {
                    if (responseJson.status === 'success') {
                        successCallback(responseJson)
                    } else {
                        failureCallback(responseJson.message);
                    }
                } else {
                    failureCallback('Something Went Wrong')
                }
            })
            .catch(error => {
                failureCallback('network exception occured in network call with Error: ' + error);
            });
    }

    putNetworkRequest(url, token, serviceParams, successCallback, failureCallback) {
        console.log('parameters are : ' + JSON.stringify(serviceParams));
        console.log('URL: ', url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': token ? `Bearer ${token}` : null,
            },
            body: JSON.stringify(serviceParams)
        })
            .then((response) => {
                if (response.status === 401) {
                    UserModel.getInstance().signOut();
                }
                console.log('PEHLA JSON: ', response)
                return response.json()
            })
            .then(responseJson => {
                console.log('Responce from server is ', responseJson)
                if (responseJson.error) {
                    console.log('GET FAIL')
                    failureCallback(responseJson.error_description);
                } else if (responseJson.status) {
                    if (responseJson.status === 'success') {
                        successCallback(responseJson)
                    } else {
                        failureCallback(responseJson.message);
                    }
                } else {
                    failureCallback('Something Went Wrong')
                }
            })
            .catch(error => {
                failureCallback('network exception occured in network call with Error: ' + error);
            });
    }

    encodeFormData(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }
    postFormRequest(url, token, serviceParams, successCallback, failureCallback) {
        console.log('parameters are : ' + JSON.stringify(serviceParams));

        let params = this.encodeFormData(serviceParams)
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': token ? `Bearer ${token}` : null,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: params
        })
            .then((response) => {
                console.log('INITIAL: ', response)
                return response.json()
            })
            .then(responseJson => {
                console.log('Responce from server is ', responseJson)
                if (responseJson.error) {
                    console.log('GET FAIL')
                    failureCallback(responseJson.error_description);
                } else if (responseJson.message) {
                    failureCallback(responseJson.message)
                } else {
                    successCallback(responseJson)
                }
            })
            .catch(error => {
                failureCallback('network exception occured in network call with Error: ' + error);
            });
    }

}
