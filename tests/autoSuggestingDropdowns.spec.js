import{test,expect} from '@playwright/test'

test('AutoSuggesting Dropdowns', async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.fill('//input[@id="srcinput"]','Delhi')
    await page.waitForSelector('//div[@class="listHeader___1f8448"]')
    const fromCityOptions=await page.$$('//div[@class="listHeader___1f8448"]')

    for(let option of fromCityOptions){
        const value=await option.textContent()
        // console.log(value)
        if(value.includes('Kashmiri Gate')){
            option.click()
            break;
        }
    }
    await page.waitForTimeout(5000)

})