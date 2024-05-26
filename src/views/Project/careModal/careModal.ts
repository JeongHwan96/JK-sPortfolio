import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class careModalComponent extends Vue {
  modalCheck: boolean = false;

  modalOpen() {
    this.$emit("sendmodalOpen", this.modalCheck);
  }
}
