window.addEventListener("load", solve);

function solve() {
  //extract html elements
  let snowmanNameElement = document.getElementById("snowman-name");
  let snowmanHeightElement = document.getElementById("snowman-height");
  let locationElement = document.getElementById("location");
  let creatorNameElement = document.getElementById("creator-name");
  let attributeElement = document.getElementById("special-attribute");

  let addbtnElement = document.querySelector(".add-btn");
  let snowListElement = document.querySelector(".snowman-preview");
  let snowSnowmanElement = document.querySelector(".snow-list");

  let main = document.getElementById('hero');
  let bodyElement = document.querySelector('.body');
  let backImg = document.getElementById('back-img');

  addbtnElement.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();

    if (
      snowmanNameElement.value === '' ||
      snowmanHeightElement.value === '' ||
      locationElement.value === '' ||
      creatorNameElement.value === '' ||
      attributeElement.value === ''
    ) {
      return;
    }

    //create snow man data elements
    let articleElementInfo = document.createElement("article");
    let liElementInfo = document.createElement("li");
    liElementInfo.setAttribute("class", "snowman-info");

    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    let snowmanName = document.createElement("p");
    snowmanName.textContent = `Name: ${snowmanNameElement.value}`;

    let snowmanHeight = document.createElement("p");
    snowmanHeight.textContent = `Height: ${snowmanHeightElement.value}`;

    let location = document.createElement("p");
    location.textContent = `Location: ${locationElement.value}`;

    let creator = document.createElement("p");
    creator.textContent = `Creator: ${creatorNameElement.value}`;

    let attribute = document.createElement("p");
    attribute.textContent = `Attribute: ${attributeElement.value}`;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "next-btn");
    nextBtn.textContent = "Next";

    articleElementInfo.appendChild(snowmanName);
    articleElementInfo.appendChild(snowmanHeight);
    articleElementInfo.appendChild(location);
    articleElementInfo.appendChild(creator);
    articleElementInfo.appendChild(attribute);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(btnContainer);

    snowListElement.append(liElementInfo);

    //save values into variables and clear them
    let editedSnowmanName = snowmanNameElement.value;
    let editedHeight = snowmanHeightElement.value;
    let editedLocation = locationElement.value;
    let editedCreator = creatorNameElement.value;
    let editedAttribute = attributeElement.value;

    snowmanNameElement.value = "";
    snowmanHeightElement.value = "";
    locationElement.value = "";
    creatorNameElement.value = "";
    attributeElement.value = "";

    addbtnElement.disabled = true;

    //edit function
    editBtn.addEventListener("click", onEdit);

    function onEdit() {

      snowmanNameElement.value = editedSnowmanName;
      snowmanHeightElement.value = editedHeight;
      locationElement.value = editedLocation;
      creatorNameElement.value = editedCreator;
      attributeElement.value = editedAttribute;

      liElementInfo.remove();
      addbtnElement.disabled = false;

    }

    //next function
    nextBtn.addEventListener("click", onNext);

    function onNext() {
      let liElementconfirm = document.createElement("li");
      liElementconfirm.setAttribute("class", "snowman-content");

      let articleElementContinue = articleElementInfo;

      let sendBtn = document.createElement("button");
      sendBtn.setAttribute("class", "send-btn");
      sendBtn.textContent = "Send";

      articleElementContinue.appendChild(sendBtn);
      liElementconfirm.appendChild(articleElementContinue);

      liElementInfo.remove();
      snowSnowmanElement.appendChild(liElementconfirm);

      sendBtn.addEventListener("click", onConfirm);

      function onConfirm() {

        main.remove();

        let backBtn = document.createElement("button");
        backBtn.setAttribute("class", "back-btn");
        backBtn.textContent = "Back";
        backImg.hidden = false;

        bodyElement.appendChild(backBtn);

        backBtn.addEventListener("click", onBack);

        function onBack() {
          window.location.reload();
        }


      }

    }

  }
  

}
