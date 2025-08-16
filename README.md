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
### 👤 유저
- 회원가입 (`POST /user`)
- 로그인 (`GET /user/login`) → JWT 발급
- 전체 유저 조회 (`GET /user/all`)
- 특정 유저 조회 (`GET /user/id`)
- 회원 탈퇴 (`DELETE /user`) (JWT 인증 필요)

### 📦 상품
- 상품 등록 (`POST /product`) (JWT 인증 필요)
- 전체 상품 조회 (`GET /product/all`)
- 특정 상품 조회 (`GET /product/number`)
- 상품 삭제 (`DELETE /product`) (JWT 인증 필요)
</p>

<h2 align="center">🛠 사용 기술</h2>

<p align="center">
백엔드 프레임워크  |  NestJS<br>
언어  |  TypeScript<br>
DB  |  MariaDB<br>
인증  |  JWT, Passport<br>
ORM  |  TypeORM
</p>
<p align="center">
📂 프로젝트 구조
</p>
<p>
src
 ┣ 📂 user
 ┃ ┣ 📂 dto
 ┃ ┣ 📜 user.controller.ts
 ┃ ┣ 📜 user.service.ts
 ┣ 📂 product
 ┃ ┣ 📂 dto
 ┃ ┣ 📜 product.controller.ts
 ┃ ┣ 📜 product.service.ts
 ┣ 📂 security
 ┃ ┣ 📜 auth.guard.ts
 ┃ ┣ 📜 jwt.strategy.ts
 ┣ 📜 main.ts
 ┣ 📜 app.module.ts
 </p>

---

<h3 align="center">💌 Made by MIO 💌</h3>
