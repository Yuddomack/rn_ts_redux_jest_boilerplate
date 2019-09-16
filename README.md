# DiaryTest2

다이어리 앱 개발용 테스트 소스(+ 보일러 플레이트)

### 참조

* React Native + Typescript
    * [React Native Blog](https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native)
* Redux + Typescript
    * [Redux Blog](https://redux.js.org/recipes/usage-with-typescript)


### 경험상 권장 구성순서

1. react navigation (atomic design 기반)
2. typescript
3. redux (ducks 패턴)

테스트는?
큰 규모에서는 ducks만으로는 커버가 안되는 케이스 -> 분리에 대한 염두
createActions를 쓸 것 인가..


### todo(~~완료~~)

- ~~typescript, redux 세팅~~
- ~~redux + typescript~~
- ~~test코드 세팅~~
- test + typescript + redux(가능?) -> store test code는 세팅(상태 테스트) -> 컴포넌트 테스트
- ~~컨테이너와 프레젠테이셔널로 분리~~
- hooks
- 컨벤션 적용하기
- react-icons d.ts 만들기 및 적용하기