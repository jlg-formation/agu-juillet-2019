import { browser, by, element } from 'protractor';

export class CreatePage {

  writeOnInput(text: string): Promise<void> {
    const elt = element(by.css('label input'));
    elt.clear();
    return elt.sendKeys(text) as Promise<void>;
  }

  clickOnSubmitButton() {
    const button = element(by.css('app-root button'));
    return button.click() as Promise<void>;
  }

  navigateTo() {
    return browser.get(browser.baseUrl + 'create') as Promise<any>;
  }

  getLabel() {
    return element(by.css('label div')).getText() as Promise<string>;
  }
}
