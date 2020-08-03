let app = new Vue({
  el: "#app",
  data() {
    return {
      post: {
        surname: "",
        firstname: "",
        patronymic: "",
        birthday: "",
        tel: "",
        sex: "",
        group: "",
        doctor: "",
        sms: "",
        index: "",
        country: "",
        district: "",
        city: "",
        street: "",
        build: "",
        doctype: "",
        documentSerie: "",
        documentNum: "",
        issue: "",
        IssueDate: "",
      },
      btn: "Отправить",
      touched: {
        surname: false,
        firstname: false,
        patronymic: false,
        birthday: false,
        tel: false,
        sex: false,
        group: false,
        doctor: false,
        index: false,
        country: false,
        district: false,
        city: false,
        street: false,
        build: false,
        doctype: false,
        documentSerie: false,
        documentNum: false,
        issue: false,
        IssueDate: false,
      },
      errors: [],
    };
  },
  methods: {
    validation: () => {
      if (this.errors.length) {
        console.log("иля" + this.errors.legth);
      }
    },
  },

  computed: {
    invalidSurname() {
      let invalidData = false;
      if (this.post.surname.length < 3 || this.post.surname.length > 5) {
        invalidData = true;
      }
      if (invalidData == true && this.touched.surname == true) {
        this.errors.push("bad surname");
        return true;
      }
    },
    invalidFirstname() {
      let invalidData = false;
      if (this.post.firstname.length < 2 || this.post.firstname.length > 15) {
        invalidData = true;
      }
      if (invalidData == true && this.touched.firstname == true) {
        this.errors.push("bad firstname");
        return true;
      }
    },
    invalidPatronymic() {
      let invalidData = false;
      if (this.post.patronymic.length < 3 || this.post.patronymic.length > 15) {
        invalidData = true;
      }
      if (
        this.post.patronymic != "" &&
        invalidData == true &&
        this.touched.patronymic == true
      ) {
        return true;
      }
    },
    invalidBirthday() {
      let invalidData = false;
      if (
        post.birthdaythis.post.birthday.length < 3 ||
        this.post.birthday.length > 15
      ) {
        invalidData = true;
      }
      if (invalidData == true && this.touched.birthday == true) {
        return true;
      }
    },
    invalidTel() {
      let invalidData = false;
      if (this.post.tel.length < 12) {
        invalidData = true;
      }
      if (invalidData == true && this.touched.tel == true) {
        return true;
      }
    },
    invalidSex() {
      if (this.post.sex == "") return false; // не забыть поправить!
    },
    invalidGroup() {
      return false;
    },
    invalidDoctor() {
      return false;
    },
    invalidIndex() {
      let invalidData = false;
      if (this.post.index.length > 6 || this.post.index.length < 6) {
        invalidData = true;
      }
      if (
        this.post.index != "" &&
        invalidData == true &&
        this.touched.index == true
      ) {
        return true;
      }
    },
    invalidCountry() {
      let invalidData = false;
      if (this.post.country.length < 3 || this.post.country.length > 15) {
        invalidData = true;
      }
      if (
        this.post.country != "" &&
        invalidData == true &&
        this.touched.country == true
      ) {
        return true;
      }
    },
    invalidDistrict() {
      let invalidData = false;
      if (this.post.district.length < 3 || this.post.district.length > 15) {
        invalidData = true;
      }
      if (
        this.post.district != "" &&
        invalidData == true &&
        this.touched.district == true
      ) {
        return true;
      }
    },
    invalidCity() {
      let invalidData = false;
      if (this.post.city.length < 3 || this.post.city.length > 15) {
        invalidData = true;
      }
      if (invalidData == true && this.touched.city == true) {
        return true;
      }
    },
    invalidStreet() {
      let invalidData = false;
      if (this.post.street.length < 3 || this.post.street.length > 15) {
        invalidData = true;
      }
      if (
        this.post.street != "" &&
        invalidData == true &&
        this.touched.street == true
      ) {
        return true;
      }
    },
    invalidBuild() {
      let invalidData = false;
      if (this.post.build < 1 || this.post.build.length > 15) {
        invalidData = true;
      }
      if (
        this.post.build != "" &&
        invalidData == true &&
        this.touched.build == true
      ) {
        return true;
      }
    },
    invalidDoctype() {
      return false;
    },
    invalidDocumentSerie() {
      let invalidData = false;
      if (
        this.post.documentSerie.length < 2 ||
        this.post.documentSerie.length > 6
      ) {
        invalidData = true;
      }
      if (
        this.post.documentSerie != "" &&
        invalidData == true &&
        this.touched.documentSerie == true
      ) {
        return true;
      }
    },
    invalidDocumentNum() {
      let invalidData = false;
      if (
        this.post.documentNum.length < 3 ||
        this.post.documentNum.length > 10
      ) {
        invalidData = true;
      }
      if (
        this.post.documentNum != "" &&
        invalidData == true &&
        this.touched.documentNum == true
      ) {
        return true;
      }
    },
    invalidIssue() {
      let invalidData = false;
      if (this.post.issue.length < 4 || this.post.issue.length > 35) {
        invalidData = true;
      }
      if (
        this.post.issue != "" &&
        invalidData == true &&
        this.touched.issue == true
      ) {
        return true;
      }
    },
    invalidIssueDate() {
      return false;
    },
  },
});
