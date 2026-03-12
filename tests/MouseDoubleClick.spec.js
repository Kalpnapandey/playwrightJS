import{test,expect} from '@playwright/test'

test('Handling Double click of Mouse', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dblclk=await page.locator('//button[normalize-space()="Copy Text"]')

    //double click
    await dblclk.dblclick()

    //Validation
    const f2=await page.locator('#field2')
    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)
})