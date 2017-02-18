/**
 * Created by leebreeze on 18/02/2017.
 */

let LoginPage = require('../pages/LoginPage.js');
let loginPage = new LoginPage();
let OrdersPage = require('../pages/OrdersPage');
let ordersPage = new OrdersPage();
let HeaderMenu = require('../pages/HeaderMenu');
let headerMenu = new HeaderMenu();

describe('login', function() {

    beforeAll(function() {
        loginPage.signIn('AlinaSng','LsOg1asdjhhh');
    });

    afterAll(function () {
        // TODO: do logout
    });

    it('should generate a New Order of codes which may be selectioned or not', function() {
        headerMenu.navigateToOrdersPage();
        ordersPage.clickNewOrderButton();
        // expect();
    });

    it('should generate a New Order of codes which may be selectioned or not', function() {
        // TODO
    });

});

