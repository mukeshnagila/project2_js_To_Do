
const AddPopupBox = document.getElementById("popup");
const container = document.getElementById("flexcontainer");
const cardheading = document.getElementById("cardheading");
let cardID = 0;

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

  newcard.setAttribute("id", cardID);
  container.appendChild(newcard);

  itemlist.classList.add("itemlist");
  newcard.classList.add("card");
  buttonadd.classList.add("buttonadd");
  buttonremove.classList.add("buttonremove");

  var delicon = document.createElement("img");
  buttonremove.appendChild(delicon);
  delicon.src = "./delete_icon.png";
  delicon.classList.add("delicon");

  heading.innerHTML = cardheading.value;
  buttonadd.innerHTML = "+";
  //buttonremove.innerHTML = "Delete";

  buttonremove.addEventListener("click", function () {
    newcard.remove();
  });


/////////////// Add and hide ItemPopup Box Start ///////////////

  const AddItempopup = document.getElementById("itempopup");

  buttonadd.addEventListener("click", function () {
    AddItempopup.classList.remove("hide");
    var blurcard = document.getElementById("blurcard");

    blurcard.classList.add("perent");
  });

  buttonremove.addEventListener("click", function () {
    AddItempopup.classList.add("hide");
    var blurcard = document.getElementById("blurcard");

    blurcard.classList.remove("perent");
  });

  document.getElementById("cardheading").value = "";
  removepopup();
}
/////////////// Add and hide ItemPopup Box End ///////////////


function removeitempopup() {
  const AddItempopup = document.getElementById("itempopup");
  AddItempopup.classList.add("hide");
  var blurcard = document.getElementById("blurcard");
  blurcard.classList.remove("perent");
}

const itempopup2 = document.getElementById("itempopup");

function additem( ){
    var itemlist = document.querySelector(".itemlist");
    var newItemdiv = document.createElement("div");
    var newItem = document.createElement("p");
    var itemmarkbtn = document.createElement("button");
    var itemheading = document.getElementById("itemheading");
    newItem.textContent = itemheading.value;
    itemmarkbtn.innerHTML= "Mark Item"

    itemlist.appendChild(newItemdiv);
    newItemdiv.appendChild(newItem);
    newItemdiv.appendChild(itemmarkbtn);
    itemmarkbtn.classList.add("markbtn");

    document.getElementById("itemheading").value = "";
    removeitempopup()

    itemmarkbtn.addEventListener("click", function () {
      newItem.classList.add("cutelement");
      itemmarkbtn.classList.add("markbtnhide");
      itemmarkbtn.classList.remove("markbtn");
      newItem.classList.add("afterclickp");
    });
}

