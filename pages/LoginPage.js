/**
 * Created by leebreeze on 18/02/2017.
 */

let LoginPage = function (){

    let container = element(by.id('content'));
    let companyLogo = element(by.id('company-logo'));
    let userNameInput = element(by.id('username'));
    let passwordInput = element(by.id('password'));
    let rememberMeCheckbox = element(by.id('remember-me'));
    let signInButton = element(by.id('sign-in-button'));

    let URL = 'https://core.dev.kezzler.net';

    this.open = function(){
        browser.get(URL);
    };

    /**
     * Signs in to SSP UI ising given credentials
     * @param username
     * @param password
     */
    this.signIn = function(username, password){
        this.open();
        userNameInput.clear();
        userNameInput.sendKeys(username);
        passwordInput.clear();
        passwordInput.sendKeys(password);
        signInButton.click();
    };
};

module.exports = LoginPage;