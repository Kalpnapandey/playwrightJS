import{test,epect} from '@playwright/test'

test('Test 1@sanity', async({page})=>{
    console.log('This is the first test')
})

test('Test 2@sanity', async({page})=>{
    console.log('This is the second test')
})

test('Test 3@reg', async({page})=>{
    console.log('This is the third test')
})

test('Test 4@reg', async({page})=>{
    console.log('This is the fourth test')
})

test('Test 5@sanity@reg', async({page})=>{
    console.log('This is the fifth test')
})