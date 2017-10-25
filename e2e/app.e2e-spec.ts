import { ReactiveFormAppPage } from './app.po';

describe('reactive-form-app App', () => {
  let page: ReactiveFormAppPage;

  beforeEach(() => {
    page = new ReactiveFormAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
