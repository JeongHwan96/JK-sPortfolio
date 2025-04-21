import Vue from "vue";
import { Component } from "vue-property-decorator";
import Header from "../../components/Header.vue";
@Component({
  components: { Header },
})
export default class MainComponent extends Vue {}
