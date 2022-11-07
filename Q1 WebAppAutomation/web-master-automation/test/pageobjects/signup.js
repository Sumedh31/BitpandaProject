const productgrid = require("./productgrid");
const homePage = require("./homepage");

class SignUp{

    /**
     * define selectors using getter methods
     */
    get createAccountEmail() {return $('.form_content #email_create')}
    get createAccount(){return $('.form_content #SubmitCreate')} 
    get titleMr(){return $('#uniform-id_gender1')}
    get titleMrs(){return $('uniform-id_gender2')}
    get firstName(){return $('#customer_firstname')}
    get lastName(){return $('#customer_lastname')}
    get registrationFromEmail(){return $('#email')}
    get registrationFromPaswd(){return $('#passwd')}
    get dobDay(){return $('#days')}
    get dobMonth(){return $('#months')}
    get dobYear(){return $('#years')}
    get addressFirstName(){return $('#firstname')}
    get addressLastName(){return $('#lastname')}
    get addressCompany(){return $('#company')}
    get addressAddress(){return $('#address1')}
    get addressAddressLine2(){return $('#address2')}
    get addressCity(){return $('#city')}
    get addressState(){return $('#id_state')}
    get addressPostCode(){return $('#postcode')}
    get addressCountry(){return $('#id_country')}
    get addressMobile(){return $('#phone_mobile')}
    get addressAlias(){return $('#alias')}
    get registerButton(){return $('#submitAccount')}

    Signup(email,firstname,lastname,password){
        this.createAccountEmail.setValue(email);
        this.createAccount.click();
        this.titleMr.waitForExist({timeout:5000,interval:100});
        this.titleMr.click();
        this.firstName.setValue(firstname);
        this.lastName.setValue(lastname);
        this.registrationFromPaswd.setValue(password);
        this.dobDay.selectByAttribute('value','1');
        this.dobMonth.selectByAttribute('value','1');
        this.dobYear.selectByAttribute('value','2000');
        this.addressFirstName.setValue(firstname);
        this.addressLastName.scrollIntoView();
        this.addressLastName.setValue(lastname);
        this.addressCompany.setValue("dummytest");
        this.addressAddress.setValue("dummytest");
        this.addressAddressLine2.setValue("dummytest");
        this.addressCity.setValue("Wien");
        this.addressState.scrollIntoView();
        this.addressState.selectByAttribute('value','1');
        this.addressPostCode.setValue("12345");
        this.addressCountry.selectByAttribute('value','21');
        this.addressMobile.setValue('123456789');
        this.addressAlias.setValue('dummy address');
        this.registerButton.click();

        homePage.homePageLogo.waitForExist({timeout:5000,interval:100});
    }

}
module.exports=new SignUp();