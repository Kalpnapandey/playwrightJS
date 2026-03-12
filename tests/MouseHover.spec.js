import{test,expect} from '@playwright/test'

test('Mouse Actions',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const pointme=await page.locator('//button[normalize-space()="Point Me"]')
    const mobiles=await page.locator('//a[normalize-space()="Mobiles"]')

    //Mouse Hover
    await pointme.hover()
    await mobiles.hover()

    await page.waitForTimeout(5000)
})