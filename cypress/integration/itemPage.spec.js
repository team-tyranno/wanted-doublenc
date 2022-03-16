describe('상품 주문 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('카페').click();
    cy.location('pathname').should('equal', '/categories/67');
    cy.contains('스타벅스').click();
    cy.location('pathname').should('equal', '/brands/63');
    cy.get('[data-cy=item]').eq(0).click();
  });

  it('"옵션 선택하기" 버튼 클릭 시 옵션이 나타난다.', () => {
    cy.contains('옵션 선택하기').click();
    cy.contains('할인가').should('exist');
  });

  it('특정 옵션을 클릭할 시 유효기간과 가격이 표시된다.', () => {
    cy.contains('옵션 선택하기').click();
    cy.contains('할인가').click();
    cy.contains('2022.04.03 까지').should('exist');
  });

  it('표시된 옵션 내용을 클릭할 시 옵션을 변경할 수 있다.', () => {
    cy.contains('옵션 선택하기').click();
    cy.contains('할인가').click();
    cy.contains('2022.04.03 까지').click();
    cy.contains('할인가').should('exist');
  });
});
