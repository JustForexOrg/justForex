import { ExamplePage } from './app.po';

describe('justForex App', () => {
  let page: ExamplePage;

  beforeEach(() => {
    page = new ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
