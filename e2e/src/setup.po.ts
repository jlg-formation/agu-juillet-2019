import { browser, by, element } from 'protractor';

export class SetupPage {
  getTitleText() {
    return element(by.css('app-setup h1')).getText() as Promise<string>;
  }

  navigateTo() {
    return browser.get(browser.baseUrl + 'setup') as Promise<any>;
  }


}
