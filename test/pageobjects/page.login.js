class Login{
     get uiScrollableBtn()
     {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("English")')
     }
     get languageBtn()
     {
        return $('//*[@text="English"]');
     }

     get okBtn()
     {
     return $('//*[@resource-id="com.smule.singandroid:id/yesButton"]')
    }

    //2nd it block
    get signInBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/email_button_view"]')
    }

    get setValueEmailBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/editField"]')
    }
    get nextBtn()
    {
        return $('//*[@text="Next"]');
    }

    //3 it block

   ///its for next btn resource id = get $('//*[@resource-id="com.smule.singandroid:id/editField"]')
    get passwdBtn()
    {
        return $('//*[@text="your password"]')
    }

}

module.exports=new Login();