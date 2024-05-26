<template>
  <div>
    <Header></Header>
    <div class="main">
      <!-- card -->
      <div class="main_bar">
        <img class="jeong_img" src="../../assets/img/1.png" alt="" />

        <!-- AboutMe -->
        <div class="AboutMe_Field">
          <div class="user">
            <img class="usericon" src="../../assets/img/user.svg" alt="" />
          </div>
          <div class="AboutMe_Text_Field">
            <div class="AboutMe_field_name">이름</div>
            <div class="AboutMe_field_kim">김정환 (Jeong Hwan Kim)</div>
          </div>
        </div>

        <!-- Birth -->
        <div class="Birth_Field">
          <div class="Birth">
            <img class="Birthicon" src="../../assets/img/birth.svg" alt="" />
          </div>
          <div class="Birth_Text_Field">
            <div class="Birth_field_name">생년월일</div>
            <div class="Birth_field_number">96.03.12</div>
          </div>
        </div>

        <!-- Location -->
        <div class="Location_Field">
          <div class="Location">
            <img class="Locationicon" src="../../assets/img/home.svg" alt="" />
          </div>
          <div class="Location_Text_Field">
            <div class="Location_field_name">주소</div>
            <div class="Location_field_number">경기도 평택</div>
          </div>
        </div>

        <!-- Phone -->
        <div class="Phone_Field">
          <div class="Phone">
            <img class="Phoneicon" src="../../assets/img/phone.svg" alt="" />
          </div>
          <div class="Phone_Text_Field">
            <div class="Phone_field_name">전화번호</div>
            <div class="Phone_field_number">010-8984-4667</div>
          </div>
        </div>

        <!-- School -->
        <div class="School_Field">
          <div class="School">
            <img class="Schoolicon" src="../../assets/img/school.svg" alt="" />
          </div>
          <div class="School_Text_Field">
            <div class="School_field_name">학력</div>
            <div class="School_field_number">
              평택대학교<br />(전공 : 정보통신학과)<br />(부전공 :
              산업IOT융복합전공)
            </div>
          </div>
        </div>

        <!-- Email -->
        <div class="Email_Field">
          <div class="Email">
            <img class="Emailicon" src="../../assets/img/email.svg" alt="" />
          </div>
          <div class="Email_Text_Field">
            <div class="Email_field_name">이메일</div>
            <div class="Email_field_number">kosy17@naver.com</div>
          </div>
        </div>
      </div>

      <!-- MainText -->
      <div class="MainTextWrap">
        <!-- HelloTitle   -->
        <div class="HelloTitle">
          <h1>Hello!</h1>
        </div>

        <!-- subTextWrap -->
        <div class="subTextWrap">
          <!-- introduceMySelf   -->
          <div class="introduceMySelfWrap">
            <p style="margin: 10% 0">
              안녕하세요 저는 <span>김정환</span> 입니다. 저는 QA/QE 테스터
              입니다
            </p>
          </div>

          <!-- careerHistory -->
          <div class="careerHistoryWrap">
            <p style="margin: 5% 0">
              2018년도에 Smart TV Software 및 Web QA로 커리어를 시작했습니다
            </p>
            <p style="margin: 5% 0">
              2020년도 부터 2022년까지 Web에 대한 지식을 쌓기 위해 웹 개발자로
              전향 하여 Vue, JS등 FE에 관한 지식과 경험을 쌓았습니다
            </p>
            <p style="margin: 5% 0">
              현재는 전기차 충전기와 전기차 충전기 관제 솔루션 QE Tester 겸
              파트장으로 일을 하고 있습니다
            </p>
          </div>
        </div>
        <!-- icon -->
        <div class="linkWrap">
          <div class="blog">
            <img class="blogicon" src="../../assets/img/blog.svg" alt="" />
            <a href="https://blog.naver.com/kosy17" style="margin: 3% 0 0 3%">
              Naver Blog</a
            >
          </div>
          <div class="git">
            <img class="giticon" src="../../assets/img/git.svg" alt="" />
            <a href="https://github.com/JeongHwan96" style="margin: 3% 0 0 3%">
              Git Hub</a
            >
          </div>
          <div class="about">
            <img class="aboutmeicon" src="../../assets/img/about.svg" alt="" />
            <a href="/AboutMe" style="margin: 3% 0 0 3%"> About Me</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Main.ts"></script>

<style>
@import "../../assets/css/Main.css";
</style>
