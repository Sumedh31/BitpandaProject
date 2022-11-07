const HomePage = require('../pageobjects/homepage');
const ProductGrid = require('../pageobjects/productgrid');
const Login = require('../pageobjects/login');
const SignUp = require('../pageobjects/signup');
const Cart = require('../pageobjects/cart');
const Common = require('../pageobjects/common');
const homepage = require('../pageobjects/homepage');

describe('Signup process', () => {
    it('The signup process for new users should work fine', () => {
        var firstname=  Common.MakeRandomString(5);
        var lastname=Common.MakeRandomString(4);
        var email=firstname+"@"+lastname+".com";  

        HomePage.open();
        browser.maximizeWindow();

        //Wait until sign in link is displayed
        Login.signinHeader.waitForExist({ timeout:3000, interval:400 });
        Login.signinHeader.click();

        //Initiate the sign up process
        SignUp.Signup(email,firstname,lastname,"Test1234!"); 
        homepage.homePageHeading.waitForExist({timeout:5000,interval:100});

        expect(homepage.homePageHeading.getText().toLowerCase()).toMatch("my account");
        
    })
})