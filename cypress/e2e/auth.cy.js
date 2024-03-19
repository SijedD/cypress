describe('None-existent authorization', () => {
  it('None-existent password test', () =>{
    cy.fixture('cypressTest').then(data => {
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url + 'login/')

      cy.log('Ввод существующего логина')
      cy.get('input[class="form-input--text form-input"]')
          .type(data.login)

      cy.log('Ввод несуществующего пароля')
      cy.get('input[class="form-input--password form-input"]')
          .type(data.none_existent_password)

      cy.log('Клик по кнопке "Войти"')
      cy.get('.button__background-color-green')
          .click()

      cy.wait(3000)

      cy.log('Проверка что появился элемент сигнализирующий об ошибке')
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
    })
  })

      it('None-existent login test', () =>{
        cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации')
          cy.visit(data.main_url + 'login/')

          cy.log('Ввод несуществующего логина')
          cy.get('input[class="form-input--text form-input"]')
              .type(data.none_existent_login)

          cy.log('Ввод существующего пароля')
          cy.get('input[class="form-input--password form-input"]')
              .type(data.password)

          cy.log('Клик по кнопке "Войти"')
          cy.get('.button__background-color-green').click()

          cy.wait(3000)

          cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
      })

      it('None-existent login and password test', () =>{
        cy.fixture('cypressTest').then(data => {
          cy.log('Переход на страницу авторизации')
          cy.visit(data.main_url + 'login/')

          cy.log('Ввод несуществующего логина')
          cy.get('input[class="form-input--text form-input"]')
              .type(data.none_existent_login)

          cy.log('Ввод существующего пароля')
          cy.get('input[class="form-input--password form-input"]')
              .type(data.none_existent_password)

          cy.log('Клик по кнопке "Войти"')
          cy.get('.button__background-color-green').click()

          cy.wait(3000)

          cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')
        })
      })

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







