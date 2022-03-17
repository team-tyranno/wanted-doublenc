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
    cy.contains('고객센터').click();
    cy.get('[data-cy=customerService]').should('be.visible');
  });

  it('"구매" 또는 "판매" 를 선택할 시 표시되는 질문 리스트가 변경된다.', () => {
    cy.get('[data-cy=hamburgerMenuButton]').click();
    cy.contains('고객센터').click();
    cy.get('[data-cy=qa]').should(
      'have.text',
      `Q.현금영수증(또는 세금계산서)을 발급 받고 싶어요!Q.영수증에 기재된 가격이 달라요!Q.니콘머니도 환불 받을 수 있나요?Q.'주문서 작성'이 뭔가요?Q.실수로 잘못 구매했어요! 환불해주세요.Q.남은 니콘머니를 다른 결제 수단과 함께 사용할 수 있나요?Q.선물하고 싶어요!Q.사용조회 & 잔액조회Q.실수로 '사용완료'를 눌렀어요!Q.쿠폰이 이미 사용된 (또는 발행취소, 사용불가 등의 오류) 쿠폰이라고 합니다.`,
    );
    cy.get('[data-cy=menuButton]').eq(1).click();
    cy.get('[data-cy=qa]').should(
      'have.text',
      `Q.바로 정산은 안 되나요? \nQ.반려된 쿠폰 이유가 뭔가요?Q.리뷰는 얼마나 걸리나요?Q.판매한 쿠폰 취소 어떻게 해요?Q.언제 입금 되나요?Q.판매 수락했는데, 정산은 언제 되나요? Q.판매 어떻게 해요?`,
    );
  });

  it('질문을 클릭할 시 아코디언이 펼쳐지며 답변이 나타난다.', () => {
    cy.get('[data-cy=hamburgerMenuButton]').click();
    cy.contains('고객센터').click();
    cy.get('[data-cy=accordion]').eq(0).click();
    cy.get('[data-cy=accordionAnswer]').should('be.visible');
  });

  it('아코디언이 열려 있는 상태에서 다른 질문을 클릭할 시 아코디언이 닫힌다.', () => {
    cy.get('[data-cy=hamburgerMenuButton]').click();
    cy.contains('고객센터').click();
    cy.get('[data-cy=accordion]').eq(0).click();
    cy.get('[data-cy=accordion]').eq(1).click();

    cy.get('[data-cy=accordionAnswer]').should(
      'have.text',
      '영수증에 기재된 금액은 사용처의 소비자 가격이 아니며 해당 쿠폰의 판매자가 구매한 금액이 표시 되는 경우입니다. 니콘내콘의 모든 쿠폰은 리셀링 쿠폰으로 이벤트, 프로모션 상품일 수 있습니다. 따라서 실제로 쿠폰을 구매한 금액은 확인이 불가하여 쿠폰 매입시 소비자 가격으로 쿠폰을 매입하고 있습니다.',
    );
  });
});
