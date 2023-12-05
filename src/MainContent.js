import React, { useState } from 'react';
import axios from 'axios';
import "./Fonts/Font.css";
import "./App.css";



export default function MainContent() {
    const [text,setText] = useState("");


    const handleTextValue = (e) => {
        setText(e.target.value);
    }
    
    
  return (
    <div className="container">
    <h1 className="header">
        바울청에 오신 여러분을 환영합니다!
    </h1>
    <p className="paragraph">
        아래에 자유롭게 의견을 작성해주세요.
        건의사항, 기도제목, 응원 등 무엇이라도 좋습니다.
    </p>
    <textarea
        className="textarea"
        placeholder="여기에 의견을 작성하세요."
        onChange={handleTextValue}
    />
    <button
        className="button"
        onClick={sendOpinion}>
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
    const sendServer = await axios.post("http://221.138.161.26:4000/opinion", {
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
