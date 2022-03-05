describe('고객센터 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('메인 페이지 좌측 상단에 위치한 햄버거 메뉴를 누르면 슬라이드 메뉴가 나타난다.', () => {
    cy.get('[data-cy=hamburgerMenuButton]').click();
    cy.get('[data-cy=slideMenu]').should('be.visible');
  });

  it('슬라이드 메뉴에 위치한 "고객센터" 버튼을 누르면 고객센터 페이지로 이동한다.', () => {
    cy.get('[data-cy=hamburgerMenuButton]').click();
    cy.get('[data-cy=customerServiceButton]').click();
    cy.get('[data-cy=customerService]').should('be.visible');
  });

  it('"구매" 또는 "판매" 를 선택할 시 표시되는 질문 리스트가 변경된다.', () => {
    cy.get('[data-cy=hamburgerMenuButton]').click();
    cy.get('[data-cy=customerServiceButton]').click();
    cy.get('[data-cy=menuButton]');
  });

  it('질문을 클릭할 시 아코디언이 펼쳐지며 답변이 나타난다.', () => {
    cy.get('[data-cy=hamburgerMenuButton]').click();
    cy.get('[data-cy=customerServiceButton]').click();
    cy.get('[data-cy=accordion]').eq(0).click();
    cy.get('[data-cy=accordionAnswer]').should('be.visible');
  });

  it('아코디언이 열려 있는 상태에서 다른 질문을 클릭할 시 아코디언이 닫힌다.', () => {
    cy.get('[data-cy=hamburgerMenuButton]').click();
    cy.get('[data-cy=customerServiceButton]').click();
    cy.get('[data-cy=accordion]').eq(0).click();
    cy.get('[data-cy=accordion]').eq(1).click();
  });
});
