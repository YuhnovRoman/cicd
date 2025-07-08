import { test } from '../helper/fixtures/index';
export class AuthPage {
    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole("link", { name: "Login" });
        this.signUpLink = page.getByRole("link", { name: "Sign up" });
        this.nameInput = page.getByRole('textbox', { name: "Your Name" });
        this.emailInput = page.getByRole('textbox', { name: "Email" });
        this.passwordInput = page.getByRole('textbox', { name: "Password" });
        this.authModalLoginButton = page.getByRole('button', { name: "Login" });
        this.sigUpButton = page.getByRole('button', { name: "Sign up" });
        this.userImg = page.locator("img[class='user-pic']");
    };

    async registration(randomUser) {
        return test.step("Заполнение данных в модальном окне регистрации", async () => {
            const { name, email, password } = randomUser;
            await this.signUpLink.click();
            await this.nameInput.fill(name);
            await this.emailInput.fill(email);
            await this.passwordInput.fill(password);
            await this.sigUpButton.click();
        });
    };
};