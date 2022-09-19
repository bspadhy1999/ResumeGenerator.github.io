// work experience field
var weObj = document.getElementById("we");
document.querySelector("#we_remove_field").style.display = "none";
const addnewWE = () => {
  var newField = document.createElement("textarea");
  newField.setAttribute("type", "textarea");
  newField.setAttribute("class", "form-control weField mt-1");
  newField.setAttribute("placeholder", "Enter here");
  weObj.appendChild(newField);
  document.querySelector("#we_remove_field").style.display = "block";
};
const removeWE = () => {
  var wkArea_tag = weObj.getElementsByTagName("textarea");
  if (wkArea_tag.length > 1) {
    weObj.removeChild(wkArea_tag[wkArea_tag.length - 1]);
  }
  if (weObj.getElementsByTagName("textarea").length == 1) {
    document.querySelector("#we_remove_field").style.display = "none";
  }
};
// project field
var pjObj = document.getElementById("pj");
document.querySelector("#pj_remove_field").style.display = "none";
const addnewPJ = () => {
  var newField = document.createElement("textarea");
  newField.setAttribute("type", "textarea");
  newField.setAttribute("class", "form-control pjField mt-1");
  newField.setAttribute("placeholder", "Project Description\nProject Url");
  pjObj.appendChild(newField);
  document.querySelector("#pj_remove_field").style.display = "block";
};
const removePJ = () => {
  var pjArea_tag = pjObj.getElementsByTagName("textarea");
  if (pjArea_tag.length > 1) {
    pjObj.removeChild(pjArea_tag[pjArea_tag.length - 1]);
  }
  if (pjObj.getElementsByTagName("textarea").length == 1) {
    document.querySelector("#pj_remove_field").style.display = "none";
  }
};
// technical skill field
var tsObj = document.getElementById("ts");
document.querySelector("#ts_remove_field").style.display = "none";
const addnewTS = () => {
  var newField = document.createElement("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("class", "form-control tsField mt-1");
  newField.setAttribute("placeholder", "Enter here");
  tsObj.appendChild(newField);
  document.querySelector("#ts_remove_field").style.display = "block";
};
const removeTS = () => {
  var tsArea_tag = tsObj.getElementsByTagName("input");
  if (tsArea_tag.length > 1) {
    tsObj.removeChild(tsArea_tag[tsArea_tag.length - 1]);
  }
  if (tsObj.getElementsByTagName("input").length == 1) {
    document.querySelector("#ts_remove_field").style.display = "none";
  }
};
// educational qualification
let eqObj = document.getElementById("eq");
document.querySelector("#eq_remove_field").style.display = "none";
const addnewEQ = () => {
  var newField = document.createElement("textarea");
  newField.setAttribute("type", "textarea");
  newField.setAttribute("rows", "4");
  newField.setAttribute("class", "form-control eqField mt-1");
  newField.setAttribute(
    "placeholder",
    "Qualification with Stream (Year)\nCollege name,City\nUniversity,State\nScore - % or CGPA"
  );
  eqObj.appendChild(newField);
  document.querySelector("#eq_remove_field").style.display = "block";
};
const removeEQ = () => {
  var eqArea_tag = eqObj.getElementsByTagName("textarea");
  if (eqArea_tag.length > 1) {
    eqObj.removeChild(eqArea_tag[eqArea_tag.length - 1]);
  }
  if (eqObj.getElementsByTagName("textarea").length == 1) {
    document.querySelector("#eq_remove_field").style.display = "none";
  }
};
// award field
let awObj = document.getElementById("aw");
document.querySelector("#aw_remove_field").style.display = "none";
const addnewAW = () => {
  var newField = document.createElement("textarea");
  newField.setAttribute("type", "textarea");
  newField.setAttribute("class", "form-control awField mt-1");
  newField.setAttribute("placeholder", "Enter here");
  awObj.appendChild(newField);
  document.querySelector("#aw_remove_field").style.display = "block";
};
const removeAW = () => {
  var awArea_tag = awObj.getElementsByTagName("textarea");
  if (awArea_tag.length > 1) {
    awObj.removeChild(awArea_tag[awArea_tag.length - 1]);
  }
  if (awObj.getElementsByTagName("textarea").length == 1) {
    document.querySelector("#aw_remove_field").style.display = "none";
  }
};
//carricular activity field
let caObj = document.getElementById("ca");
document.querySelector("#ca_remove_field").style.display = "none";
const addnewCA = () => {
  var newField = document.createElement("textarea");
  newField.setAttribute("type", "textarea");
  newField.setAttribute("class", "form-control caField mt-1");
  newField.setAttribute("placeholder", "Enter here");
  caObj.appendChild(newField);
  document.querySelector("#ca_remove_field").style.display = "block";
};
const removeCA = () => {
  var caArea_tag = caObj.getElementsByTagName("textarea");
  if (caArea_tag.length > 1) {
    caObj.removeChild(caArea_tag[caArea_tag.length - 1]);
  }
  if (caObj.getElementsByTagName("textarea").length == 1) {
    document.querySelector("#ca_remove_field").style.display = "none";
  }
};
// language known field
let lkObj = document.getElementById("lk");
document.querySelector("#lk_remove_field").style.display = "none";
const addnewLK = () => {
  var newField = document.createElement("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("class", "form-control lkField mt-1");
  newField.setAttribute("placeholder", "Enter here");
  lkObj.appendChild(newField);
  document.querySelector("#lk_remove_field").style.display = "block";
};
const removeLK = () => {
  var lkArea_tag = lkObj.getElementsByTagName("input");
  if (lkArea_tag.length > 1) {
    lkObj.removeChild(lkArea_tag[lkArea_tag.length - 1]);
  }
  if (lkObj.getElementsByTagName("input").length == 1) {
    document.querySelector("#lk_remove_field").style.display = "none";
  }
};
// hobbies field
let hbObj = document.getElementById("hb");
document.querySelector("#hb_remove_field").style.display = "none";
const addnewHB = () => {
  var newField = document.createElement("input");
  newField.setAttribute("type", "text");
  newField.setAttribute("class", "form-control hbField mt-1");
  newField.setAttribute("placeholder", "Enter here");
  hbObj.appendChild(newField);
  document.querySelector("#hb_remove_field").style.display = "block";
};
const removeHB = () => {
  var hbArea_tag = hbObj.getElementsByTagName("input");
  if (hbArea_tag.length > 1) {
    hbObj.removeChild(hbArea_tag[hbArea_tag.length - 1]);
  }
  if (hbObj.getElementsByTagName("input").length == 1) {
    document.querySelector("#hb_remove_field").style.display = "none";
  }
};
function homePage() {
  document.querySelector("#cv-form").style.display = "block";
  document.querySelector("#processing-stage").style.display = "none";
  document.querySelector("#sucessful-stage").style.display = "none";
  document.querySelector("#cv-template").style.display = "none";
  document.querySelector("#message-submit").style.display = "none";
  document.querySelector("#footerF").style.display = "block";
  document.querySelector("#headerF").style.display = "block";
}
function submitMessage() {
  sendEmail();
  document.querySelector("#cv-form").style.display = "none";
  document.querySelector("#processing-stage").style.display = "none";
  document.querySelector("#sucessful-stage").style.display = "none";
  document.querySelector("#cv-template").style.display = "none";
  document.querySelector("#message-submit").style.display = "block";
  document.querySelector("#footerF").style.display = "none";
  document.querySelector("#headerF").style.display = "none";
}
function formReset() {
  let result = confirm("Are you sure to clear all field?");
  if (result) {
    let inputs = document.querySelectorAll("input");
    let textareas = document.querySelectorAll("textarea");
    let selectareas = document.querySelectorAll("select");
    let checkBoxArea = document.querySelectorAll("input[type='checkbox']");
    inputs.forEach((input) => (input.value = ""));
    textareas.forEach((textarea) => (textarea.value = ""));
    selectareas.forEach((select) => (select.value = ""));
    checkBoxArea.forEach((checkbox) => (checkbox.checked = false));
    var weObj = document.getElementById("we");
    var wkArea_tag = weObj.getElementsByTagName("textarea");
    while (wkArea_tag.length > 1) {
      weObj.removeChild(wkArea_tag[wkArea_tag.length - 1]);
    }
    var pjObj = document.getElementById("pj");
    var pjArea_tag = pjObj.getElementsByTagName("textarea");
    while (pjArea_tag.length > 1) {
      pjObj.removeChild(pjArea_tag[pjArea_tag.length - 1]);
    }
    var tsObj = document.getElementById("ts");
    var tsArea_tag = tsObj.getElementsByTagName("input");
    while (tsArea_tag.length > 1) {
      tsObj.removeChild(tsArea_tag[tsArea_tag.length - 1]);
    }
    var eqObj = document.getElementById("eq");
    var eqArea_tag = eqObj.getElementsByTagName("textarea");
    while (eqArea_tag.length > 1) {
      eqObj.removeChild(eqArea_tag[eqArea_tag.length - 1]);
    }
    var awObj = document.getElementById("aw");
    var awArea_tag = awObj.getElementsByTagName("textarea");
    while (awArea_tag.length > 1) {
      awObj.removeChild(awArea_tag[awArea_tag.length - 1]);
    }
    var caObj = document.getElementById("ca");
    var caArea_tag = caObj.getElementsByTagName("textarea");
    while (caArea_tag.length > 1) {
      caObj.removeChild(caArea_tag[caArea_tag.length - 1]);
    }
    var lkObj = document.getElementById("lk");
    var lkArea_tag = lkObj.getElementsByTagName("input");
    while (lkArea_tag.length > 1) {
      lkObj.removeChild(lkArea_tag[lkArea_tag.length - 1]);
    }
    var hbObj = document.getElementById("hb");
    var hbArea_tag = hbObj.getElementsByTagName("input");
    while (hbArea_tag.length > 1) {
      hbObj.removeChild(hbArea_tag[hbArea_tag.length - 1]);
    }
    document.querySelector("#lk_remove_field").style.display = "none";
    document.querySelector("#hb_remove_field").style.display = "none";
    document.querySelector("#we_remove_field").style.display = "none";
    document.querySelector("#pj_remove_field").style.display = "none";
    document.querySelector("#eq_remove_field").style.display = "none";
    document.querySelector("#aw_remove_field").style.display = "none";
    document.querySelector("#ca_remove_field").style.display = "none";
    document.querySelector("#ts_remove_field").style.display = "none";
    document.getElementById("warnF").innerHTML = "";
    document.getElementById("warnC").innerHTML = "";
    document.getElementById("warnE").innerHTML = "";
    document.getElementById("warnL").innerHTML = "";
    document.getElementById("warnP").innerHTML = "";
    document.getElementById("warnPJ").innerHTML = "";
    document.getElementById("warnT").innerHTML = "";
    document.getElementById("warnED").innerHTML = "";
  }
}
function printCV() {
  html2canvas(document.querySelector("#printToPDF")).then((canvas) => {
    let base64image = canvas.toDataURL("image/png");
    let pdf = new jsPDF("p", "px", [3508, 2480]);
    pdf.addImage(base64image, "PNG", 15, 15, 2480, 3508);
    pdf.save("My Resume.pdf");
  });
}
function previewCV() {
  document.querySelector("#cv-form").style.display = "none";
  document.querySelector("#processing-stage").style.display = "none";
  document.querySelector("#sucessful-stage").style.display = "none";
  document.querySelector("#cv-template").style.display = "block";
  document.querySelector("#printCvBtn").style.display = "none";
  document.querySelector("#homePageBtn").style.display = "block";
  document.querySelector("#footerF").style.display = "none";
  document.querySelector("#headerF").style.display = "none";
  let fnameObj = document.getElementById("fname").value;
  let fname1Obj = document.getElementById("fname1");
  fname1Obj.innerHTML = fnameObj;
  let lnameObj = document.getElementById("lname").value;
  let lname1Obj = document.getElementById("lname1");
  lname1Obj.innerHTML = lnameObj;
  let professionObj = document.getElementById("profession").value;
  let profession1Obj = document.getElementById("profession1");
  profession1Obj.innerHTML = professionObj;
  let contactObj = document.getElementById("contact").value;
  let contact1Obj = document.getElementById("contact1");
  contact1Obj.innerHTML = contactObj;
  let whatsappObj = document.getElementById("whatsapp").value;
  let whatsapp1Obj = document.getElementById("whatsapp1");
  whatsapp1Obj.innerHTML = whatsappObj;
  let emailObj = document.getElementById("email").value;
  let email1Obj = document.getElementById("email1");
  email1Obj.innerHTML = emailObj;
  let addressObj = document.getElementById("address").value;
  let address1Obj = document.getElementById("address1");
  address1Obj.innerHTML = addressObj;
  let linkedinObj = document.getElementById("linkedin").value;
  let linkedin1Obj = document.getElementById("linkedin1");
  linkedin1Obj.innerHTML = linkedinObj;
  let githubObj = document.getElementById("github").value;
  let github1Obj = document.getElementById("github1");
  github1Obj.innerHTML = githubObj;
  let dobObj = document.getElementById("dob").value;
  let dob1Obj = document.getElementById("dob1");
  dob1Obj.innerHTML = dobObj;
  let genderObj = document.getElementById("gender").value;
  let gender1Obj = document.getElementById("gender1");
  gender1Obj.innerHTML = genderObj;
  let categoryObj = document.getElementById("category").value;
  let category1Obj = document.getElementById("category1");
  category1Obj.innerHTML = categoryObj;
  let nationalityObj = document.getElementById("nationality").value;
  let nationality1Obj = document.getElementById("nationality1");
  nationality1Obj.innerHTML = nationalityObj;
  let religionObj = document.getElementById("religion").value;
  let religion1Obj = document.getElementById("religion1");
  religion1Obj.innerHTML = religionObj;
  let maritalstatusObj = document.getElementById("maritalstatus").value;
  let maritalstatus1Obj = document.getElementById("maritalstatus1");
  maritalstatus1Obj.innerHTML = maritalstatusObj;
  let objectiveObj = document.getElementById("objective").value;
  let objective1Obj = document.getElementById("objective1");
  objective1Obj.innerHTML = objectiveObj;

  let wk = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wk) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  let ts = document.getElementsByClassName("tsField");
  let tsStr = "";
  for (let e of ts) {
    tsStr = tsStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("tsT").innerHTML = tsStr;

  let lk = document.getElementsByClassName("lkField");
  let lkStr = "";
  for (let e of lk) {
    lkStr = lkStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("lkT").innerHTML = lkStr;

  let hb = document.getElementsByClassName("hbField");
  let hbStr = "";
  for (let e of hb) {
    hbStr = hbStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("hbT").innerHTML = hbStr;

  let eq = document.getElementsByClassName("eqField");
  let eqStr = "";
  for (let e of eq) {
    eqStr = eqStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("edT").innerHTML = eqStr;

  let pj = document.getElementsByClassName("pjField");
  let pjStr = "";
  for (let e of pj) {
    pjStr = pjStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("pjT").innerHTML = pjStr;

  let aw = document.getElementsByClassName("awField");
  let awStr = "";
  for (let e of aw) {
    awStr = awStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("awT").innerHTML = awStr;

  let ca = document.getElementsByClassName("caField");
  let caStr = "";
  for (let e of ca) {
    caStr = caStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("caT").innerHTML = caStr;

  let imgFile = document.getElementById("imgField").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(imgFile);
  reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
  };
}
function generateCV() {
  let fnameOb = document.getElementById("fname").value;
  let warnFObj = document.getElementById("warnF");
  let contactOb = document.getElementById("contact").value;
  let warnCObj = document.getElementById("warnC");
  let emailOb = document.getElementById("email").value;
  let warnEObj = document.getElementById("warnE");
  let languageOb = document.getElementById("language").value;
  let warnLObj = document.getElementById("warnL");
  let photoOb = document.getElementById("imgField").value;
  let warnPObj = document.getElementById("warnP");
  let projectOb = document.getElementById("project").value;
  let warnPJObj = document.getElementById("warnPJ");
  let skillOb = document.getElementById("skill").value;
  let warnTObj = document.getElementById("warnT");
  let educationOb = document.getElementById("qualification").value;
  let warnEDObj = document.getElementById("warnED");
  if (
    fnameOb === "" ||
    fnameOb == null ||
    contactOb === "" ||
    contactOb == 0 ||
    emailOb === "" ||
    emailOb == null ||
    languageOb === "" ||
    languageOb == null ||
    photoOb === "" ||
    photoOb == null ||
    projectOb === "" ||
    projectOb == null ||
    skillOb === "" ||
    skillOb == null ||
    educationOb === "" ||
    educationOb == null
  ) {
    if (fnameOb === "" || fnameOb == null) {
      warnFObj.innerHTML = "required";
    }
    if (contactOb === "" || contactOb == 0) {
      warnCObj.innerHTML = "required";
    }
    if (emailOb === "" || emailOb == null) {
      warnEObj.innerHTML = "required";
    }
    if (languageOb === "" || languageOb == null) {
      warnLObj.innerHTML = "required";
    }
    if (photoOb === "" || photoOb == null) {
      warnPObj.innerHTML = "required";
    }
    if (projectOb === "" || projectOb == null) {
      warnPJObj.innerHTML = "required";
    }
    if (skillOb === "" || skillOb == null) {
      warnTObj.innerHTML = "required";
    }
    if (educationOb === "" || educationOb == null) {
      warnEDObj.innerHTML = "required";
    }
    alert("Please make sure that all * fields are entered.");
    return;
  }
  if (!document.getElementById("checkBoxBtn").checked) {
    alert("Please Accept Terms and Condition");
    return;
  }
  document.querySelector("#cv-form").style.display = "none";
  document.querySelector("#processing-stage").style.display = "block";
  document.querySelector("#sucessful-stage").style.display = "none";
  document.querySelector("#cv-template").style.display = "none";
  document.querySelector("#footerF").style.display = "none";
  document.querySelector("#headerF").style.display = "none";
  setTimeout(() => {
    document.querySelector("#cv-form").style.display = "none";
    document.querySelector("#processing-stage").style.display = "none";
    document.querySelector("#sucessful-stage").style.display = "block";
    document.querySelector("#cv-template").style.display = "none";
  }, 3000);
  setTimeout(() => {
    document.querySelector("#cv-form").style.display = "none";
    document.querySelector("#processing-stage").style.display = "none";
    document.querySelector("#sucessful-stage").style.display = "none";
    document.querySelector("#cv-template").style.display = "block";
  }, 5000);
  let fnameObj = document.getElementById("fname").value;
  let fname1Obj = document.getElementById("fname1");
  fname1Obj.innerHTML = fnameObj;
  if (fnameObj.length > 15) {
    fname1Obj.style.fontSize = "20px";
  }
  let lnameObj = document.getElementById("lname").value;
  let lname1Obj = document.getElementById("lname1");
  lname1Obj.innerHTML = lnameObj;
  let professionObj = document.getElementById("profession").value;
  let profession1Obj = document.getElementById("profession1");
  profession1Obj.innerHTML = professionObj;
  let contactObj = document.getElementById("contact").value;
  let contact1Obj = document.getElementById("contact1");
  contact1Obj.innerHTML = contactObj;
  let whatsappObj = document.getElementById("whatsapp").value;
  let whatsapp1Obj = document.getElementById("whatsapp1");
  whatsapp1Obj.innerHTML = whatsappObj;
  let emailObj = document.getElementById("email").value;
  let email1Obj = document.getElementById("email1");
  email1Obj.innerHTML = emailObj;
  let addressObj = document.getElementById("address").value;
  let address1Obj = document.getElementById("address1");
  address1Obj.innerHTML = addressObj;
  let linkedinObj = document.getElementById("linkedin").value;
  let linkedin1Obj = document.getElementById("linkedin1");
  linkedin1Obj.innerHTML = linkedinObj;
  let githubObj = document.getElementById("github").value;
  let github1Obj = document.getElementById("github1");
  github1Obj.innerHTML = githubObj;
  let dobObj = document.getElementById("dob").value;
  let dob1Obj = document.getElementById("dob1");
  dob1Obj.innerHTML = dobObj;
  let genderObj = document.getElementById("gender").value;
  let gender1Obj = document.getElementById("gender1");
  gender1Obj.innerHTML = genderObj;
  let categoryObj = document.getElementById("category").value;
  let category1Obj = document.getElementById("category1");
  category1Obj.innerHTML = categoryObj;
  let nationalityObj = document.getElementById("nationality").value;
  let nationality1Obj = document.getElementById("nationality1");
  nationality1Obj.innerHTML = nationalityObj;
  let religionObj = document.getElementById("religion").value;
  let religion1Obj = document.getElementById("religion1");
  religion1Obj.innerHTML = religionObj;
  let maritalstatusObj = document.getElementById("maritalstatus").value;
  let maritalstatus1Obj = document.getElementById("maritalstatus1");
  maritalstatus1Obj.innerHTML = maritalstatusObj;
  let objectiveObj = document.getElementById("objective").value;
  let objective1Obj = document.getElementById("objective1");
  objective1Obj.innerHTML = objectiveObj;

  let wk = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wk) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  let ts = document.getElementsByClassName("tsField");
  let tsStr = "";
  for (let e of ts) {
    tsStr = tsStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("tsT").innerHTML = tsStr;

  let lk = document.getElementsByClassName("lkField");
  let lkStr = "";
  for (let e of lk) {
    lkStr = lkStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("lkT").innerHTML = lkStr;

  let hb = document.getElementsByClassName("hbField");
  let hbStr = "";
  for (let e of hb) {
    hbStr = hbStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("hbT").innerHTML = hbStr;

  let eq = document.getElementsByClassName("eqField");
  let eqStr = "";
  for (let e of eq) {
    eqStr = eqStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("edT").innerHTML = eqStr;

  let pj = document.getElementsByClassName("pjField");
  let pjStr = "";
  for (let e of pj) {
    pjStr = pjStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("pjT").innerHTML = pjStr;

  let aw = document.getElementsByClassName("awField");
  let awStr = "";
  for (let e of aw) {
    awStr = awStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("awT").innerHTML = awStr;

  let ca = document.getElementsByClassName("caField");
  let caStr = "";
  for (let e of ca) {
    caStr = caStr + `<li> ${e.value} </li>`;
  }
  document.getElementById("caT").innerHTML = caStr;

  let imgFile = document.getElementById("imgField").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(imgFile);
  reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
  };
}
function sendEmail() {
  Email.send({
    SecureToken: "16119a05-c152-4a53-b75e-0373ac68534d",
    To: "bspadhy1999@gmail.com",
    From: document.getElementById("senderEmail").value,
    Subject: "Message from Resume Generator Website",
    Body:
      "Name: " +
      document.getElementById("senderName").value +
      "<br> Email: " +
      document.getElementById("senderEmail").value +
      "<br> Contact: " +
      document.getElementById("senderContact").value +
      "<br> Message: " +
      document.getElementById("senderMessage").value,
  }).then((message) => alert("Your Message has been sent."));
}
let dark = document.getElementById("dark");
dark.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    dark.src = "media/sun.png";
  } else {
    dark.src = "media/moon.png";
  }
};
