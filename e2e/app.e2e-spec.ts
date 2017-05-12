import { OregonHikesPage } from './app.po';

describe('oregon-hikes App', () => {
  let page: OregonHikesPage;

  beforeEach(() => {
    page = new OregonHikesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
