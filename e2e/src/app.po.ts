import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getFirstButtonContent() {
    console.log('toto');
    return element(by.css('app-root button')).getText() as Promise<string>;
  }

  clickOnCreateQuizzButton(): Promise<void> {
    const button = element(by.css('app-root button'));
    return button.click() as Promise<void>;
  }
}
