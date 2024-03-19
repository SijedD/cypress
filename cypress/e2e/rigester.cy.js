describe('None-existent registration ', () => {
    it('None-existent login test', () =>{
        cy.fixture('registration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод не подходящего логина')
            cy.get('input[class="form-input--text form-input"]').eq(0)
                .type(data.none_existent_login_register)


            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

            cy.wait(3000)
        })
    })

    it('None-existent email test', () =>{
        cy.fixture('registration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')


            cy.log('Ввод не походящей почты')
            cy.get('input[class="form-input--email form-input"]').eq(0)
                .type(data.none_existent_email_register)

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

            cy.wait(3000)
        })
    })

    it('None-existent password test', () =>{
        cy.fixture('registration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод не походящего пароля')
            cy.get('input[class="form-input--password form-input"]').eq(0)
                .type(data.none_existent_password_register)

            cy.log('Ввод не походящего пароля')
            cy.get('input[class="form-input--password form-input"]').eq(1)
                .type(data.none_existent_password_register)


            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

            cy.wait(3000)
        })
    })
})

describe('existent registration', () => {
    it('existent registration', () =>{
        cy.fixture('registration').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url + 'registration/')

            cy.log('Ввод подходящего логина')
            cy.get('input[class="form-input--text form-input"]').eq(0)
                .type(data.login_register)

            cy.log('Ввод походящей почты')
            cy.get('input[class="form-input--email form-input"]').eq(0)
                .type(data.email_register)

            cy.log('Ввод походящего пароля')
            cy.get('input[class="form-input--password form-input"]').eq(0)
                .type(data.password_register)

            cy.log('Ввод походящего пароля')
            cy.get('input[class="form-input--password form-input"]').eq(1)
                .type(data.password_register)


            cy.log('Клик по кнопке "Войти"')
            cy.get('.button__background-color-green').eq(1)
                .click()

        })
    })
})