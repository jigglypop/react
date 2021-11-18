## 마운트

---

### 마운트 라이프 사이클

-   `constructor` : 컴포넌트를 새로 만들 떄마다 호출되는 클래스 생성자
-   `getDerivedStateFromProps` : props에 있는 값을 state에 넣을 때
-   `render` : 준비한 UI를 렌더링
-   `componentDidMount` : 컴포넌트가 웹 브라우저상에 나타난 후 호출

## 업데이트

---

#### 업데이트 시점

-   props가 바뀔 때
-   state가 바뀔 때
-   부모 컴포넌트가 리렌더링될 때
-   this.forceUpdate로 강제로 렌더링을 트리거할 때

### 업데이트 라이프 사이클

-   `getDerivedStateFromProps` :
-   `shouldComponentUpdate`
-   `render`
-   `getSnapshotBeforeUpdate`
-   `componentDidUpdate`
