<template>
  <div>
    <div class="modal-btn">
      <img
        class="CloseButton"
        @click="NKmodalOpen"
        src="../../../assets/img/Close.png"
        alt=""
      />
    </div>
    <div class="modal-container">
      <div class="ecentricCareImageSection">
        <img
          class="ecentricCareImage"
          src="../../../assets/img/EVW007SL-NK_BG.png"
          alt=""
        />
      </div>
      <div class="CareExplaneSection">
        <div class="careTitleSection">
          <div class="caretitle">Summary</div>
          <div class="caretitleSub">EVW007SL-NK Device S/W 검증</div>
        </div>

        <div class="careDurationSection">
          <div class="careDuration">Duration</div>
          <div class="careDurationSub">24.04 ~ 24.05</div>
        </div>

        <div class="careissuemanagementSection">
          <div class="careissue">Issue ManageMent</div>
          <div class="careissueSub">Jira, ALM</div>
        </div>

        <div class="careCategorySection">
          <div class="carecategory">Category</div>
          <div class="carecategorySub">Device S/W</div>
        </div>
      </div>
      <!-- underline -->
      <div class="line"></div>
      <!-- description -->
      <div class="MainTest_Item_Wrap">
        <div class="descriptionImgWrap">
          <h2 class="MainTestItem_Title">Main Test Item (주요 테스트 항목)</h2>
        </div>

        <div class="MainTestItem_Description_Wrap">
          <ul>
            <li class="MainTestItem_Description">Version Update 동작성 확인</li>
            <li class="MainTestItem_Description">
              Deive Error 및 Error Recovery 동작 확인
            </li>
          </ul>
        </div>
      </div>
      <!-- underline -->
      <div class="line"></div>
      <!-- TestCaseWrap  -->
      <div class="testCaseWrap">
        <div class="testCaseImgWrap">
          <h2 class="TestCaseTitle">TestCase</h2>

          <img
            class="CareTestCaseImg"
            src="../../../assets/img/SL-NK TestCase.png"
            alt=""
          />
          <div class="TestCaseImgDescription">
            (Excel 파일로 Test Case 선 작성)
          </div>
        </div>

        <div class="careTestcaseDescriptionWrap">
          <ul>
            <li class="CareTestCaseDescription">
              해당 TestCase 생성 시 UX 시나리오 문서, SRS(Software Requirment
              Specification)문서 기반으로 작성 하였습니다
            </li>
            <li class="TestCase_Info">
              TestCase 생성 할 때는 ALM Site에서 직접 생성 하기 때문에 임의로
              Excel 파일로 변경 하여 작성 하였고 내용이 많아 일부분만 표기
              하였습니다
            </li>
            <li class="TestCase_Info">
              마인드 맵 이미지는 내용이 많아 일부만 캡쳐하여 올렸습니다
            </li>
          </ul>
        </div>
      </div>
      <!-- underline -->
      <div class="line"></div>

      <div class="IssueWrap">
        <div class="IssueImgWrap">
          <img
            class="CareIssueImg"
            src="../../../assets/img/SL-NK Issue.png"
            alt=""
          />
          <div class="IssueImgDescription">(1~3차 까지 이슈 중 일부)</div>
        </div>

        <ul>
          <li class="Issue_Info">
            preFC(Feature Complete)부터 FC3차까지의 이슈 관리함
          </li>
          <li class="Issue_Info">
            테스트 방법은 블랙박스 테스트(오류 예측 테스트, 원인-효과 테스트)을
            사용 하여 테스트 진행
          </li>
          <li class="TestCase_Info">
            Test 진행 시 발견된 이슈는 Singlex ALM에서 관리 하고 있으며 보안
            문제로 임의로 Excel 파일로 변경 하여 일부분만 표기 하였습니다
          </li>
        </ul>
      </div>
      <!-- underline -->
      <div class="line"></div>

      <!-- Test Result  Section -->
      <div class="TestResultWrap">
        <h2 class="TestCaseTitle">Test Result</h2>
        <div class="TestResultImgWrap">
          <img
            class="eCentricCareResultImg"
            src="../../../assets/img/SL-NK TestResult.png"
            alt=""
          />

          <div class="IssueImgDescription">(차수별 시험 상세 시험 결과)</div>
          <ul>
            <li class="Issue_Info">
              Test진행은 WebRTS라는 Test진행 Page에서 시험을 진행 하였습니다
            </li>
            <li class="Issue_Info">
              ALM 시스템에서 진행을 진행 하고 진행 한 결과를 토대로 시험
              Excel로결과서를 작성하였고 ALM 시스템에서 관리 하였습니다
            </li>

            <li class="TestCase_Info">
              시험 결과서 같은 경우 보안이 필요한 부분이 포함 되어 있어 첨부하지
              못하였습니다
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./EVD007SL-NK_Modal.ts"></script>

<style>
@import "../../../assets/css/EVD007SL-NK_Modal.css";
</style>
