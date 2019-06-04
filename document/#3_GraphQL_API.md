# #3 GraphQL API

## GraphQL

![GraphQL Logo](https://cdn-images-1.medium.com/max/1200/1*RHQ7lpGDV_M3yWRa9DiR2g.png)

### 1. GraphQL이란?

> `GraphQL` 은 API를 위한 쿼리 언어이며 타입 시스템을 사용하여 쿼리를 실행하는 서버사이드 런타임입니다. `GraphQL`은 특정한 데이터베이스나 특정한 스토리지 엔진과 관계되어 있지 않으며 기존 코드와 데이터에 의해 대체됩니다.

#### 1-1. GraphQL의 장점

1. 기존의 **Over-Fetching**과 **Under-Fetching**의 문제점들을 해결해 줄 수 있다.

2. 특정 웹 아키텍쳐 디자인 패턴에 용의하다.

###### Ex) Composite Pattern, Proxy Pattern, Facade Pattern, Multi Pattern, Anti Pattern, etc...

### 2. Over-Fetching & Under-Fetching

#### 2-1. Over-Fetching이란?

```JSON
GET /users

{

    "users": [

        {

            "id": "1",

            "username": "Tora",

            "age": "19",

            "email" : "syjkim0125@gmail.com"

        },

        {

            "id": "2",

            "username": "Marvel",

            "age": "300",

            "email": "Marvel@gmail.com"

        }
        ...
```

> 위의 데이터 모델이 있을 때에 id가 1인 username의 데이터만 가져오기 위해 필요하지 않은 데이터까지 모두 받게 됩니다. 이를 `Over-Fetching`이라고 합니다.

#### 2-2. Under-Fetching이란?

> 가령 `FaceBook` 같은 SNS라고 생각했을 때에 여러가지의 데이터를 가지고 와야한다. 알림, 유저, 피드 등등 하나 데이터 묶음을 완성하기 위해 여러 가지의 요청을 여러번 보내야 하는 문제를 `Under-Fetching`이라고 합니다.

### 3. Query & Mutation

#### 3-1. Fields

```JSON
{
  hero {
    name
  }
}
```

> 간단하게 요약하면 `GraphQL`은 객체에 특정 필드를 요청하는 것이다.

#### 3-2. Aliases

```JS
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```

> `hero`의 필드가 충돌하지 않도록 별칭을 설정해주는 방식이다. 위에 보이는 `empireHero`, `jediHero` 이 부분들이 `Aliases`이다.

#### 3-3. Fragments

```JS
fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

> `GraphQL`은 infinity loop를 방지하고자 relration되어 있는 데이터에 깊게 들어가는 것을 막아 놓았다. 그럴 때에 사용하는 것이 `Fragment`이다. Query를 쪼개어 Query안에 넣어서 사용하면 더 깊은 데이터 층에 접근 할 수 있게 도와준다.

#### 3-4. Variables

```JS
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
```

> 동적인 필드의 값을 사용할 때에 사용한다.

#### 3-5. Directives

```
@include(if: Boolean)   // argument 가 true 일 때에만 이 필드를 포함한다.
@skip(if: Boolean)      // argument 가 true 면 이 필드를 스킵한다.
```

#### 3-6. Mutations

```JS
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
```

> 간단하게 설명하면 `Query`가 Read의 영역이라면 `Mutation`은 Create, Update, Delete의 영역이라고 볼 수 있다.

### computed field

```JS
// models.graphql
firstName: String       //Prisma
lastName: String        //Prisma

fullName: String        //GraphQL
```

```JS
// resolver.js
User: {
    fullName: parent => {
        return `${parent.firstName} ${parent.lastName}`;
}
```

> `models.graphql`를 보면 `Prisma`에 위에 두개의 데이터 모델이 올라가 있고 GrqphQL의 Data Model에 `fullName을` 넣어 `resolver.js`에서 위와 같은 처리해주면 `firstNAme` + `lastName`의 값으로 만들수 있다.

### subscription

> `subscription`을 사용하면 데이터가 변경 될 때 실시간으로 알림을받을 수 있도록 도와주는 기능이다. 감지하는 트리거의 이벤트에는 created, updated, deleted 세 가지 종류가 있다.

###### Reference : [Prisma Docs - Subscription]

### Reference

- [Tora's Kingdom of IT : GraphQL 소개 - GrpahQL이란?]
- [All about GraphQL #1, GraphQL(그래프QL) 이란 무엇일까?]

<!-- Connection Link List -->

[prisma docs - subscription]: https://www.prisma.io/docs/reference/prisma-api/subscriptions-aey0vohche/
[tora's kingdom of it : graphql 소개 - grpahql이란?]: https://tora-it-kingdom.tistory.com/23?category=779911
[all about graphql #1, graphql(그래프ql) 이란 무엇일까?]: https://velog.io/@jakeseo_me/GraphQL%EA%B7%B8%EB%9E%98%ED%94%84QL-%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-jijuqs32wo
