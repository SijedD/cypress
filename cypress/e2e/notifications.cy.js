describe('notifications', () => {
    it('login + notifications', () =>{
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

            cy.wait(1000)

            cy.contains('Уведомления').click();

            cy.get('.notifications-list').should('exist');

            cy.get('.link--size-small').should('exist');

            cy.contains('Прочитать все').click();

            cy.get('.notification-list-item--unread').should('not.exist');
        })
    })
})