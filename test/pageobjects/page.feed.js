class Feed{
    get feedBtn()
    {
        return $('//*[@text="Feed"]')
    }

    get feedTitle()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/title_container"]')
    }

    get feedScrollable()
    {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }
    
}
module.exports=new Feed()