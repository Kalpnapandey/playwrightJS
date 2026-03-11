import{test,expect} from '@playwright/test'

test.skip('Alerts',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('Dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect (dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })
})    

    test.skip('Confirmation Dialog-Alert with Ok and Cancel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('Dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect (dialog.message()).toContain('Press a button!')
        await dialog.accept()
    })

    //for Dialog with OK
    // await page.click('//button[@id="alertBtn"]')

    //Confirmation with Ok and cancel
    await page.click('//button[@id="confirmBtn"]')
    await expect(page.locator('//p[@id="demo"]')).toContainText('You pressed Cancel!')

    await page.waitForTimeout(5000)

})

test('Prompt type dialog',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('Dialog',async dialog=>{

        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        // await dialog.accept()
        await dialog.dismiss()
    })

    await page.click('//button[@id="promptBtn"]')
    await expect(page.locator('//p[@id="demo"]')).toContainText('User cancelled the prompt.')
})