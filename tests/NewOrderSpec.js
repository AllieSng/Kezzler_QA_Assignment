/**
 * Created by leebreeze on 18/02/2017.
 */
const MenuOptions = require('../components/MenuOptions.js');
let LoginPage = require('../pages/LoginPage.js');
let loginPage = new LoginPage();
let OrdersPage = require('../pages/OrdersPage');
let ordersPage = new OrdersPage();
let HeaderMenu = require('../pages/HeaderMenu');
let headerMenu = new HeaderMenu();
let NewOrderPopUp = require('../pages/NewOrderPopUp');
let newOrderPopUp = new NewOrderPopUp();

describe('Generating a New Order of codes which may be sectioned or not: ', function() {

    beforeAll(function() {
        let params = browser.params;
        loginPage.signIn(params.login.user, params.login.password);
    });

    it('should generate a New Order of codes which is sectioned', function() {
        let orderNameGenerated = Math.random().toString(36).substring(2,7);
        headerMenu.clickHeaderMenuItem(MenuOptions.SERIALIZATION.ORDERS);
        ordersPage.clickNewOrderButton();
        newOrderPopUp.createNewOrder(orderNameGenerated, 'sectioned').then(function() {
            ordersPage.openOrderByName(orderNameGenerated);
            expect(ordersPage.isOrderSectionsButtonDisplayed()).toBe(true, 'Sectioned order should have sections button');
        });
    });

    it('should generate a New Order of codes which may be sectioned or not', function() {
        let orderNameGenerated = Math.random().toString(36).substring(2,7);
        headerMenu.clickHeaderMenuItem(MenuOptions.SERIALIZATION.ORDERS);
        ordersPage.clickNewOrderButton();
        newOrderPopUp.createNewOrder(orderNameGenerated).then(function() {
            ordersPage.openOrderByName(orderNameGenerated);
            expect(ordersPage.isOrderSectionsButtonDisplayed()).toBe(false, 'Sectioned order should not have sections button');
        });
    });
});

