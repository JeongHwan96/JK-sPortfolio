<template>
  <div>
    <!-- https://portfolio.project-hh.com/projects -->
    <Header></Header>
    <!-- introduceMeWrap -->
    <div class="introduceMeWrap">
      <h1 class="About">
        <img
          style="width: 48px; margin: 0 1% 0 0"
          src="../../assets/img/project.svg"
          alt=""
        />Project
      </h1>
      <p class="introducemyproject">
        프로젝트에 투입되어 작업하거나 개인 프로젝트로 제작한 프로젝트를 정리
        하였습니다
      </p>
      <div class="projectWrap">
        <!-- First Project Section -->
        <div class="one_project_section">
          <div class="ecentric_Section">
            <!-- e-centric care Section -->
            <div class="ecentric_care_Section">
              <img
                class="ecentriccareimg"
                src="../../assets/img/ecentriccare.png"
                alt=""
                @click="careModalOpen"
              />
              <p style="margin: 5% 0">LG e-centric Care</p>
              <div
                class="Web"
                style="
                  background-color: rgb(239, 239, 239);
                  color: rgb(33, 33, 33);
                "
              >
                Web
              </div>
              <CareModal
                :class="{
                  showModal: isShow === true,
                  noneModal: caremodalcheck === false,
                }"
                @sendmodalOpen="getModaldata"
              ></CareModal>
            </div>
            <!-- e-centric Manager Section -->
            <div class="ecentic_manager_Section">
              <img
                class="ecentricmanagerimg"
                src="../../assets/img/ecentricmanager.png"
                alt=""
                @click="managerModalOpen"
              />
              <p style="margin: 5% 0">LG e-centric Manager</p>
              <div
                class="Web"
                style="
                  background-color: rgb(239, 239, 239);
                  color: rgb(33, 33, 33);
                "
              >
                Web
              </div>
              <ManagerModal
                :class="{
                  managershowModal: isManagerShow === true,
                  managernoneModal: managermodalcheck === false,
                }"
                @sendmanagermodalOpen="getmanagerModaldata"
              ></ManagerModal>
            </div>
          </div>
        </div>
        <!-- Second Project Section -->
        <div class="Second_project_section">
          <div class="EV_Charger_Wrap">
            <!-- EVW007SL-NK Section -->
            <div class="EVW007SL-NK_Section">
              <img
                class="ecentricmanagerimg"
                src="../../assets/img/EVW007SL-NK.png"
                alt=""
                @click="SLNKModalOpen"
              />
              <p style="margin: 5% 0">EVW007SL-NK 완속 모델 S/W 검증</p>
              <div
                class="Web"
                style="
                  background-color: rgb(239, 239, 239);
                  color: rgb(33, 33, 33);
                "
              >
                Device S/W
              </div>
              <EVD007SLModal
                :class="{
                  showModal: isEVD007SLNKShow === true,
                  noneModal: EVD007SLNKmodalcheck === false,
                }"
                @sendmodalOpen="getModaldata"
              ></EVD007SLModal>
            </div>
            <!-- EVW007SK Section -->
            <div class="EVW007SK_Section">
              <img
                class="ecentricmanagerimg"
                src="../../assets/img/EVW007SK.png"
                alt=""
                @click="managerModalOpen"
              />
              <p style="margin: 5% 0">EVW007SK 완속 모델 S/W 검증</p>
              <div
                class="Web"
                style="
                  background-color: rgb(239, 239, 239);
                  color: rgb(33, 33, 33);
                "
              >
                Device S/W
              </div>
              <ManagerModal
                :class="{
                  managershowModal: isManagerShow === true,
                  managernoneModal: managermodalcheck === false,
                }"
                @sendmanagermodalOpen="getmanagerModaldata"
              ></ManagerModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Project.ts"></script>

<style>
@import "../../assets/css/Project.css";
</style>
