class Message{

    // 1
    get messageBtn()
    {
        return $('~Messages');
    }
    get textOnNextPage()
    {
    return $('//*[@text="Messages from people you follow"]')
    }

    //2
    get newChatBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/start_new_chat_icon"]')
    }
    get searchEditText()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/search_edit_text"]')
    }

    //3

    get chatTitle()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/chat_title"]')
    }
    get newChatForwardChat()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/new_chat_forward_chat"]')
    }

    //4
     
    get inputBox()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/inputBox"]')
    }
    get sendBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/send_button"]')
    }

    get chatTextMessage()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/chat_text_bubble"]')
    }


}

module.exports=new Message();