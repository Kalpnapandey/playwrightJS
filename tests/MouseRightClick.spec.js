import{test,expect} from '@playwright/test'

test('Mouse Right Click', async({page})=>{
    await page.goto('https://demoqa.com/buttons')
    const rightClick=await page.locator('#rightClickBtn')
    await rightClick.click({button:'right'})
    await page.waitForTimeout(5000)
})