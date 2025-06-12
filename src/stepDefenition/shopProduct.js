import { Given,When,Then } from "@cucumber/cucumber";
import { pagefixture } from "../hooks/pagefixture.js"
import { ShopProduct } from "../pages/shopProductPages.js"
import { expect } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

         Given('User selects the product', async function () {
         await pagefixture.page.click(ShopProduct.Selectproduct)
         });
       
       
         When('User click the Add to Cart', async function () {
          await pagefixture.page.click(ShopProduct.Addtocartbutton)
         });



         When('User click the Cart button', async function () {
          await pagefixture.page.click(ShopProduct.Cartbutton)
         });


         When('User clicks the Checkout button', async function () {
          await pagefixture.page.click(ShopProduct.Checkoutbutton)
         });


         When('User entres the Checkout details', async function () {
            await pagefixture.page.locator(ShopProduct.firstname).fill("magesh")
            await pagefixture.page.locator(ShopProduct.lastname).fill("poopathi")
            await pagefixture.page.locator(ShopProduct.postalcode).fill("565657")
         });



         When('User clicks the Continue button', async function () {
            await pagefixture.page.click(ShopProduct.continuebutton)
         });


         When('User click the Finish button', async function () {
            await pagefixture.page.click(ShopProduct.finishbutton)
         });


         Then('User verify the Orderconmfirmation page', async function () {
            await expect (await pagefixture.page.locator(ShopProduct.confirmation)).toHaveText("THANK YOU FOR YOUR ORDER")
                });




   