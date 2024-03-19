describe('None-existent authorization', () => {

  it('empty fields', () => {
    cy.fixture('cypressTest').then(data => {
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url + 'login/')

      cy.get('.button__background-color-green').should('be.disabled');
      cy.wait(3000)
    });
  })
});

describe('existent authorization', () => {
  it('existent test', () =>{
    cy.fixture('cypressTest').then(data => {
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url + 'login/')

      cy.log('Ввод существующего логина')
      cy.get('input[class="form-input--text form-input"]')
          .type(data.login)

      cy.log('Ввод существующего пароля')
      cy.get('input[class="form-input--password form-input"]')
          .type(data.password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('.button__background-color-green').click()

      cy.wait(3000)
    })
  })
});







