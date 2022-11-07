const HomePage = require('../pageobjects/homepage');
const ProductGrid = require('../pageobjects/productgrid');
const LoginRegist = require('../pageobjects/login');
const WishList = require('../pageobjects/cart');

describe('Product search functionality without logging in user', () => {
    it('Should search for the given products', () => {        
        HomePage.open();
        browser.maximizeWindow();

        //Search for Dresses
        HomePage.search('Dresses');  
        browser.keys('Enter');
        HomePage.WaitUntilElementAppearsAfterSearch();
        expect(HomePage.searchResults).toBeDisplayed();

        //Search for T-Shirts
        HomePage.search('T-Shirts');  
        browser.keys('Enter');
        HomePage.WaitUntilElementAppearsAfterSearch();
        expect(HomePage.searchResults).toBeDisplayed();

        //Search for T-Shirts
        HomePage.search('Blouse');  
        browser.keys('Enter');
        HomePage.WaitUntilElementAppearsAfterSearch(); 
        expect(HomePage.searchResults).toBeDisplayed(); 
        
        //Now click on first products wishlist icon
        ProductGrid.AddProductInTheCart(0);
        browser.pause(8000)
        
        // //After registration pop up is opened navigate to login link from the pop up
        // LoginRegist.ClickOnLoginLinkFromTheRegPopUp();
        
        // //Login to the site and check first name is displayed with my account icon
        // LoginRegist.login('sumedhrtv@gmail.com','Test1234!','Sumedh');
        
        // //After login Ensure that correct number of wishlisted items are present
        // expect(HomePage.numberOfWishListedItems).toHaveText('1');


        // //Go to wishlisted page
        // ElementGrid.ClickToGoToWishListedProduct();

        // //Remove the product from the wishlist
        // WishList.RemoveWishListedItem();
    })
})