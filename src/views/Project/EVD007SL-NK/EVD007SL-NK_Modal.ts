import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ManagerModalComponent extends Vue {
  NKmodalCheck: boolean = false;

  NKmodalOpen() {
    this.$emit("sendmanagermodalOpen", this.NKmodalCheck);
  }
}
