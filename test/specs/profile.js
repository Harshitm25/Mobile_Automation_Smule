const login=require('../utility/login');
const profile=require('../pageobjects/page.profile');
describe("profile",()=>
{  let text="hi this is harshit";
    before(async()=>
    {   
        await login();
    })
    it("1. navigating to profile page",async()=>
    {
        await driver.pause(3000)
        await profile.profileBtn.click();
        await profile.profileBtn.click();
        await driver.pause(3000)
        const userIDText=await profile.userIDText.getText();
        expect(userIDText).toBe("harshit2514");
        await driver.pause(5000);
    })

    it("2. Edit profile button should exist and information should get edited",async()=>
    {
        
        let editBtn=await profile.editBtn ;
        await editBtn.click();
        expect (await profile.profilePicText).toBeExisting();
    })
    it("3. scroll to bio and add bio",async()=>
    {
        await profile.scrollableTillBio;
        await profile.editBio.addValue(text);
        await profile.saveBtn.click()
    })
    it("4. bio text should be updated in the profile section",async()=>
    {
        const bioText=await profile.bioText.getText();
        await expect (bioText ).toBe(text);
    })

    it("5.Channel section should be clickable",async()=>
    {
        await profile.channelBtn.click();
        expect (await profile.channelContainText).toBeExisting();
    })
    it("6.Invites section should be clickable",async()=>
    {
        await profile.invitesBtn.click();
        expect (await profile.invitesContainText).toBeExisting();
    })
    it("7.Playlist section should be clickable",async()=>
    {
        await profile.playlistBtn.click();
        expect (await profile.playlistContainingText).toBeExisting();
    })
    it("8.About section should be clickable",async()=>
    {
        await profile.aboutBtn.click();
        expect (await profile.aboutContainingText).toBeExisting();
    })

})