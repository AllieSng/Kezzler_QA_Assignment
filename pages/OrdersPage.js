/**
 * Created by leebreeze on 18/02/2017.
 */

let OrdersPage = function (){

    let newOrderButton = element(by.id('create-new-order'));

    /**
     * Clicks on 'New Order' button
     */
    this.clickNewOrderButton = function(){
        newOrderButton.click();
    };
};

module.exports = OrdersPage;