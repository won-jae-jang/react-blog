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
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [index, setIndex] = useState(0);
  let [입력값, 입력값변경] = useState("");

  function 따봉개별변경(changeGoodNumber) {
    let copy = [...따봉];
    copy[changeGoodNumber] += 1;
    따봉변경(copy);
  }

  function 글쓰기함수(content) {
    let copy = [...글제목];
    copy.push(content);
    글제목함수(copy);
  }

  function 글삭제함수(delIndex) {
    let copy = [...글제목];
    copy.splice(delIndex, 1);
    글제목함수(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
                setIndex(i);
              }}
            >
              {글제목[i]}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation(); //이벤트 버블링을 막아줌
                  따봉개별변경(i);
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
              {/* span 눌러도 모달창 뜸 => 클릭 이벤트가 상위 html로 퍼짐(이벤트버블링) */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); //이벤트 버블링을 막아줌
                  글삭제함수(i);
                }}
              >
                글 삭제
              </button>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {/* input 태그에 뭔가 입력시 코드 실행하고 싶으면 onChange / onInput */}
      {/* onMouseOver: 마우스를 갖다 댔을때 이벤트 실행 */}
      {/* onScroll: 스크롤할때마다 이벤트 실행 */}
      {/* 파라미터 e: inputbox의 내용을 가져옴 */}
      <div>
        <input
          onChange={(e) => {
            console.log(e.target.value);
            입력값변경(e.target.value); //state 함수는 비동기 (순서 보장X)
          }}
        />
        <button
          onClick={() => {
            글쓰기함수(입력값);
          }}
        >
          글 쓰기
        </button>
      </div>

      {modal == true ? (
        <Modal
          color="orange"
          글제목함수={글제목함수}
          글제목={글제목}
          index={index}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.index]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  );
}

export default App;
