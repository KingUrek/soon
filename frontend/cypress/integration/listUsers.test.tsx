describe('Testa resultados do cadastro ', () => {
  it('Testa se Lista traz usuários cadastrados.', () => {
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
    cy.get('[data-testid=register-user-again]').click();

    cy.get('[data-testid=name-input]').type('Lucas');
    cy.get('[data-testid=phone-input]').type('1299999999');
    cy.get('[data-testid=cpf-input]').type('12345678908');
    cy.get('[data-testid=email-input]').type('gabriel@email.com');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=description-input]').type('Fiat Uno');
    cy.get('[data-testid=plate-input]').type('xxx-5678');
    cy.get('[data-testid=year-input]').type('2020');
    cy.get('[data-testid=warranty-date-input]').type('2005-10-03');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=plan-input] select').select('Plan C');
    cy.get('[data-testid=begin-date-input]').type('2015-10-03');
    cy.get('[data-testid=end-date-input]').type('2018-10-03');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=list-users]').click();
    cy.get('[data-testid=user-row]').should('have.length.of.at.least', 2);
  });
});

describe('Testa filtros da listagem de usuários ', () => {
  it('Testa se Lista traz usuários cadastrados.', () => {
    cy.visit('/');
    cy.get('[data-testid=name-input]').type('Gabriel');
    cy.get('[data-testid=phone-input]').type('1299999999');
    cy.get('[data-testid=cpf-input]').type('12345678908');
    cy.get('[data-testid=email-input]').type('gabriel@email.com');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=description-input]').type('Fiat Uno');
    cy.get('[data-testid=plate-input]').type('xxx-1236');
    cy.get('[data-testid=year-input]').type('2020');
    cy.get('[data-testid=warranty-date-input]').type('2005-10-03');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=plan-input] select').select('Plan C');
    cy.get('[data-testid=begin-date-input]').type('2015-10-03');
    cy.get('[data-testid=end-date-input]').type('2018-10-03');

    cy.get('[data-testid=next-button]').click();
    cy.get('[data-testid=register-user-again]').click();

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
    cy.get('[data-testid=register-user-again]').click();

    cy.get('[data-testid=name-input]').type('Lucas');
    cy.get('[data-testid=phone-input]').type('1299999999');
    cy.get('[data-testid=cpf-input]').type('12345678908');
    cy.get('[data-testid=email-input]').type('gabriel@email.com');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=description-input]').type('Fiat Uno');
    cy.get('[data-testid=plate-input]').type('xxx-5678');
    cy.get('[data-testid=year-input]').type('2020');
    cy.get('[data-testid=warranty-date-input]').type('2005-10-03');
    cy.get('[data-testid=next-button]').click();

    cy.get('[data-testid=plan-input] select').select('Plan C');
    cy.get('[data-testid=begin-date-input]').type('2015-10-03');
    cy.get('[data-testid=end-date-input]').type('2018-10-03');
    cy.get('[data-testid=next-button]').click();
    cy.get('[data-testid=list-users]').click();

    cy.get('[data-testid=name-filter] input').type('Gabriel', { force: true });
    cy.get('[data-testid=plate-filter] input').type('1236', { force: true });

    cy.get('[data-testid=filter-button]').click({ force: true });

    cy.get('[data-testid=name-cell]').each(($cell) => {
      expect($cell).to.include.text('Gabriel');
    });
    cy.get('[data-testid=plate-cell]').each(($cell) => {
      expect($cell).to.include.text('1236');
    });
  });
});
