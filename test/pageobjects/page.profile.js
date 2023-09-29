class profile{

    get profileBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]')
    }

    get userIDText()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_username"]')
    }

    //2

    get editBtn()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/btn_edit_profile"]')
    }
    get profilePicText()
    {
        return $('//*[@text="Profile Picture"]');
    }
    //3
    get scrollableTillBio()
    {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Bio")')
    }

    get editBio()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/edit_bio"]');
    }
    get saveBtn()
    {
        return $('//*[@text="Save"]')
    }

    //4
    get bioText()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_profile_blurb"]')
    }

    //5
    get channelBtn()
    {
        return $('//*[@text="Channel"]')
    }

    get channelContainText()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_section_empty"]')
    }
    //6
    get invitesBtn()
    {
        return $('//*[@text="Invites"]');
    }
    get invitesContainText()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_empty_invites_info"]')
    }
    //7
    get playlistBtn()
    {
        return $('//*[@text="Playlists"]')
    }
    get playlistContainingText()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_playlists_count"]')
    }
    get aboutBtn()
    {
        return $('//*[@text="About"]')
    }
    get aboutContainingText()
    {
        return $('//*[@resource-id="com.smule.singandroid:id/txt_section_empty"]')
    }


}

module.exports=new profile();