Learning React and ES6

---

Router

- HashRouter
- BrowserRouter : HTML History API 사용
- withRouter :

Redirect

- from에 설정된 URL을 갖는 페이지에 대해 to에 설정된 URL로 redirect 시킨다.
- Redirect를 작성한 코드 위에 Router들을 작성하였을 경우
  순차적으로 해당 Router에 지정한 path의 컴포넌트를 render하며,
  path가 일치하지 않을 경우 가장 하단에 위치한 Redirect를 수행시키는데에 사용한다.

---

컨테이너 프레젠터 패턴

컨테이너는 data를 갖고, state를 관리, api를 호출하는 로직을 담당. (클래스)
프레젠터는 view에 대한 기능을 담당. (함수형)
