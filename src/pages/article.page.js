import { test } from '../helper/fixtures/index';

export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.newArticleLink = page.getByRole("link", { name: "New Article" });
        this.articleTitle = page.locator("h1");
        this.articleBanner = page.locator("div[class='banner']");
        this.articleAuthorBannerImg = this.articleBanner.locator("img");
        this.articleBannerInfo = this.articleBanner.locator("div[class='info']");
        this.articleContent = page.locator("div[class='col-md-12']");
        this.articleActions = page.locator("div[class='article-actions']");
        this.articleActionsImg = this.articleActions.locator("img");
        this.articleActionsInfo = this.articleActions.locator("div[class='info']");
        this.articleCommentBlock = page.locator("div[class='row']");
        this.articleTitleInput = page.getByRole("textbox", { name: "Article Title" });
        this.articleAboutInfoInput = page.getByRole("textbox", { name: "What\'s this article about?" });
        this.articleTextInput = page.getByRole("textbox", { name: "Write your article (in" });
        this.articleTagInput = page.getByRole("textbox", { name: "Enter tags" });
        this.articlePublishButton = page.getByRole("button", { name: "Publish Article" });
    };

    async createNewArticle(randomArticle) {
        return test.step("Создание случайной статьи", async () => {
            const { title, aboutInfo, content, tag } = randomArticle;
            await this.newArticleLink.click();
            await this.articleTitleInput.fill(title);
            await this.articleAboutInfoInput.fill(aboutInfo);
            await this.articleTextInput.fill(content);
            await this.articleTagInput.fill(tag);
            await this.articlePublishButton.click();
        });
    };
};