import { expect } from '@playwright/test';
import { ArticleBuilder } from '../src/helper/article.builder';
import { UserBuilder } from '../src/helper/user.builder';
import { test } from "../src/helper/fixtures/index";

test("Проверка создания статьи", async ({ app }) => {
    const randomUser = new UserBuilder()
        .addName()
        .addEmail()
        .addPassword()
        .generate();
    const randomArticle = new ArticleBuilder()
        .generateArticleTitle()
        .generateArticleInfo()
        .generateArticleContent()
        .generateArticleTag()
        .generate();

    await app.mainPage.openMainPage();
    await app.authPage.registration(randomUser);
    await app.articlePage.createNewArticle(randomArticle);

    await test.step("Отображен обязательный контент в созданной статье", async () => {
        await expect(app.articlePage.articleAuthorBannerImg).toBeVisible();
        await expect(app.articlePage.articleBannerInfo).toBeVisible();
        await expect(app.articlePage.articleContent).not.toBeEmpty();
        await expect(app.articlePage.articleActionsImg).toBeVisible();
        await expect(app.articlePage.articleActionsInfo).toBeVisible();
        // Специальный fail
        await expect(app.articlePage.articleCommentBlock).toContainText("There are no comment yet...");
    });
});