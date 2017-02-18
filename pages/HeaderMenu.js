/**
 * Created by leebreeze on 18/02/2017.
 */

let HeaderMenu = function () {

    let serialization = element(by.id('headermenu-serialization'));
    let trackAndTrace = element(by.id('headermenu-track-and-trace'));
    let policyAndReporting = element(by.id('headermenu-policy-and-reporting'));
    let administration = element(by.id('headermenu-administration'));
    let menuOptionsContainer = element(by.className('menu-group-row'));
    let ordersOption = element(by.id('kcengine-menu-orders'));
    // TODO add locators

    /**
     * Click on Header Menu item
     * @param menuItem
     */
    this.clickHeaderMenuItem = function (menuItem) {
        switch (menuItem) {
            case 'serialization':
                serialization.click();
                break;
            case 'trackAndTrace':
                trackAndTrace.click();
                break;
            case 'policyAndReporting':
                policyAndReporting.click();
                break;
            case 'administration':
                administration.click();
                break;
            default:
               //TODO
                break;
        }
    };

    /**
     * Checks if Options container is displayed
     * @returns {!webdriver.promise.Promise.<boolean>}
     */
    this.isOptionsContainerDisplayed = function () {
        return menuOptionsContainer.isDisplayed(); // returns elements if they are in DOM
    };

    /**
     * Selects option item from options list
     * Header menu item needs to be selected before click
     * @param optionItem
     */
    this.clickOptionItem = function (optionItem) {
        switch (optionItem) {
            case 'orders':
                ordersOption.click();
                break;
            // TODO
        }
    };

    this.navigateToOrdersPage = function () {
        this.clickHeaderMenuItem('serialization');
        expect(this.isOptionsContainerDisplayed()).toBe(true);
        this.clickOptionItem('orders');
    };


};

module.exports = HeaderMenu;