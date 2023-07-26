
// // // const AddPopupBox = document.getElementById("popup");
// // // const container = document.getElementById("flexcontainer");
// // // const cardheading = document.getElementById("cardheading");
// // // let cardID = 0;

// // // function addpopup() {
// // //   AddPopupBox.classList.remove("hide");
// // //   var blurcard = document.getElementById("blurcard");

// // //   blurcard.classList.add("perent");
// // // }

// // // function removepopup() {
// // //   AddPopupBox.classList.add("hide");
// // //   var blurcard = document.getElementById("blurcard");

// // //   blurcard.classList.remove("perent");
// // // }

// // // function addcard() {
// // //   cardID++;
// // //   var newcard = document.createElement("div");
// // //   var heading = document.createElement("h2");
// // //   var hrline = document.createElement("hr");
// // //   var itemlist = document.createElement("div");
// // //   var hrlinelist = document.createElement("hr");
// // //   var buttonadd = document.createElement("button");
// // //   var buttonremove = document.createElement("div");

// // //   newcard.appendChild(heading);
// // //   newcard.appendChild(hrline);
// // //   newcard.appendChild(itemlist);
// // //   newcard.appendChild(hrlinelist);
// // //   newcard.appendChild(buttonadd);
// // //   newcard.appendChild(buttonremove);

// // //   newcard.setAttribute("id", cardID);
// // //   container.appendChild(newcard);

// // //   itemlist.classList.add("itemlist");
// // //   newcard.classList.add("card");
// // //   buttonadd.classList.add("buttonadd");
// // //   buttonremove.classList.add("buttonremove");

// // //   var delicon = document.createElement("img");
// // //   buttonremove.appendChild(delicon);
// // //   delicon.src = "./delete_icon.png";
// // //   delicon.classList.add("delicon");

// // //   buttonadd.addEventListener("click",function(){
// // //     itempopup2("itemlist");
// // //     var blurcard = document.getElementById("blurcard");

// // //     blurcard.classList.add("perent");
// // //   })

// // //   heading.innerHTML = cardheading.value;
// // //   buttonadd.innerHTML = "+";
// // //   //buttonremove.innerHTML = "Delete";

// // //   buttonremove.addEventListener("click", function () {
// // //     newcard.remove();
// // //   });


// // // /////////////// Add and hide ItemPopup Box Start ///////////////

// // //   // const AddItempopup = document.getElementById("itempopup");

// // //   // buttonadd.addEventListener("click", function () {
// // //     // AddItempopup.classList.remove("hide");
// // //     // var blurcard = document.getElementById("blurcard");

// // //     // blurcard.classList.add("perent");
// // //   // });

// // //   // buttonremove.addEventListener("click", function () {
// // //   //   AddItempopup.classList.add("hide");
// // //   //   var blurcard = document.getElementById("blurcard");

// // //   //   blurcard.classList.remove("perent");
// // //   // });

// // //   document.getElementById("cardheading").value = "";
// // //   removepopup();
// // // }

// // // //////////Item Popup for add items /////////////

// // // function itempopup2(itemlist){
// // //   var itemdiv = document.createElement("div");
// // //   var itemheading = document.createElement("h1");
// // //   var iteminput = document.createElement("input");
// // //   var itemdelbtn = document.createElement("button");
// // //   var itemaddbtn = document.createElement("button");

// // //   itemdiv.classList.add("itempopupbox");
// // //   //itemdiv.classList.add("hide");
// // //   iteminput.classList.add("iteminput");
// // //   itemdelbtn.classList.add("btn");
// // //   itemaddbtn.classList.add("btn");

// // //   iteminput.textContent = "Add New Item";
// // //   itemdelbtn.innerHTML = "Delete";
// // //   itemaddbtn.innerHTML = "Add";
// // // }





// // // /////////////// Add and hide ItemPopup Box End ///////////////


