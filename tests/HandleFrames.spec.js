import{test,expect} from '@playwright/test'

test('Frames handling', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Total number of frames
    const allFrames =await page.frames()
    console.log(allFrames.length)

    // //Using frame url
    // const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill('[name="mytext1"]','Kalpna Pandey')

    //Using frame's locator
    const inputbox=await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]')
    inputbox.fill('Kalpna Pandey')


    await page.waitForTimeout(5000)
})