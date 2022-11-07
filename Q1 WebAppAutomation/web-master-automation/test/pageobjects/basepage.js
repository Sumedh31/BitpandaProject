/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        return browser.url(`http://automationpractice.com/index.php`)
    }
}
