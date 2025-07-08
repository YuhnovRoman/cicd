import { expect } from '@playwright/test';
import { test } from "../src/helper/fixtures/index";

test("Проверка отображения элементов на главной странице", async ({ app }) => {
  await app.mainPage.openMainPage();

  await test.step("Отображен контент на главной", async () => {
    await expect(app.mainPage.mainBanner).toBeVisible();
    await expect(app.mainPage.mainPopularTags).toHaveCount(50);
  });
});

test("Фильтрация статей по тегу", async ({ app }) => {
  await app.mainPage.openMainPage();

  await test.step("Отображен контент списков статей", async () => {
    await expect(app.mainPage.mainDefaultFilterTab).toContainText("Global Feed");
    await expect(app.mainPage.mainPopularTags.first()).toBeVisible();
  });

  await app.mainPage.tagButtonClick();

  await test.step("Статьи отфильтрованы по тегу", async () => {
    await expect(app.mainPage.mainSelectedFilterTab).toContainText(await app.mainPage.getTagButtonText());
  });
});