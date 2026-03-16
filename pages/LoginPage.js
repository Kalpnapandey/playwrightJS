exports.LoginPage=
class LoginPage{

    constructor(page){
        this.page=page
        this.loginlink='#login2'
        this.username='#loginusername'
        this.password='#loginpassword'
        this.loginbtn='//button[normalize-space()="Log in"]'
    }

    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html')
    }

    async login(username,password){
        await this.page.click(this.loginlink)
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.click(this.loginbtn)
    }
}