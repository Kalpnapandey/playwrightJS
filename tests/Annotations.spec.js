import{test,expect} from '@playwright/test'

test('Test 1 with slow',async({page})=>{
    test.slow()
    await page.goto('https://sdettech.com/')
})

