const login = require('../pageobjects/page.login');
const credendtialsfilePath = require('../../credentials.json')

const LOGIN = async () => {
     await driver.pause(5000);
     await login.uiScrollableBtn;
     language = await login.languageBtn;
     await language.click();
     let okbutton = await login.okBtn;
     await okbutton.click();
     await login.signInBtn.click();
     await login.setValueEmailBtn.setValue(credendtialsfilePath.username);
     await login.nextBtn.click();
     await login.passwdBtn.addValue(credendtialsfilePath.password);
     await login.nextBtn.click();

};

module.exports = LOGIN;
