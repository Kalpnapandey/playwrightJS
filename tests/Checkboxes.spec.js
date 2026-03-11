import{test,expect} from '@playwright/test'

test('Checkboxes', async({page})=>{
    await page.goto("https://www.qa-practice.com/elements/checkbox/mult_checkbox")
    await page.locator('//input[@id="id_checkboxes_0" and @type="checkbox"]').check()
    expect(page.locator('//input[@id="id_checkboxes_0" and @type="checkbox"]')).toBeChecked()
    expect(page.locator('//input[@id="id_checkboxes_0" and @type="checkbox"]').isChecked()).toBeTruthy()

    //Multiple checkboxes

    const checkboxLocators=[
        '//input[@id="id_checkboxes_0" and @type="checkbox"]',
        '//input[@id="id_checkboxes_1" and @type="checkbox"]',
        '//input[@id="id_checkboxes_2" and @type="checkbox"]'

    ]

    for (const locator of checkboxLocators){
        await page.locator(locator).click()
    }

    await page.waitForTimeout(3000)

    for (const locator of checkboxLocators){
        if(page.locator(locator).isChecked()){
            await page.locator(locator).uncheck()
        }
    }

    await page.waitForTimeout(5000)


})