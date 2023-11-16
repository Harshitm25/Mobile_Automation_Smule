const login = require('../pageobjects/page.login');
const credendtialsfilePath = require('../../credentials.json')
describe("login", () => {
    it("should select language and move to login", async () => {
        await driver.pause(3000);
        await login.uiScrollableBtn;
        language = await login.languageBtn;
        await language.click();
        let okbutton = await login.okBtn;
        await okbutton.click();
    })


    it("email should be invalid and next buttion should be disable", async () => {
        await login.signInBtn.click();
        await login.setValueEmailBtn.setValue('harshit25');
        expect(await login.nextBtn).not.toBeClickable();
    })

    it("click on sign with email and get login", async () => {
        await login.setValueEmailBtn.setValue(credendtialsfilePath.username);
        await login.nextBtn.click();
        await login.passwdBtn.addValue(credendtialsfilePath.password);
        await login.nextBtn.click();
        await driver.pause(5000)

    })
})