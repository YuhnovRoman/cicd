import { expect } from '@playwright/test';
import { UserBuilder } from '../src/helper/user.builder';
import { test } from "../src/helper/fixtures/index";

test("Регистрация пользователя", async ({ app }) => {
    const randomUser = new UserBuilder()
        .addName()
        .addEmail()
        .addPassword()
        .generate();


    await app.mainPage.openMainPage();
    await app.authPage.registration(randomUser);

    await test.step("Окно регистрации закрыто", async () => {
        await expect(app.authPage.sigUpButton).toBeHidden();
    });

    await test.step("Отображена аватарка пользователя", async () => {
        // Специальный fail
        await expect(app.authPage.userImg).toBeHidden();
    });
});