import { expect } from '@playwright/test';
import { test } from "../src/helper/fixtures/index";

test("Проверка отображения элементов на главной странице", async ({ app }) => {
  await app.mainPage.openMainPage();

  await test.step("Отображен контент на главной", async () => {
    await expect(app.mainPage.mainBanner).toBeVisible();
    // Специальный fail
    await expect(app.mainPage.mainPopularTags).toHaveCount(30);
  });
});

test("Фильтрация статей по тегу", async ({ app }) => {
  await app.mainPage.openMainPage();

  await test.step("Отображен контент списков статей", async () => {
    // Специальный fail
    await expect(app.mainPage.mainDefaultFilterTab).toContainText("Global Feeds");
    await expect(app.mainPage.mainPopularTags.first()).toBeVisible();
  });

  await app.mainPage.tagButtonClick();

  await test.step("Статьи отфильтрованы по тегу", async () => {
    await expect(app.mainPage.mainSelectedFilterTab).toContainText(await app.mainPage.getTagButtonText());
  });
});