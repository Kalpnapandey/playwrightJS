import{test,expect} from '@playwright/test'

test('Dropdowns', async({page})=>{
    await page.goto("https://www.automationtesting.co.uk/dropdown.html")
    // await page.locator("#cars").selectOption({label:'Audi'})
    // await page.waitForTimeout(3000)
    // await page.locator("#cars").selectOption('BMW')
    // await page.waitForTimeout(3000)
    // await page.locator("#cars").selectOption({value:'ford'})
    // await page.waitForTimeout(3000)
    // await page.locator("#cars").selectOption({index:6})
    // await page.waitForTimeout(3000)
    // await page.selectOption("#cars",'Jeep')
    // await page.waitForTimeout(3000)

    //Assertions
    //1. Check number of options in dropdown
    // const options=await page.locator('#cars option')
    // await expect(options).toHaveCount(8)

    //2. Check number of dropdowns again
    const options=await page.locator('#cars option')
    console.log("Total number of options are:",options.length)
    await expect(options.length).toBe(10)




})