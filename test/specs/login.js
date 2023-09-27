describe("login",()=>
{
    it("should select language and move to login",async()=>
    {
        await driver.pause(3000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("English")');
         language = await $('//*[@text="English"]');
         await language.click();
         let  okbutton = await $('//*[@resource-id="com.smule.singandroid:id/yesButton"]');
         await okbutton.click();
    })


    it("email ")

    it("click on sign with email and get login",async()=>
    {
        await $('//*[@resource-id="com.smule.singandroid:id/email_button_view"]').click();
        await $('//*[@text="Email Address"]').addValue('harshit25@tv.com');
        await $('//*[@resource-id="com.smule.singandroid:id/btn_next"]').click();
        await $('//*[@text="your password"]').addValue("harshit25");
        await $('//*[@text="Next"]').click();

    
    })
})