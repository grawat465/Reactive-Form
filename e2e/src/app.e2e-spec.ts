import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Anna');
   expect("we are learning angular").toContain("angular");
  
  });
  it('should display paragraph message', () => {
    page.navigateTo();
    expect(page.getmytext()).toContain('to');
  });
  
}
);
