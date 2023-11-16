const login = require('../utility/login');
const message=require('../pageobjects/page.message');
describe("message", () => {

    before(async()=>
    {
        await login();
    })

    it('1. clicking on messgae', async () => {
        await message.messageBtn.click();
        await message.messageBtn.click();
        expect (await message.textOnNextPage).toBeDisplayed();
       
    })

    it("2. clicking on + icon ",async()=>
    {
        await driver.pause(10000);
        await message.newChatBtn.click();
        expect(await message.searchEditText).toBeExisting();
    })


    it('3. enter username and navigate to next page', async () => {
        let userName = "Romanrings98";
        await message.searchEditText.setValue(userName);
        await driver.pause(6000);
        await message.chatTitle.click();
        await message.newChatForwardChat.click();
    })

    it("4. enter message", async () => {
        let chatMessage="hello";
        expect(await message.inputBox).toBeExisting();
        await message.inputBox.setValue(chatMessage);
        await message.sendBtn.click();
        expect (await message.chatTextMessage).toBeDisplayed();

    })

})