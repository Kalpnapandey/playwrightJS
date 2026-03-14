import{test,expect} from '@playwright/test'

test('Files upload handling', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('tests/uploadFiles/pdf_1.pdf')
    await page.locator('#file-upload').setInputFiles([])
    await page.waitForTimeout(5000)

})