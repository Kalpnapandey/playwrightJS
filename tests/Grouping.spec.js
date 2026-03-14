import{test,expect} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("This is beforeall part")
})

test.afterAll(async()=>{
    console.log("This is after all part")
})

test.beforeEach(async()=>{
    console.log("This is before each part")
})

test.afterEach(async()=>{
    console.log("This is aftereach part")
})

test.describe('Group1', ()=>{
   test('Grouping tests-test1',async({page})=>{
    console.log('This is test 1')
})

test('Grouping tests-test2',async({page})=>{
    console.log('This is test2')
})

})

test.describe('Gropu2', ()=>{

    test('Grouping tests-test3',async({page})=>{
    console.log('This is test 3')
})

test('Grouping tests-test4',async({page})=>{
    console.log('This is test 4')
}) 

})
