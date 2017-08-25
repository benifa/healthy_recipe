import { CookPage } from './app.po';

describe('cook App', () => {
  let page: CookPage;

  beforeEach(() => {
    page = new CookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
