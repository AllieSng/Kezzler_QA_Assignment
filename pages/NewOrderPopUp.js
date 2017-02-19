/**
 * Created by leebreeze on 18/02/2017.
 */

let NewOrderPopUp = function () {

    let orderNameInput = element(by.id('order-name-input'));
    let trackAndTrace = element(by.id('headermenu-track-and-trace'));
    let sectionedCheckbox = element(by.model('neworder.sectioned'));
    let createOrderButton = element(by.id('create-order-button'));
    let cancelOrderButton = element(by.id('cancel-create-order-button'));

    /**
     * Creates a new Sectioned or non-Sectioned order
     * @param orderName
     * @param isSectioned
     */
    this.createNewOrder = function (orderName, isSectioned) {
        orderNameInput.sendKeys(orderName);
        if (isSectioned !== undefined){
            sectionedCheckbox.click();
        }
        return createOrderButton.click();
    }
};

module.exports = NewOrderPopUp;