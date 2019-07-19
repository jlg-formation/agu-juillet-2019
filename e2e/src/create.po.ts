import { browser, by, element } from 'protractor';

export class CreatePage {
  navigateTo() {
    return browser.get(browser.baseUrl + 'create') as Promise<any>;
  }

  getLabel() {
    return element(by.css('label div')).getText() as Promise<string>;
  }
}
