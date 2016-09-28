import { AdminPanelAngular2Page } from './app.po';

describe('admin-panel-angular2 App', function() {
  let page: AdminPanelAngular2Page;

  beforeEach(() => {
    page = new AdminPanelAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
