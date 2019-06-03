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
- [x] Follow User
- [x] Unfollow User
- [x] Edit my profile
- [x] See user profile
- [x] See MY profile
- [x] See the full photo
- [x] Upload a photo
- [x] Edit the photo (Delete)
- [x] See the feed
- [x] Send private Message
- [x] See rooms
- [x] See room
- [x] Receive Message

## 기능

## 환경설정

### NodeJS 설치

[NodeJS 공식홈페이지로 이동](https://nodejs.org/ko/)

> 공식 홈페이지로 가서 LTS버전 다운로드

---

###### ※ yarn을 이용한 설치

### graphql-yoga

```bash
yarn add graphql-yoga
```

> 빠르게 graphQL을 사용할 수 있도록 도와주는 패키지 (Express Server가 내장되어 있음)  
> ※ GraphQL을 쓰는 이유: Over-fatching / Under-fetching을 해결 가능

### nodemon

```bash
yarn add nodemon -D
```

> 맨 끝에 -D는 package.json에 `dependencies`가 아닌 `devDependencies`로 들어가게 된다.
> `dependencies`는 프로젝트에 필요한 라이브러리, `devDependencies`는 개발시에 필요한 라이브러리이다.

### Babel-cli

```bash
yarn add babel-cli -D
```

> `Babel`은 최신 버전의 자바스크립트 문법은 브라우저가 이해하지 못하는 상황 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다.

<!-- ### Babel

```bash
yarn add @babel/node
yarn add @babel/preset-env
yarn add @babel/core
``` -->

### morgan

```bash
yarn add morgan
```

> `morgan`은 http에 대한 요청을 로깅하는 미들웨어이다.

###### ※ morgan("") → 괄호 안에 원하는 로그의 형태를 지정할 수 있다.

### graphql-tools

```bash
yarn add graphql-tools
```

> Schema와 Resolve를 분리를 해주는 구조를 만들 수 있도록 도와주는 모듈

### merge-graphql-schemas

```bash
yarn add merge-graphql-schemas
```

> `graphql-tools`와 함께 자주 쓰인다. 모듈화 되어 있는 Schema와 Resolver의 병합을 도와주는 모듈이다.

### prisma-client-lib

```bash
yarn add prisma-client-lib
```

> `Prisma` 클라이언트를 실행하기 위해 필요한 `GraphQL`의 패키지가 들어있다.

### @sendgrid/mail

```bash
yarn add @sendgrid/mail
```

> `SendGrid`라는 서비스이다. 간단한 함수로 사용자에게 메일을 보낼 수 있도록 도와주는 모듈

### passport

```bash
yarn add passport
```

> 사용자 인증을 도와준다.

### passport-jwt

```bash
yarn add passport-jwt
```

> `PassPort`로 `JWT`인증을 구현할 수 있도록 도와준다.

###### ※ JWT란 JsonWebToken의 약자이다.

### ※ randomlists site

[사이트로 이동하기](https://www.randomlists.com/)

> 랜덤한 단어들을 원하는 수만큼 제공해주는 사이트

###### ※ 본 사이트에서는 시크릿 코드로 사용
