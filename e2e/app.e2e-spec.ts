import { Angular2MaterialsPage } from './app.po';

describe('angular2-materials App', function() {
  let page: Angular2MaterialsPage;

  beforeEach(() => {
    page = new Angular2MaterialsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