// // // // function removeitempopup() {
// // // //   const AddItempopup = document.getElementById("itempopup");
// // // //   AddItempopup.classList.add("hide");
// // // //   var blurcard = document.getElementById("blurcard");
// // // //   blurcard.classList.remove("perent");
// // // // }

// // // //const itempopup2 = document.getElementById("itempopup");

// // // // function additem( ){
// // // //     var itemlist = document.querySelector(".itemlist");
// // // //     var newItemdiv = document.createElement("div");
// // // //     var newItem = document.createElement("p");
// // // //     var itemmarkbtn = document.createElement("button");
// // // //     var itemheading = document.getElementById("itemheading");
// // // //     newItem.textContent = itemheading.value;
// // // //     itemmarkbtn.innerHTML= "Mark Item"

// // // //     itemlist.appendChild(newItemdiv);
// // // //     newItemdiv.appendChild(newItem);
// // // //     newItemdiv.appendChild(itemmarkbtn);
// // // //     itemmarkbtn.classList.add("markbtn");

// // // //     document.getElementById("itemheading").value = "";
// // // //     removeitempopup()

// // // //     itemmarkbtn.addEventListener("click", function () {
// // // //       newItem.classList.add("cutelement");
// // // //       itemmarkbtn.classList.add("markbtnhide");
// // // //       itemmarkbtn.classList.remove("markbtn");
// // // //       newItem.classList.add("afterclickp");
// // // //     });
// // // // }


////////////// again solve all problem by sir approach /////////////

const AddPopupBox = document.getElementById("popup");
const container = document.getElementById("flexcontainer");
const cardheading = document.getElementById("cardheading");
const cardheading2 = document.getElementById("cardheading2");
const alldiv = document.getElementById("alldiv1");
var cardID = 0;
let ItemId = 0;
let AddBtnID = 0;

function addpopup() {
  AddPopupBox.classList.remove("hide");
  var blurcard = document.getElementById("blurcard");
  blurcard.classList.add("perent");
}

function removepopup() {
  AddPopupBox.classList.add("hide");
  var blurcard = document.getElementById("blurcard");
  blurcard.classList.remove("perent");
}

function addcard() {
  cardID++;
  ItemId++;
  AddBtnID++;
  var newcard = document.createElement("div");
  var heading = document.createElement("h2");
  var hrline = document.createElement("hr");
  var itemlist = document.createElement("div");
  var hrlinelist = document.createElement("hr");
  var buttonadd = document.createElement("button");
  var buttonremove = document.createElement("div");

  newcard.appendChild(heading);
  newcard.appendChild(hrline);
  newcard.appendChild(itemlist);
  newcard.appendChild(hrlinelist);
  newcard.appendChild(buttonadd);
  newcard.appendChild(buttonremove);

  heading.setAttribute("onclick", "backpagefunction()");
  newcard.setAttribute("id", cardID);
  itemlist.setAttribute("id", ItemId);
  buttonadd.setAttribute("id", AddBtnID);
  container.appendChild(newcard);

  itemlist.classList.add("itemlist");
  newcard.classList.add("card");
  buttonadd.classList.add("buttonadd");
  buttonremove.classList.add("buttonremove");

  var delicon = document.createElement("img");
  buttonremove.appendChild(delicon);
  delicon.src = "./delete_icon.png";
  delicon.classList.add("delicon");

  buttonadd.addEventListener("click", function () {
    var blurcard = document.getElementById("blurcard");
    blurcard.classList.add("perent");
    itempopup2();
  });

  function itempopup2() {
    var itemdiv = document.createElement("div");
    var itemheading = document.createElement("h1");
    var inputdiv = document.createElement("div");
    var iteminput = document.createElement("input");
    var itemdelbtn = document.createElement("button");
    var itemaddbtn = document.createElement("button");


    itemdiv.classList.add("itempopupbox");
    iteminput.classList.add("iteminput");
    itemdelbtn.classList.add("btn");
    itemdelbtn.classList.add("btnitemdel");
    itemaddbtn.classList.add("btn");
    itemaddbtn.classList.add("btnitemadd");

    itemdiv.setAttribute("id", 'itempop2');
    iteminput.setAttribute("id", 'itemadding');
    iteminput.setAttribute("placeholder", 'Add New Item')

    itemheading.textContent = "Add New Item";
    itemdelbtn.innerHTML = "close";
    itemaddbtn.innerHTML = "Add";

    itemheading.style.fontSize = "26px"

    alldiv.appendChild(itemdiv);
    inputdiv.appendChild(iteminput);
    itemdiv.appendChild(itemheading);
    itemdiv.appendChild(inputdiv);
    itemdiv.appendChild(itemdelbtn);
    itemdiv.appendChild(itemaddbtn);

    itemdelbtn.addEventListener("click", function () {
      itemdiv.remove();
      var blurcard = document.getElementById("blurcard");
      blurcard.classList.remove("perent");
    })

    function removeItemDiv() {
      itemdiv.remove();
      var blurcard = document.getElementById("blurcard");
      blurcard.classList.remove("perent");
    }

    var itemadding = document.getElementById("itemadding");

    itemaddbtn.addEventListener("click", function () {
      itemaddnew(itemlist);
    })
    
    itemaddbtn.addEventListener("click", function () {
      itemdiv.remove();
      var blurcard = document.getElementById("blurcard");
      blurcard.classList.remove("perent");
  });

  }

  heading.innerHTML = cardheading.value;
  buttonadd.innerHTML = "+";

  buttonremove.addEventListener("click", function () {
    newcard.remove();
  });

  document.getElementById("cardheading").value = "";
  removepopup();


  ////for next page function

  // heading.addEventListener("click", function () {
  //   backpagefunction(newcard);
  // });
  heading.addEventListener("click", backpagefunction);

}

