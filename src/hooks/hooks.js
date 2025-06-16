import  { pagefixture } from "./pagefixture.js";
import { BeforeAll,AfterAll } from "@cucumber/cucumber";
import {chromium,firefox,webkit} from "@playwright/test"
import env from 'dotenv';
env.config();

let browser;
let context;
let Browsername=process.env.Browser;

BeforeAll( async function(){
  console.log("browser launched")

  switch(Browsername){
    case "CHROMIUM":
        browser=await chromium.launch({headless:false})
        context = await browser.newContext();
        pagefixture.page= await context.newPage();
        break;
    case "FIREFOX":
      browser=await firefox.launch({headless:false})
      context = await browser.newContext();
      pagefixture.page= await context.newPage();   
      break;
    case "WEBKIT":
      browser=await webkit.launch({headless:false})
       context = await browser.newContext();
      pagefixture.page= await context.newPage();   
      break; 
    default:
        browser=await chromium.launch({headless:false})
        context = await browser.newContext();
        pagefixture.page= await context.newPage();
        break;
  }
  
})

AfterAll(async function(){
 await pagefixture.page.close();
 await context.close();
 await  browser.close();
})