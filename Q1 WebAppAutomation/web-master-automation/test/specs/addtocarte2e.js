const HomePage = require('../pageobjects/homepage');
const ProductGrid = require('../pageobjects/productgrid');
const Login = require('../pageobjects/login');
const SignUp = require('../pageobjects/signup');
const Cart = require('../pageobjects/cart');

describe('Add product to cart and proceed through the checkout process', () => {
    it('The product should be ordered succesfully', () => {        
        HomePage.open();
        browser.maximizeWindow();

        //Automation practice clears the created users periodecally
        //Hence check if login can be done else register the user if deleted and after new registration is complete the user is loggedin
        if(Login.login("testaccounttes@testaccounttes.com","Test1234!","testusertes lastnamtes"))
        {
            //SignUp.Signup("testaccount@testaccount.com","testuser","lastname","Test1234!");    
            expect(Login.myAccountOrderDetailButton.getText().toLowerCase()).toMatch("order history and details");
        }
        else{
            SignUp.Signup("testaccounttes@testaccounttes.com","testusertes","lastnamtes","Test1234!");
            //Ensure user is logged in after signup            
            homePage.homePageLogo.waitForExist({timeout:5000,interval:100});
            homePage.homePageLogo.click();
            //Ensure user is signedin
            productgrid.WaitUntilNameIsDisplayed(firstname);            
        }
        

        //Search for Dresses
        HomePage.search('Dresses');  
        browser.keys('Enter');
        HomePage.WaitUntilElementAppearsAfterSearch();
        expect(HomePage.searchResults).toBeDisplayed();        
        
        //Now click on first product's Add Cart Button
        ProductGrid.AddProductInTheCart(0);
        browser.pause(2000);

        Cart.proceedToCheckOutFromProductGrid.click();
        expect(Cart.cartTitle.getText().toLowerCase()).toMatch("Shopping-cart summary".toLowerCase());
        // Ensure the Summary tab is displayed green        
        expect(ProductGrid.orderSteps[0].getAttribute("class").toString()).toMatch("step_current  first");
        
        //Summary page checkout
        Cart.proceedToCheckOutSummaryStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutSummaryStep.scrollIntoView();
        Cart.proceedToCheckOutSummaryStep.click();
        //Address page checkout
        //Ensure the Address tab is displayed in green since user is already loggedin
        expect(ProductGrid.orderSteps[2].getAttribute("class").toString()).toMatch("step_current third");
        Cart.proceedToCheckOutAddressStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutAddressStep.scrollIntoView();
        Cart.proceedToCheckOutAddressStep.click();
        

        //Shipping page checkout
        //Accept Terms
        //Ensure the Shipping tab is displayed in green since user is already loggedin
        expect(ProductGrid.orderSteps[3].getAttribute("class").toString()).toMatch("step_current four");
        Cart.termsAccept.waitForExist({ timeout:3000, interval:400 });
        Cart.termsAccept.scrollIntoView();
        Cart.termsAccept.click();
        //Shipping checkout
        Cart.proceedToCheckOutShippingStep.waitForExist({ timeout:3000, interval:400 });
        Cart.proceedToCheckOutShippingStep.scrollIntoView();
        Cart.proceedToCheckOutShippingStep.click();

        //Payment Checkout
        // //Ensure the Payment tab is displayed in green since user is already loggedin
        // expect(ProductGrid.orderSteps[4].getAttribute("class").toString()).toMatch("step_current last");
        Cart.paymentBankWire.waitForExist({ timeout:3000, interval:400 });
        Cart.paymentBankWire.scrollIntoView();
        Cart.paymentBankWire.click();

        //Order confirmation
        Cart.confirmOrder.waitForExist({ timeout:6000, interval:400 });
        Cart.confirmOrder.scrollIntoView();        
        Cart.confirmOrder.click();
        Cart.orderComplete.waitForExist({ timeout:5000, interval:400 });
        
        expect(Cart.orderComplete.getText().toLowerCase()).toMatch("your order on my store is complete.");
    })
})