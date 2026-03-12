import{test,expect} from '@playwright/test'

test('Mouse Drag and Drop action', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const src= await page.locator('#draggable')
    const destination=await page.locator('#droppable')

    //APPROACH 1
    // await src.hover()
    // await page.mouse.down()

    // await destination.hover()
    // await page.mouse.up()

    //APPROACH 2
    await src.dragTo(destination)
    
    await page.waitForTimeout(5000)
})