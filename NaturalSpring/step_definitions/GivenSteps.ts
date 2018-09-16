import { binding, given, when, then } from "cucumber-tsflow";
import { browser, $, protractor, $$ } from "protractor";
import { Utils } from "../../utils/utils";
var expect = require('chai').expect
import { HomePage } from "../page_objects/HomePage";
let EC = protractor.ExpectedConditions;

@binding()
class GivenSteps {
    private utils: Utils = new Utils();
    private homePage: HomePage = new HomePage();

    @when(/^I enter "([^"]*)"$/)
    public iEnter(arg1, callback): void {
        this.homePage.setSearchBar().sendKeys(arg1);
        callback();
    }

    @then(/^I should see (\d+) search suggestions$/)
    public iShouldSeeSearchSuggestions (arg1, callback): void {
      browser.wait(EC.presenceOf($(this.homePage.suggestions)), 5000);
           this.homePage.getSuggestions().then((count) => {
           expect(count).to.equal(5);
           callback(); 
      })
    }
}
export = GivenSteps;