import { browser,element,by,WebElement,protractor } from "protractor"
import {  SignupPage } from "../Pages/Signuppage"

let signup=new SignupPage();
describe('sign-up',async function(){
    it('signup',async function(){
        //browser.waitForAngularEnabled(true)
       browser.get("https://www.delta.com/apac/en")
        browser.manage().timeouts().implicitlyWait(10000)
        browser.waitForAngularEnabled(false)
         browser.manage().window().maximize();
       element(by.xpath("//a[text()='Sign Up']")).click()
        element(by.xpath("(//span[@class='ui-icon ui-icon-triangle-1-s'])[1]")).click()
        element(by.xpath("//li[text()='Mrs']")).click()
        element(by.xpath("//input[@id='basicInfoFirstName']")).sendKeys("Mary")
        element(by.xpath("//input[@id='basicInfoLastName']")).sendKeys("Ferl")
        element(by.xpath("//span[@aria-owns='basicInfoGender-menu']")).click()
        element(by.xpath("//li[text()='Female']")).click()
        element(by.xpath("//span[@aria-owns='basicInfoMob-menu']")).click()
        element(by.xpath("//li[text()='February']")).click()
        element(by.xpath("//span[@aria-owns='basicInfoDob-menu']")).click()
        element(by.xpath("//li[text()='2']")).click()
        element(by.xpath("//span[@aria-owns='basicInfoYob-menu']")).click()
        browser.executeScript("arguments[0].scrollIntoView(false);",element(by.xpath("//li[text()='1993']")))
       element(by.xpath("//li[text()='1993']")).click()
        browser.executeScript("arguments[0].scrollIntoView(true);",element(by.xpath("//p[@class='profileDisclaimer']")))
        element(by.xpath("//span[@aria-owns='countryCode-1-menu']")).click()
        browser.executeScript("arguments[0].scrollIntoView(false);",element(by.xpath("//li[text()='India']")))
        element(by.xpath("//li[text()='India']")).click()
        element(by.xpath("//span[@aria-owns='aType-1-menu']")).click()
        element(by.xpath("//li[text()='Home']")).click()
        element(by.xpath("//input[@id='addr1-1']")).sendKeys("blue street")
        element(by.xpath("//input[@id='cityCountyWard-1']")).sendKeys("chennai")
        browser.sleep(2000)
        element(by.xpath("//span[@aria-owns='stateProv-1-menu']")).click()
        browser.executeScript("arguments[0].scrollIntoView(false);",element(by.xpath("//li[text()='Tamil Nadu']")))
        element(by.xpath("//li[text()='Tamil Nadu']")).click()
        element(by.xpath("//input[@id='postal-1']")).sendKeys("600008")
        element(by.xpath("//span[@aria-owns='phoneCountryCode-menu']")).click()
        browser.executeScript("arguments[0].scrollIntoView(false);",element(by.xpath("//span[text()='India  91']")))
        element(by.xpath("//span[text()='India  91']")).click()
        element(by.xpath("//input[@id='requiredPhoneNumber']")).sendKeys("7885454489")
        element(by.xpath("//input[@id='basicInfoEmailAddress']")).sendKeys("test@gmail.com")
        element(by.xpath("//input[@id='requiredEmail2']")).sendKeys("test@gmail.com")
        element(by.xpath("//input[@id='basicInfoUserName']")).sendKeys("Rammiyajoyfen")
        element(by.xpath("//input[@id='basicInfoPassword']")).sendKeys("Fittree1234568")
        
        element(by.xpath("//input[@id='requiredEqualTo']")).sendKeys("Fittree1234568")
        element(by.xpath("//span[@aria-owns='basicInfoQuestionId1-menu']")).click()
        element(by.xpath("//li[text()='What is the name of the first school you attended?']")).click()
        element(by.xpath("//input[@id='basicInfoAnswer1']")).sendKeys("st.Aloy")
        element(by.xpath("//span[@aria-owns='basicInfoQuestionId2-menu']")).click()
        element(by.xpath("(//li[text()='What is the name of your first pet?'])[2]")).click()
        element(by.xpath("//input[@id='basicInfoAnswer2']")).sendKeys("puppy")
        element(by.xpath("//input[@id='next']")).click()
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.xpath("(//h2[@id='idp-dialog-name'])[1]"))),20000)
        element(by.xpath("(//h2[@id='idp-dialog-name'])[1]")).getText().then(function(verificationtext){
        expect(verificationtext.trim()).toEqual("Welcome to SkyMiles");
     })
      
      
      







        






           })
     it('Log in',async function(){
        browser.get("https://www.delta.com/apac/en")
        browser.manage().timeouts().implicitlyWait(10000)
        browser.waitForAngularEnabled(false)
        browser.manage().window().maximize();
     element(by.xpath("//button[text()='Log in']")).click()
     element(by.xpath("//input[@id='userId']")).sendKeys("Rammiyajoy")
     element(by.xpath("//input[@id='lastName']")).sendKeys("Mary")
     element(by.xpath("//input[@id='password']")).sendKeys("Fittree12345")
     element(by.xpath("//button[text()=' Log In ']")).click()
     browser.sleep(1000)
     element(by.xpath("//span[text()='Test']")).click()
     element(by.xpath("//a[@id='flyout-logOut-link']")).click()



     }) 
    it('Book Flight',async function(){
        browser.get("https://www.delta.com/apac/en")
        browser.manage().timeouts().implicitlyWait(10000)
        browser.waitForAngularEnabled(false)
        browser.manage().window().maximize();
        element(by.xpath("//button[text()='Log in']")).click()
        element(by.xpath("//input[@id='userId']")).sendKeys("Rammiyajoy")
        element(by.xpath("//input[@id='lastName']")).sendKeys("Mary")
        element(by.xpath("//input[@id='password']")).sendKeys("Fittree12345")
        element(by.xpath("//button[text()=' Log In ']")).click()
        browser.sleep(1000)
       
        element(by.xpath("//span[text()='From']")).click()
        element(by.xpath("//input[@id='search_input']")).sendKeys("MAA")
        element(by.xpath("//span[text()='Chennai, India']")).click()
        element(by.xpath("//span[text()='To']")).click()
        element(by.xpath("//input[@id='search_input']")).sendKeys("BLR")
        element(by.xpath("//span[text()='Bangalore, India']")).click()
        element(by.xpath("//span[@aria-owns='selectTripType-desc']")).click()
        element(by.xpath("//li[text()='One Way']")).click()
        
        element(by.xpath("//div[@class='calDispValueCont icon-Calendar  ']")).click()
        element(by.xpath("(//a[@class='dl-state-default'])[1]")).click()
           element(by.xpath("//button[@value='done']")).click()
           element(by.xpath("//button[@id='btn-book-submit']")).click()
        browser.sleep(3000)
   
       })
       it('Flight Status',async function(){
        browser.get("https://www.delta.com/apac/en")
        browser.manage().timeouts().implicitlyWait(10000)
        browser.waitForAngularEnabled(false)
        browser.manage().window().maximize();
        element(by.xpath("//button[text()='Log in']")).click()
        element(by.xpath("//input[@id='userId']")).sendKeys("Rammiyajoy")
        element(by.xpath("//input[@id='lastName']")).sendKeys("Mary")
        element(by.xpath("//input[@id='password']")).sendKeys("Fittree12345")
        element(by.xpath("//button[text()=' Log In ']")).click()
        element(by.xpath("//a[text()='FLIGHT STATUS']")).click()
        browser.sleep(1000)
       })
})