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
          <!-- e-centric care Section -->
          <div class="ecentriccareWrap">
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
          </div>
          <!-- e-centric Manager Section -->
          <div class="ecentricmanagerWrap">
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
            <CareModal
              :class="{
                showModal: isShow === true,
                noneModal: caremodalcheck === false,
              }"
              @sendmodalOpen="getModaldata"
            ></CareModal>
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
</template>

<script lang="ts" src="./Project.ts"></script>

<style>
@import "../../assets/css/Project.css";
</style>
