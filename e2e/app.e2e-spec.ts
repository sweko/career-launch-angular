import { CareerAngularPage } from './app.po';

describe('career-angular App', () => {
  let page: CareerAngularPage;

  beforeEach(() => {
    page = new CareerAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
