const login = require('../utility/login');
const songbook = require('../pageobjects/page.songbook');


describe("songbook feature", () => {
    before(async () => {
        await login();
    })
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
    })
})
