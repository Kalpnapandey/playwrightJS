import{test,expect} from '@playwright/test'

test('Frames handling', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Total number of frames
    const allFrames =await page.frames()
    console.log(allFrames.length)

    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill('name="mytext1"','Kalpna Pandey')
})