function itemaddnew(itemlist) {
  // var itemlist = document.querySelector(".itemlist");
  var newItemdiv = document.createElement("div");
  var newItem = document.createElement("p");
  var itemmarkbtn = document.createElement("button");

  newItem.textContent = itemadding.value;
  itemmarkbtn.innerHTML = "Mark Item"

  itemlist.appendChild(newItemdiv);
  newItemdiv.appendChild(newItem);
  newItemdiv.appendChild(itemmarkbtn);
  itemmarkbtn.classList.add("markbtn");

  document.getElementById("itemadding").value = "";

  itemmarkbtn.addEventListener("click", function () {
    newItem.classList.add("cutelement");
    itemmarkbtn.classList.add("markbtnhide");
    itemmarkbtn.classList.remove("markbtn");
    newItem.classList.add("afterclickp");
  })

}

///////////// For Saperate page ///////////////
// function backpagefunction(){
//     var alldiv1hide = document.getElementById("alldiv1");
//     var newbackdiv = document.getElementById("sapratediv");
//     var cardheading2 = document.getElementById("cardheading2");

//     alldiv1hide.classList.add("alldivhide");
//     newbackdiv.classList.add("sapratedivshow");
//     newbackdiv.classList.remove("sapratedivhide");

//     cardheading2.innerText = cardheading.innerHTML;
// }
// ... Existing code ...

function backpagefunction(event) {
  var alldiv1hide = document.getElementById("alldiv1");
  var newbackdiv = document.getElementById("sapratediv");
  var cardheading2 = document.getElementById("cardheading2");
  var singlecard = document.getElementById("itemcarddiv");

  alldiv1hide.classList.add("alldivhide");
  newbackdiv.classList.remove("sapratedivhide");

  
  cardheading2.innerText = event.target.innerHTML;
  singlecard.appendChild(newcard);
}

function backthis(){
  var alldiv1hide = document.getElementById("alldiv1");
  var newbackdiv = document.getElementById("sapratediv");

  alldiv1hide.classList.remove("alldivhide");
  newbackdiv.classList.add("sapratedivhide");
}