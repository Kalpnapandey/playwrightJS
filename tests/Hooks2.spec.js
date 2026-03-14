import{test,expect} from '@playwright/test'

let page

test.beforeEach(async ({browser})=>{
    page= await browser.newPage()
    await page.goto('https://www.saucedemo.com/')

    //Login
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.click('#login-button')
})

test.afterEach(async()=>{
    //Logout
    await page.click('#react-burger-menu-btn')
    await page.click('#logout_sidebar_link')
})

test('Home page test', async()=>{
    const produts=await page.locator('.inventory_item_name')
    await expect(produts).toHaveCount(6)

    await page.waitForTimeout(5000)
})

test('Add product to cart test', async()=>{
    await page.click('//div[normalize-space()="Sauce Labs Backpack"]')
    await page.click('#add-to-cart')

    await page.waitForTimeout(5000)
})