import NetworkManger from './NetworkHandler';
import ApiKeys from '../../Constants';

export default class Api {
    static myInstance = null;
    static getInstance() {
        if (Api.myInstance === null) {
            Api.myInstance = new Api();
        }
        return this.myInstance;
    }

    // Users

    login(params, successTrigger, failureTrigger) {
        NetworkManger.getInstance().postFormRequest(ApiKeys.baseURL + 'security/token', null, params,
            function reqSuccess(data) {
                successTrigger(data)
            },
            function reqFailed(error) {
                failureTrigger(error)
            }
        )
    }
}