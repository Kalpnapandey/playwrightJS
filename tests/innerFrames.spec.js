import{test,expect} from '@playwright/test'

test('Handling Inner/Nested Frames',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    const frame_3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame_3.locator('[name="mytext3"]').fill('Kalpna Pandey')

    //Child Frames
    const childFrames=await frame_3.childFrames()
    await childFrames[0].locator('#i9').check()

    await page.waitForTimeout(5000)
})