import { element,by, browser, protractor } from "protractor";

export class SignupPage{
    public static signupbutton=element(by.xpath("//a[@href='/profile/enrolllanding.action']"))

    async ClickingonSignupButton(){
        browser.wait(protractor.ExpectedConditions.visibilityOf(SignupPage.signupbutton),10000)
        await browser.actions().mouseMove(SignupPage.signupbutton).perform()
        await SignupPage.signupbutton.click()
        //await browser.executeScript("arguments[0].click()",SignupPage.signupbutton)
        browser.sleep(3000)

    }
}
