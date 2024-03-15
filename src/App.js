/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목함수] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]); //["남자 코트 추천", 함수]
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  function 따봉개별변경(changeGoodNumber) {
    let copy = [...따봉];
    copy[changeGoodNumber] += 1;
    따봉변경(copy);
  }

  /*
    map의 역할: 
    1. array 자료 갯수만큼 함수안의 코드를 실행
    2. 함수의 파라미터는 array 안에 있던 자료임 ex) a = 1, 2, 3 순차적으로 들어감
    3. return 에 뭐 적으면 array로 담아줌
  */
  [1, 2, 3].map(function (a) {
    return "1233211";
  }); //실행해보기

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>
          {글제목[0]} <span>👍</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            modal == true ? setModal(false) : setModal(true);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {/* a는 글제목 배열의 데이터, i는 0,1,2.. */}
      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              {글제목[i]}{" "}
              <span
                onClick={() => {
                  따봉개별변경(i);
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

/*

*/

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
