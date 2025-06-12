import { Given,When,Then } from "@cucumber/cucumber";
import { pagefixture } from "../hooks/pagefixture.js";
import { Loginlocators } from "../pages/loginPages.js";
import { expect} from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

         Given('User Launchs the url', async function () {
           await pagefixture.page.goto(Loginlocators.url);
         });

         When('User enters the username and password', async function () {
            await pagefixture.page.locator(Loginlocators.username).fill(process.env.Mainusername)
            await pagefixture.page.locator(Loginlocators.password).fill(process.env.Mainpassword)
         });



         When('User clicks the Login button', async function () {
            await pagefixture.page.click(Loginlocators.loginbutton)
         });


         Then('User verify the home page.', async function () {
           await expect(await pagefixture.page.locator(Loginlocators.loginscreen)).toHaveText("Products")
         });
         