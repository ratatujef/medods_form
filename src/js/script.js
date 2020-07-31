
let app = new Vue({
    el: '#app',
    data(){
      return {
        post:{
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
          IssueDate:"",},
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
        errors:[],         
     };
    },
    methods: {
    validation:()=>{
      if(this.invalidSurname||this.invalidFirstname){
        alert('бля!');
      }
    },
     },
    
    computed: {
      
     
      invalidSurname(){
        let invalidData=false;
        if (this.post.surname.length<3||this.post.surname.length>5){
          invalidData=true;
        }
        if (invalidData==true&&this.touched.surname==true){
          return true;}
        },
        invalidFirstname(){
        let invalidData=false;
        if (this.post.firstname.length<2||this.post.firstname.length>15){
          invalidData=true;
        }
        if (invalidData==true&&this.touched.firstname==true){
          return true;
        }
        },
      invalidPatronymic(){
        let invalidData=false;
        if (this.post.patronymic.length<3||this.post.patronymic.length>15){
          invalidData=true;
        }
        if (this.post.patronymic!=""&&invalidData==true&&this.touched.patronymic==true){
          return true;}
        },
      invalidBirthday(){
        let invalidData=false;
        if (post.birthdaythis.post.birthday.length<3||this.post.birthday.length>15){
          invalidData=true;
        }
        if (invalidData==true&&this.touched.birthday==true){
          return true;}
      },
      invalidTel(){
          let invalidData=false;
          if(this.post.tel.length<12){
            invalidData=true;
          }
          if (invalidData==true&&this.touched.tel==true){
            return true;
          }
        
        },
        invalidSex(){
          if(this.post.sex=="")
          return false;// не забыть поправить!
        },
        invalidGroup(){
          return false;
        },
        invalidDoctor(){
          return false;
        },
        invalidIndex(){
          let invalidData=false;
          if(this.post.index.length>6||this.post.index.length<6){
            invalidData=true;
          }
          if(this.post.index!=""&&invalidData==true&&this.touched.index==true){
          return true;}
        },
        invalidCountry(){
          let invalidData=false;
          if (this.post.country.length<3||this.post.country.length>15){
            invalidData=true;
          }
          if (this.post.country!=""&&invalidData==true&&this.touched.country==true){
            return true;}
        },
        invalidDistrict(){
          let invalidData=false;
          if (this.post.district.length<3||this.post.district.length>15){
            invalidData=true;
          }
          if (this.post.district!=""&&invalidData==true&&this.touched.district==true){
            return true;}
        },
        invalidCity(){
          let invalidData=false;
          if (this.post.city.length<3||this.post.city.length>15){
            invalidData=true;
          }
          if (invalidData==true&&this.touched.city==true){
            return true;}
        },
        invalidStreet(){
          let invalidData=false;
          if (this.post.street.length<3||this.post.street.length>15){
            invalidData=true;
          }
          if (this.post.street!=""&&invalidData==true&&this.touched.street==true){
            return true;}
        },
        invalidBuild(){
          let invalidData=false;
        if (this.post.build<1||this.post.build.length>15){
          invalidData=true;
        }
        if (this.post.build!=""&&invalidData==true&&this.touched.build==true){
          return true;}
        },
        invalidDoctype(){
          return false;
        },
        invalidDocumentSerie(){
          let invalidData=false;
        if (this.post.documentSerie.length<2||this.post.documentSerie.length>6){
          invalidData=true;
        }
        if (this.post.documentSerie!=""&&invalidData==true&&this.touched.documentSerie==true){
          return true;}
        },
        invalidDocumentNum(){
          let invalidData=false;
        if (this.post.documentNum.length<3||this.post.documentNum.length>10){
          invalidData=true;
        }
        if (this.post.documentNum!=""&&invalidData==true&&this.touched.documentNum==true){
          return true;}  
        },
        invalidIssue(){
          let invalidData=false;
          if (this.post.issue.length<4||this.post.issue.length>35){
            invalidData=true;
          }
          if (this.post.issue!=""&&invalidData==true&&this.touched.issue==true){
            return true;}  
        },
        invalidIssueDate(){
          return false;
        },

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
        // if (post.this.group==""){
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