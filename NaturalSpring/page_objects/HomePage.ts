import { element, by, browser, $$ } from 'protractor';

export class HomePage {

    public searchBar = "query";
    public suggestions = ".ui-menu-item";
    

    public setSearchBar() {
        return element(by.id(this.searchBar));
    }

    public getSuggestions() {
        return element.all(by.css(this.suggestions)).count();   
    }

}