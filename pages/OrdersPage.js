/**
 * Created by leebreeze on 18/02/2017.
 */

let OrdersPage = function (){

    let newOrderButton = element(by.id('create-new-order'));
    let orderNameInput = element(by.id('name'));
    let showFilterCheckbox = element(by.model('filter.visible'));
    let filterButton = element(by.css('[ng-click="filter.apply()"]'));
    let firstOrderRow = element(by.id('orders-tableid-0'));
    let orderSectionButton = element(by.css('.vertical-stacked-buttons [kz-restrict-disable="ROLE_SECTION_MANAGER"]'));
    /**
     * Clicks on 'New Order' button
     */
    this.clickNewOrderButton = function(){
        return newOrderButton.click();
    };

    /**
     * Searches and opens order by name (considering order name is unique)
     * @param orderName
     */
    this.openOrderByName = function(orderName){
        showFilterCheckbox.click();
        orderNameInput.sendKeys(orderName);
        filterButton.click();
        firstOrderRow.click();
    };

    /**
     * Checks if 'Sections' button is displayed for an order
     * @returns {*}
     */
    this.isOrderSectionsButtonDisplayed = function () {
        return orderSectionButton.isDisplayed();
    }

};

module.exports = OrdersPage;