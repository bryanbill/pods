export class EngineClass {

    constructor() {

    }
    public authEngine(username: String) {
        //Implement Auth Services Here
        //returns token
    }
    public storageEngine(token: String) {
        //implement Storage Services Here
    }
    public walletEngine(token: String) {
        //implement the wallet services here
        //return only the possible objects for the logged in user, takes token
    }
    public arenaEngine(token: String) {
        //return only the possible objects for the logged in user, takes token
        return;
    }
    //Crashlytics not available under PODS
    public appCenter(token?: String) {
        //token is not compulsory, provide a listing even for non-logged in users
        
    }
}