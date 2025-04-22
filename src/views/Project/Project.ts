import Vue from "vue";
import { Component } from "vue-property-decorator";
import Header from "../../components/Header.vue";
import CareModal from "../Project/careModal/careModal.vue";
import ManagerModal from "../Project/managerModal/ManagerModal.vue";
import EVD007SLModal from "../Project/EVD007SL-NK/EVD007SL-NK_Modal.vue";
@Component({
  components: { Header, CareModal, ManagerModal, EVD007SLModal },
})
export default class ProjectComponent extends Vue {
  // e-centric care
  isShow: boolean = false;
  caremodalcheck: boolean = false;
  // e-centric manager
  isManagerShow: boolean = false;
  managermodalcheck: boolean = false;
  //EVD007SL-NK
  isEVD007SLNKShow: boolean = false;
  EVD007SLNKmodalcheck: boolean = false;
  careModalOpen() {
    this.isShow = true;
    this.caremodalcheck = true;
  }

  managerModalOpen() {
    this.isManagerShow = true;
    this.managermodalcheck = true;
  }
  SLNKModalOpen() {
    this.isEVD007SLNKShow = true;
    this.EVD007SLNKmodalcheck = true;
  }

  getModaldata(caremodalcheck: boolean) {
    this.caremodalcheck = caremodalcheck;
    this.isShow = false;
  }

  getmanagerModaldata(managermodalcheck: boolean) {
    this.managermodalcheck = managermodalcheck;
    this.isManagerShow = false;
  }
}
