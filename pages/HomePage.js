exports.Homepage=
class HomePage{

    constructor(page){
        this.page=page
        this.productList='.hrefch'
        this.addToCartBtn='//a[normalize-space()="Add to cart"]'
        this.cart='#cartur'
    }

    async addProductToCart(productName){
        const productList=await this.page.$$(this.productList)
        for(const product of productList){
            if(productName===await product.textContent()){
                await product.click()
                break
            }
        }

        await this.page.on('dialog', async dialog=>{
            if(dialog.message().includes('Product added.')){
                await dialog.accept()
            }
        })

        await this.page.click(this.addToCartBtn)
    }

    async goToCart(){
        await this.page.click(this.cart)
    }
}