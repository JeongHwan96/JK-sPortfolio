import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ManagerModalComponent extends Vue {
  managermodalCheck: boolean = false;

  managermodalOpen() {
    this.$emit("sendmanagermodalOpen", this.managermodalCheck);
  }
}
