# MEGABOXU


# 33기 2차 프로젝트 1팀 MegaBoxu

![megaboxu1](https://user-images.githubusercontent.com/101863209/174227779-c6390882-117b-4ec4-b44f-c96a16ffb0c9.png)


## 프로젝트 선정이유

- 1차와 다른 추가적인 기능을 구현할 수 있는 페이지를 선정했다.
- 깔끔한 UI와 영화별 극장별 상영 타임테이블 등 다양한 데이터를 다뤄볼 수 있을 것으로 기대되어 선정했다.

<br><br>

## 프로젝트 소개

한정된 기간동안 기획, 디자인과 함께 기능 구현 개발에 집중하기 위해서 메가박스를 참조하여 학습목적으로 제작하였습니다. <br>
코드 및 이미지를 남용 및 악용할 경우 법적으로 문제될 수 있습니다. <br>
이 프로젝트에서 사용되고 있는 로고 및 배너는 해당 프로젝트 팀 소유이므로 외부인이 허가없이 사용할 수 없습니다.

<br><br>

## 1. 프로젝트 기간 및 인원

**프로젝트 기간**
22.06.07 ~ 22.06.17 (약2주)

<br><br>

## 2. 개발 인원

#### Front-end : 김형석, 김철회, 노해리, 이해용

#### Back-end : 정치영, 박준형

<br><br>

## 3. 구현 항목

### 필수구현

#### 소셜로그인, 메인페이지, 무비 리스트, 무비 상세, 예매페이지, Nav / Footer

<br><br>

## 4. 기술 스택

### Front-end

: HTML/CSS, JavaScript, React.js, React-Router, styled-components

### Back-end

: Python, Django

<br><br>

## 5. 협업도구

### (1) Trello

<img width="1509" alt="스크린샷 2022-06-17 14 07 32" src="https://user-images.githubusercontent.com/101863209/174229066-0a9f0dc2-c8c2-48cc-adf2-6d9ca316c991.png">


- 팀원간 프로젝트 협업도구로는 Trello를 활용했다.

<br>

### (2)Slack

<img width="1243" alt="스크린샷 2022-06-17 14 08 51" src="https://user-images.githubusercontent.com/101863209/174229195-3c121d5b-4c09-4624-bb9c-0740dfbfe4cf.png">

<br>

### Coding Convention
1. 들여쓰기는 tab, 혹은 공백 문자 2개를 사용한다.
2. 변수와 함수, className 명명 규칙은 Camel Case를 사용한다.
3. 값이 변하지 않는 변수는 const를, 값이 변하는 변수는 let을 사용하여 선언하고 var는 절대로 사용하지 않는다.
4. 함수 선언시 arrow function(() => {}) 위주로 사용한다.
5. 주석은 코드 설명보다는 수정 사항이나 미구현 사항을 기재할 때 사용하기로 한다.
6. 함수 네이밍 규칙은 해당 함수의 동작을 앞에, 동작이 적용될 태그를 뒤에 위치하게 작명한다. (ex) handleInput)
7. component의 전체를 감싸는 최상단 태그의 className은 컴포넌트 이름으로 명명한다. (ex) product, productlist)
8. 인라인 스타일링은 지양한다.


<br>
<br>

## 6. Front-end 기능 구현 영상

https://www.youtube.com/watch?v=9ZGdnBK5LDs

### 1. 로그인 페이지

```
- REST API를 통한 카카오 로그인 구현
- 로그인을 위한 modal 창 구현
```

### 2. 메인 페이지 

```
- 영화 순위를 실시간으로 나타내기 위해 라이브러리를 사용하여 carousel 구현
```

### 3. 무비 리스트

```
- 쿼리를 사용해 검색 기능 구현
- 쿼리를 사용해 필터 버튼 클릭 시 필터에 해당하는 영화 리스트 보여지도록 구현
- 페이지네이션으로 더보기 버튼 구현
```

### 4. 무비 상세 페이지

```
- 백엔드 서버와 통신하여, 저장 되어 있는 데이터를 가져와 브라우저에 표출합니다.
- 무비 리스트 페이지에서 params로 영화별 id를 받아와 영화 id에 맞는 상세 페이지를 표현합니다.
- Recharts를 활용하여, 영화 데이터의 누적 관객수와 연령대별 예매분포(상수 데이터)를 표현합니다.
- 관람평 작성 시, 토큰의 유효성 검사를 통하여 로그인 토큰이 있는 유저만 관람평 작성이 가능합니다.
- 관람평을 모달창으로 관리하여, 별점, 관람평, 사진을 첨부하고 이를 formData 형태로 백엔드로 post하여 res로 다시 전송된 정보를 받아와 댓글화하여 화면에 표현합니다.
```

### 5. 예매 페이지

```
- 상세페이지에서 영화 예매 클릭, 선텍한 영화 정보 location으로 받아와 state를 사용하여 저장 후 기본적으로 선택한 영화 정보 표출
- 영화 날짜를 고르기 위하여 js date함수 사용한 날짜 슬라이드 구현
- styled components를 활용하여 카테고리 선택 시, style 변화와 선택한 id에 맞게 영화포스터 표출 및 극장 표출
- state를 활용한 다중 query string 필터 기능 구현
- 각각 상황에 맞는 데이터를 활용하기 위하여 3개의 API를 받아 서버와 데이터 통신 
- styled components와 상수 데이터를 활용하여, 영화 연령에 맞는 색상 표시
```

### 6. Nav / Footer

```
- styledComponents로 레이아웃, 드롭박스 구현
- 쿼리를 사용해 네브바 검색 기능 구현
```



<br>
<br>

## 7. Back-end 기능 구현


