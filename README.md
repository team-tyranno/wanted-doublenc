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
    <td align="center"><b>페이지 로그아웃 & Q&A 페이지</b></td>
    <td align="center"><b>커피 구매 페이지</b></td>
    <td align="center"><b>카페 브랜드 & 아이템 리스트</b></td>
    <td align="center"><b>메인 페이지</b></td>
  </tr>
</table>

<br>
<hr>
<br>

## 과제 소개

간략한 과제 소개 및 jpg, gif가 들어갈 영역입니다.

- 과제 소개 1

![slider](https://user-images.githubusercontent.com/28294925/150082839-44f592e6-bdaa-4081-9281-12075b2c60d0.gif)

- 과제 소개 2

![responsive](https://user-images.githubusercontent.com/28294925/150082899-efbb1c3d-fd02-4134-8948-05d14bcb28de.gif)

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 구현한 기능

구현한 기능 목록을 작성할 영역입니다.


- [x]  Next.js 와 TypeScript 를 사용
- [x]  배너 캐러셀은 공개된 라이브러리를 사용하지 않고 직접 구현
- [x]  기본 Next.js ESlint 룰을 적용
- [x]  API 데이터 패칭
- [x]  메뉴 슬라이더 적용
- [x]  슬라이딩 사이드바 배치
- [x]  아코디언 적용
- [x]  요구 조건에 맞는 라우팅 처리

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

배포 링크가 동작하지 않을 시, local에서 프로젝트를 실행하는 방법을 작성할 영역입니다.

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
  npm start
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

프로젝트 구조를 작성할 영역입니다. (Optional)

```bash
wanted-doublenc
 ┣ cypress // E2E 테스트 코드를 담은 코드입니다.
 ┃
 ┣ public // 전역에서 사용할 리소스를 담은 페이지 입니다.
 ┃ 
 ┣ src
 ┃ ┣ commons // 공통적으로 사용될 코드입니다.
 ┃ ┃ 
 ┃ ┣ components // 컴포넌트는 아토믹 디자인 패턴 기반으로 구성되었습니다.
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
 ┃ ┣ pages // 라우팅을 위한 페이지입니다.
 ┃ ┃
 ┃ ┣ styles // 여러 공통스타일 모듈입니다.
 ┃ ┃
 ┃ ┣ types // 여러 페이지에 걸쳐 사용될 타입 입니다.
 ┃ ┃
 ┃ ┗ utils //
 ┣ README.md
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

라이센스를 표시할 영역입니다.

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
