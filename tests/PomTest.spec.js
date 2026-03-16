import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Homepage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'

test('test', async({page}) =>{

    //Login
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('kalpnapandey','kalpna')
    await page.waitForTimeout(3000)

    //Homepage
    const home=new Homepage(page)
    await home.addProductToCart('Samsung galaxy s6')
    await page.waitForTimeout(5000)
    await home.goToCart()
    // await page.waitForTimeout(3000)

    //Cart Page
    const cart=new CartPage(page)
    await page.waitForTimeout(5000)
    const status=await cart.checkProductInCart('Samsung galaxy s6')
    await expect(status).toBe(true)
})