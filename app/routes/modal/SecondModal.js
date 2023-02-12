import React,{useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import { Link,useLocation } from 'react-router-dom';
import { IntroduceSubMenu } from 'app/routes/board/introduce/IntroduceSubMenu';
import * as vars from "app/models/js/variable.js";
import $ from 'jquery';

export function SecondModal() {

  const modal1Value = Cookies.get('modal2');

  const closeOneDay = () => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + ( 24 * 60 * 60 *1000 ));
    Cookies.set('modal2','false',{expires: expirationDate});
    document.getElementById('modal2').style = "display: none;";
  }

  const modalClose = () => {
    document.getElementById('modal2').style = "display: none;";
  }

  return (
<>
{modal1Value === 'false' ? null : (
  <div id="modal2" className="hd_pops" style={{ top: "15%", left: "44%", zIndex: "951", border:"0.3em solid rgb(139,186,31)" }}>
  <div className="hd_pops_con" style={{ width: "100%", height: "100%"}}>
    <p style={{ lineHeight: "1.2em" }}>
      <span
        lang="en-us"
        style={{
          color: "rgb(37,37,37)",
          fontSize: "1.6em",
          fontWeight: "bold",
          textAlign: "center",
          letterSpacing: "0pt",
          fontFamily: '"나눔고딕"'
        }}
        xmlLang="en-us"
      >
        <div>
          <span style={{ color: "rgb(245,133,63)"}}>
            <br/>
            구리언어
          </span>
          <span style={{ color: "rgb(16,167,126)" }}>심리상담센터</span>
        </div>
      </span>
      <br/>
      <span
        style={{
          color: "rgb(37,37,37)",
          fontSize: "1.3em",
          fontWeight: "bold",
          textAlign: "center",
          fontFamily: '"나눔고딕"'
        }}
      >
        <div>ABA 기능향상 개별 수업 3월부터 개설합니다.</div>
      </span>
    </p>
    <p
      align="center"
      style={{
        fontSize: "9pt",
        letterSpacing: "0pt",
        textAlign: "center",
        lineHeight: "1.2"
      }}
    >
      <div style={{margin:"2em"}}></div>
    </p>
    <p
      align="center"
      style={{
        letterSpacing: "0pt",
        color: "rgb(37,37,37)",
        fontSize: "1.4em",
        fontWeight: "bold",
        lineHeight: "1.2",
        textAlign: "left",
        marginLeft: "1em",
      }}
    >
      언어, 인지, 소근육, 자조, 학습 증진 및 <br/>
      문제행동 감소를 위한 집중개입 수업입니다.<br/><br/>
      문의사항은 {vars.REACT_APP_CENTER_TEL}, 010-7569-5527 로 연락주시면<br/>
      자세한 상담 도와드리겠습니다.
      <br/>
      감사합니다.<br/>
      <br/>
    </p>
    
  </div>
  <div className="hd_pops_footer">
    <button className="hd_pops_reject hd_pops_52 24" onClick={() => closeOneDay()}>
      <strong>24</strong>시간 동안 다시 열람하지 않습니다.
    </button>
    <button className="hd_pops_close hd_pops_52" onClick={() => modalClose()}>닫기</button>
  </div>
</div>
)}

</>
  );
}


export default SecondModal;

