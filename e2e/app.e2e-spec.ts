import { HRMSappPage } from './app.po';

describe('hrmsapp App', () => {
  let page: HRMSappPage;

  beforeEach(() => {
    page = new HRMSappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
