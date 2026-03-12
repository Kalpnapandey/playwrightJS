import{test,expect} from '@playwright/test'

test('Date pickers/Calendars',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Direct filling the value
    // await page.fill('#datepicker','03/12/2026')

    //By using the loop
    const year="2026"
    const month="March"
    const date="12"

    await page.click('#datepicker')

    while(true){
    const currentMonth=await page.locator('.ui-datepicker-month').textContent()
    const currentYear=await page.locator('.ui-datepicker-year').textContent()

    if(currentMonth==month && currentYear==year)
    {
        break;
    }

    await page.click('[title="Next"]');
}

const dates=await page.$$('//a[@class="ui-state-default"]')

for(const date of dates){
    if(await date.textContent()==date){
        await date.click()
        break;
    }
}
await page.waitForTimeout(5000)

})