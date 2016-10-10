import { AvspectAppPage } from './app.po';

describe('avspect-app App', function() {
  let page: AvspectAppPage;

  beforeEach(() => {
    page = new AvspectAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
