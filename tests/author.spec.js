import { expect } from "@playwright/test";
import { test } from "../src/helper/fixtures/index";

test("Проверка отображения элементов на странице автора", async ({ app }) => {
    await app.authorPage.openAuthorPage();

    await test.step("Отображен обязательный контент на странице автора", async () => {
        await expect(app.authorPage.authorImg).toBeVisible();
        await expect(app.authorPage.authorName).toBeVisible();
        await expect(app.authorPage.authorFollowersButton).toBeVisible();
        await expect(app.authorPage.authorArticle).toBeVisible();
        await expect(app.authorPage.authorFavoriteArticle).toBeVisible();
    });

    await app.authorPage.favoriteArticleClick();

    await test.step("Статься добавлена в избранное", async () => {
        // Специальный fail
        await expect(app.authorPage.authorEmptyState).toContainText("Keaton doesn\'t have favorite.");
    });
});