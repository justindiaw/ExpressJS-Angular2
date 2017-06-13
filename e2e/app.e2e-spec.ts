import { Meanv3Page } from './app.po';

describe('meanv3 App', () => {
  let page: Meanv3Page;

  beforeEach(() => {
    page = new Meanv3Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
