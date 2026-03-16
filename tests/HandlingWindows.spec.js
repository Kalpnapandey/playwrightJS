import{test,expect,chromium} from '@playwright/test'

test.skip('Handle windows', async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()

    const allPages=context.pages()
    console.log("No of pages created",allPages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://orangehrm.com/')
    await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')
})

test('Handle windows2', async()=>{
    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()

    const allPages=context.pages()
    console.log("No of pages created",allPages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise=context.waitForEvent('page')
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()

    const page=await pagePromise
    await expect(page).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')
})