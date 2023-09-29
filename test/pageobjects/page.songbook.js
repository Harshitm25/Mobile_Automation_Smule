class Songbook{


    //solo
    get freeBtn()
    {
        return $('//*[@text="Free"]')
    }

    get selectSong()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/root"]')
    }

    get soloBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/rec_type_solo_container"]')
    }
    get songButtonvisible()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/sing_cta_button"]')
    }

    get closeBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/btn_close"]')
    }

    //duet
    get duetBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/rec_type_duet_container"]')
    }

    get clickOnText()
    {
        return $('//*[@text="I want to make up my own parts"]')
    }

    get backBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/left_button"]')
    }
    //join
    get joinBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/rec_type_join_container"]')
    }
    
    get songbookText()
    {
        return $('//*[@text="Songbook"]')   
    }

    get scroll()
    {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
    }

    get groupBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/rec_type_group_container"]')
    }
    
}

module.exports=new Songbook();