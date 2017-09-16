import { AngularFirstAppPage } from './app.po';

describe('angular-first-app App', () => {
  let page: AngularFirstAppPage;

  beforeEach(() => {
    page = new AngularFirstAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
