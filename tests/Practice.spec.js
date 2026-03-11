import{test,expect} from '@playwright/test'

test('Practice', async({page})=>{
    await page.goto("https://unilever.delivery-uat.gocomet.com/")
    await page.fill('#email','integration-user@unilever.com')
    await page.fill('#password','6b84e15a74116592c4ae34b674960853')
    await page.click('#login-submit')
    await page.waitForTimeout(3000)
})