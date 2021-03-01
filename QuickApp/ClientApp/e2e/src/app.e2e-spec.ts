// =============================


// =============================

import { AppPage } from './app.po';

describe('QuickApp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: QuickApp', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('QuickApp');
  });
});
