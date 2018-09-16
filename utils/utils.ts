import { browser, protractor, $, element, by, ElementFinder, ElementHelper, ElementArrayFinder, WebElementPromise } from 'protractor';
import { Screenshot } from './screenshot';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export class Utils {
    public screenshot: Screenshot = new Screenshot();

    public init(): any {
        var self = this;
        var defferred = protractor.promise.defer();
        this.screenshot.prepareFolders().then(function () {
            browser.ignoreSynchronization = true;
            var url = browser.baseUrl;
            browser.manage().deleteAllCookies().then(function () {
               browser.get(url).then(function () {
                  defferred.fulfill();
               });
            });
        });
        return defferred.promise;
    }



    /**
     * @method clearStorage
     * @desc Clear browser's local storage and session storage
     **/
    public clearStorage() {
        return browser.executeScript("window.localStorage.clear();").then(() => {
            browser.executeScript("window.sessionStorage.clear();");
        });
    }
}
