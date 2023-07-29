// New Approch by me///////


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


/////////////////////// main card add function //////////////////

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

  var blankmessage = document.getElementById("blankmessage");

  newcard.appendChild(heading);
  newcard.appendChild(hrline);
  newcard.appendChild(itemlist);
  newcard.appendChild(hrlinelist);
  newcard.appendChild(buttonadd);
  newcard.appendChild(buttonremove);

  blankmessage.classList.add("blankmessagehide");
  //heading.setAttribute("onclick", "backpagefunction()");
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


  /////////////// add item popup start ///////////

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
    var cardheading2 = document.getElementById("cardheading2");
    cardheading2.innerText = "";
    newcard.remove();
  });

  document.getElementById("cardheading").value = "";
  removepopup();


  //////////////////////////////////////     for next page function start   /////////////////////////////////////////

  heading.addEventListener("click", function () {
      var tasklist = document.getElementById("tasklist");
      var additemtext = document.getElementById("additemtext");
      var cardheading2 = document.getElementById("cardheading2");
      var flexcontainer = document.getElementById("flexcontainer");
      var itemcarddiv = document.getElementById("itemcarddiv");
      var backbutton = document.getElementById("backthis");
      var flexconthide = document.getElementById("flexconthide");

      flexconthide.classList.add("hide");
      backbutton.classList.remove("hide");
      tasklist.classList.add("hide");
      additemtext.classList.add("hide");
      flexcontainer.classList.add("hide");
      itemcarddiv.classList.remove("hide");
      cardheading2.classList.remove("hide");

      cardheading2.innerText = heading.innerHTML;

      itemcarddiv.appendChild(newcard);
  });

  var backthis = document.getElementById("backthis");

  backthis.addEventListener("click", function (){
    var tasklist = document.getElementById("tasklist");
      var additemtext = document.getElementById("additemtext");
      var cardheading2 = document.getElementById("cardheading2");
      var flexcontainer = document.getElementById("flexcontainer");
      var itemcarddiv = document.getElementById("itemcarddiv");
      var backbutton = document.getElementById("backthis");
      var flexconthide = document.getElementById("flexconthide");

      flexconthide.classList.remove("hide");
      backbutton.classList.add("hide");
      tasklist.classList.remove("hide");
      additemtext.classList.remove("hide");
      flexcontainer.classList.remove("hide");
      cardheading2.classList.add("hide");
      itemcarddiv.classList.add("hide");
      itemcarddiv.innerHTML = "";
      container.appendChild(newcard);

  });

  //////////////////////////////   for next page function end   ///////////////////////////
}

function itemaddnew(itemlist) {

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
