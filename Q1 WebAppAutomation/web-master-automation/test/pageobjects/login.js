const productgrid = require("./productgrid");
const homePage = require("./homepage");

class Login{
    
    /**
     * define selectors using getter methods
     */
    get signinHeader () {return $('.header_user_info .login')}
    get userName () {return $('#email')}
    get password () {return $('#passwd')}
    get signinButton () {return $('#SubmitLogin')} 
    get myAccountOrderDetailButton () {return $('//ul[@class="myaccount-link-list"]//a[@title="Orders"]/span')}       

    
    login(username,password,Name){
        //Click on home logo to ensure user is on home page befor login
        try{
            homePage.homePageLogo.click();
            //Wait until sign in link is displayed
            this.signinHeader.waitForExist({ timeout:3000, interval:400 });
            this.signinHeader.click();
            this.userName.waitForExist({ timeout:3000, interval:400 });
            //Enter user details
            this.userName.setValue(username);
            this.password.setValue(password);
            this.signinButton.click();   
            //Wait until Name is displayed with myaccount
            productgrid.WaitUntilNameIsDisplayed(Name);  
            return true
        }
        catch{
            return false
        }
      
    }
}
module.exports=new Login();