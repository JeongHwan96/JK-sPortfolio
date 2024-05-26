<template>
  <div>
    <div class="modal-container">
      <div class="ecentricCareImageSection">
        <img
          style="width: 100%"
          src="../../../assets/img/ecentriccare.png"
          alt=""
        />
      </div>
      <div class="careTitleSection">
        <div class="caretitle" style="margin: 13px 3% 0px 0px">제목</div>
        <div class="caretitleSub">e-Centric Care 솔루션 검증</div>
      </div>

       <div class="careToolSection">
        <div class="caretool" style="margin: 13px 3% 0px 0px">검증 Tool</div>
        <div class="caretoolSub">Singlex ALM</div>
      </div>

      <div class="careissuemanagementSection">
        <div class="careissue" style="margin: 13px 3% 0px 0px">이슈 관리</div>
        <div class="careissueSub">Jira</div>
      </div>

      <div class="careCategorySection">
        <div class="carecategory" style="margin: 13px 3% 0px 0px">카테고리</div>
        <div class="carecategorySub">Web</div>
      </div>

      <!-- underline -->
      <div class="line"></div>
      <!-- description -->
      <div class="descriptionWrap">
        <h2 class="descriptionTitle">Description</h2>
      </div>
      <div class="descriptionImgWrap">
        <img
          style="width: 50%"
          src="../../../assets/img/care1.png"
          alt=""
          class="descriptionImg"
        />
        <img
          style="width: 50%"
          src="../../../assets/img/care2.png"
          alt=""
          class="descriptionImg"
        />
      </div>
      <div class="careDescriptionTextWrap">
        <p>
          주요기능 : 충전기의 장애 상태에 대해 원격으로 진단 및 해결을 해주며
          Firmware Update를 제공
        </p>
      </div>
      <!-- underline -->
      <div class="line"></div>
      <!-- TestCaseWrap  -->
      <div class="testCaseWrap">
        <h2>TestCase</h2>
      </div>
      <p>
        TestCase 생성 할 때는 ALM Site에서 직접 생성 하기 때문에 임의로 Excel
        파일로 변경 하여 작성 하였고 내용이 많아 일부분만 표기 하였습니다
      </p>
      <div class="testCaseImgWrap">
        <img style="width: 100%" src="../../../assets/img/te1.png" alt="" />
        <img style="width: 100%" src="../../../assets/img/te2.png" alt="" />
      </div>
      <div class="careTestcaseDescriptionWrap">
        
      </div>

       <!-- underline -->
      <div class="line"></div>
      
 <div class="IssueWrap">
        <h2>Issue</h2>
      </div>
      <p>
        Test 진행 시 발견된 이슈는 Singlex ALM에서 관리 하고 있으며 보안 문제로 임의로 Excel 파일로 변경 하여 일부분만 표기 하였습니다
      </p>

      <div class="modal-btn">
        <button @click="modalOpen">닫기</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./careModal.ts"></script>

<style>
@import "../../../assets/css/careModal.css";
</style>
