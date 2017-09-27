import { GanachePage } from './app.po';

describe('ganache App', () => {
  let page: GanachePage;

  beforeEach(() => {
    page = new GanachePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
