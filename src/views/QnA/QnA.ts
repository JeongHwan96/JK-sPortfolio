import Vue from "vue";
import { defineComponent, ref } from "vue";
import { QnaItem } from "./QnaItem";
import { Component } from "vue-property-decorator";
import Header from "../../components/Header.vue";
@Component({ components: { Header } })
export default class QnAComponent extends Vue {
  qnaList: QnaItem[] = [
    {
      question: "Q. 어떤 계기로 SQA 직종을 선택하게 되었나요?",
      answer:
        "A. 대학 시절 강의를 듣던 중 내용 중에 테스트 관련 강의를 들은 적이 있었습니다 그 때 처음 Black Box Testing, White Box Test에 관하여 알게 되었고 흥미를 갖게 되었고 처음 Test일을 하고 싶다고 느끼게 되어 선택 하게 되었습니다",
    },
    {
      question:
        "Q. 그럼 잘 SQA에서 FrontEnd 개발 직군으로 이직을 한 이유는 무엇인가요?",
      answer:
        "A. 원래 처음에 꿈은 Web Page 개발 하는 것이 꿈이였습니다 대학교를 다니면서 운이 좋게 S/W Test 업체에 취업 할 수 있는 기회가 생겨서 개발 이전에 Test 상식과 경험을 먼저 쌓아도 괜찮겠다 라는 생각이 들어서 SQA 업무를 먼저 하게 되었고 2년를 다니고 운이 좋게 개발 직군 회사를 입사 할 수 있는 기회가 생겨 이직을 하게 되었습니다",
    },
    {
      question:
        "Q. 현재는 다시 SQA 직무를 하고 있는데 다시 돌아온 이유는 무엇인가요?",
      answer:
        "A. 여러가지 이유가 있겠지만 다시 돌아오게 한 큰 이유는 FrontEnd 개발공부와 실제 업무를 하면서 느끼게 된 것은 화면을 구현 하면서 다음 화면은 어떤식으로 구현 하지 라는 생각보다는 이 화면은 어떤식으로 Test를 할까? 라는 생각을 하였습니다. 거기서 아! 나는 화면 구현 보다는 테스트에 중점을 두고 있구나를 알게 되었고 개발을 할 줄 알는 테스터를 하면 메리트가 있을 것 같다고 생각하여 다시 돌아오게 되었습니다",
    },
  ];
}
