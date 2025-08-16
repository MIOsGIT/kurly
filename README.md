<!-- 대문 -->
<h1 align="center">🌸 Nest.js Study Project - COUPANG API 🌸</h1>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-FF69B4?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-ffb6c1?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/MariaDB-ff69b4?style=for-the-badge&logo=mariadb&logoColor=white" />
</p>

<p align="center">
  🛍️ <b>Market Kurly 스타일 API</b>를 구현한 프로젝트입니다.<br>
  <sub>회원 관리 + 상품 관리 + 인증/인가 기능이 포함되어 있습니다.</sub>
</p>

---

<h2 align="center">✨ 기능</h2>

<p align="center">
👤 유저<br>
- 회원가입 (`POST /user`)<br>
- 로그인 (`GET /user/login`) → JWT 발급<br>
- 전체 유저 조회 (`GET /user/all`)<br>
- 특정 유저 조회 (`GET /user/id`)<br>
- 회원 탈퇴 (`DELETE /user`) (JWT 인증 필요)<br>
<br>
📦 상품<br>
- 상품 등록 (`POST /product`) (JWT 인증 필요)<br>
- 전체 상품 조회 (`GET /product/all`)<br>
- 특정 상품 조회 (`GET /product/number`)<br>
- 상품 삭제 (`DELETE /product`) (JWT 인증 필요)<br>
</p>

<h2 align="center">🛠 사용 기술</h2>

<p align="center">
백엔드 프레임워크  |  NestJS<br>
언어  |  TypeScript<br>
DB  |  MariaDB<br>
인증  |  JWT, Passport<br>
ORM  |  TypeORM<br>
</p>
<p>
📂 프로젝트 구조<br>
</p>
<p>
src<br>
 ┣ 📂 user<br>
 ┃ ┣ 📂 dto<br>
 ┃ ┣ 📜 user.controller.ts<br>
 ┃ ┣ 📜 user.service.ts<br>
 ┣ 📂 product<br>
 ┃ ┣ 📂 dto<br>
 ┃ ┣ 📜 product.controller.ts<br>
 ┃ ┣ 📜 product.service.ts<br>
 ┣ 📂 security<br>
 ┃ ┣ 📜 auth.guard.ts<br>
 ┃ ┣ 📜 jwt.strategy.ts<br>
 ┣ 📜 main.ts<br>
 ┣ 📜 app.module.ts<br>
 </p>

---

<h3 align="center">💌 Made by MIO 💌</h3>
