import React from "react";
import { Link } from 'react-router-dom';
import {ProgSubMenu} from 'app/routes/board/programs/ProgSubMenu';
import {CureNaviTab} from 'app/routes/board/programs/cure/CureNaviTab';
import * as vars from "app/models/js/variable.js";

export function Detail() {
  return (
<>
  {/* PC용 헤드카피*/}
  <div className="subtop3">
    <div className="head_copy">
      <h2>
        000 소개
        <br />
        소개두번째줄
      </h2>
      {/*<p>HOME &gt; 대분류&gt; 00 소개</p>*/}
    </div>
  </div>
  {/* //PC용 헤드카피*/}
  {/* 모바일용 헤드카피*/}
  <div className="mobile_subtop">
    <div className="head_copy">
      <h2>
        000 소개
        <br />
        000 소개
      </h2>
      {/*<p>HOME &gt; 대분류&gt; 00 소개</p>*/}
    </div>
  </div>
  {/* //모바일용 헤드카피*/}
  <div className="subtop_140" />
  <div className="subtop_u" />
  {/* 콘텐츠 시작*/}
  <div id="wrapper">
    <ProgSubMenu/>
    {/* 우측컨텐츠*/}
    <article id="ctt" className="ctt_program">
      <header>
        <h1>치료 프로그램</h1>
      </header>
      <div id="ctt_con">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    #GNB ul li.gnb02 a {color:#a99808;}\n    #lnb>ul>li.lnb01 a {color:#a99808;}\n    .subNav ul li.lnb01 a {background-color: #89BCC1;}\n    "
          }}
        />
        {/* 우측컨텐츠*/}
        <div id="left_container">
          {/* 게시판 또는 컨텐츠 */}
          {/* 콘텐츠 시작*/}
          {/* 상단서브타이틀 */}
          <div className="hgroup">
            <h1>
              <span>치료 프로그램</span>
            </h1>
            <p>
              {" "}
              <span className="home">
                <span>HOME</span>
              </span>{" "}
              <span>치료 프로그램</span> <span className="fb">전체</span>{" "}
            </p>
          </div>
          {/* //상단서브타이틀 */}
          <CureNaviTab/>
          {/* 교육프로그램*/}
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">ABA</p>
                <p className="text2">
                1. 조기집중 프로그램 - 조기 집중 프로그램은 학령기 이전 아동을 대상으로<br/> 
                EIBI(조기집중 행동적 중재) 모델의 집중적 ABA 접근을 통하여 <br/>
                발달의 차이를 최소화하고 일반화된 환경에 적응할 수 있도록 개입합니다.<br/>
                <br/>
                2. 사회성프로그램 - 사회성 프로그램은 아동이 소그룹 안에서 상호작용, <br/>
                또래와의 상호작용을 강화하고 이 과정에서 언어확장을 목적으로 합니다. <br/>
                이를 위해 다양한 그릅활동과 게임등이 이루어 집니다. <br/>
                궁극적으로 그룹 활동 상황에 필요한 적응 능력 함양을 통해서 <br/>
                아동이 통합 교육 환경에서 독립적으로 기능할 수 있도록 훈련하는 과정입니다. <br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">ESDM</p>
                <p className="text2">
                  12~48개월의 자폐 스펙트럼 진단을 받았거나 <br/>
                  발달 지연에 대한 개입이 필요한 영유아를 대상으로 <br/>
                  전반적 발달 영역의 기능향상을 도모합니다. <br/><br/>
                  부모교육을 통하여 부모가 습득한 ESDM 기술들로 <br/>
                  일상생활에서 아동과의 상호작용을 최대화하여 <br/>
                  습득한 행동들의 일반화 및 새로운 행동을 가르치는 것으로 발달의 증진을 목표로합니다.<br/>
                  <br/>
                  6개월 단위로 진행되며, 프로그램 진행 중 부모교육이 필수적으로 진행됩니다. <br/>
                  주에 2~3회, 한 회기당 80분 개입을 기본으로 합니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">청소년상담</p>
                <p className="text2">
                  청소년기는 아동기에서 성인기에 이르는 과도기로서, <br/>
                  신체적 변화에 따른 심리적 변화가 두드러지고, 자아정체감을 형성하고, <br/>
                  부모로부터의 독립을 준비하는 시기입니다.<br/>
                  <br/>
                  이에 청소년들은 학업이나 진로에 대한 고민이 깊어지고, 부모와의 갈등이 더욱 빈번해집니다.<br/>
                  또한 외모나 신체에 대한 고민이 많아지고, <br/>
                  친구 관계에 더욱 많이 몰두하고 갈등을 경험합니다.<br/>
                  더불어 아직 자기 조절력이나 도덕성이 충분히 발달 되지 않아 <br/>
                  약물이나 중독, 폭력, 가출, 비행 행동에 쉽게 영향을 받습니다.<br/>
                  <br/>
                  이에 청소년 상담은 청소년이 학업 및 진로, 친구 관계, 부모 관계를 잘 세우고, <br/>
                  비행 행동을 예방하고, 자신의 잠재 가능성을 최대한 실현할 수 있도록 돕기 위한 과정입니다.<br/>
                  청소년 상담은 일대일로 진행되며, 언어 및 상호작용을 통하여 이루어집니다.<br/>
                  상담 과정을 통하여 청소년은 자신의 발달 과업을 성공적으로 달성하고, <br/>
                  건강한 성인으로 성장하기 위한 밑거름을 단단히 다지게 됩니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">성인상담</p>
                <p className="text2">
                  성인 상담은 자녀 양육, 부부 관계, 가족 갈등, 개인의 성격 특성으로 <br/>
                  힘들어하는 성인들을 대상으로 심리·정서적 어려움의 해결, <br/>
                  효율적인 대인 관계와 사회 적응 능력의 향상, <br/>
                  자녀에 대한 올바른 이해와 자녀 양육태도 개선 등을 목표로 <br/>
                  상담자와의 일대일 관계에서 진행되는 과정입니다.<br/>
                </p>
                <ul>
                  {/* <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li className="R">
                <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
              </li> */}
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">언어치료</p>
                <p className="text2">
                  또래에 비해 언어 발달이 느린 아동, 단어 의미 이해가 부족한 아동,<br/>
                  조음 문제 또는 말더듬 문제를 가진 아동, 기타 말ㆍ언어 문제를 가진 아동을 대상으로 하며,<br/>
                  <br/>
                  아동의 현재 언어수준에 관한 자세한 평가를 바탕으로 <br/>
                  아동에게 맞는 체계적인 언어치료 프로그램을 제공합니다.<br/>
                  또한 부모님 상담을 통해 아동의 언어치료가 치료실 내의 상황에서 뿐만 아니라 <br/>
                  가정 환경에서도 연장될 수 있도록 하여<br/>
                  일상생활에서 보다 능률적인 의사소통이 이루어질 수 있도록 도움을 주는 프로그램입니다.<br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/cureprogram/language">
                      프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="R">
                <img alt="언어치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_language.gif'} />
              </li>
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">놀이치료</p>
                <p className="text2">
                  자신의 생각이나 느낌을 언어로 전달하는데 제한이 있는 아동들에게 행동표현을 통해서<br/>
                  정서,행동,발달상의 문제를 해결합니다. <br/>
                  아동의 불안감을 완화시키고 안정적으로 애착이 형성되도록 도우며 <br/>
                  사회적 상호작용 욕구와 자신감을 증진시켜 타인과 적절한 상호작용이 가능하도록 <br/>
                  전반적 발달을 가속화시키는 치료프로그램입니다.<br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/cureprogram/play">
                      프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="R">
                <img alt="놀이치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_play.gif'} />
              </li>
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">미술치료</p>
                <p className="text2">
                  말로 자신을 충분히 표현하기에 어려움이 있는 아이들의 잠재력을<br/>
                  최대한 발휘할 수 있도록 도와주는 프로그램입니다.<br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/cureprogram/art">
                      프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="R">
                <img alt="미술치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_art.gif'} />
              </li>
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">감각치료</p>
                <p className="text2">
                아동의 감각통합기능, 놀이수준, 발달연령 등에 따라 <br/>
                적절하게 조절된 전정감각, 고유수용성 감각, 촉각을 제공하며<br/>
                이러한 감각들을 통합하여 아동이 자발적으로 적응반응을 만들 수 있도록 돕습니다. <br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/cureprogram/sense">
                      프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="R">
                <img alt="미술치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_sense.gif'} />
              </li>
            </ul>
          </div>          
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">인지학습</p>
                <p className="text2">
                  친구들과 함께 학습에 참여하고 잠재력을 최대한 발휘할 수 있도록 도와줍니다.
                  <br />
                  인지발달과 학습능력 면에서 부진이나 지체를 보이는 아동 및 청소년의 <br/>
                  인지학습 수준과 개별 특성을 평가하여 <br/>
                  어려움을 보이는 인지영역 및 학습능력의 발달을 돕는 치료프로그램입니다.<br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/cureprogram/notice">
                      프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="R">
                <img alt="인지치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_notice.gif'} />
              </li>
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">그룹치료</p>
                <p className="text2">
                  사회성 그룹 훈련 프로그램은 또래 및 타인과의 자연스러운 관계 맺기와 <br/>
                  다양한 상황에 적절하게 대처하는 기술이 부족하여 학교생활에 어려움이 있는 <br/>
                  아동 및 청소년들에게 대인 관계 능력을 향상시켜주는 프로그램입니다.<br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/cureprogram/group">
                      프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="R">
                <img alt="그룹치료" src={vars.REACT_APP_URL + '/image/cureprogram/cure_group.gif'} />
              </li>
            </ul>
          </div>
          <div className="cont_program_list">
            <ul>
              <li className="L">
                <p className="text1">가족상담</p>
                <p className="text2">
                  가족 구성원 간의 관계구조와 상호작용을 변화시켜 <br/>
                  대인관계 기술과 적응능력을 향상시킴으로써 개인과 가족이 건강하고<br/>
                  기능적인 생활을 하도록 도움을 주는 치료입니다.<br/>
                </p>
                <ul>
                  <li className="none">
                    <Link to="/board/cureprogram/family">
                      프로그램 자세히보기
                    </Link>
                  </li>
                </ul>
              </li>
              {/*  <li className="R"><img alt="" src="../image/cont_program_08.gif"></li>*/}
            </ul>
          </div>
          {/*//교육프로그램*/}
          {/*//콘텐츠 끝 */}
          {/* //게시판 또는 컨텐츠 */}
        </div>
        {/* 우측컨텐츠*/}{" "}
      </div>
    </article>
    {/*//우측 콘텐츠 끝 */}
  </div>
  {/*//콘텐츠 끝 */}
</>
  );
}

export default Detail;
