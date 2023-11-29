import React, { useState } from 'react';
import axios from 'axios';
import "./Fonts/Font.css";



export default function MainContent() {
    const [text,setText] = useState("");


    const handleTextValue = (e) => {
        setText(e.target.value);
    }
    
    
  return (
    <div style={{ 
      position: 'relative', 
      top: '50%', 
      transform: 'translateY(-50%)', 
      width: '100%', 
      textAlign: 'center',
      color: 'white' // 모든 텍스트 색상을 흰색으로 설정
    }}>
      <h1 style={{
        fontSize: '3rem', // 기본 크기의 2배
        textShadow: '2px 2px 4px #000000', // 텍스트에 그림자 효과 추가
        fontFamily: "koreanGD3"
      }}>
        바울청에 오신 여러분을 환영합니다!
      </h1>
      <p style={{
        fontSize: '1.5rem', // 기본 크기의 2배
        textShadow: '1px 1px 2px #000000', // 텍스트에 그림자 효과 추가
        // fontFamily: "koreanGD"
      }}>
        아래에 자유롭게 의견을 작성해주세요.
건의사항, 기도제목, 응원 등 무엇이라도 좋습니다.
      </p>
      <textarea
        placeholder="여기에 의견을 작성하세요."
        style={{
          margin: '1rem auto', // 가운데 정렬을 위해 auto로 변경
          padding: '0.5rem',
          width: '100%', // 너비를 100%로 설정하여 반응형으로 만듦
          maxWidth: '800px', // 최대 너비 설정
          height: '400px', // 세로 길이 설정
          display: 'block', // 블록 레벨 요소로 만들어 가로 중앙 정렬 가능하게 함
          background: 'white', // 배경색을 흰색으로 설정
          borderRadius: '10px', // 모서리를 둥글게 처리
          border: '1px solid #ccc', // 경계선을 설정하여 더 세련된 외관을 제공
          resize: 'none', // 사용자가 크기를 조절하지 못하도록 설정
          
        }}
        onChange={(e)=>setText(e.target.value)}

      />
      <button style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '0.3rem',
        marginTop: '1rem', // textarea와 버튼 사이의 간격
        display: 'block', // 블록 레벨 요소로 만들어 가로 중앙 정렬 가능하게 함
        marginLeft: 'auto', // 가운데 정렬을 위해 auto로 설정
        marginRight: 'auto', // 가운데 정렬을 위해 auto로 설정
        cursor: 'pointer'
      }} onClick={sendOpinion}>
        의견 보내기
      </button>
    </div>
  );

  async function sendOpinion (){
    let opinion = text //textArea에 있는 문장들 가져오기.
    console.log(opinion); 

    // "http://221.138.161.26:4000/opinion"
    // "http://localhost:4000/opinion"

    //의견 데이터 서버에 송부.
    const sendServer = await axios.post("http://localhost:4000/opinion", {
       data: {
         opinion: opinion
       }}).then((res)=>{
         console.log(res);
         return res;
       }).catch((err)=>{
         console.log(err);
         return err;
       });

        console.log(sendServer.data);

        if(sendServer.data.isSuccess === true){
          alert('의견이 성공적으로 전송되었습니다.');
         }else{
          alert(`의견 전송에 실패하였습니다. \n 오류내용: ${sendServer.data.message} \n 관리자(조준기 형제)에게 문의해주세요😭`);
    }
  }

}
