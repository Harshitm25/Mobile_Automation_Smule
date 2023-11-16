const feed = require('../pageobjects/page.feed');
const LogIN = require('../utility/login')

describe("feed block", () => {
    before(async () => {
        await LogIN();
    })

    it("the feed button should be visible", async () => {
        expect(feed.feedBtn).toBeDisplayed();
    })

    it("the feed button should be clickable", async () => {
        expect(feed.feedBtn).toBeClickable()
    })

    it("feed buytton should get clicked and move the the feed page ", async () => {
        await feed.feedBtn.click();
        expect(await feed.feedTitle).toBeDisplayed();

    })

    it('should be able to scrooll ', async () => {
        await feed.feedScrollable;
    })
})