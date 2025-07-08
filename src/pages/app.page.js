import { AuthPage, MainPage, ArticlePage, AuthorPage } from "./index";

export class App {
    constructor(page) {
        this.authPage = new AuthPage(page);
        this.mainPage = new MainPage(page);
        this.articlePage = new ArticlePage(page);
        this.authorPage = new AuthorPage(page);
    };
};