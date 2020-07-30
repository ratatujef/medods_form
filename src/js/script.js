let app = new Vue({
    el: '#app',
    data: {
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
      country:"",
      district:"",
      city:"",
      street:"",
      build:"",
      doctype:"",
      documentSerie:"",
      documentNum:"",
      issue:"",
      IssueDate:"",
      btn:"Отправить",
      errors:{ 
        surname: "",
        // firstname: "",
        // patronymic: "",
        // date: "",
        // tel: "",
        // sex: "",
        // group: "",
        // doctor: "",
        // sms: "",
        // index: "",
        // country:"",
        // district:"",
        // city:"",
        // street:"",
        // build:"",
        // doctype:"",
        // documentSerie:"",
        // documentNum:"",
        // issue:"",
        // IssueDate:"",


        
      },
    },
    methods: {
      validate: function(){
        for(let i =0; i<this.errors.length;i++){
          console.log(this.errors[i]);
          this.errors[i]="";
        }
        // if (this.surname.length<3||this.surname.length>15||this.surname==""||this.surname==null){
        //    this.errors.surname="Введите правильную фамилию";
        //   } 
        // if (this.firstname.length<3||this.firstname.length>15||this.firstname==""||this.firstname==null){
        //   this.errors.firstname=("Введите правильное имя");
        //   }
        
        // if (this.patronymic.length<3||this.patronymic.length>15||this.patronymic==""){
        //     this.errors.patronymic = "Введите правильное отчество";
        //   }
        // if (this.tel==""){
        //   this.errors.tel="Проверьте номер телефона"; 
        // } 
        // if (this.group==""){
        //   this.errors.group="Выберите группу клиентов";
        // }
        // if (this.birtday==null){
        //   this.errors.date="Введите дату рождения!";
        //   }
        // if (this.sex==""){
        //   this.errors.sex="Выберите пол";
        // }
        // if (this.index.length!=6){
        //   this.errors.index="Проверьте ваш индекс";}
        // if (this.country.length<3||this.country.length>15){
        //   this.errors.country=("Проверьте введенные данные");
        //     }
        // if (this.district.length<3||this.district.length>15){
        //   this.errors.district=("Проверьте введенные данные");
        //     }
        // if (this.city.length<3||this.city.length>15||this.city==""||this.city==null){
        //   this.errors.city=("Проверьте введенные данные");
        //     }
        // if (this.street.length<3||this.street.length>25){
        //   this.errors.street=("Проверьте введенные данные");
        //     }
        // if (this.build.length<3||this.build.length>10){
        //   this.errors.build=("Проверьте введенные данные");
        //     }
        // if (this.doctype==""){
        //   this.errors.doctype="Выберите тип документа";
        //     }
        // if (this.documentNum.length<4||this.documentNum.length>10){
        //   this.errors.documentNum="Проверьте введенные данные";
        //     }
        // if (this.documentSerie.length<4||this.documentSerie.length>10){
        //   this.errors.documentSerie="Проверьте введенные данные";
        //     }
        // if (this.issue.length<4||this.issue.length>30){
        //   this.errors.issue="Проверьте введенные данные";
        //     }
        // if (this.issueDate==null){
        //   this.errors.issueDate="Проверьте введенные данные";
        //     }
        

        
      },
      // validPhone: function(tel){
      //   let ph= this.value.replace(/\D/g,'').match(/(".+")(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
      // }
    },
  });   
  // Vue.directive('phone', {
  //   bind(el) {  
  //     el.oninput = function(e) {
  //       if (!e.isTrusted) {
  //         return;
  //       }
  
  //       let x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  //       this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  //       el.dispatchEvent(new Event('input'));
  //     }
  //   }
  // });           