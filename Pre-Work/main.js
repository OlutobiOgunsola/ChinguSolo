const getTab = x => {
  let text = x.childNodes;
  let newText = text[1].innerHTML;
  if (newText == "News and risk insight") {
    document.getElementById("NewsRisk").style.display = "block";
  } else if (newText == "Market directory") {
    document.getElementById("MarDir").style.display = "block";
  } else if (newText == "Market resources") {
    document.getElementById("MarRes").style.display = "block";
  } else if (newText == "Tools and systems") {
    document.getElementById("ToolSys").style.display = "block";
  } else if (newText == "Lloyd's around the world") {
    document.getElementById("LATD").style.display = "block";
  }
};

const mouseOut = x => {
  let text = x.childNodes;
  let newText = text[1].innerHTML;
  let target = event.relatedTarget;
  if (newText == "News and risk insight") {
    if (target.id === "NewsRisk") {
      holdTab(target);
    } else {
      closeTab(target);
    }
  } else if (newText == "Market directory") {
    if (target.id === "MarDir") {
      holdTab(target);
    } else {
      closeTab(target);
    }
  } else if (newText == "Market resources") {
    if (target.id === "MarRes") {
      holdTab(target);
    } else {
      closeTab(target);
    }
  } else if (newText == "Tools and systems") {
    if (target.id === "ToolSys") {
      holdTab(target);
    } else {
      closeTab(target);
    }
  } else if (newText == "Lloyd's around the world ") {
    if (target.id === "LATD") {
      holdTab(target);
    } else {
      closeTab(target);
    }
  }
};
const closeTab = x => {
  // console.log("CLOSE TAB");
  let tabs = document.getElementsByClassName("tabs");
  for (var i = 0; i < tabs.length; i++) {
    // console.log(tabs[i].style.display);
    tabs[i].style.display = "none";
  }
};
const holdTab = x => {
  // console.log("HOLD TAB");
  document.getElementById("NewsRisk").style.display = "block";
};
const test = () => {
  console.log("Test");
};
