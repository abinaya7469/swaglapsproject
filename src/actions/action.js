import { pagefixture } from "../hooks/pagefixture.js";

export async function tofill(xpath,text){
   await pagefixture.page.locator(xpath).fill(text);
}

export async function  toclick(xpath){
  await  pagefixture.page.locator(xpath).click();
}

export async function dropdown(xpath,value) {
  await pagefixture.page.selectOption(xpath,value)
}
