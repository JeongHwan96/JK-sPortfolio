<template>
  <div>
    <div class="modal-btn">
      <img
        class="CloseButton"
        @click="modalOpen"
        src="../../../assets/img/Close.png"
        alt=""
      />
    </div>
    <div class="modal-container">
      <div class="ecentricCareImageSection">
        <img
          class="ecentricCareImage"
          src="../../../assets/img/ecentriccare.png"
          alt=""
        />
      </div>
      <div class="CareExplaneSection">
        <div class="careTitleSection">
          <div class="caretitle">Summary</div>
          <div class="caretitleSub">e-Centric Care 솔루션 검증</div>
        </div>

        <div class="careDurationSection">
          <div class="careDuration">Duration</div>
          <div class="careDurationSub">24.02.02 ~ 24.04.02</div>
        </div>

        <div class="careissuemanagementSection">
          <div class="careissue">Issue ManageMent</div>
          <div class="careissueSub">Jira</div>
        </div>

        <div class="careCategorySection">
          <div class="carecategory">Category</div>
          <div class="carecategorySub">Web</div>
        </div>
      </div>
      <!-- underline -->
      <div class="line"></div>
      <!-- description -->
      <div class="MainTest_Item_Wrap">
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

        <h2 class="MainTestItem_Title">Main Test Item (주요 테스트 항목)</h2>

        <div class="MainTestItem_Description_Wrap">
          <ul>
            <li class="MainTestItem_Description">
              원격으로 상태 진단에 대한 동작성 확인
            </li>
            <li class="MainTestItem_Description">
              OTA 및 일반 Update(USB) 동작성 확인
            </li>
            <li class="MainTestItem_Description">
              원격 제어를 통한 관리에 대한 동작성 확인
            </li>
          </ul>
        </div>
      </div>
      <!-- underline -->
      <div class="line"></div>
      <!-- TestCaseWrap  -->
      <div class="testCaseWrap">
        <div class="testCaseImgWrap">
          <img
            class="CareTestCaseImg"
            src="../../../assets/img/CC MindMap.png"
            alt=""
          />
          <div class="TestCaseImgDescription">
            TestCase 생성 전 Mind Map으로 전체적인 기능 확인
          </div>
          <img
            class="CareTestCaseImg"
            src="../../../assets/img/te1.png"
            alt=""
          />
          <div class="TestCaseImgDescription">
            Mind Map으로 생성 한 내용을 토대로 Test Case 작성
          </div>
        </div>

        <h2 class="TestCaseTitle">TestCase</h2>

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
            src="../../../assets/img/care_issue2.png"
            alt=""
          />
          <div class="IssueImgDescription">
            시험 차수별, Priority(중요도)별 이슈 현황
          </div>

          <img
            class="CareIssueImg"
            src="../../../assets/img/care_issue.png"
            alt=""
          />
          <div class="IssueImgDescription">1~4차 까지 이슈 중 일부</div>
        </div>

        <h2 class="TestCaseTitle">Issue</h2>

        <ul>
          <li class="Issue_Info">
            preFC(Feature Complete)부터 FC4차까지의 이슈 관리함
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
        <h2 class="TestResultTitle">Test Result</h2>
        <div class="TestResultImgWrap">
          <img
            class="eCentricCareResultImg"
            src="../../../assets/img/ecentriccareResult.png"
            alt=""
          />
          <img
            class="eCentricCareTestResultImg"
            src="../../../assets/img/TestResultExcel.png"
            alt=""
          />
          <img
            class="eCentricCareTestResultImg"
            src="../../../assets/img/TestResultExcel2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./careModal.ts"></script>

<style>
@import "../../../assets/css/careModal.css";
</style>
