import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
    
  }
  getmytext(){
    return element(by.id('app-root div  grad1  p ')).getText();
  }
}
