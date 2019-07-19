import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './create.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display creer quizz', () => {
    page.navigateTo();
    expect(page.getFirstButtonContent()).toEqual('Créer un Quizz');
  });

  it('should go to create page', () => {
    page.clickOnCreateQuizzButton();
    const createPage = new CreatePage();
    const text = createPage.getLabel();
    expect(text).toEqual('Nom du Quizz');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
