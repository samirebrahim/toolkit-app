import { ToolkitPage } from './app.po';

describe('toolkit App', () => {
  let page: ToolkitPage;

  beforeEach(() => {
    page = new ToolkitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
