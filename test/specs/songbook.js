const login = require('../utility/login');
const songbook = require('../pageobjects/page.songbook');
//const selectSong = require('../utility/selectSong')

describe("songbook feature", () => {
    before(async () => {
        await login();
    })
    // beforeEach(async () => {
    //     await selectSong();
    // })

    // it('click on free category and navigate to free songs page',async()=>
    // {
    //     // await songbook.freeBtn.click();
    //     // await songbook.freeBtn.click();
    //     // await songbook.selectSong.click();
    //     // await driver.pause(3000);
    //     expect (await songbook.soloBtn).toBeExisting();
    // })
    it('1. click on solo ', async () => {
        await songbook.freeBtn.click();
        await songbook.freeBtn.click();
        await songbook.selectSong.click();
        await driver.pause(3000)

        expect(await songbook.soloBtn).toBeExisting();
        await songbook.soloBtn.click();
        await driver.pause(5000);
        expect(await songbook.songButtonvisible).toBeClickable();
        await songbook.closeBtn.click();
        await driver.pause(3000);

    })

    it('2. click on Duet ', async () => {
        await songbook.duetBtn.click();
        await songbook.duetBtn.click();
        await driver.pause(5000);
        await songbook.clickOnText.click();
        expect(await songbook.songButtonvisible).toBeExisting();
        await songbook.closeBtn.click();
        await songbook.backBtn.click();
        await songbook.backBtn.click();
        await driver.pause(3000)
    })
    it('3. click on Group ', async () => {
        await songbook.groupBtn.click();
        await driver.pause(5000);
        expect(await songbook.songButtonvisible).toBeClickable();
        await songbook.closeBtn.click();
        await driver.pause(3000);

    })
    it('4. click on Join ', async () => {
        await songbook.joinBtn.click();
        await songbook.joinBtn.click();
        await driver.pause(5000);
        await songbook.scroll;
        await songbook.backBtn.click();
        await songbook.backBtn.click();
        await driver.pause(3000);
        expect(await songbook.songbookText).toBeExisting();
        //expect (await $('//*[@resource-id="com.smule.singandroid:id/sing_cta_button"]')).toBeClickable();
    })
})
//due two bcak
//resource-id
//com.smule.singandroid:id/btn_close;	
//com.smule.singandroid:id/btn_close
//com.smule.singandroid:id/left_button //for join -com.smule.singandroid:id/left_button