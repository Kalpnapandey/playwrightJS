import{test,expect} from '@playwright/test'

test('Multiselect Checkboxes', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.selectOption('#colors',['Yellow','Red','White'])

    //Assertions
    //To check number of options
    // const options=await page.locator('#colors option')
    // await expect(options).toHaveCount(7)

    //Checking number of options using js array
    // const options= await page.$$('#colors option')
    // console.log(options.length)
    // await expect(options.length).toBe(7)

    //Checking presence of values in dropdown
    const options=await page.locator('#colors').textContent()
    await expect(options.includes('Red')).toBeTruthy()
    await expect(options.includes('Black')).toBeFalsy()



    await page.waitForTimeout(3000)
})