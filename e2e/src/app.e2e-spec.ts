import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { CreatePage } from './create.po';
import { SetupPage } from './setup.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let createPage: CreatePage;
  let setupPage: SetupPage;

  beforeEach(() => {
  });

  it('should display creer quizz', async () => {
    page = new AppPage();
    await page.navigateTo();
    expect(page.getFirstButtonContent()).toEqual('Créer un Quizz');
  });

  it('should go to create page', async () => {
    await page.clickOnCreateQuizzButton();
    createPage = new CreatePage();
    const text = await createPage.getLabel();
    expect(text).toEqual('Nom du Quizz');
  });

  it('should create a quizz name', async () => {
    await createPage.writeOnInput('titi');
    await createPage.clickOnSubmitButton();
    setupPage = new SetupPage();
    const text = await setupPage.getTitleText();
    expect(text).toEqual('Quizz: titi');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
