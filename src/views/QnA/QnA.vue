<template>
  <div>
    <Header></Header>
    <div class="introduceQnAWrap">
      <div class="qna-wrapper">
        <h1 class="title">Q&A</h1>
        <div v-for="(item, index) in qnaList" :key="index" class="qna-card">
          <div class="question">{{ item.question }}</div>
          <div class="answer">{{ item.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./QnA.ts"></script>

<style>
@import "@/assets/css/QnA.css";
</style>
