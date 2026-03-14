import{test,expect} from '@playwright/test'

// test('Home page test', async({page})=>{
//     await page.goto('https://www.saucedemo.com/')

//     //Login
//     await page.fill('#user-name','standard_user')
//     await page.fill('#password','secret_sauce')
//     await page.click('#login-button')

//     //Home Page
//     const produts=await page.locator('.inventory_item_name')
//     await expect(produts).toHaveCount(6)

//     //Logout
//     await page.click('#react-burger-menu-btn')
//     await page.click('#logout_sidebar_link')

//     await page.waitForTimeout(5000)
// })

test('Add product to cart test', async({page})=>{
    await page.goto('https://www.saucedemo.com/')

    //Login
    await page.fill('#user-name','standard_user')
    await page.fill('#password','secret_sauce')
    await page.click('#login-button')


    //Add product to cart
    await page.click('//div[normalize-space()="Sauce Labs Backpack"]')
    await page.click('#add-to-cart')

    //Logout
    await page.click('#react-burger-menu-btn')
    await page.click('#logout_sidebar_link')

    await page.waitForTimeout(5000)
})