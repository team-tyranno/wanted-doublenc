<div id="top"></div>

<div align='center'>
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
    <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=Next.js&logoColor=white"/>
</div>

<br />

<div align="center">
  <h3 align="center">3주차 과제 - 더블엔씨</h3>
  <p align="center">
    <br />
    <br />
    <a href="https://ncnc-wanted.herokuapp.com/"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#팀원-소개">팀원 소개</a></li>
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 구조</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

## 팀원 소개

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/gml9812"><img src="https://avatars.githubusercontent.com/u/28294925?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/seoysauce"><img src="https://avatars.githubusercontent.com/u/65898861?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/Yummy-sk"><img src="https://avatars.githubusercontent.com/u/60822846?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/jambottle"><img src="https://avatars.githubusercontent.com/u/72926450?v=4" width="150px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>👑 윤희준 (팀장)</b></td>
    <td align="center"><b>정서영</b></td>
    <td align="center"><b>염상권</b></td>
    <td align="center"><b>김재원</b></td>
  </tr>
  <tr>
    <td align="center"><b>Q&A 페이지 구현, E2E 테스트 적용 </b></td>
    <td align="center"><b>커피 구매 페이지</b></td>
    <td align="center"><b>카페 브랜드 & 아이템 리스트</b></td>
    <td align="center"><b>메인 페이지</b></td>
  </tr>
</table>

<br>
<hr>
<br>

## 과제 소개

![ezgif-7-9286e9a9f5](https://user-images.githubusercontent.com/60822846/154182243-948f6c5b-145d-4d5c-a6b0-b0c5432c4be9.gif)


<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 구현한 기능
- [x] 메인 페이지
  - [x] 광고 캐러셀 
  - [x] 카테고리 리스트
  - [x] 땡처리콘 리스트
  - [x] 슬라이드 메뉴
- [x] 카테고리 페이지
  - [x] 마우스 드래그 가능한 상단 네비게이션 바
  - [x] 선택된 카테고리에 해당하는 브랜드 리스트
- [x] 브랜드 페이지
  - [x] 할인율과 가격이 표시된 제품 리스트
- [x] 제품 페이지
  - [x] '옵션 선택하기' 클릭 시 옵션 리스트 생성
  - [x] 옵션 선택 시 '구매하기' 버튼 생성
- [x] Q&A 페이지
  - [x] 구매/판매 버튼 선택 시 해당하는 질문 리스트 표시
  - [x] 질문 클릭 시 해당하는 답변 표시

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

### Prerequisites

1. NPM Install

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Repository를 clone한다.

  ```sh
  git clone https://github.com/team-tyranno/wanted-doublenc.git
  ```

2. NPM Package들을 설치한다.

  ```sh
  npm install
  ```

3. Localhost 환경에서 프로젝트를 실행한다.

  ```sh
  npm run dev
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

```bash
wanted-doublenc
 ┣ cypress // E2E 테스트 코드
 ┃
 ┣ public // 전역에서 사용할 리소스
 ┃ 
 ┣ src
 ┃ ┣ commons // 상수
 ┃ ┃ 
 ┃ ┣ components // 아토믹 디자인 패턴 기반으로 구성된 컴포넌트
 ┃ ┃ ┣ atoms
 ┃ ┃ ┃ 
 ┃ ┃ ┣ molecules
 ┃ ┃ ┃
 ┃ ┃ ┣ organisms
 ┃ ┃ ┃ 
 ┃ ┃ ┣ templates
 ┃ ┃ ┃ 
 ┃ ┃ ┗ index.ts
 ┃ ┣ hooks // 커스텀 hooks
 ┃ ┃
 ┃ ┣ pages
 ┃ ┃
 ┃ ┣ styles // 공통 스타일 모듈
 ┃ ┃
 ┃ ┣ types // Typescript 인터페이스
 ┃ ┃
 ┃ ┗ utils // 유틸 함수
 ┣ README.md
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
