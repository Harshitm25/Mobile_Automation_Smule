const login = require('../pageobjects/page.login');
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
        // let nextBtn=);
        expect(await login.nextBtn).not.toBeClickable();
    })

    it("click on sign with email and get login", async () => {
        // await $('//*[@resource-id="com.smule.singandroid:id/email_button_view"]').click();
        await login.setValueEmailBtn.setValue('harshit25@tv.com');
        // await $('//*[@resource-id="com.smule.singandroid:id/btn_next"]').click();
        await login.nextBtn.click();
        await login.passwdBtn.addValue("harshit25");
        await login.nextBtn.click();

        await driver.pause(5000)

    })
})