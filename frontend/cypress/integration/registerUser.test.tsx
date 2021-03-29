describe('Testa os botões', () => {
  it('Testa se o botão voltar fica desativado na primeira pagia', () => {
    cy.visit('/');
    cy.get('[data-testid=back-button]').should('be.disabled');
  });
  it('Testa se o botão voltar fica ativo nas outras paginas', () => {
    cy.visit('/');
    cy.get('[data-testid=back-button]').should('be.disabled');
    cy.get('[data-testid=name-input]').type('Gabriel');
    cy.get('[data-testid=phone-input]').type('1299999999');
    cy.get('[data-testid=cpf-input]').type('12345678908');
    cy.get('[data-testid=email-input]').type('gabriel@email.com');
    cy.get('[data-testid=next-button]').click();
    cy.get('[data-testid=back-button]').should('not.be.disabled');
    cy.get('[data-testid=back-button]').click();
    cy.get('[data-testid=back-button]').should('be.disabled');
  });
});

describe('testa opções de planos', () => {
  it('Testa se os planos A e C aparecem para placas pares', () => {
    cy.visit('/');

    cy.get('[data-testid=name-input]').type('Gabriel');
    cy.get('[data-testid=phone-input]').type('1299999999');
    cy.get('[data-testid=cpf-input]').type('12345678908');
    cy.get('[data-testid=email-input]').type('gabriel@email.com');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=description-input]').type('Fiat Uno');
    cy.get('[data-testid=plate-input]').type('xxx-1234');
    cy.get('[data-testid=year-input]').type('12345678908');
    cy.get('[data-testid=warranty-date-input]').type('2005-10-03');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=plan-input] select').children().should('have.length', 2);
    cy.get('[data-testid=plan-input] select').contains('Plan A').should('exist');
    cy.get('[data-testid=plan-input] select').contains('Plan B').should('not.exist');
    cy.get('[data-testid=plan-input] select').contains('Plan C').should('exist');
    cy.get('[data-testid=plan-input] select').contains('Plan D').should('not.exist');

    cy.get('[data-testid=back-button]').click();
    cy.get('[data-testid=plate-input]').clear().type('xxx-1233');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=plan-input] select').children().should('have.length', 2);
    cy.get('[data-testid=plan-input] select').contains('Plan A').should('not.exist');
    cy.get('[data-testid=plan-input] select').contains('Plan B').should('exist');
    cy.get('[data-testid=plan-input] select').contains('Plan C').should('not.exist');
    cy.get('[data-testid=plan-input] select').contains('Plan D').should('exist');
  });
});

describe('Testa resultados do cadastro ', () => {
  it('Testa resultado de cadastro quando a requisição é bem sucedida.', () => {
    cy.visit('/');

    cy.get('[data-testid=name-input]').type('Gabriel');
    cy.get('[data-testid=phone-input]').type('1299999999');
    cy.get('[data-testid=cpf-input]').type('12345678908');
    cy.get('[data-testid=email-input]').type('gabriel@email.com');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=description-input]').type('Fiat Uno');
    cy.get('[data-testid=plate-input]').type('xxx-1234');
    cy.get('[data-testid=year-input]').type('2020');
    cy.get('[data-testid=warranty-date-input]').type('2005-10-03');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=plan-input] select').select('Plan C');
    cy.get('[data-testid=begin-date-input]').type('2015-10-03');
    cy.get('[data-testid=end-date-input]').type('2018-10-03');

    cy.get('[data-testid=next-button]').click();
    cy.get('[data-testid=feedback-message]').should('exist');
    cy.get('[data-testid=feedback-message]').contains('Parabéns, o usuário foi cadastrado com sucesso');
  });
  it('Testa resultado de cadastro quando a requisição é bem sucedida.', () => {
    cy.visit('/');

    cy.get('[data-testid=name-input]').type('Gabriel');
    cy.get('[data-testid=phone-input]').type('1299999999');
    cy.get('[data-testid=cpf-input]').type('12345678908');
    cy.get('[data-testid=email-input]').type('gabriel@email.com');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=description-input]').type('Fiat Uno');
    cy.get('[data-testid=plate-input]').type('xxx-1234');
    cy.get('[data-testid=year-input]').type('2020');
    cy.get('[data-testid=warranty-date-input]').type('2005-10-03');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=plan-input] select').select('Plan C');
    cy.get('[data-testid=begin-date-input]').type('2015-10-03');
    cy.get('[data-testid=end-date-input]').type('2018-10-03');
    cy.intercept('POST', 'http://localhost:3000', {
      statusCode: 400,
      body: [],
    });

    cy.get('[data-testid=next-button]').click();
    cy.get('[data-testid=feedback-message]').should('exist');

    cy.get('[data-testid=feedback-message]').contains('Houve Algum erro, tente novamente mais tarde');
  });
});
