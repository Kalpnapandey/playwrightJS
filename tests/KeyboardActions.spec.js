import{test,expect} from '@playwright/test'

test('Keyboard Actions',async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')

    await page.type('[name="text1"]','Kalpna Pandey')

    //Ctrl+A Select the text
    await page.keyboard.press('Control+A')

    //Ctrl+c Copy the text
    await page.keyboard.press('Control+C')

    //tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Ctrl+V Paste the text
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)
})