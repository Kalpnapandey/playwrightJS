import{test,expect} from '@playwright/test'

test('Page screenshot', async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
})

test('Full page Screenshot', async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png',fullPage:true})
})

test.only('Element screenshot',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('.login_wrapper-inner').screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'})
})