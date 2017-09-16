import { AngularSecondAppPage } from './app.po';

describe('angular-second-app App', () => {
  let page: AngularSecondAppPage;

  beforeEach(() => {
    page = new AngularSecondAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
