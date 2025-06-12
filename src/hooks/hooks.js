import  { pagefixture } from "./pagefixture.js";
import { BeforeAll,AfterAll } from "@cucumber/cucumber";
import {chromium} from "@playwright/test"

let browser;

BeforeAll( async function(){
  console.log("browser launched")
  browser=await chromium.launch({headless:false})
  pagefixture.page= await browser.newPage();
})

AfterAll(async function(){
 await pagefixture.page.close();
 await  browser.close();
})