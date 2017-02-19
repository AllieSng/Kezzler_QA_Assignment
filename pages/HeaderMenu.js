/**
 * Created by leebreeze on 18/02/2017.
 */

const MenuOptions = require('../components/MenuOptions.js');

let HeaderMenu = function () {

    let serialization = element(by.id('headermenu-serialization'));
    let trackAndTrace = element(by.id('headermenu-track-and-trace'));
    let policyAndReporting = element(by.id('headermenu-policy-and-reporting'));
    let administration = element(by.id('headermenu-administration'));
    let menuOptionsContainer = element(by.className('menu-group-row'));
    let ordersOption = element(by.id('kcengine-menu-orders'));

    /**
     * Click on Header Menu item
     * @param menuItem
     */
    this.clickHeaderMenuItem = function (menuItem) {
        if(menuItem.value === MenuOptions.SERIALIZATION.ORDERS.value){
            serialization.click();
            ordersOption.click();
        }
    };
};

module.exports = HeaderMenu;