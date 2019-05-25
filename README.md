# Prismagram

#### Instagram clone with Express + Prisma + React

## User Stories

- [x] Create account
- [x] Request Secret
- [x] Confirm Secret (Log In)
- [x] Like / Unlike a photo
- [x] Comment on a photo
- [x] Search by user
- [x] Search by location
- [ ] See user profile
- [ ] Follow / Unfollow User
- [ ] See the full photo
- [ ] Edit my profile
- [ ] Upload a photo
- [ ] Edit the photo (Delete)
- [ ] See the feed

## 기능

## 환경설정

### NodeJS 설치

[NodeJS 공식홈페이지로 이동](https://nodejs.org/ko/)

> 공식 홈페이지로 가서 LTS버전 다운로드

---

###### ※ yarn을 이용한 설치

### graphql-yoga

```
yarn add graphql-yoga
```

> 빠르게 graphQL을 사용할 수 있도록 도와주는 패키지 (Express Server가 내장되어 있음)  
> ※ GraphQL을 쓰는 이유: Over-fatching / Under-fetching을 해결 가능

### graphql-yoga

```
yarn add graphql-yoga
```

### Babel

```bash
yarn add @babel/node
yarn add @babel/preset-env
yarn add @babel/core
```

> `Babel`은 최신 버전의 자바스크립트 문법은 브라우저가 이해하지 못하는 상황 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다.

### nodemon

```bash
yarn add nodemon -D
```

> 맨 끝에 -D는 package.json에 `dependencies`가 아닌 `devDependencies`로 들어가게 된다.
> `dependencies`는 프로젝트에 필요한 라이브러리, `devDependencies`는 개발시에 필요한 라이브러리이다.

### morgan

```bash
yarn add morgan
```

> `morgan`은 http에 대한 요청을 로깅하는 미들웨어이다.

###### ※ morgan("") → 괄호 안에 원하는 로그의 형태를 지정할 수 있다.

### graphql-tools & merge-graphql-schemas

### prisma-client-lib

### randomlists site

- https://www.randomlists.com/

### nodemailer & nodemailer-sendgrid-transport -> 대신 -> @sendgrid/mail

sendgrid

### passport & passport-jwt

### jsonwebtoken

- public key and privat key (https://daitso.kbhub.co.kr/27632/)
