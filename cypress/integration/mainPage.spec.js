describe('메인 페이지 테스트', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('carousel 우측 하단의 버튼 클릭 시 슬라이드가 움직인다.', () => {});

  it('"카페" 메뉴 버튼 클릭 시 카페 카테고리 페이지로 이동한다.', () => {
    cy.contains('카페').click();
    cy.location('pathname').should('equal', '/categories/67');
    cy.contains('스타벅스').should('exist');
  });

  it('"오늘의 땡처리콘" 메뉴에 위치한 제품 클릭 시 제품 페이지로 이동한다.', () => {
    cy.contains('윈터 원더 초코딸기 케이크(홀)').click();
    cy.location('pathname').should('equal', '/items/9356');
    cy.contains('윈터 원더 초코딸기 케이크(홀)').should('exist');
  });

  it('footer의 "(주) 더블엔씨" 버튼 클릭 시 회사 정보 및 연락처가 표시된다.', () => {
    cy.contains('(주) 더블엔씨').click();
    cy.get('[data-cy=footerInfo]').should(
      'have.text',
      `대표 : 박진희 | 이메일 : cs@doublenc.com사업자 등록번호 : 290-86-00970통신판매업신고번호 : 제2020-서울성동-00206호서울특별시 성동구 왕십리로10길 6 서울숲비즈포레`,
    );
  });
});
