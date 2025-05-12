# 6주차 미션: Next-Netflix 🎬🍿

## 서론

안녕하세요, 프론트 운영진 **지민재**입니다! 😎

이번 주는 저번 주에 이어 Netflix를 완성해 봅시다! 

이번 과제의 목표는 지난주에 이어 **figma**로 주어지는 디자인을 사용해 스타일링을 하는 방법과 **SSR**에 **익숙**해지는 것입니다. 추가적으로 **성능 최적화 방법**에 대해서도 생각해보는 것도 좋을 것 같습니다. 🔥

그럼, 이번 주차도 파이팅입니다! 💪🏻

p.s. 5주차에서 검색페이지까지 구현하신 팀들이 꽤 있던데 열정 대박입니다 🫢 최고!!

## 미션

### **⭐ 미션 목표**

- Next.js 사용법을 공부해봅니다.
- Figma로 주어지는 디자인으로 스타일링 하는 방식에 익숙해집니다.
- Git을 이용한 협업 방식에 익숙해집니다.
- 프론트엔드와 백엔드 시스템에 대한 흐름을 이해합니다.

### 📅 기한

> 2025년 5월 17일 토요일 (기한 엄수)
> 

### **✅ 필수 요건**

- [결과화면](https://next-netflix-18th-2.vercel.app)의 **상세 페이지**와 **검색 페이지**를 구현합니다.
    - 상세 페이지는 동적 라우팅을 이용해 구현합니다.
    - 검색 페이지는 실시간 키워드 검색으로 구현합니다.
- [Figma](https://www.figma.com/file/UqdXDovIczt1Gl0IjknHQf/Netflix?node-id=0%3A1)의 디자인을 그대로 구현합니다.
- Open api를 사용해서 데이터 패칭을 진행합니다. (ex. [themoviedb API](https://developers.themoviedb.org/3/getting-started/introduction))

### 👍🏻 선택 요건

- 검색 페이지 **무한스크롤**을 구현합니다.
- 검색 페이지 **스켈레톤** 컴포넌트를 구현합니다.
- **성능 최적화**를 위한 방법을 적용해봅니다.

### 🔑 Key Question

- 정적 라우팅(Static Routing)/동적 라우팅(Dynamic Routing)이란?
- 무한 스크롤과 `Intersection Observer API`의 특징에 대해 알아봅시다.
- `tanstack query`의 사용 이유(기존의 상태 관리 라이브러리와는 어떻게 다른지)와 사용 방법(reactJS와 nextJS에서)을 알아봅시다.

---

### **🔗 링크 및 참고자료**

- [useCallback과 React.Memo를 이용한 렌더링 최적화](https://velog.io/@yejinh/useCallback%EA%B3%BC-React.Memo%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94)
- [성능 최적화](https://ui.toast.com/fe-guide/ko_PERFORMANCE)
- [더 나은 UX를 위한 스켈레톤 UI 만들기](https://ui.toast.com/weekly-pick/ko_20201110)
- [React에서 무한 스크롤 구현하기](https://tech.kakaoenterprise.com/149)
- [intersection Observer API 알아보기](https://www.youtube.com/watch?v=iZhq7I42uaI)
- [intersection Observer API 블로그 포스팅](https://www.heropy.dev/p/ydKoQO)
