const BasePage = require('./basepage');
const Page = require('./basepage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get searchBar (){return $('#search_query_top')}    
    get searchResults () {return $('//h1[contains(@class,"page-heading")]//span[contains(text(),"been found")]')}    
    get homePageLogo() {return $('#header_logo')}
    get homePageHeading() {return $('#center_column .page-heading')}
    

    /**
     * a method to encapsule automation code to interact with the page     
     */
    search (keyword){
        this.searchBar.setValue(keyword);
    }
    WaitUntilElementAppearsAfterSearch(){
        this.searchResults.waitForExist({ timeout:8000, timeoutMsg:'Page elements were not loaded', interval:100 });
    }
    

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
