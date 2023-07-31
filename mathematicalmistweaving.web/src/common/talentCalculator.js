/* eslint-disable no-restricted-globals */
let drawAllEmbedTreesHelper;
let drawEmbedTreesHelper;
let embeddedDragonflightInitObject;
(() => {
  const fetchedFiles = [];
  const containerHtml = document.querySelector("#dragonflight-skill-builder");
  const historySeparator = "#";
  const separator = "--";
  const classSeparator = "$";
  const specSeparator = "+";
  const pvpSeparator = "*";
  const maxNrOfClassPoints = 31;
  const maxNrOfSpecPoints = 30;
  const specExprMatch = /--(.*)\$(.*)\+/g;
  const typeOfSkill = {
    square: "active",
    round: "passive",
    choice: "choice",
    4: "substitute",
  };
  const lineColorGray = "#8292a4";
  const lineColorYellow = "#d8b851";
  const skillMappings = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Ă",
    "ă",
    "Â",
    "â",
    "Î",
    "î",
    "Ș",
    "ș",
    "Ț",
    "ț",
    "ë",
    "é",
    "ê",
    "ï",
    "ô",
    "β",
    "Γ",
    "γ",
    "Δ",
    "δ",
    "ε",
    "ζ",
  ];
  const base64Table = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/",
  ];
  const defaultFirstBreakPointsNumber = 8;
  const defaultSecondBreakPointsNumber = 20;
  const spriteVersion = 19;
  const jsonVersion = 42;
  let requiredLvlClass = 10;
  let requiredLvlSpec = 11;
  let lvlStep = 2;
  let classes;
  let currentBuild = {};
  let classesInfo = {};
  let playableClassesHtml;
  let playableSpecHtml;
  let skillTreeContainerHtml;
  let shareButtonHtml;
  let toggleNamesButtonHtml;
  let resetButtonClassTreeHtml;
  let resetButtonSpecTreeHtml;
  let classTreeSelectedClassNameHtml;
  let classTreeSelectedSpecNameHtml;
  let classRequiredLvlHtml;
  let specRequiredLvlHtml;
  let availablePointsClassHtml;
  let availablePointsSpecHtml;
  let userMessageHtml;
  let skillBuilder;
  let tooltip;
  let baseDbUrl;
  let baseImgUrl;
  let classTreeHtml;
  let specTreeHtml;
  let classCanvas;
  let specCanvas;
  let firstBreakPointClassHtml;
  let secondBreakPointClassHtml;
  let firstBreakPointSpecHtml;
  let secondBreakPointSpecHtml;
  let pvpTalents;
  let pvpTalentsHtml;
  let currentSelectedPvPSlot;
  let currentSpecPvPTalents;
  let pvpSlotSectionHtml;
  let importButtonHtml;
  let exportButtonHtml;
  let importGameStringPopup;
  let importInput;
  let classWidth;
  let classHeight;
  let specWidth;
  let specHeight;
  let importExportNYI = false;
  async function fetchFile(url) {
    const response = await fetch(url);
    return response.json();
  }
  function showMessage(message, type) {
    userMessageHtml.classList.remove("success", "info", "error");
    userMessageHtml.querySelector("span").innerHTML = message;
    switch (type) {
      case "success":
        userMessageHtml.classList.add("success", "visible");
        break;
      case "info":
        userMessageHtml.classList.add("info", "visible");
        break;
      case "error":
        userMessageHtml.classList.add("error", "visible");
        break;
    }
    hideMessage();
  }
  function hideMessage() {
    setTimeout(() => {
      userMessageHtml.classList.remove("success", "info", "error", "visible");
      userMessageHtml.querySelector("span").innerHTML = "";
    }, 5000);
  }
  function generateClassSelectionHtml() {
    let classSelectionHtml = '<div class="playable-class-selection flex">';
    let specSelectionHtml = "";
    let skillTreeContainer = "";
    classes.forEach((cls) => {
      if (!cls.hidden) {
        classSelectionHtml += `<div class="playable-class ${
          cls.implemented ? "" : "not-implemented"
        }" data-class-id="${cls.id}">
                                            <div class="class-icon icon_class_${
                                              cls.icon
                                            }"></div>
                                            <p class="class-name">${
                                              cls.displayName
                                            }</p>
                                       </div>`;
        specSelectionHtml += `<div class="playable-spec-selection flex" data-associated-id="${cls.id}">`;
        cls.specializations.forEach((sCls) => {
          specSelectionHtml += `<div class="playable-spec flex direction-column" data-class-id="${sCls.id}">
                                            <div class="playable-spec-icon">
                                                <div class="spec-icon bg-${sCls.icon}"></div>
                                            </div>
                                            <p class="spec-name">${sCls.displayName}</p> 
                                          </div>`;
        });
        specSelectionHtml += "</div>";
      }
    });
    classSelectionHtml += "</div>";
    skillTreeContainer = `<div id="skillTreeContainer" data-ienyi="${
      importExportNYI ? "importexportnyi" : ""
    }">
                                <div class="treesContainer flex">
                                    <div id="classTree" class="skill-tree-panel">
                                        <div class="skill-tree-info flex">
                                            <p class="req-lvl">Req. level: <span id="classRequiredLvl">${requiredLvlClass}</span></p>
                                            <p class="selected-name">
                                                <span>${
                                                  currentBuild.classInfo
                                                    ? currentBuild.classInfo
                                                        .displayName
                                                    : "Class"
                                                }</span> <em>tree</em>
                                            </p>
                                            <button id="rsC" class="reset octogon-clipped user-action-button">
                                                <span class="octogon-clipped"><i id="resetClass" class="reset"></i></span>
                                            </button>
                                        </div>
                                        <div class="skill-tree">
                                            <div class="skill-tree-points">
                                                <p class="selected-name">
                                                    <span>${
                                                      currentBuild.classInfo
                                                        ? currentBuild.classInfo
                                                            .displayName
                                                        : "Class"
                                                    }</span> points available
                                                </p>
                                                <p class="spent-points">
                                                    <span class="variable" id="availablePointsClass">${maxNrOfClassPoints}</span>/<span>${maxNrOfClassPoints}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="grid-container">
                                            <canvas id="classCanvas"></canvas>
                                            <div class="grid"></div>
                                            <div class="points-demarcator flex direction-column p1">
                                                <div></div> 
                                                <p class="first-break-point">${defaultFirstBreakPointsNumber}</p>  
                                            </div>
                                            <div class="points-demarcator flex direction-column p2">
                                                <div></div>
                                                <p class="second-break-point">${defaultSecondBreakPointsNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="specTree" class="skill-tree-panel">
                                        <div class="skill-tree-info flex">
                                            <p class="req-lvl">Req. level: <span id="specRequiredLvl">${requiredLvlSpec}</span></p>
                                            <p class="selected-name">
                                                <span>${
                                                  currentBuild.specInfo
                                                    ? currentBuild.specInfo
                                                        .displayName
                                                    : "Spec"
                                                }</span> <em>tree</em>
                                            </p>
                                            <button id="rsS" class="reset octogon-clipped user-action-button">
                                                <span class="octogon-clipped"><i id="resetSpec" class="reset"></i></span>
                                            </button>
                                        </div>
                                        <div class="skill-tree">
                                            <div class="skill-tree-points">
                                                <p class="selected-name">
                                                    <span>${
                                                      currentBuild.specInfo
                                                        ? currentBuild.specInfo
                                                            .displayName
                                                        : "Spec"
                                                    }</span> points available
                                                </p>
                                                <p class="spent-points">
                                                    <span class="variable" id="availablePointsSpec">${maxNrOfSpecPoints}</span>/<span>${maxNrOfSpecPoints}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="grid-container">
                                            <canvas id="specCanvas"></canvas>
                                            <div class="grid"></div>
                                            <div class="points-demarcator flex direction-column p1">
                                                <div></div> 
                                                <p class="first-break-point">${defaultFirstBreakPointsNumber}</p>    
                                            </div>
                                            <div class="points-demarcator flex direction-column p2">
                                                <div></div>
                                                <p class="second-break-point">${defaultSecondBreakPointsNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="toggle-and-share" class="flex">
                                        <div id="share-button-container" class="flex">
                                            <button id="sBt" class="octogon-clipped user-action-button">
                                                <span class="flex octogon-clipped"><i class="s-ic"></i>Share build</span>
                                            </button>
                                        </div>
                                        <div id="toggle-trees-spell-name-container" class="flex octogon-clipped">
                                            <label class="flex octogon-clipped">
                                                  <span>Toggle names</span>
                                                  <input type="checkbox">
                                                  <span class="check"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div id="pvp-talents-container"></div>
                              </div>`;
    skillBuilder.innerHTML =
      classSelectionHtml + specSelectionHtml + skillTreeContainer;
    playableClassesHtml = containerHtml.querySelectorAll(
      "#dragonflight-skill-builder .playable-class"
    );
    playableSpecHtml = containerHtml.querySelectorAll(
      "#dragonflight-skill-builder .playable-spec"
    );
    skillTreeContainerHtml = containerHtml.querySelector("#skillTreeContainer");
    shareButtonHtml = containerHtml.querySelector("#sBt");
    resetButtonClassTreeHtml = containerHtml.querySelector("#rsC");
    resetButtonSpecTreeHtml = containerHtml.querySelector("#rsS");
    classTreeHtml = containerHtml.querySelector("#classTree .grid");
    specTreeHtml = containerHtml.querySelector("#specTree .grid");
    classTreeSelectedClassNameHtml = Array.from(
      containerHtml.querySelectorAll("#classTree .selected-name span")
    );
    classTreeSelectedSpecNameHtml = Array.from(
      containerHtml.querySelectorAll("#specTree .selected-name span")
    );
    classRequiredLvlHtml = containerHtml.querySelector("#classRequiredLvl");
    specRequiredLvlHtml = containerHtml.querySelector("#specRequiredLvl");
    availablePointsClassHtml = containerHtml.querySelector(
      "#availablePointsClass"
    );
    availablePointsSpecHtml = containerHtml.querySelector(
      "#availablePointsSpec"
    );
    classCanvas = containerHtml.querySelector("#classCanvas");
    specCanvas = containerHtml.querySelector("#specCanvas");
    toggleNamesButtonHtml = containerHtml.querySelector(
      "#toggle-trees-spell-name-container input"
    );
    firstBreakPointClassHtml = containerHtml.querySelector(
      "#classTree .first-break-point"
    );
    secondBreakPointClassHtml = containerHtml.querySelector(
      "#classTree .second-break-point"
    );
    firstBreakPointSpecHtml = containerHtml.querySelector(
      "#specTree .first-break-point"
    );
    secondBreakPointSpecHtml = containerHtml.querySelector(
      "#specTree .second-break-point"
    );
    pvpTalentsHtml = containerHtml.querySelector("#pvp-talents-container");
  }
  function stopPropagation(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }
  function buildHistory(data) {
    let shareUrl = window.location.href;
    let i1 = shareUrl.lastIndexOf(classSeparator);
    let i2 = shareUrl.lastIndexOf(specSeparator);
    let i3 = shareUrl.lastIndexOf(pvpSeparator);
    let skillPointIndex;
    let commonBuild = shareUrl.substring(i1, i2);
    let specBuild = shareUrl.substring(i2, i3);
    let pvpBuild = shareUrl.substring(i3);
    let spellMatch;
    switch (data.type) {
      case "class":
        if (shareUrl.indexOf(historySeparator) === -1) {
          shareUrl += data.urlPart;
        } else {
          shareUrl = shareUrl.replace(
            shareUrl.substring(shareUrl.lastIndexOf("#"), shareUrl.length),
            data.urlPart
          );
        }
        importGameStringPopup.classList.remove("active");
        break;
      case "spec":
        shareUrl =
          shareUrl.substring(0, shareUrl.lastIndexOf(separator) + 2) +
          data.urlPart;
        importGameStringPopup.classList.remove("active");
        break;
      case "point-add":
        let maxSkillPoints;
        if (data.targetElement?.classList.contains("available-for-picking")) {
          maxSkillPoints = parseInt(
            data.targetElement.getAttribute("data-max-points")
          );
          skillPointIndex = data.targetElement.getAttribute("data-skill-pos");
          if (data.tree === "class") {
            spellMatch = [...commonBuild.matchAll(skillPointIndex)].length;
            if (spellMatch < maxSkillPoints) {
              shareUrl = shareUrl.replace(
                `${commonBuild}`,
                `${commonBuild}${skillPointIndex}`
              );
            }
          } else {
            spellMatch = [...specBuild.matchAll(skillPointIndex)].length;
            if (spellMatch < maxSkillPoints) {
              shareUrl = shareUrl.replace(
                `${specBuild}`,
                `${specBuild}${skillPointIndex}`
              );
            }
          }
        }
        if (data.subtype === "choice") {
          let regexExpr;
          let replacePortion;
          skillPointIndex = data.parentSkillPos;
          regexExpr = new RegExp(`${skillPointIndex}[0-9]`);
          if (data.tree === "class") {
            replacePortion = commonBuild;
          } else {
            replacePortion = specBuild;
          }
          spellMatch = replacePortion.match(regexExpr);
          if (spellMatch) {
            shareUrl = shareUrl.replace(
              `${replacePortion}`,
              `${replacePortion.replace(
                spellMatch[0],
                `${skillPointIndex}${data.subtypeIndex}`
              )}`
            );
          } else {
            shareUrl = shareUrl.replace(
              `${replacePortion}`,
              `${replacePortion}${skillPointIndex}${data.subtypeIndex}`
            );
          }
        }
        break;
      case "point-remove":
        let regexExpr;
        let skillToReplace;
        let replacePortion;
        let replaceWith;
        let tree;
        let startingNode = parseInt(data.nodeId);
        let allNodeDependencies = {};
        let allNodeDependenciesArray = [];
        let currentNode;
        let previousNodeIds8 = 0;
        let previousNodeIds20 = 0;
        skillPointIndex = data.targetElement.getAttribute("data-skill-pos");
        regexExpr = new RegExp(`${skillPointIndex}[0-9]?`);
        if (data.tree === "class") {
          replacePortion = commonBuild;
          tree = currentBuild.specObject.classNodes;
        } else {
          replacePortion = specBuild;
          tree = currentBuild.specObject.specNodes;
        }
        allNodeDependencies[startingNode] = tree[startingNode];
        traverseDependencies(tree, allNodeDependencies, 0);
        Object.keys(allNodeDependencies).forEach((key) => {
          allNodeDependenciesArray.push(allNodeDependencies[key]);
        });
        allNodeDependenciesArray.some((node, index) => {
          if (node.id === startingNode) {
            currentNode = allNodeDependenciesArray.splice(index, 1)[0];
          }
        });
        spellMatch = replacePortion.match(regexExpr);
        if (spellMatch) {
          skillToReplace = spellMatch[0];
        } else {
          skillToReplace = currentNode.index;
        }
        if (!spellMatch) return;
        replaceWith = `${replacePortion.replace(skillToReplace, "")}`;
        tree[currentNode.id].pointsAllocated -= 1;
        allNodeDependenciesArray = allNodeDependenciesArray.sort((a, b) => {
          return a.row - b.row || a.column - b.column;
        });
        allNodeDependenciesArray.forEach((elem) => {
          let atLeastOneOtherMaxedOutDependency = false;
          elem.previousNodeIds.forEach((id) => {
            if (
              tree[id].pointsAllocated === tree[id].maxPoints ||
              tree[id].alreadyMaxedOut
            ) {
              atLeastOneOtherMaxedOutDependency = true;
            }
          });
          if (!atLeastOneOtherMaxedOutDependency) {
            let currentPointIndexRegexExpr = new RegExp(`${elem.index}[0-9]`);
            let currentPointSpellMatch = replaceWith.match(
              currentPointIndexRegexExpr
            );
            let currentSkillToReplace = elem.index;
            if (currentPointSpellMatch) {
              currentSkillToReplace = currentPointSpellMatch[0];
            }
            replaceWith = `${replaceWith.replaceAll(
              currentSkillToReplace,
              ""
            )}`;
            tree[elem.id].pointsAllocated = 0;
          }
        });
        Object.keys(tree).forEach((key) => {
          if (tree[key].pointsAllocated) {
            if (tree[key].spentAmountRequired === 0) {
              previousNodeIds8 += tree[key].pointsAllocated;
              previousNodeIds20 += tree[key].pointsAllocated;
            }
            if (tree[key].spentAmountRequired === 8) {
              previousNodeIds20 += tree[key].pointsAllocated;
            }
          }
        });
        Object.keys(tree).forEach((key) => {
          let nodeToRemove = false;
          if (
            (tree[key].spentAmountRequired === 8 && previousNodeIds8 < 8) ||
            (tree[key].spentAmountRequired === 20 && previousNodeIds20 < 20)
          ) {
            nodeToRemove = true;
          }
          if (nodeToRemove) {
            let currentPointIndexRegexExpr = new RegExp(
              `${tree[key].index}[0-9]`
            );
            let currentPointSpellMatch = replaceWith.match(
              currentPointIndexRegexExpr
            );
            let currentSkillToReplace = tree[key].index;
            if (currentPointSpellMatch) {
              currentSkillToReplace = currentPointSpellMatch[0];
            }
            replaceWith = `${replaceWith.replaceAll(
              currentSkillToReplace,
              ""
            )}`;
          }
        });
        shareUrl = shareUrl.replace(`${replacePortion}`, `${replaceWith}`);
        break;
      case "reset-class":
        if (i1 !== -1 && i2 !== -1) {
          const stringToBeReplaced = shareUrl.substring(i1 + 1, i2);
          if (stringToBeReplaced) {
            shareUrl = shareUrl.replace(
              `${classSeparator}${stringToBeReplaced}`,
              `${classSeparator}`
            );
          }
        }
        break;
      case "reset-spec":
        if (i1 !== -1 && i2 !== -1) {
          const stringToBeReplaced = shareUrl.substring(i2 + 1, i3);
          if (stringToBeReplaced) {
            shareUrl = shareUrl.replace(
              `${specSeparator}${stringToBeReplaced}`,
              `${specSeparator}`
            );
          }
        }
        break;
      case "reset":
        shareUrl = shareUrl.substring(0, shareUrl.indexOf(classSeparator) + 2);
        break;
      case "pvp-point-add":
        let stringToReplaceWith = pvpBuild;
        if (pvpBuild.indexOf(data.index) !== -1) {
          let pattern = `.${data.index}`;
          stringToReplaceWith = stringToReplaceWith.replace(
            new RegExp(pattern),
            ""
          );
        }
        if (pvpBuild.indexOf(data.slot) === -1) {
          stringToReplaceWith += `${data.slot}${data.index}`;
        } else {
          let pattern = `${data.slot}.`;
          stringToReplaceWith = stringToReplaceWith.replace(
            new RegExp(pattern),
            `${data.slot}${data.index}`
          );
        }
        shareUrl = shareUrl.replace(pvpBuild, stringToReplaceWith);
        break;
      case "pvp-point-remove":
        let pattern = `${data.slot}.`;
        shareUrl = shareUrl.replace(
          pvpBuild,
          pvpBuild.replace(new RegExp(pattern), "")
        );
        break;
      case "import-string":
        shareUrl = `${shareUrl.substring(
          0,
          shareUrl.indexOf(historySeparator)
        )}${data.url}`;
        break;
    }
    window.history.pushState(
      "string",
      "Icy-Veins: Dragonflight Talent Calculator",
      shareUrl
    );
    parseHistory();
  }
  function traverseDependencies(tree, allNodeDependencies, lastStepLength) {
    Object.keys(allNodeDependencies).forEach((dependencyKey) => {
      let startingNode = allNodeDependencies[dependencyKey];
      Object.keys(tree).forEach((key) => {
        if (tree[key].previousNodeIds.includes(startingNode.id)) {
          allNodeDependencies[key] = tree[key];
        }
      });
    });
    if (lastStepLength !== Object.keys(allNodeDependencies).length) {
      traverseDependencies(
        tree,
        allNodeDependencies,
        Object.keys(allNodeDependencies).length
      );
    }
  }
  function addPlayableClassEventListeners() {
    playableClassesHtml.forEach((element) => {
      element.addEventListener("click", (event) => {
        let classId = parseInt(element.getAttribute("data-class-id"));
        stopPropagation(event);
        toggleNamesButtonHtml.checked = false;
        classes.some((cls) => {
          if (cls.id === classId) {
            if (!classesInfo[classId]) {
              fetchFile(`${baseDbUrl}/${cls.name}.json?v=${jsonVersion}`).then(
                (ci) => {
                  addPropertiesToTrees(ci);
                  classesInfo[classId] = ci;
                }
              );
            }
            currentBuild.classObject = classesInfo[classId];
            currentBuild.specObject = null;
            currentBuild.classInfo = cls;
            currentBuild.specInfo = null;
            buildHistory({ type: "class", urlPart: `#${classId}${separator}` });
            return true;
          }
        });
      });
    });
  }
  function addPlayableSpecEventListeners() {
    playableSpecHtml.forEach((element) => {
      element.addEventListener("click", (event) => {
        let specId = parseInt(element.getAttribute("data-class-id"));
        let classId = parseInt(
          element.parentElement.getAttribute("data-associated-id")
        );
        stopPropagation(event);
        Object.keys(classesInfo[classId].specs).some((spec_slug) => {
          if (classesInfo[classId].specs[spec_slug].id === specId) {
            currentBuild.specObject = classesInfo[classId].specs[spec_slug];
            classes.some((cls) => {
              if (cls.id === classId) {
                cls.specializations.some((specInfo) => {
                  if (specInfo.id === specId) {
                    currentBuild.specInfo = specInfo;
                    return true;
                  }
                });
                addColorToSelectedSpec(cls, specId);
              }
            });
            buildHistory({
              type: "spec",
              urlPart: `${specId}${classSeparator}${specSeparator}${pvpSeparator}`,
            });
            return true;
          }
        });
      });
    });
  }
  function addButtonsEventListener() {
    shareButtonHtml.addEventListener("click", (event) => {
      stopPropagation(event);
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          showMessage("Link copied", "success");
        })
        .catch((err) => {
          showMessage(
            "There was an error. Please copy the URL for sharing.",
            "error"
          );
          console.log(err);
        });
    });
    resetButtonClassTreeHtml.addEventListener("click", (event) => {
      stopPropagation(event);
      buildHistory({ type: "reset-class" });
    });
    resetButtonSpecTreeHtml.addEventListener("click", (event) => {
      stopPropagation(event);
      buildHistory({ type: "reset-spec" });
    });
    toggleNamesButtonHtml.addEventListener("click", () => {
      if (toggleNamesButtonHtml.checked) {
        skillTreeContainerHtml.classList.add("show-spell-names-only");
      } else {
        skillTreeContainerHtml.classList.remove("show-spell-names-only");
      }
    });
  }
  function parseHistory() {
    let url = window.location.href;
    currentBuild.buildHistory = url.substring(
      url.lastIndexOf(separator) + 2,
      url.length
    );
    if (currentBuild.buildHistory.indexOf("$") === -1) {
      currentBuild.specInfo = null;
      currentBuild.specObject = null;
    }
    recreateBuild();
  }
  function recreateBuild() {
    let i1;
    let i2;
    let i3;
    let classBuild;
    let specBuild;
    let pvpBuild;
    if (currentBuild.buildHistory) {
      i1 = currentBuild.buildHistory.indexOf(classSeparator);
      i2 = currentBuild.buildHistory.indexOf(specSeparator);
      i3 = currentBuild.buildHistory.indexOf(pvpSeparator);
      if (i1 !== -1 && i2 !== -1) {
        classBuild = currentBuild.buildHistory.substring(i1 + 1, i2);
        specBuild = currentBuild.buildHistory.substring(i2 + 1, i3);
        pvpBuild = currentBuild.buildHistory.substring(i3 + 1);
      }
    }
    let selectedClassElement = containerHtml.querySelector(
      ".playable-class.selected"
    );
    let selectedSpecElement = containerHtml.querySelector(
      `.playable-spec.selected`
    );
    let selectedSpecSelectionElement = containerHtml.querySelector(
      ".playable-spec-selection.active"
    );
    skillTreeContainerHtml.classList.remove("spec-selected");
    if (currentBuild.classInfo.id) {
      if (selectedClassElement?.dataset.classId !== currentBuild.classInfo.id) {
        selectedClassElement?.classList.remove("selected");
        selectedSpecSelectionElement?.classList.remove("active");
        containerHtml
          .querySelector(
            `.playable-class[data-class-id="${currentBuild.classInfo.id}"]`
          )
          .classList.add("selected");
        containerHtml
          .querySelector(
            `.playable-spec-selection[data-associated-id="${currentBuild.classInfo.id}"]`
          )
          .classList.add("active");
      }
      classTreeSelectedClassNameHtml.forEach((element) => {
        classes.some((cls) => {
          if (cls.id === currentBuild.classInfo.id) {
            element.innerHTML = cls.displayName;
            return true;
          }
        });
      });
      if (classBuild && classBuild.length === 0) {
        classRequiredLvlHtml.innerHTML = requiredLvlClass;
        availablePointsClassHtml.innerHTML = maxNrOfClassPoints;
      }
    } else {
      selectedClassElement?.classList.remove("selected");
      selectedSpecSelectionElement?.classList.remove("active");
    }
    if (currentBuild.specInfo) {
      currentSpecPvPTalents = [];
      if (selectedSpecElement?.dataset.classId !== currentBuild.specInfo.id) {
        selectedSpecElement?.classList.remove("selected");
        containerHtml
          .querySelector(
            `.playable-spec[data-class-id="${currentBuild.specInfo.id}"]`
          )
          .classList.add("selected");
      }
      skillTreeContainerHtml.className = `spec-selected ${currentBuild.classInfo.displayName
        .toLowerCase()
        .replaceAll(" ", "-")}-${currentBuild.specInfo.displayName
        .toLowerCase()
        .replace(" ", "-")}`;
      skillTreeContainerHtml.style.setProperty(
        "--selected-spec-color",
        `${currentBuild.specInfo.color}`
      );
      skillTreeContainerHtml.style.setProperty(
        "--selected-spec-bg",
        `url("${baseImgUrl}/${currentBuild.classInfo.displayName
          .toLowerCase()
          .replace(" ", "_")}_${currentBuild.specInfo.displayName
          .toLowerCase()
          .replace(" ", "-")}-bg.jpg")`
      );
      skillTreeContainerHtml.style.setProperty(
        "--selected-spec-bg-left",
        `url("${baseImgUrl}/${currentBuild.classInfo.displayName
          .toLowerCase()
          .replace(" ", "_")}_${currentBuild.specInfo.displayName
          .toLowerCase()
          .replace(" ", "-")}-bg-left.jpg")`
      );
      skillTreeContainerHtml.style.setProperty(
        "--selected-spec-bg-right",
        `url("${baseImgUrl}/${currentBuild.classInfo.displayName
          .toLowerCase()
          .replace(" ", "_")}_${currentBuild.specInfo.displayName
          .toLowerCase()
          .replace(" ", "-")}-bg-right.jpg")`
      );
      classTreeSelectedSpecNameHtml.forEach((element) => {
        classes.some((cls) => {
          cls.specializations.some((spec) => {
            if (spec.id === currentBuild.specInfo.id) {
              element.innerHTML = spec.displayName;
              return true;
            }
          });
        });
      });
      if (specBuild.length === 0) {
        specRequiredLvlHtml.innerHTML = requiredLvlSpec;
        availablePointsSpecHtml.innerHTML = maxNrOfSpecPoints;
      }
      pvpTalents.forEach((pvpTalent) => {
        if (pvpTalent.specIds.includes(currentBuild.specInfo.id)) {
          currentSpecPvPTalents.push(pvpTalent);
        }
      });
      currentSpecPvPTalents = currentSpecPvPTalents.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      generateSkillTrees();
      generateImportExportAndPvPTalentsHtml(currentSpecPvPTalents);
    } else {
      selectedSpecElement?.classList.remove("selected");
    }
    if (toggleNamesButtonHtml.checked) {
      skillTreeContainerHtml.classList.add("show-spell-names-only");
    }
    if (pvpBuild) {
      let pvpTalentsArray = pvpBuild.match(/..?/g);
      containerHtml
        .querySelectorAll(".pvp-slot-container")
        .forEach((element) => {
          element.className = "pvp-slot-container flex";
          element.removeAttribute("data-pvp-tooltip-id");
          element.querySelector(".pvp-talent-icon").style.backgroundImage =
            null;
          element.querySelector(".pvp-talent-icon").className =
            "pvp-talent-icon";
        });
      [0, 1, 2].forEach((index) => {
        let targetElementParent = containerHtml.querySelector(
          `.pvp-slot-container[data-index="${index}"]`
        );
        let targetElementChild =
          targetElementParent.querySelector(".pvp-talent-icon");
        pvpTalentsArray.forEach((talentEncoding) => {
          let talentIndex = talentEncoding[1];
          if (talentEncoding.indexOf(index) !== -1) {
            targetElementParent.classList.add("active");
            targetElementParent.setAttribute(
              "data-pvp-tooltip-id",
              currentSpecPvPTalents[skillMappings.indexOf(talentIndex)].id
            );
            targetElementChild.style.backgroundImage = `url('${baseImgUrl}/${currentBuild.classInfo.displayName
              .toLowerCase()
              .replace(" ", "_")}-pvp-sprite.jpeg?v=${spriteVersion}')`;
            targetElementChild.classList.add(
              `${currentBuild.classInfo.displayName
                .toLowerCase()
                .replace(" ", "_")}-pvp-${
                currentSpecPvPTalents[skillMappings.indexOf(talentIndex)].icon
              }`
            );
          }
        });
      });
    }
  }
  function generateImportExportAndPvPTalentsHtml(currentSpecPvPTalents) {
    let pvpHtml = `<div class="flex">
                            <div class="flex import-export-section">
                                <button class="octogon-clipped user-action-button import-string"><span class="flex octogon-clipped">Import String</span></button>
                                <button class="octogon-clipped user-action-button export-string"><span class="flex octogon-clipped">Copy Export String</span></button>
                            </div>
                            <div class="pvp-slot-section flex">
                                <div class="pvp-talents-section flex">
                                    <h3>PvP Talents:</h3>`;
    [0, 1, 2].forEach((slot) => {
      pvpHtml += `<div class="pvp-slot-container flex" data-index=${slot}>
                                <div class="pvp-slot-border">
                                    <div class="pvp-slot-inner">
                                        <div class="pvp-talent-icon"></div>
                                    </div>
                                </div>
                            </div>`;
    });
    pvpHtml += `</div></div>
                    <div class='pvp-talents-pop-up'>
                        <div class="pvp-talents-pop-up-content flex">
                            <div class="pvp-talents-list-header flex">
                                <span class="title">Select talent</span>
                                <button class="remove-talent-container octogon-clipped user-action-button">
                                    <span class="octogon-clipped flex">
                                        <i>+</i>Remove current talent
                                    </span>
                                </button>
                                <button class="close-pvp-talents-list flex">+</button>
                            </div>
                            <ul class='pvp-talents-contaner'>`;
    currentSpecPvPTalents.forEach((talent, index) => {
      pvpHtml += `<li data-pvp-talent-id="${
        talent.id
      }" class="pvp-talent-list-entry flex" data-pvp-talent-index="${
        skillMappings[index]
      }">
                            <div class="pvp-talent-icon-container">
                                <div class="pvp-talent-icon ${currentBuild.classInfo.displayName
                                  .toLowerCase()
                                  .replace(" ", "_")}-pvp-${
        talent.icon
      }" style="background-image: url('${baseImgUrl}/${currentBuild.classInfo.displayName
        .toLowerCase()
        .replace(" ", "_")}-pvp-sprite.jpeg?v=${spriteVersion}')"></div>
                            </div>
                            <div class="pvp-talent-text flex">
                                <span class="pvp-talent-name">${
                                  talent.name
                                }</span>
                                <span class="pvp-talent-description">${talent.description
                                  .replace("", "")
                                  .replaceAll("[ul]", "<ul>")
                                  .replaceAll("[/ul]", "</ul>")
                                  .replaceAll("[li]", "<li>")
                                  .replaceAll("[/li]", "</li>")
                                  .replaceAll("[span]", "")
                                  .replaceAll("[/span]", "")}</span>
                            </div>
                         </li>`;
    });
    pvpHtml += `</ul></div></div></div>`;
    pvpTalentsHtml.innerHTML = pvpHtml;
    pvpSlotSectionHtml = containerHtml.querySelector(".pvp-slot-section");
    importButtonHtml = containerHtml.querySelector(".import-string");
    exportButtonHtml = containerHtml.querySelector(".export-string");
    addPvPandImporExportEventListeners(
      containerHtml,
      currentSpecPvPTalents,
      true
    );
  }
  function addPvPandImporExportEventListeners(
    containerHtml,
    currentSpecPvPTalents,
    clickable,
    classInfo
  ) {
    containerHtml.querySelectorAll(".pvp-slot-container").forEach((pvpSlot) => {
      if (clickable) {
        pvpSlot.addEventListener("click", (e) => {
          stopPropagation(e);
          currentSelectedPvPSlot = pvpSlot.getAttribute("data-index");
          containerHtml
            .querySelector(".pvp-talents-pop-up")
            .classList.add("active");
        });
        containerHtml
          .querySelector(".remove-talent-container")
          .addEventListener("click", (e) => {
            stopPropagation(e);
            buildHistory({
              type: "pvp-point-remove",
              slot: currentSelectedPvPSlot,
            });
            containerHtml
              .querySelector(".pvp-talents-pop-up")
              .classList.remove("active");
          });
        containerHtml
          .querySelectorAll(".pvp-talent-list-entry")
          .forEach((entry) => {
            entry.addEventListener("click", (e) => {
              stopPropagation(e);
              buildHistory({
                type: "pvp-point-add",
                slot: currentSelectedPvPSlot,
                index: entry.getAttribute("data-pvp-talent-index"),
              });
              containerHtml
                .querySelector(".pvp-talents-pop-up")
                .classList.remove("active");
            });
          });
        containerHtml
          .querySelector(".close-pvp-talents-list")
          .addEventListener("click", (e) => {
            stopPropagation(e);
            containerHtml
              .querySelector(".pvp-talents-pop-up")
              .classList.remove("active");
          });
      }
      pvpSlot.addEventListener("mouseenter", (e) => {
        let tooltipContent = ``;
        let tooltipId = pvpSlot.getAttribute("data-pvp-tooltip-id");
        if (tooltipId) {
          let talent;
          let className;
          let backgroundImage;
          tooltipId = parseInt(tooltipId);
          currentSpecPvPTalents.forEach((t) => {
            if (tooltipId === t.id) {
              talent = t;
            }
          });
          talent.description = talent.description
            .replace("", "")
            .replaceAll("[ul]", "<ul>")
            .replaceAll("[/ul]", "</ul>")
            .replaceAll("[li]", "<li>")
            .replaceAll("[/li]", "</li>")
            .replaceAll("[span]", "")
            .replaceAll("[/span]", "");
          if (classInfo) {
            className = `${classInfo.name
              .toLowerCase()
              .replace(" ", "_")}-pvp-${talent.icon}`;
            backgroundImage = `url('${baseImgUrl}/${classInfo.name
              .toLowerCase()
              .replace(" ", "_")}-pvp-sprite.jpeg?v=${spriteVersion}`;
          } else {
            className = `${currentBuild.classInfo.displayName
              .toLowerCase()
              .replace(" ", "_")}-pvp-${talent.icon}`;
            backgroundImage = `url('${baseImgUrl}/${currentBuild.classInfo.displayName
              .toLowerCase()
              .replace(" ", "_")}-pvp-sprite.jpeg?v=${spriteVersion}`;
          }
          tooltipContent += `<div class="content flex direction-column">
                                            <div class="spell">
                                                <div class="tooltip-icon-and-name flex">
                                                    <div class="sprite ${className}" style="background-image: ${backgroundImage}')"></div>
                                                    <span class="tooltip-name">${talent.name}</span>
                                                </div>
                                                <div class="dragonflight-tooltip-description">${talent.description}</div>
                                            </div>
                                        </div>`;
          tooltip.innerHTML = tooltipContent;
          addTooltipPositioning(e, tooltip);
          tooltip.classList.add("visible");
        }
      });
      pvpSlot.addEventListener("mousemove", (e) => {
        let tooltipId = pvpSlot.getAttribute("data-tooltip-id");
        if (tooltipId) {
          addTooltipPositioning(e, tooltip);
          tooltip.classList.add("visible");
        }
      });
      pvpSlot.addEventListener("mouseleave", (e) => {
        tooltip.innerHTML = "";
        tooltip.classList.remove("visible");
      });
      pvpSlot.addEventListener("contextmenu", (e) => {
        stopPropagation(e);
        currentSelectedPvPSlot = pvpSlot.getAttribute("data-index");
        buildHistory({
          type: "pvp-point-remove",
          slot: currentSelectedPvPSlot,
        });
      });
    });
    importButtonHtml?.addEventListener("click", (e) => {
      stopPropagation(e);
      importGameStringPopup.classList.add("active");
    });
    exportButtonHtml?.addEventListener("click", (e) => {
      let exportString;
      stopPropagation(e);
      exportString = generateExportString(window.location.href);
      navigator.clipboard
        .writeText(exportString)
        .then(() => {
          showMessage("Export String copied", "success");
        })
        .catch((err) => {
          showMessage(
            "The String Export functionality is currently unavailable.",
            "error"
          );
          console.log(err);
        });
    });
  }
  function generateSkillTrees() {
    let classTreeHtmlContent = generateTreesContent(
      currentBuild.specObject.classNodes,
      "common"
    );
    let specTreeHtmlContent = generateTreesContent(
      currentBuild.specObject.specNodes,
      "spec"
    );
    classTreeHtml.innerHTML = classTreeHtmlContent;
    specTreeHtml.innerHTML = specTreeHtmlContent;
    addTooltipGeneratingEvents();
    drawTrees();
    addTreesEvents();
    updateSkillTreeBreakPointsPosition(currentBuild);
  }
  function updateSkillTreeBreakPointsPosition(currentBuild) {
    containerHtml.style.setProperty(
      "--class-first-break-point",
      currentBuild.specObject.class_checkpoints[0].row
    );
    containerHtml.style.setProperty(
      "--class-second-break-point",
      currentBuild.specObject.class_checkpoints[1].row
    );
    containerHtml.style.setProperty(
      "--spec-first-break-point",
      currentBuild.specObject.spec_checkpoints[0].row
    );
    containerHtml.style.setProperty(
      "--spec-second-break-point",
      currentBuild.specObject.spec_checkpoints[1].row
    );
  }
  function generateTreesContent(talents, type) {
    const className = `${currentBuild.classInfo.displayName.toLowerCase()}`;
    const specName = `${currentBuild.specInfo.displayName
      .toLowerCase()
      .replace(" ", "-")}`;
    let shareUrl = window.location.href;
    let talentsGridHtml = "";
    let imgName = `${className.replace(" ", "_")}_${specName.replace(
      " ",
      "-"
    )}`;
    let build;
    let spentNrOfPointsPerTree = 0;
    let remainingPointsHtml;
    let availablePointsPerTree;
    let remainingPoints;
    let treeRequiredLvl;
    let treeUnlockLvl;
    let requiredLvlForSkillPointSelection;
    let urlPart;
    let firstBreakpointHtml;
    let secondBreakpointHtml;
    let fbpr;
    let sbpr;
    if (type === "common") {
      build = shareUrl.substring(
        shareUrl.lastIndexOf(classSeparator),
        shareUrl.lastIndexOf(specSeparator)
      );
      remainingPointsHtml = availablePointsClassHtml;
      availablePointsPerTree = maxNrOfClassPoints;
      treeRequiredLvl = classRequiredLvlHtml;
      treeUnlockLvl = requiredLvlClass;
      urlPart = shareUrl.substring(
        shareUrl.indexOf(classSeparator) + 1,
        shareUrl.indexOf(specSeparator)
      );
      firstBreakpointHtml = containerHtml.querySelector(
        "#classTree .p1 .first-break-point"
      );
      secondBreakpointHtml = containerHtml.querySelector(
        "#classTree .p2 .second-break-point"
      );
    } else {
      build = shareUrl.substring(
        shareUrl.lastIndexOf(specSeparator),
        shareUrl.lastIndexOf(pvpSeparator)
      );
      remainingPointsHtml = availablePointsSpecHtml;
      availablePointsPerTree = maxNrOfSpecPoints;
      treeRequiredLvl = specRequiredLvlHtml;
      treeUnlockLvl = requiredLvlSpec;
      urlPart = shareUrl.substring(shareUrl.indexOf(specSeparator) + 1);
      firstBreakpointHtml = containerHtml.querySelector(
        "#specTree .p1 .first-break-point"
      );
      secondBreakpointHtml = containerHtml.querySelector(
        "#specTree .p2 .second-break-point"
      );
    }
    Object.keys(talents).forEach((key, index) => {
      talents[key].index = skillMappings[index];
      talents[key].pointsAllocated = [
        ...build.matchAll(talents[key].index),
      ].length;
      spentNrOfPointsPerTree += talents[key].pointsAllocated;
      if (talents[key].spells.length === 1) {
        talents[key].maxPoints = talents[key].spells[0].maxRanks;
      } else {
        talents[key].maxPoints = 1;
      }
    });
    remainingPoints = availablePointsPerTree - spentNrOfPointsPerTree;
    requiredLvlForSkillPointSelection =
      treeUnlockLvl + (spentNrOfPointsPerTree - 1) * lvlStep;
    Object.keys(talents).forEach((key) => {
      let skillIconHtml = "";
      let availableForPicking = false;
      let atLeastOneDependencyMaxedOut = false;
      let hasDependencyThatIsAFreeTalent = false;
      let isBracketOpen;
      let choiceHtml = "";
      let activeChoice = false;
      let activeChoiceSelection;
      let skillCellNameOnly = ``;
      talents[key].spentAmountRequired = talents[key].spentAmountRequired || 0;
      isBracketOpen =
        spentNrOfPointsPerTree >= talents[key].spentAmountRequired;
      talents[key].previousNodeIds.forEach((dependencyId) => {
        if (talents[dependencyId] === undefined)
          console.log(
            `Talent ID ${talents[key].id} is missing dependency ID ${dependencyId}`
          );
        if (
          talents[dependencyId].pointsAllocated ===
          talents[dependencyId].maxPoints
        ) {
          atLeastOneDependencyMaxedOut = true;
        }
        if (talents[dependencyId].alreadyMaxedOut) {
          hasDependencyThatIsAFreeTalent = true;
        }
      });
      if (
        (remainingPoints || talents[key].pointsAllocated) &&
        isBracketOpen &&
        (talents[key].previousNodeIds.length === 0 ||
          atLeastOneDependencyMaxedOut ||
          hasDependencyThatIsAFreeTalent)
      ) {
        availableForPicking = true;
      }
      if (talents[key].spells.length === 1) {
        skillIconHtml += `<div class="skill-icon ${imgName}-${talents[key].spells[0].icon}" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"></div>`;
        skillCellNameOnly += `<div class="skill-cell-name-only ${
          typeOfSkill[talents[key].type]
        }">
                                          <div class="flex">
                                            <p>${
                                              talents[key].spells[0].name
                                            }</p>
                                          </div>
                                      </div>`;
      } else {
        if (talents[key].type === "choice") {
          activeChoiceSelection = urlPart;
          activeChoiceSelection = activeChoiceSelection.match(
            new RegExp(`${talents[key].index}[0-9]`)
          );
          if (activeChoiceSelection) {
            activeChoiceSelection = parseInt(
              activeChoiceSelection[0].substring(1)
            );
            activeChoice = true;
          }
          skillIconHtml += `<div class="skill-icon">
                                        <div class="left-skill ${
                                          activeChoice && !activeChoiceSelection
                                            ? "selected"
                                            : ""
                                        } ${imgName}-${
            talents[key].spells[0].icon
          }" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"
                                            data-skill-pos="${
                                              talents[key].index
                                            }" data-tree-type="${
            type === "common" ? "class" : "spec"
          }" data-choice-id="0" data-tooltip-id="${key}" data-tooltip-type="${
            type === "common" ? "common" : "spec"
          }" data-tooltip-spell-index="0"></div>
                                        <div class="right-skill ${
                                          activeChoice && activeChoiceSelection
                                            ? "selected"
                                            : ""
                                        } ${imgName}-${
            talents[key].spells[1].icon
          }" data-tooltip-id="${key}" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"
                                            data-skill-pos="${
                                              talents[key].index
                                            }" data-tree-type="${
            type === "common" ? "class" : "spec"
          }" data-choice-id="1" data-tooltip-id="${key}" data-tooltip-type="${
            type === "common" ? "common" : "spec"
          }" data-tooltip-spell-index="1"></div>
                                      </div>`;
          choiceHtml = `<div class="choice-popup">
                                    <div class="option flex" data-skill-pos="${
                                      talents[key].index
                                    }" data-tree-type="${
            type === "common" ? "class" : "spec"
          }" data-choice-id="0" data-tooltip-id="${key}" data-tooltip-type="${
            type === "common" ? "common" : "spec"
          }" data-tooltip-spell-index="0">
                                        <div class="choice-img-container">
                                            <div class="choice-img ${imgName}-${
            talents[key].spells[0].icon
          }" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"></div>
                                        </div>
                                        <span class="choice-name">${
                                          talents[key].spells[0].name
                                        }</span>
                                    </div>
                                    <div class="option flex" data-skill-pos="${
                                      talents[key].index
                                    }" data-tree-type="${
            type === "common" ? "class" : "spec"
          }" data-choice-id="1" data-tooltip-id="${key}" data-tooltip-type="${
            type === "common" ? "common" : "spec"
          }" data-tooltip-spell-index="1">
                                        <div class="choice-img-container">
                                            <div class="choice-img ${imgName}-${
            talents[key].spells[1].icon
          }" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"></div>
                                        </div>
                                        <span class="choice-name">${
                                          talents[key].spells[1].name
                                        }</span>
                                    </div>
                                  </div>`;
          skillCellNameOnly += `<div class="skill-cell-name-only ${
            typeOfSkill[talents[key].type]
          }">
                                              <div class="flex">
                                                  <p>${
                                                    activeChoice &&
                                                    (activeChoiceSelection ===
                                                      0 ||
                                                      activeChoiceSelection ===
                                                        1)
                                                      ? talents[key].spells[
                                                          activeChoiceSelection
                                                        ].name
                                                      : talents[key].spells[0]
                                                          .name +
                                                        " / " +
                                                        talents[key].spells[1]
                                                          .name
                                                  }</p>
                                              </div>
                                          </div>`;
        }
      }
      talentsGridHtml += `<div class="skill-cell ${
        typeOfSkill[talents[key].type]
      } ${
        talents[key].alreadyMaxedOut
          ? `default-spec-${currentBuild.specInfo.name}`
          : ""
      } ${availableForPicking ? "available-for-picking" : ""} ${
        talents[key].maxPoints === talents[key].pointsAllocated
          ? "maxed-out"
          : ""
      }" 
                                    data-row="${talents[key].row}" 
                                    data-column="${talents[key].column}"
                                    data-node-id="${key}"
                                    data-tooltip-id="${key}"
                                    data-tooltip-type="${
                                      type === "common" ? "common" : "spec"
                                    }"
                                    data-tree-type="${
                                      type === "common" ? "class" : "spec"
                                    }"
                                    data-skill-pos="${talents[key].index}"
                                    data-max-points="${talents[key].maxPoints}"
                                    data-node-type="${
                                      typeOfSkill[talents[key].type]
                                    }"
                                    ${
                                      activeChoice
                                        ? !activeChoiceSelection
                                          ? 'data-tooltip-spell-index="0"'
                                          : 'data-tooltip-spell-index="1"'
                                        : ""
                                    }>
                                    ${skillCellNameOnly}
                                    <div class="skill-container">
                                        <div class="skill ${
                                          typeOfSkill[talents[key].type]
                                        }">
                                            <div class="clip-container">${skillIconHtml}</div>
                                        </div>
                                        <div class="skill-point-container"><span>${
                                          talents[key].pointsAllocated
                                        }</span>/${talents[key].maxPoints}</div>
                                        ${choiceHtml}
                                    </div>
                                </div>`;
    });
    treeRequiredLvl.innerHTML =
      requiredLvlForSkillPointSelection >= treeUnlockLvl
        ? requiredLvlForSkillPointSelection
        : treeUnlockLvl;
    remainingPointsHtml.innerHTML = remainingPoints;
    if (type === "common") {
      fbpr =
        currentBuild.specObject.class_checkpoints[0].points -
        spentNrOfPointsPerTree;
      sbpr =
        currentBuild.specObject.class_checkpoints[1].points -
        spentNrOfPointsPerTree;
    } else {
      fbpr =
        currentBuild.specObject.spec_checkpoints[0].points -
        spentNrOfPointsPerTree;
      sbpr =
        currentBuild.specObject.spec_checkpoints[1].points -
        spentNrOfPointsPerTree;
    }
    firstBreakpointHtml.innerHTML = fbpr;
    secondBreakpointHtml.innerHTML = sbpr;
    if (fbpr <= 0) {
      firstBreakpointHtml.parentElement.classList.add("unlocked");
    } else {
      firstBreakpointHtml.parentElement.classList.remove("unlocked");
    }
    if (sbpr <= 0) {
      secondBreakpointHtml.parentElement.classList.add("unlocked");
    } else {
      secondBreakpointHtml.parentElement.classList.remove("unlocked");
    }
    return talentsGridHtml;
  }
  function initializeBuild() {
    const url = window.location.href;
    generateClassSelectionHtml();
    addPlayableClassEventListeners();
    addPlayableSpecEventListeners();
    addButtonsEventListener();
    containerHtml.addEventListener("click", () => {
      containerHtml
        .querySelector(".choice-visible")
        ?.classList.remove("choice-visible");
      tooltip.classList.remove("visible", "mobile-visible");
    });
    if (url.indexOf(historySeparator) !== -1) {
      const classId = parseInt(
        url.substring(url.indexOf(historySeparator) + 1, url.indexOf(separator))
      );
      Object.keys(classes).some((c) => {
        if (classes[c].id === classId) {
          fetchFile(
            `${baseDbUrl}/${classes[c].name}.json?v=${jsonVersion}`
          ).then((ci) => {
            addPropertiesToTrees(ci);
            currentBuild.classObject = ci;
            currentBuild.classInfo = classes[c];
            classesInfo[currentBuild.classInfo.id] = ci;
            if (url.indexOf(classSeparator) !== -1) {
              let specId = parseInt(
                url
                  .match(specExprMatch)[0]
                  .replace(separator, "")
                  .replace(classSeparator, "")
              );
              Object.keys(classesInfo[currentBuild.classInfo.id].specs).some(
                (s) => {
                  if (
                    classesInfo[currentBuild.classInfo.id].specs[s].id ===
                    specId
                  ) {
                    currentBuild.specObject =
                      classesInfo[currentBuild.classInfo.id].specs[s];
                    classes[c].specializations.some((specInfo) => {
                      if (specInfo.id === specId) {
                        currentBuild.specInfo = specInfo;
                        return true;
                      }
                    });
                    addColorToSelectedSpec(classes[c], specId);
                    return true;
                  }
                }
              );
            }
            parseHistory();
          });
          return true;
        }
      });
    }
  }
  function addPropertiesToTrees(file) {
    Object.keys(file.specs).forEach((key) => {
      Object.keys(file.specs[key].classNodes).forEach((tKey) => {
        file.specs[key].classNodes[tKey].pointsAllocated = 0;
      });
      Object.keys(file.specs[key].specNodes).forEach((tKey) => {
        file.specs[key].specNodes[tKey].pointsAllocated = 0;
      });
    });
  }
  function addColorToSelectedSpec(cls, specId) {
    cls.specializations.some((spec) => {
      if (spec.id === specId) {
        currentBuild.specInfo.color = spec.color;
        return true;
      }
    });
  }
  function generateStaticHtml() {
    let staticHtml = `<div id="class-selector" class="flex"></div>
                          <div id="skill-builder"></div>`;
    let userMessage = ``;
    if (!document.querySelector("#user-message")) {
      userMessage = `<div id="user-message" class="flex">
                                <span></span>
                                <button></button>
                           </div>`;
    }
    containerHtml.innerHTML = `${staticHtml}${userMessage}`;
    userMessageHtml = document.querySelector("#user-message");
    skillBuilder = containerHtml.querySelector("#skill-builder");
  }
  function generateTooltipHtml() {
    const tooltipElement = document.createElement("div");
    tooltipElement.setAttribute("id", "dragonflight-skill-builder-tooltip");
    tooltipElement.setAttribute("class", "flex direction-column");
    document.body.appendChild(tooltipElement);
    tooltip = document.querySelector("#dragonflight-skill-builder-tooltip");
  }
  function generateImportGameScriptHtml() {
    const popUp = document.createElement("div");
    let content = "";
    popUp.setAttribute("id", "dragonflight-import-game-string-popup");
    popUp.setAttribute("class", "flex direction-column");
    content += `<button class="close-import-popup">+</button>
                    <h3>Import game build:</h3>
                    <input id="dragonglight-import-input" type="text" placeholder="Paste import string here" />
                    <div class="import-actions flex">
                        <button class="user-action-button import octogon-clipped"><span class="flex octogon-clipped">Import</span></button>
                        <button class="user-action-button cancel octogon-clipped"><span class="flex octogon-clipped">Cancel</span></button>
                    </div>`;
    popUp.innerHTML = content;
    document.body.appendChild(popUp);
    importGameStringPopup = document.querySelector(
      "#dragonflight-import-game-string-popup"
    );
    importInput = document.querySelector("#dragonglight-import-input");
    importGameStringPopup
      .querySelector("button.import")
      .addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        convertExportStringToBuild(importInput.value);
        importGameStringPopup.classList.remove("active");
      });
    importGameStringPopup
      .querySelector("button.cancel")
      .addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        importGameStringPopup.classList.remove("active");
      });
    importGameStringPopup
      .querySelector(".close-import-popup")
      .addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        importGameStringPopup.classList.remove("active");
      });
  }
  function setImgVariables() {
    const embededContainersHtml = document.querySelectorAll(
      "div[data-dragonflight-embedded-build]"
    );
    baseDbUrl = containerHtml?.getAttribute("data-talentcalculator-jsonpath");
    baseImgUrl = containerHtml?.getAttribute("data-talentcalculator-imagepath");
    if (typeof embeddedDragonflightInitObject !== "undefined") {
      embeddedDragonflightInitObject.forEach((embed) => {
        let elem = document.querySelector(
          `div[data-dragonflight-embedded-build="${embed.targetElement}"]`
        );
        if (elem) {
          if (!baseDbUrl && !baseImgUrl) {
            embed.baseImgUrl = elem.getAttribute(
              "data-talentcalculator-imagepath"
            );
            embed.baseDbUrl = elem.getAttribute(
              "data-talentcalculator-jsonpath"
            );
            if (embed.baseImgUrl) {
              baseImgUrl = embed.baseImgUrl;
            }
            if (embed.baseDbUrl) {
              baseDbUrl = embed.baseDbUrl;
            }
          }
          elem.style.setProperty(
            "--thumb-width",
            `${(100 / embed.steps.length).toFixed(2)}%`
          );
        }
      });
    }
    if (containerHtml) {
      containerHtml.style.setProperty(
        "--classes-sprite-url",
        `url('${baseImgUrl}/classes-sprite.png')`
      );
      containerHtml.style.setProperty(
        "--specializations-sprite-url",
        `url('${baseImgUrl}/specializations-sprite.jpg?v=${spriteVersion}')`
      );
      containerHtml.style.setProperty(
        "--share-icon-url",
        `url('${baseImgUrl}/share.svg')`
      );
      containerHtml.style.setProperty(
        "--reset-icon-url",
        `url('${baseImgUrl}/reset.svg')`
      );
      containerHtml.style.setProperty(
        "--check-icon-url",
        `url('${baseImgUrl}/check.svg')`
      );
      containerHtml.style.setProperty(
        "--lock-icon-url",
        `url('${baseImgUrl}/lock.svg')`
      );
    }
    embededContainersHtml.forEach((embedContainer) => {
      embedContainer.style.setProperty(
        "--classes-sprite-url",
        `url('${baseImgUrl}/classes-sprite.png')`
      );
      embedContainer.style.setProperty(
        "--specializations-sprite-url",
        `url('${baseImgUrl}/specializations-sprite.jpg?v=${spriteVersion}')`
      );
      embedContainer.style.setProperty(
        "--share-icon-url",
        `url('${baseImgUrl}/share.svg')`
      );
      embedContainer.style.setProperty(
        "--reset-icon-url",
        `url('${baseImgUrl}/reset.svg')`
      );
      embedContainer.style.setProperty(
        "--lock-icon-url",
        `url('${baseImgUrl}/lock.svg')`
      );
    });
  }
  function addTooltipPositioning(event, targetElement, oX, oY) {
    let posX = event.clientX;
    let posY = event.clientY;
    let tooltipWidth = targetElement.clientWidth;
    let tooltipHeight = targetElement.clientHeight;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let ofX = oX || 0;
    let ofY = oY || 0;
    if (screenWidth <= 560) {
      posX = (screenWidth - tooltipWidth) / 2;
      targetElement.style.left = `${posX + ofX}px`;
    } else {
      if (posX + tooltipWidth + 20 >= screenWidth) {
        posX = posX - targetElement.clientWidth - 20;
        targetElement.style.left = `${posX + ofX}px`;
      } else {
        targetElement.style.left = `${posX + 20 + ofX}px`;
      }
    }
    if (posY + tooltipHeight + 20 >= screenHeight) {
      posY = posY - tooltipHeight - 20;
      targetElement.style.top = `${posY + ofY}px`;
    } else {
      targetElement.style.top = `${posY + 20 + ofY}px`;
    }
  }
  function addTooltipGeneratingEvents(initObject) {
    let imgName = "";
    let className;
    let specName;
    let nodes;
    let cb = {};
    if (!initObject) {
      className = `${currentBuild.classInfo.displayName.toLowerCase()}`;
      specName = `${currentBuild.specInfo.displayName
        .toLowerCase()
        .replace(" ", "-")}`;
      nodes = Array.from(
        document.querySelectorAll(
          `#dragonflight-skill-builder div[data-tooltip-id]`
        )
      );
      cb.classObject = currentBuild.classObject;
      cb.classInfo = currentBuild.classInfo;
      cb.specObject = currentBuild.specObject;
      cb.specInfo = currentBuild.specInfo;
    } else {
      const classId = parseInt(
        initObject.steps[0].substring(
          initObject.steps[0].lastIndexOf(historySeparator) + 1,
          initObject.steps[0].lastIndexOf(separator)
        )
      );
      const specId = parseInt(
        initObject.steps[0].substring(
          initObject.steps[0].lastIndexOf(separator) + 2,
          initObject.steps[0].lastIndexOf(classSeparator)
        )
      );
      if (classesInfo[classId].id === classId) {
        cb.classObject = classesInfo[classId];
      }
      Object.keys(classesInfo[classId].specs).forEach((key) => {
        if (classesInfo[classId].specs[key].id === specId) {
          className = classesInfo[classId].name.toLowerCase();
          specName = classesInfo[classId].specs[key].name.toLowerCase();
          cb.specObject = classesInfo[classId].specs[key];
        }
      });
      Object.keys(classes).some((index) => {
        if (classes[index].id === classId) {
          cb.classInfo = classes[index];
          return true;
        }
      });
      Object.keys(cb.classInfo.specializations).some((specSlug) => {
        if (cb.classInfo.specializations[specSlug].id === specId) {
          cb.specInfo = cb.classInfo.specializations[specSlug];
          return true;
        }
      });
      nodes = Array.from(
        document.querySelectorAll(
          `div[data-dragonflight-embedded-build] div[data-tooltip-id]`
        )
      );
    }
    if (className && specName) {
      nodes.forEach((element) => {
        element.addEventListener("mouseenter", (event) => {
          let spellId = element.getAttribute("data-tooltip-id");
          let type = element.getAttribute("data-tooltip-type");
          let spells;
          let tooltipContent = '<div class="content flex direction-column">';
          let spellIndex = element.getAttribute("data-tooltip-spell-index");
          let tooltipEmbedType = element.getAttribute("data-tooltip-embed");
          stopPropagation(event);
          if (
            !element.querySelector(".selected") ||
            skillTreeContainerHtml?.classList.contains("show-spell-names-only")
          ) {
            if (type === "common") {
              if (tooltipEmbedType) {
                let tooltipClass = parseInt(
                  element.getAttribute("data-tooltip-class")
                );
                let tooltipSpec = parseInt(
                  element.getAttribute("data-tooltip-spec")
                );
                Object.keys(classesInfo[tooltipClass].specs).some((cKey) => {
                  if (
                    classesInfo[tooltipClass].specs[cKey].id ===
                    parseInt(tooltipSpec)
                  ) {
                    imgName = `${classesInfo[tooltipClass].name
                      .toLowerCase()
                      .replace(" ", "_")}_${cb.specInfo.name}`;
                    spells =
                      classesInfo[tooltipClass].specs[cKey].classNodes[spellId]
                        .spells;
                    return true;
                  }
                });
              } else {
                imgName = `${className.replace(" ", "_")}_${cb.specInfo.name}`;
                spells = JSON.parse(
                  JSON.stringify(cb.specObject.classNodes[spellId].spells)
                );
              }
            } else {
              if (tooltipEmbedType) {
                let tooltipClass = parseInt(
                  element.getAttribute("data-tooltip-class")
                );
                let tooltipSpec = parseInt(
                  element.getAttribute("data-tooltip-spec")
                );
                Object.keys(classesInfo[tooltipClass].specs).some((cKey) => {
                  if (
                    classesInfo[tooltipClass].specs[cKey].id ===
                    parseInt(tooltipSpec)
                  ) {
                    imgName = `${classesInfo[tooltipClass].name
                      .toLowerCase()
                      .replace(" ", "_")}_${specName.replace(" ", "-")}`;
                    spells =
                      classesInfo[tooltipClass].specs[cKey].specNodes[spellId]
                        .spells;
                  }
                });
              } else {
                imgName = `${className.replace(" ", "_")}_${specName.replace(
                  " ",
                  "-"
                )}`;
                spells = JSON.parse(
                  JSON.stringify(cb.specObject.specNodes[spellId].spells)
                );
              }
            }
            if (spellIndex !== null) {
              spells = [...spells];
              if (parseInt(spellIndex) === 0) {
                spells.pop();
              } else {
                spells.shift();
              }
            }
            spells.forEach((spell) => {
              if (spell.shownForSpecs && spell.shownForSpecs !== specName) {
                return;
              } else {
                let talent;
                let rawDescription;
                if (typeof cb.specObject.specNodes[spellId] !== "undefined") {
                  talent = cb.specObject.specNodes[spellId];
                } else {
                  talent = cb.specObject.classNodes[spellId];
                }
                if (talent.maxPoints > 1) {
                  if (
                    talent.pointsAllocated == 0 ||
                    talent.pointsAllocated == 1
                  ) {
                    rawDescription = spell.rankDescriptions[0];
                  } else {
                    rawDescription =
                      spell.rankDescriptions[talent.pointsAllocated - 1];
                  }
                } else {
                  rawDescription = spell.description;
                }
                const desc = rawDescription
                  .replace("", "")
                  .replaceAll("[ul]", "<ul>")
                  .replaceAll("[/ul]", "</ul>")
                  .replaceAll("[li]", "<li>")
                  .replaceAll("[/li]", "</li>")
                  .replaceAll("[span]", "")
                  .replaceAll("[/span]", "");
                console.log(spellId);
                console.log(talent);
                tooltipContent += ` <div class="spell">
                                                        <div class="tooltip-icon-and-name flex">
                                                            <div class="sprite ${imgName}-${
                  spell.icon
                }" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"></div>
                                                            <span class="tooltip-name">${spell.name.replaceAll(
                                                              "",
                                                              ""
                                                            )}</span>
                                                        </div>
                                                        <div class="dragonflight-tooltip-description">${desc}</div>
                                                    </div>`;
              }
            });
            tooltipContent += "</div>";
            tooltip.innerHTML = tooltipContent;
            tooltip.classList.add("visible");
          }
        });
        element.addEventListener("mousemove", (event) => {
          addTooltipPositioning(event, tooltip);
          tooltip.classList.add("visible");
        });
        element.addEventListener("mouseleave", () => {
          tooltip.classList.remove("visible", "mobile-visible");
          tooltip.innerHTML = ``;
        });
        element.addEventListener(
          "touchstart",
          () => {
            tooltip.classList.add("mobile-visible");
          },
          { passive: true }
        );
      });
    }
    if (initObject) {
      let targetEmbed = document.querySelector(
        `div[data-dragonflight-embedded-build="${initObject.targetElement}"]`
      );
      targetEmbed
        .querySelectorAll(".highlight-in-tree")
        .forEach((listEntry) => {
          listEntry.addEventListener("mouseenter", () => {
            targetEmbed
              .querySelector(
                `div[data-step-index="${
                  initObject.startingStep
                }"] .right div[data-skill-pos="${listEntry.getAttribute(
                  "data-spell-index"
                )}"]`
              )
              .classList.add("highlight");
          });
          listEntry.addEventListener("mouseleave", () => {
            targetEmbed
              .querySelector(
                `div[data-step-index="${
                  initObject.startingStep
                }"] .right div[data-skill-pos="${listEntry.getAttribute(
                  "data-spell-index"
                )}"]`
              )
              .classList.remove("highlight");
          });
        });
    }
  }
  function recalculateClientDimensions() {
    classWidth = classTreeHtml.clientWidth;
    classHeight = classTreeHtml.clientHeight;
    specWidth = classTreeHtml.clientWidth;
    specHeight = classTreeHtml.clientHeight;
  }
  function drawTrees() {
    if (classWidth === undefined) recalculateClientDimensions();
    const scale = window.devicePixelRatio;
    const strokeWidth = 4;
    let cCtx, sCtx, classNodes, specNodes;
    classCanvas.style.width = classWidth + "px";
    classCanvas.style.height = classHeight + "px";
    classCanvas.width = Math.floor(classWidth * scale);
    classCanvas.height = Math.floor(classHeight * scale);
    specCanvas.style.width = specWidth + "px";
    specCanvas.style.height = specHeight + "px";
    specCanvas.width = Math.floor(specWidth * scale);
    specCanvas.height = Math.floor(specHeight * scale);
    cCtx = classCanvas.getContext("2d");
    cCtx.scale(scale, scale);
    cCtx.strokeStyle = lineColorGray;
    cCtx.lineWidth = strokeWidth;
    sCtx = specCanvas.getContext("2d");
    sCtx.scale(scale, scale);
    sCtx.strokeStyle = lineColorGray;
    sCtx.lineWidth = strokeWidth;
    classNodes = classTreeHtml.querySelectorAll(".skill-cell");
    specNodes = specTreeHtml.querySelectorAll(".skill-cell");
    drawLines(cCtx, classNodes, "class");
    drawLines(sCtx, specNodes, "spec");
  }
  function nodeType(treeType) {
    return treeType === "class" ? "classNodes" : "specNodes";
  }
  function drawLines(context, nodes, treeType) {
    if (currentBuild.specInfo) {
      const pointsRemainingInCommon = parseInt(
        availablePointsClassHtml.innerHTML
      );
      const pointsRemainingInSpec = parseInt(availablePointsSpecHtml.innerHTML);
      const specName = `${currentBuild.specInfo.displayName
        .toLowerCase()
        .replace(" ", "-")}`;
      let dependencyObject = {};
      let remainingPoints;
      let spentPointsInTree;
      let tree = currentBuild.specObject;
      if (treeType === "class") {
        spentPointsInTree = maxNrOfClassPoints - pointsRemainingInCommon;
        remainingPoints = pointsRemainingInCommon;
      } else {
        spentPointsInTree = maxNrOfSpecPoints - pointsRemainingInSpec;
        remainingPoints = pointsRemainingInSpec;
      }
      nodes.forEach((node) => {
        const id = node.getAttribute("data-tooltip-id");
        dependencyObject[id] = {
          x: node.offsetLeft + Math.floor(node.clientWidth / 2),
          y: node.offsetTop + Math.floor(node.clientHeight / 2),
        };
      });
      nodes.forEach((node) => {
        const id = node.getAttribute("data-tooltip-id");
        let isBracketOpen =
          spentPointsInTree >= tree[nodeType(treeType)][id].spentAmountRequired;
        if (tree[nodeType(treeType)][id].previousNodeIds.length) {
          tree[nodeType(treeType)][id].previousNodeIds.forEach(
            (requiredNode) => {
              context.beginPath();
              context.moveTo(dependencyObject[id].x, dependencyObject[id].y);
              context.lineTo(
                dependencyObject[requiredNode].x,
                dependencyObject[requiredNode].y
              );
              const skilledInto =
                tree[nodeType(treeType)][id].pointsAllocated ||
                tree[nodeType(treeType)][id].alreadyMaxedOut;
              const parentMaxed =
                tree[nodeType(treeType)][requiredNode].alreadyMaxedOut ||
                tree[nodeType(treeType)][requiredNode].maxPoints ===
                  tree[nodeType(treeType)][requiredNode].pointsAllocated;
              if (
                (remainingPoints || skilledInto) &&
                isBracketOpen &&
                parentMaxed
              ) {
                context.strokeStyle = lineColorYellow;
              } else {
                context.strokeStyle = lineColorGray;
              }
              context.stroke();
              context.closePath();
            }
          );
        }
      });
    }
  }
  function redrawTrees() {
    if (classCanvas && specCanvas) {
      recalculateClientDimensions();
      drawTrees();
    }
    if (typeof embeddedDragonflightInitObject !== "undefined") {
      embeddedDragonflightInitObject.forEach((initObject) => {
        initObject.drawn = false;
        drawEmbedTrees(initObject);
      });
    }
  }
  function addCanvasEvents() {
    window.addEventListener("resize", redrawTrees);
    if (typeof embeddedDragonflightInitObject !== "undefined") {
      embeddedDragonflightInitObject.forEach((initObject) => {
        const target = document
          .querySelectorAll(
            `div[data-dragonflight-embedded-build="${initObject.targetElement}"]`
          )
          .item(0);
        const observer = new IntersectionObserver(() => {
          if (!initObject.drawn) drawEmbedTrees(initObject);
        }, {});
        observer.observe(target);
      });
    }
  }
  function addTreesEvents() {
    const nodes = containerHtml.querySelectorAll(".skill-cell");
    const options = containerHtml.querySelectorAll(".option");
    const specName = currentBuild.specInfo.displayName
      .toLowerCase()
      .replace(" ", "-");
    let allocatedPointsInTreeSoFar;
    nodes.forEach((node) => {
      let id = node.getAttribute("data-node-id");
      let treeType = node.getAttribute("data-tree-type");
      let nodeType = node.getAttribute("data-node-type");
      node.addEventListener("click", (event) => {
        let visibleChoice = document.querySelector(".choice-visible");
        stopPropagation(event);
        allocatedPointsInTreeSoFar = 0;
        if (treeType === "class") {
          Object.keys(currentBuild.specObject.classNodes).forEach((key) => {
            allocatedPointsInTreeSoFar +=
              currentBuild.specObject.classNodes[key].pointsAllocated;
          });
          if (
            !currentBuild.specObject.classNodes[id].alreadyMaxedOut &&
            allocatedPointsInTreeSoFar < maxNrOfClassPoints
          ) {
            if (nodeType === "choice") {
              visibleChoice?.classList.remove("choice-visible");
              if (
                event.target.className.indexOf("available-for-picking") !== -1
              ) {
                event.target.classList.add("choice-visible");
              }
            } else {
              buildHistory({
                type: "point-add",
                targetElement: node,
                tree: treeType,
              });
            }
          }
        } else {
          Object.keys(currentBuild.specObject.specNodes).forEach((key) => {
            allocatedPointsInTreeSoFar +=
              currentBuild.specObject.specNodes[key].pointsAllocated;
          });
          if (allocatedPointsInTreeSoFar < maxNrOfSpecPoints) {
            if (nodeType === "choice") {
              visibleChoice?.classList.remove("choice-visible");
              if (
                event.target.className.indexOf("available-for-picking") !== -1
              ) {
                event.target.classList.add("choice-visible");
              }
            } else {
              buildHistory({
                type: "point-add",
                targetElement: node,
                tree: treeType,
              });
            }
          }
        }
      });
      node.addEventListener("contextmenu", (event) => {
        stopPropagation(event);
        if (treeType === "class") {
          if (!currentBuild.specObject.classNodes[id].alreadyMaxedOut) {
            buildHistory({
              type: "point-remove",
              targetElement: node,
              tree: treeType,
              nodeId: id,
            });
          }
        } else {
          buildHistory({
            type: "point-remove",
            targetElement: node,
            tree: treeType,
            nodeId: id,
          });
        }
      });
    });
    options.forEach((option) => {
      const treeType = option.getAttribute("data-tree-type");
      const choiceId = option.getAttribute("data-choice-id");
      const skillPos = option.getAttribute("data-skill-pos");
      option.addEventListener("click", (event) => {
        stopPropagation(event);
        buildHistory({
          type: "point-add",
          subtype: "choice",
          subtypeIndex: parseInt(choiceId),
          parentSkillPos: skillPos,
          tree: treeType,
        });
      });
    });
  }
  function generateEmbed(initObject) {
    const embedContainer = document.querySelector(
      `div[data-dragonflight-embedded-build="${initObject.targetElement}"]`
    );
    const embedClass = parseInt(
      initObject.steps[0].substring(
        initObject.steps[0].indexOf(historySeparator) + 1,
        initObject.steps[0].indexOf(separator)
      )
    );
    initObject.embedClass = embedClass;
    if (embedContainer) {
      if (!classesInfo[embedClass]) {
        Object.keys(classes).some((c) => {
          if (classes[c].id === embedClass) {
            fetchFile(
              `${baseDbUrl}/${classes[c].name}.json?v=${jsonVersion}`
            ).then((ci) => {
              addPropertiesToTrees(ci);
              classesInfo[embedClass] = ci;
              generateEmbedHtml(initObject, embedContainer);
            });
          }
        });
      } else {
        generateEmbedHtml(initObject, embedContainer);
      }
    }
  }
  function generateEmbedHtml(initObject, embedContainer) {
    const backClass = initObject.startingStep === 1 ? "disabled" : "";
    const forwardClass =
      initObject.startingStep === initObject.steps.length ? "disabled" : "";
    const embedControls = `<div class='embedded-build-controls flex ${
      initObject.disableControls
    }'>
                                  <button class="embedded-build-back button-container ${backClass}" data-target="${
      initObject.targetElement
    }"><span class="button">-</span></button>
                                  <div class="embedded-build-steps-selector flex">
                                      <input 
                                        type="range" 
                                        min="0" 
                                        max="${Math.floor(
                                          (100 /
                                            (initObject.sliderPositions.length -
                                              1)) *
                                            (initObject.sliderPositions.length -
                                              1)
                                        )}" 
                                        step="${Math.floor(
                                          100 /
                                            (initObject.sliderPositions.length -
                                              1)
                                        )}"
                                        id="embedded-build-controls-range-${
                                          initObject.targetElement
                                        }"
                                        value="${Math.floor(
                                          (100 /
                                            (initObject.sliderPositions.length -
                                              1)) *
                                            (initObject.startingStep - 1)
                                        )}"
                                        data-target="${
                                          initObject.targetElement
                                        }"
                                      />
                                  </div>
                                  <button class="embedded-build-forward button-container ${forwardClass}" data-target="${
      initObject.targetElement
    }"><span class="button">+</span></button>
                             </div>`;
    const type = embedContainer.getAttribute("data-type");
    const embedSpec = parseInt(
      initObject.steps[0].substring(
        initObject.steps[0].indexOf(separator) + 2,
        initObject.steps[0].indexOf(classSeparator)
      )
    );
    const embedClassHistory = [];
    const embedSpecHistory = [];
    const embedPvPHistory = [];
    const toggleState = embedContainer.getAttribute(
      "data-toggle-open-initial-position"
    );
    const enableLevels = embedContainer.hasAttribute("data-enable-levels");
    let embedHeader = "";
    let embedContent = "";
    let classInfo;
    let background;
    let toggleHtml = ``;
    let currentEmbedSpecPvPTalents = [];
    let userMessage = ``;
    classes.forEach((classData) => {
      if (classData.id === initObject.embedClass) {
        classInfo = classData;
      }
    });
    classInfo.specializations.forEach((specInfo) => {
      if (specInfo.id === embedSpec) {
        Object.keys(classesInfo[classInfo.id].specs).forEach((key) => {
          if (classesInfo[classInfo.id].specs[key].id === specInfo.id) {
            classInfo.spec = classesInfo[classInfo.id].specs[key];
            classInfo.spec.icon = specInfo.icon;
            classInfo.spec.color = specInfo.color;
            classInfo.spec.displayName = specInfo.displayName;
            classInfo.spec.name = specInfo.name;
          }
        });
      }
    });
    initObject.steps.forEach((step) => {
      embedClassHistory.push(
        step.substring(
          step.indexOf(classSeparator) + 1,
          step.indexOf(specSeparator)
        )
      );
      embedSpecHistory.push(
        step.substring(
          step.indexOf(specSeparator) + 1,
          step.indexOf(pvpSeparator)
        )
      );
      embedPvPHistory.push(step.substring(step.indexOf(pvpSeparator) + 1));
    });
    if (toggleState !== null && enableLevels) {
      toggleHtml += `<label class="toggle-left-side switch">
                              <div class="toggle-clip-path-container">
                                  <input type="checkbox" ${
                                    toggleState === "true" ? "checked" : ""
                                  }>
                                  <span class="slider"></span>  
                              </div>
                              <div class="toggle-tooltip"><span class="show">Show</span><span class="hide">Hide</span> Points by Level</div>
                           </label>`;
    }
    if (type) {
      if (type === "class") {
        embedHeader = `<div class="flex embed-header type-${type}">
                                 <div class="embed-class-icon-container">
                                    <div class="embed-class-icon icon_class_${
                                      classInfo.icon
                                    }"></div>
                                 </div>
                                 <div class="embed-name">${classInfo.name.replaceAll(
                                   "_",
                                   " "
                                 )} tree</div>
                               </div>
                               ${toggleHtml}
                               <a href="" target="_blank" class="embed-copy-export-string button-container"><span class="button">Copy Export String</span></a>
                               <a href="" target="_blank" class="embed-open-in-skill-builder-container button-container"><span class="button">Open in calculator</span></a>`;
        embedContent += `<div class="flex embed-content-container ${classInfo.displayName
          .toLowerCase()
          .replaceAll(" ", "-")}-${classInfo.spec.displayName
          .toLowerCase()
          .replace(" ", "-")}">`;
        embedClassHistory.forEach((step, index) => {
          const spentPoints = step.split("").filter((value) => {
            return value !== "0" && value !== "1";
          }).length;
          const requiredLvl = requiredLvlClass + 2 * (spentPoints - 1);
          let availablePoints = maxNrOfClassPoints - spentPoints;
          let treeContent = generateEmbedTreesContent(
            classInfo,
            step,
            "common"
          );
          if (availablePoints < 0) {
            availablePoints = 0;
          }
          background = `${classInfo.spec.color}`;
          embedContent += `<div class="point-allocation-breakdown flex"data-step-index="${
            index + 1
          }">
                                        <div class="left">
                                            <div class="skill-tree-points" style="background: ${background}">
                                                <p class="selected-name">points remaining:</p>
                                                <p class="spent-points">
                                                    <span class="variable">${availablePoints}</span>/<span>${maxNrOfClassPoints}</span>
                                                </p>
                                            </div>
                                            ${generateTalentBreakdownHtml(
                                              initObject,
                                              step,
                                              requiredLvl,
                                              type
                                            )}
                                        </div>
                                        <div class="right">
                                            <div class="skill-tree-lvl-required">
                                                <p class="selected-name">level required:</p>
                                                <p class="lvl-required" style="color: ${
                                                  classInfo.color
                                                }">${requiredLvl}</p>
                                                <div class="grid-container">
                                                    <div class="grid">${treeContent}</div>
                                                    <canvas class="embed-build-canvas" width="0" height="0"></canvas>
                                                    <div class="points-demarcator flex direction-column p1">
                                                        <div></div> 
                                                        <p>8</p>
                                                    </div>
                                                    <div class="points-demarcator flex direction-column p2">
                                                        <div></div>
                                                        <p>20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>`;
        });
        embedContent += `</div>`;
      } else {
        let hasPvPTalents = false;
        embedHeader = `<div class="flex embed-header">
                                 <div class="embed-class-icon-container type-spec">
                                    <div class="embed-spec-icon bg-${
                                      classInfo.spec.icon
                                    }"></div>
                                 </div>
                                 <div class="embed-name">${classInfo.spec.displayName.replaceAll(
                                   "_",
                                   " "
                                 )} tree</div>
                               </div>
                               ${toggleHtml}
                               <a href="" target="_blank" class="embed-copy-export-string button-container"><span class="button">Copy Export String</span></a>
                               <a href="" target="_blank" class="embed-open-in-skill-builder-container button-container"><span class="button">Open in calculator</span></a>`;
        embedContent += `<div class="flex embed-content-container ${classInfo.displayName.toLowerCase()}-${classInfo.spec.displayName
          .toLowerCase()
          .replace(" ", "-")}">`;
        embedPvPHistory.some((step) => {
          if (step.length) {
            hasPvPTalents = true;
            pvpTalents.forEach((pvpTalent) => {
              if (pvpTalent.specIds.includes(classInfo.spec.id)) {
                currentEmbedSpecPvPTalents.push(pvpTalent);
              }
            });
            return true;
          }
        });
        currentEmbedSpecPvPTalents = currentEmbedSpecPvPTalents.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        embedSpecHistory.forEach((step, index) => {
          const spentPoints = step.split("").filter((value) => {
            return value !== "0" && value !== "1";
          }).length;
          const requiredLvl = requiredLvlSpec + 2 * (spentPoints - 1);
          let availablePoints = maxNrOfSpecPoints - spentPoints;
          let treeContent = generateEmbedTreesContent(classInfo, step, "spec");
          let pvpSlotsHtml = ``;
          if (availablePoints < 0) {
            availablePoints = 0;
          }
          if (hasPvPTalents) {
            let pvpBuild = embedPvPHistory[index];
            let pvpTalentsArray = [];
            if (pvpBuild.length) {
              pvpTalentsArray = pvpBuild.match(/..?/g);
            }
            pvpSlotsHtml +=
              '<div class="pvp-slot-section flex"><h3>PvP Talents:</h3>';
            [0, 1, 2].forEach((slot, index) => {
              let tooltipId;
              let className;
              let backgroundImage;
              let isActive = false;
              pvpTalentsArray.forEach((talentEncoding) => {
                let talentIndex = talentEncoding[1];
                if (talentEncoding.indexOf(index) !== -1) {
                  tooltipId = `data-pvp-tooltip-id="${
                    currentEmbedSpecPvPTalents[
                      skillMappings.indexOf(talentIndex)
                    ].id
                  }"`;
                  className = `${classInfo.displayName
                    .toLowerCase()
                    .replace(" ", "_")}-pvp-${
                    currentEmbedSpecPvPTalents[
                      skillMappings.indexOf(talentIndex)
                    ].icon
                  }`;
                  backgroundImage = `style="background-image: url('${baseImgUrl}/${classInfo.name
                    .toLowerCase()
                    .replace(" ", "_")}-pvp-sprite.jpeg?v=${spriteVersion}')"`;
                  isActive = true;
                }
              });
              pvpSlotsHtml += `<div class="pvp-slot-container flex ${
                isActive ? "active" : ""
              }" data-index="${slot}" ${tooltipId ? tooltipId : ""}">
                                                        <div class="pvp-slot-border">
                                                            <div class="pvp-slot-inner">
                                                                <div class="pvp-talent-icon ${
                                                                  className
                                                                    ? className
                                                                    : ""
                                                                }" ${
                backgroundImage ? backgroundImage : ""
              }></div>
                                                            </div>
                                                        </div>
                                                    </div>`;
            });
            pvpSlotsHtml += "</div>";
          }
          background = `url('${baseImgUrl}/${
            classInfo.name
          }_${classInfo.spec.displayName
            .toLowerCase()
            .replace(" ", "-")}-bg-right.jpg') 95% 76px no-repeat, ${
            classInfo.spec.color
          };`;
          embedContent += `<div class="point-allocation-breakdown spec flex ${
            hasPvPTalents ? "has-pvp-talents" : ""
          }" data-step-index="${index + 1}">
                                        <div class="left" style="background: ${
                                          classInfo.spec.color
                                        }">
                                            <div class="skill-tree-points" style="background: ${
                                              classInfo.spec.color
                                            }">
                                                <p class="selected-name">points remaining:</p>
                                                <p class="spent-points">
                                                    <span class="variable">${availablePoints}</span>/<span>${maxNrOfSpecPoints}</span>
                                                </p>
                                            </div>
                                            ${generateTalentBreakdownHtml(
                                              initObject,
                                              step,
                                              requiredLvl,
                                              type
                                            )}
                                        </div>
                                        <div class="right">
                                            <div class="skill-tree-lvl-required">
                                                <p class="selected-name">level required:</p>
                                                <p class="lvl-required" style="color: ${
                                                  classInfo.color
                                                }">${requiredLvl}</p>
                                                <div class="grid-container">
                                                    <div class="grid">${treeContent}</div>
                                                    <canvas class="embed-build-canvas" width="0" height="0"></canvas>
                                                    <div class="points-demarcator flex direction-column p1">
                                                        <div></div> 
                                                        <p>8</p>
                                                    </div>
                                                    <div class="points-demarcator flex direction-column p2">
                                                        <div></div>
                                                        <p>20</p>
                                                    </div>
                                                </div>
                                            </div>
                                            ${pvpSlotsHtml}
                                        </div>
                                     </div>`;
        });
        embedContent += `</div>`;
      }
    }
    if (!document.querySelector("#user-message")) {
      userMessage += `<div id="user-message" class="flex">
                                <span></span>
                                <button></button>
                            </div>`;
    }
    embedContainer.innerHTML = `<div class="embed-content-wrapper ${
      toggleState === "false" || !enableLevels ? "hidden-left-side" : ""
    } ${
      importExportNYI ? "importexportnyi" : ""
    }" style="background: ${background}">${embedHeader}${embedControls}${embedContent}${userMessage}</div>`;
    userMessageHtml = document.querySelector("#user-message");
    setActiveStepAndOpenInSkillBuilderLink(initObject, type);
    setExportString(initObject);
    addEmbedListeners(initObject, type);
    drawEmbedTrees(initObject);
    generateSliders(initObject);
    addSlidersNavigationListeners(initObject);
    addTooltipGeneratingEvents(initObject);
    addPvPandImporExportEventListeners(
      embedContainer,
      currentEmbedSpecPvPTalents,
      false,
      classInfo
    );
    userMessageHtml?.querySelector("button").addEventListener("click", () => {
      userMessageHtml.classList.remove("visible");
    });
  }
  function updateBuild(type) {
    embeddedDragonflightInitObject.forEach((obj, index) => {
      const backwardElement = document.querySelector(
        `div[data-dragonflight-embedded-build="${obj.targetElement}"] .embedded-build-back`
      );
      const forwardElement = document.querySelector(
        `div[data-dragonflight-embedded-build="${obj.targetElement}"] .embedded-build-forward`
      );
      if (embeddedDragonflightInitObject[index].startingStep === 1) {
        backwardElement.classList.add("disabled");
        forwardElement.classList.remove("disabled");
      }
      if (
        embeddedDragonflightInitObject[index].startingStep ===
        embeddedDragonflightInitObject[index].steps.length
      ) {
        forwardElement.classList.add("disabled");
        backwardElement.classList.remove("disabled");
      }
      if (
        1 < embeddedDragonflightInitObject[index].startingStep &&
        embeddedDragonflightInitObject[index].startingStep <
          embeddedDragonflightInitObject[index].steps.length
      ) {
        backwardElement.classList.remove("disabled");
        forwardElement.classList.remove("disabled");
      }
      if (
        1 === embeddedDragonflightInitObject[index].startingStep &&
        embeddedDragonflightInitObject[index].startingStep ===
          embeddedDragonflightInitObject[index].steps.length
      ) {
        document
          .querySelector(
            `div[data-dragonflight-embedded-build="${obj.targetElement}"]`
          )
          .classList.add("controls-disabled");
      }
      document.querySelector(
        `div[data-dragonflight-embedded-build="${obj.targetElement}"] input[type="range"]`
      ).value = `${Math.floor(
        (100 /
          (embeddedDragonflightInitObject[index].sliderPositions.length - 1)) *
          (embeddedDragonflightInitObject[index].startingStep - 1)
      )}`;
      setActiveStepAndOpenInSkillBuilderLink(obj, type);
      setExportString(obj);
      drawEmbedTrees(obj);
    });
  }
  function setExportString(initObject) {
    let stepUrl = initObject.steps[initObject.startingStep - 1];
    let target = document.querySelector(
      `div[data-dragonflight-embedded-build="${initObject.targetElement}"] .embed-copy-export-string`
    );
    target.setAttribute("data-export-url", stepUrl);
  }
  function setActiveStepAndOpenInSkillBuilderLink(obj, type) {
    let stepUrl = obj.steps[obj.startingStep - 1];
    document
      .querySelector(
        `div[data-dragonflight-embedded-build="${obj.targetElement}"] .embed-open-in-skill-builder-container`
      )
      ?.setAttribute("href", stepUrl);
    document
      .querySelector(
        `div[data-dragonflight-embedded-build="${obj.targetElement}"] .point-allocation-breakdown.active`
      )
      ?.classList.remove("active");
    document
      .querySelector(
        `div[data-dragonflight-embedded-build="${obj.targetElement}"] .point-allocation-breakdown[data-step-index="${obj.startingStep}"]`
      )
      ?.classList.add("active");
  }
  function addEmbedListeners(initObj, type) {
    let backwardElement = document.querySelector(
      `div[data-dragonflight-embedded-build="${initObj.targetElement}"] .embedded-build-back`
    );
    let forwardElement = document.querySelector(
      `div[data-dragonflight-embedded-build="${initObj.targetElement}"] .embedded-build-forward`
    );
    let sliderElement = document.querySelector(
      `div[data-dragonflight-embedded-build="${initObj.targetElement}"] .embedded-build-steps-selector input`
    );
    let switchInputElement = document.querySelector(
      `div[data-dragonflight-embedded-build="${initObj.targetElement}"] .switch input`
    );
    let switchElement = document.querySelector(
      `div[data-dragonflight-embedded-build="${initObj.targetElement}"] .switch`
    );
    let generateEmbedStringElement = document.querySelector(
      `div[data-dragonflight-embedded-build="${initObj.targetElement}"] .embed-copy-export-string`
    );
    backwardElement.addEventListener("click", (event) => {
      const initObjectTarget = parseInt(
        event.target.getAttribute("data-target")
      );
      embeddedDragonflightInitObject.forEach((obj, index) => {
        if (obj.targetElement === initObjectTarget) {
          if (embeddedDragonflightInitObject[index].startingStep > 1) {
            embeddedDragonflightInitObject[index].previousStep =
              embeddedDragonflightInitObject[index].startingStep;
            embeddedDragonflightInitObject[index].startingStep -= 1;
          }
        }
      });
      updateBuild(type);
    });
    forwardElement.addEventListener("click", (event) => {
      const initObjectTarget = parseInt(
        event.target.getAttribute("data-target")
      );
      embeddedDragonflightInitObject.forEach((obj, index) => {
        if (obj.targetElement === initObjectTarget) {
          if (
            embeddedDragonflightInitObject[index].startingStep <=
            embeddedDragonflightInitObject[index].steps.length
          ) {
            embeddedDragonflightInitObject[index].previousStep =
              embeddedDragonflightInitObject[index].startingStep;
            embeddedDragonflightInitObject[index].startingStep += 1;
          }
        }
      });
      updateBuild(type);
    });
    sliderElement.addEventListener("input", (event) => {
      const initObjectTarget = parseInt(
        event.target.getAttribute("data-target")
      );
      embeddedDragonflightInitObject.forEach((obj, index) => {
        if (
          embeddedDragonflightInitObject[index].targetElement ===
          initObjectTarget
        ) {
          embeddedDragonflightInitObject[index].previousStep =
            embeddedDragonflightInitObject[index].startingStep;
          embeddedDragonflightInitObject[index].startingStep =
            event.target.value /
              Math.floor(100 / (obj.sliderPositions.length - 1)) +
            1;
        }
      });
      updateBuild(type);
    });
    switchInputElement?.addEventListener("click", (event) => {
      let target = document.querySelector(
        `div[data-dragonflight-embedded-build="${initObj.targetElement}"] .embed-content-wrapper`
      );
      target.className = `embed-content-wrapper ${
        switchInputElement.checked ? "" : "hidden-left-side"
      }`;
      if (classCanvas && specCanvas) {
        recalculateClientDimensions();
        drawTrees();
      }
      if (typeof embeddedDragonflightInitObject !== "undefined") {
        embeddedDragonflightInitObject.forEach((initObject) => {
          drawEmbedTrees(initObject);
        });
      }
    });
    switchElement?.addEventListener("mouseenter", (event) => {
      addTooltipPositioning(
        event,
        switchElement.querySelector(".toggle-tooltip")
      );
      switchElement.querySelector(".toggle-tooltip").classList.add("visible");
    });
    switchElement?.addEventListener("mouseleave", (event) => {
      switchElement
        .querySelector(".toggle-tooltip")
        .classList.remove("visible");
    });
    switchElement?.addEventListener("mousemove", (event) => {
      addTooltipPositioning(
        event,
        switchElement.querySelector(".toggle-tooltip"),
        -85,
        -65
      );
    });
    generateEmbedStringElement.addEventListener("click", (event) => {
      let exportString;
      stopPropagation(event);
      exportString = generateExportString(
        generateEmbedStringElement.getAttribute("data-export-url")
      );
      navigator.clipboard
        .writeText(exportString)
        .then(() => {
          showMessage("Export String copied", "success");
        })
        .catch((err) => {
          showMessage(
            "The String Export functionality is currently unavailable.",
            "error"
          );
          console.log(err);
        });
    });
  }
  function talentSetup(spec, talents, build) {
    let spentNrOfPointsPerTree = 0;
    Object.keys(talents).forEach((key, index) => {
      talents[key].index = skillMappings[index];
      talents[key].pointsAllocated = [
        ...build.matchAll(talents[key].index),
      ].length;
      spentNrOfPointsPerTree += talents[key].pointsAllocated;
      if (talents[key].spells && talents[key].spells.length === 1) {
        talents[key].maxPoints = talents[key].spells[0].maxRanks;
      } else {
        talents[key].maxPoints = 1;
      }
    });
  }
  function generateEmbedTreesContent(classInfo, build, type) {
    let talentsGridHtml = "";
    let imgName = `${classInfo.displayName
      .replace(" ", "_")
      .toLowerCase()}_${classInfo.spec.displayName
      .replace(" ", "-")
      .toLowerCase()}`;
    let spentNrOfPointsPerTree = 0;
    let availablePointsPerTree;
    let remainingPoints;
    let urlPart = build;
    let talents;
    if (type === "common") {
      availablePointsPerTree = maxNrOfClassPoints;
      talents = classInfo.spec.classNodes;
    } else {
      availablePointsPerTree = maxNrOfSpecPoints;
      talents = classInfo.spec.specNodes;
    }
    talentSetup(classInfo.spec, talents, build);
    remainingPoints = availablePointsPerTree - spentNrOfPointsPerTree;
    Object.keys(talents).forEach((key) => {
      let skillIconHtml = "";
      let availableForPicking = false;
      let atLeastOneDependencyMaxedOut = false;
      let hasDependencyThatIsAFreeTalent = false;
      let isBracketOpen;
      let activeChoice = false;
      let activeChoiceSelection;
      talents[key].spentAmountRequired = talents[key].spentAmountRequired || 0;
      isBracketOpen =
        spentNrOfPointsPerTree >= talents[key].spentAmountRequired;
      talents[key].previousNodeIds.forEach((dependencyId) => {
        if (
          talents[dependencyId].pointsAllocated ===
          talents[dependencyId].maxPoints
        ) {
          atLeastOneDependencyMaxedOut = true;
        }
        if (talents[dependencyId].alreadyMaxedOut) {
          hasDependencyThatIsAFreeTalent = true;
        }
      });
      if (
        talents[key].pointsAllocated &&
        isBracketOpen &&
        (talents[key].previousNodeIds.length === 0 ||
          atLeastOneDependencyMaxedOut ||
          hasDependencyThatIsAFreeTalent)
      ) {
        availableForPicking = true;
      }
      let maxedOut = talents[key].maxPoints === talents[key].pointsAllocated;
      let isSelected = talents[key].pointsAllocated > 0;
      if (talents[key].spells.length === 1) {
        skillIconHtml += `<div class="skill-icon ${imgName}-${talents[key].spells[0].icon}" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"></div>`;
      } else {
        if (talents[key].type === "choice") {
          activeChoiceSelection = urlPart;
          activeChoiceSelection = activeChoiceSelection.match(
            new RegExp(`${talents[key].index}[0-9]`)
          );
          if (activeChoiceSelection) {
            activeChoiceSelection = parseInt(
              activeChoiceSelection[0].substring(1)
            );
            activeChoice = true;
          }
          skillIconHtml += `<div class="skill-icon">
                                    <div class="left-skill ${
                                      activeChoice && !activeChoiceSelection
                                        ? "selected"
                                        : ""
                                    } ${imgName}-${
            talents[key].spells[0].icon
          }" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"
                                        data-skill-pos="${
                                          talents[key].index
                                        }" data-tree-type="${
            type === "common" ? "class" : "spec"
          }" data-choice-id="0" data-tooltip-id="${key}" data-tooltip-type="${
            type === "common" ? "common" : "spec"
          }" data-tooltip-spell-index="0"></div>
                                    <div class="right-skill ${
                                      activeChoice && activeChoiceSelection
                                        ? "selected"
                                        : ""
                                    } ${imgName}-${
            talents[key].spells[1].icon
          }" data-tooltip-id="${key}" style="background-image: url('${baseImgUrl}/${imgName}-sprite.jpeg?v=${spriteVersion}')"
                                        data-skill-pos="${
                                          talents[key].index
                                        }" data-tree-type="${
            type === "common" ? "class" : "spec"
          }" data-choice-id="1" data-tooltip-id="${key}" data-tooltip-type="${
            type === "common" ? "common" : "spec"
          }" data-tooltip-spell-index="1"></div>
                                  </div>`;
        }
      }
      talentsGridHtml += `<div class="skill-cell ${
        typeOfSkill[talents[key].type]
      } ${
        talents[key].alreadyMaxedOut
          ? `default-spec-${classInfo.spec.name}`
          : ""
      } ${availableForPicking ? "available-for-picking" : ""} ${
        maxedOut || isSelected ? "maxed-out" : ""
      }"
                                    data-row="${talents[key].row}"
                                    data-column="${talents[key].column}"
                                    data-node-id="${key}"
                                    data-tooltip-id="${key}"
                                    data-tooltip-type="${
                                      type === "common" ? "common" : "spec"
                                    }"
                                    data-tree-type="${
                                      type === "common" ? "class" : "spec"
                                    }"
                                    data-skill-pos="${talents[key].index}"
                                    data-max-points="${talents[key].maxPoints}"
                                    data-node-type="${
                                      typeOfSkill[talents[key].type]
                                    }">
                                    <div class="skill-container">
                                        <div class="skill ${
                                          typeOfSkill[talents[key].type]
                                        }">
                                            <div class="clip-container">${skillIconHtml}</div>
                                        </div>
                                        <div class="skill-point-container"><span>${
                                          talents[key].pointsAllocated
                                        }</span>/${talents[key].maxPoints}</div>
                                    </div>
                                </div>`;
    });
    return talentsGridHtml;
  }
  function drawAllEmbedTrees() {
    embeddedDragonflightInitObject.forEach((initObject) => {
      drawEmbedTrees(initObject);
    });
  }
  function drawEmbedTrees(initObject) {
    document
      .querySelectorAll(
        `div[data-dragonflight-embedded-build="${initObject.targetElement}"] .point-allocation-breakdown.active .embed-build-canvas`
      )
      .forEach((element) => {
        const parent = element.parentElement;
        const classWidth = parent.clientWidth;
        const classHeight = parent.clientHeight;
        if (classHeight === 0 || classWidth === 0) return;
        const scale = window.devicePixelRatio;
        const strokeWidth = 4;
        let cCtx, nodes;
        element.style.width = classWidth + "px";
        element.style.height = classHeight + "px";
        element.width = Math.floor(classWidth * scale);
        element.height = Math.floor(classHeight * scale);
        cCtx = element.getContext("2d");
        cCtx.scale(scale, scale);
        cCtx.strokeStyle = lineColorGray;
        cCtx.lineWidth = strokeWidth;
        nodes = document.querySelectorAll(
          `div[data-dragonflight-embedded-build="${initObject.targetElement}"] .point-allocation-breakdown.active .skill-cell`
        );
        drawEmbedLines(initObject, cCtx, nodes);
        initObject.drawn = true;
      });
  }
  function drawEmbedLines(initObject, context, nodes) {
    let specId = parseInt(
      initObject.steps[initObject.startingStep - 1].substring(
        initObject.steps[initObject.startingStep - 1].indexOf(separator) + 2,
        initObject.steps[initObject.startingStep - 1].indexOf(classSeparator)
      )
    );
    let classId = parseInt(
      initObject.steps[initObject.startingStep - 1].substring(
        initObject.steps[initObject.startingStep - 1].lastIndexOf(
          historySeparator
        ) + 1,
        initObject.steps[initObject.startingStep - 1].indexOf(separator)
      )
    );
    let specData;
    let classData;
    let dependencyObject = {};
    let spentPointsInTree;
    let tree;
    let specName;
    const treeType = document
      .querySelector(
        `div[data-dragonflight-embedded-build="${initObject.targetElement}"]`
      )
      .getAttribute("data-type");
    const remainingPoints = parseInt(
      document.querySelector(
        `div[data-dragonflight-embedded-build="${initObject.targetElement}"] .point-allocation-breakdown.active .variable`
      ).innerHTML
    );
    const classInfo = classesInfo[classId];
    Object.keys(classInfo.specs).forEach((key) => {
      if (classInfo.specs[key].id === specId) {
        specData = classInfo.specs[key];
      }
    });
    Object.keys(classInfo.specs).forEach((key) => {
      if (classInfo.specs[key].id === specId) {
        let build;
        specData = classInfo.specs[key];
        build = initObject.steps[initObject.startingStep - 1].substring(
          initObject.steps[initObject.startingStep - 1].indexOf(
            classSeparator
          ) + 1,
          initObject.steps[initObject.startingStep - 1].indexOf(specSeparator)
        );
        Object.keys(specData.classNodes).forEach((key, index) => {
          specData.classNodes[key].pointsAllocated = [
            ...build.matchAll(specData.classNodes[key].index),
          ].length;
        });
        build = initObject.steps[initObject.startingStep - 1].substring(
          initObject.steps[initObject.startingStep - 1].indexOf(specSeparator) +
            1,
          initObject.steps[initObject.startingStep - 1].indexOf(pvpSeparator)
        );
        Object.keys(specData.specNodes).forEach((key, index) => {
          specData.specNodes[key].pointsAllocated = [
            ...build.matchAll(specData.specNodes[key].index),
          ].length;
        });
      }
    });
    specName = specData.name.toLowerCase();
    if (treeType === "class") {
      spentPointsInTree = maxNrOfClassPoints - remainingPoints;
      tree = specData.classNodes;
    } else {
      spentPointsInTree = maxNrOfClassPoints - remainingPoints;
      tree = specData.specNodes;
    }
    nodes.forEach((node) => {
      const id = node.getAttribute("data-tooltip-id");
      dependencyObject[id] = {
        x: node.offsetLeft + Math.floor(node.clientWidth / 2),
        y: node.offsetTop + Math.floor(node.clientHeight / 2),
      };
    });
    nodes.forEach((node) => {
      const id = node.getAttribute("data-tooltip-id");
      let isBracketOpen;
      isBracketOpen = spentPointsInTree >= tree[id].spentAmountRequired;
      dependencyObject[id] = {
        x: node.offsetLeft + Math.floor(node.clientWidth / 2),
        y: node.offsetTop + Math.floor(node.clientHeight / 2),
      };
      if (tree[id].previousNodeIds.length) {
        tree[id].previousNodeIds.forEach((requiredNode) => {
          context.beginPath();
          context.moveTo(dependencyObject[id].x, dependencyObject[id].y);
          context.lineTo(
            dependencyObject[requiredNode].x,
            dependencyObject[requiredNode].y
          );
          let isYellowLine =
            (tree[id].pointsAllocated || tree[id].alreadyMaxedOut) &&
            isBracketOpen &&
            (tree[requiredNode].alreadyMaxedOut ||
              tree[requiredNode].maxPoints ===
                tree[requiredNode].pointsAllocated);
          if (isYellowLine) {
            context.strokeStyle = lineColorYellow;
          } else {
            context.strokeStyle = lineColorGray;
          }
          context.stroke();
          context.closePath();
        });
      }
    });
  }
  function generateTalentBreakdownHtml(initObject, step, currentLvl, type) {
    let skillMappingsPerStep = [];
    let startingLvL;
    let pointsInOrderOfAllocation = step.split("").filter((s) => {
      if (parseInt(s) !== 0 && parseInt(s) !== 1) {
        return s;
      }
    });
    let classId = parseInt(
      initObject.steps[initObject.startingStep - 1].substring(
        initObject.steps[initObject.startingStep - 1].lastIndexOf(
          historySeparator
        ) + 1,
        initObject.steps[initObject.startingStep - 1].indexOf(separator)
      )
    );
    let specId = parseInt(
      initObject.steps[initObject.startingStep - 1].substring(
        initObject.steps[initObject.startingStep - 1].indexOf(separator) + 2,
        initObject.steps[initObject.startingStep - 1].indexOf(classSeparator)
      )
    );
    let cTalents;
    let sTalents;
    let talents = [];
    let cTalentTreeName;
    let sTalentTreeName;
    let talentTreeName;
    let listContent = '<div class="skill-point-attribution-list"><ul>';
    let sliderHtmlSteps = [];
    let sliderHtml = ``;
    let sliderNavigation = ``;
    let nrOfSlides = 0;
    let specName;
    Object.keys(classesInfo).forEach((key) => {
      Object.keys(classesInfo[key].specs).forEach((specSlug) => {
        if (classesInfo[key].specs[specSlug].id === specId) {
          sTalents = JSON.parse(
            JSON.stringify(classesInfo[key].specs[specSlug].specNodes)
          );
          sTalentTreeName = specSlug;
          cTalents = JSON.parse(
            JSON.stringify(classesInfo[key].specs[specSlug].classNodes)
          );
          cTalentTreeName = classesInfo[key].name
            .toLowerCase()
            .replaceAll(" ", "_");
        }
      });
    });
    if (type === "class") {
      startingLvL = requiredLvlClass;
      talents = cTalents;
    } else {
      startingLvL = requiredLvlSpec;
      talents = sTalents;
    }
    talentTreeName = `${cTalentTreeName}_${sTalentTreeName}`;
    pointsInOrderOfAllocation.forEach((letter, index) => {
      skillMappingsPerStep.push({});
      skillMappingsPerStep[index][letter] = startingLvL + index * 2;
    });
    specName = sTalentTreeName.substring(sTalentTreeName.lastIndexOf("_") + 1);
    skillMappingsPerStep.forEach((letter) => {
      Object.keys(letter).forEach((key) => {
        let spellName;
        let spellIcon;
        let spellTooltipId;
        let skillType;
        let activeChoiceSelection = null;
        let spellEntry = ``;
        Object.keys(talents).some((tKey) => {
          if (key === talents[tKey].index) {
            if (talents[tKey].type !== "choice") {
              spellName = talents[tKey].spells[0].name;
              spellIcon = talents[tKey].spells[0].icon;
            } else {
              activeChoiceSelection = step.match(
                new RegExp(`${talents[tKey].index}[0-9]`)
              );
              if (activeChoiceSelection) {
                activeChoiceSelection = parseInt(
                  activeChoiceSelection[0].substring(1)
                );
              }
              spellName = talents[tKey].spells[activeChoiceSelection].name;
              spellIcon = talents[tKey].spells[activeChoiceSelection].icon;
            }
            skillType = typeOfSkill[talents[tKey].type];
            spellTooltipId = talents[tKey].id;
            return true;
          }
        });
        spellEntry = `<div class="point-lvl">Lv. ${letter[key]}:</div>
                               <div class="name-of-spell flex">
                                    <div class="sc-container ${skillType}">
                                        <div class="sc skill ${skillType}" 
                                        data-tooltip-class="${classId}" 
                                        data-tooltip-spec="${specId}" 
                                        data-tooltip-type="${
                                          type === "class" ? "common" : type
                                        }" 
                                        data-tooltip-id="${spellTooltipId}" 
                                        data-tooltip-embed="true"
                                        ${
                                          activeChoiceSelection !== null
                                            ? 'data-tooltip-spell-index="' +
                                              activeChoiceSelection +
                                              '"'
                                            : ""
                                        }>
                                            <div class="clip-container">
                                                <div class="skill-icon ${talentTreeName}-${spellIcon}" style="background-image: url('${baseImgUrl}/${talentTreeName}-sprite.jpeg?v=${spriteVersion}')"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="name"
                                        data-tooltip-class="${classId}" 
                                        data-tooltip-spec="${specId}" 
                                        data-tooltip-type="${
                                          type === "class" ? "common" : type
                                        }" 
                                        data-tooltip-id="${spellTooltipId}" 
                                        data-tooltip-embed="true"
                                        ${
                                          activeChoiceSelection !== null
                                            ? 'data-tooltip-spell-index="' +
                                              activeChoiceSelection +
                                              '"'
                                            : ""
                                        }>${spellName}</div>
                               </div>`;
        listContent += `<li class="list-spell flex highlight-in-tree" data-spell-index="${key}">
                                       ${spellEntry}
                                    </li>`;
        sliderHtmlSteps.push(
          `<div class="spell-entry flex highlight-in-tree" data-spell-index="${key}">${spellEntry}</div>`
        );
      });
    });
    listContent += "</ul></div>";
    sliderHtmlSteps.forEach((spellEntry, index) => {
      if (index === 0) {
        sliderHtml += `<div class='slide'>`;
        sliderHtml += spellEntry;
        sliderNavigation += `<div class="slide-navigation active" data-slide-index="${nrOfSlides}"><div class="inner-navigation"></div></div>`;
        nrOfSlides++;
      } else {
        sliderHtml += spellEntry;
        if ((index + 1) % 5 === 0 || index + 1 === sliderHtmlSteps.length) {
          sliderHtml += `</div>`;
        }
        if ((index + 1) % 5 === 0 && index + 1 !== sliderHtmlSteps.length) {
          sliderHtml += `<div class='slide'>`;
          sliderNavigation += `<div class="slide-navigation" data-slide-index="${nrOfSlides}"><div class="inner-navigation"></div></div>`;
          nrOfSlides++;
        }
      }
    });
    sliderHtml = `<div class="slider-container">${sliderHtml}</div>
                      <div class="slider-navigation flex">${sliderNavigation}</div>`;
    return listContent + sliderHtml;
  }
  function generateSliders(initObject) {
    initObject.steps.forEach((step, index) => {
      const _C = document.querySelector(
          `div[data-dragonflight-embedded-build="${
            initObject.targetElement
          }"] div[data-step-index="${index + 1}"] .slider-container`
        ),
        N = _C.children.length,
        NF = 15,
        _S = document.querySelector(
          `div[data-dragonflight-embedded-build="${
            initObject.targetElement
          }"] div[data-step-index="${index + 1}"] .slider-navigation`
        );
      let i = 0,
        x0 = null,
        locked = false,
        w,
        ini,
        fin,
        rID = null;
      function stopAni() {
        cancelAnimationFrame(rID);
        rID = null;
      }
      function ani(cf = 0) {
        let iValue = ini + ((fin - ini) * cf) / NF;
        _C.style.setProperty("--i", iValue);
        _S.querySelectorAll(".slide-navigation").forEach((slide) => {
          slide.classList.remove("active");
        });
        _S.querySelector(
          `.slide-navigation[data-slide-index="${iValue}"]`
        )?.classList.add("active");
        if (cf === NF) {
          stopAni();
          return;
        }
        rID = requestAnimationFrame(ani.bind(this, ++cf));
      }
      function unify(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
      }
      function lock(e) {
        x0 = unify(e).clientX;
        locked = true;
      }
      function drag(e) {
        e.preventDefault();
        if (locked) {
          let dx = unify(e).clientX - x0,
            f = +(dx / w).toFixed(2);
          _C.style.setProperty("--i", i - f);
        }
      }
      function move(e) {
        if (locked) {
          let dx = unify(e).clientX - x0,
            s = Math.sign(dx),
            f = +((s * dx) / w).toFixed(2);
          ini = i - s * f;
          if ((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > 0.2) {
            i -= s;
            f = 1 - f;
          }
          fin = i;
          ani();
          x0 = null;
          locked = false;
        }
      }
      function size() {
        w = window.innerWidth;
      }
      size();
      _C.style.setProperty("--n", N);
      addEventListener("resize", size, false);
      _C.addEventListener("mousedown", lock, false);
      _C.addEventListener("touchstart", lock, false);
      _C.addEventListener("mousemove", drag, false);
      _C.addEventListener("touchmove", drag, false);
      _C.addEventListener("mouseup", move, false);
      _C.addEventListener("touchend", move, false);
    });
  }
  function addSlidersNavigationListeners(initObject) {
    document
      .querySelectorAll(
        `div[data-dragonflight-embedded-build="${initObject.targetElement}"] .slide-navigation`
      )
      .forEach((slide) => {
        slide.addEventListener("click", () => {
          let slideIndex = slide.getAttribute("data-slide-index");
          slide.parentElement
            .querySelectorAll(".slide-navigation")
            .forEach((sl) => {
              sl.classList.remove("active");
            });
          slide.parentElement.parentElement
            .querySelector(".slider-container")
            .style.setProperty("--i", slideIndex);
          slide.classList.add("active");
        });
      });
  }
  async function convertExportStringToBuild(exportString) {
    let binaryArray = new BinaryArrayReader(exportString);
    let classId;
    let specId;
    let classNotLoaded;
    let talentNodeIds = [];
    let buildString = "";
    let importClass;
    let importSpec;
    let classString = `${classSeparator}`;
    let specString = `${specSeparator}`;
    let specNameIdPair = {};
    if (!exportString) return;
    binaryArray.read(8);
    specId = binaryArray.read(16);
    for (let i = 0; i < 16; i++) {
      binaryArray.read(8);
    }
    Object.keys(classesInfo).some((classKey) => {
      Object.keys(classesInfo[classKey].specs).some((treeKey) => {
        if (parseInt(classesInfo[classKey].specs[treeKey].id) === specId) {
          classId = parseInt(classKey);
          return true;
        }
      });
      if (classId) {
        return true;
      }
    });
    if (!classId) {
      classes.some((cls) => {
        cls.specializations.some((spec) => {
          if (spec.id === specId) {
            classNotLoaded = cls;
            return true;
          }
        });
        if (classNotLoaded) return true;
      });
    }
    if (classNotLoaded) {
      classesInfo[classNotLoaded.id] = await fetchFile(
        `${baseDbUrl}/${classNotLoaded.name}.json?v=${jsonVersion}`
      );
      classId = classNotLoaded.id;
    }
    if (!classesInfo[classId]) {
      alert("Invalid export string!");
      return;
    }
    Object.keys(classesInfo[classId].specs).forEach((treeKey) => {
      specNameIdPair[treeKey] = classesInfo[classId].specs[treeKey].name;
      if (specNameIdPair[treeKey])
        specNameIdPair[treeKey] = specNameIdPair[treeKey].toLowerCase();
      Object.keys(classesInfo[classId].specs[treeKey].classNodes).forEach(
        (talentKey) => {
          talentNodeIds.push(parseInt(talentKey));
        }
      );
      Object.keys(classesInfo[classId].specs[treeKey].specNodes).forEach(
        (talentKey) => {
          talentNodeIds.push(parseInt(talentKey));
        }
      );
    });
    talentNodeIds.push(...classesInfo[classId].extraNodeIds);
    talentNodeIds = [...new Set(talentNodeIds)];
    talentNodeIds.sort();
    Object.keys(classesInfo[classId].specs).forEach((specSlug) => {
      if (classesInfo[classId].specs[specSlug].id === specId) {
        Object.keys(classesInfo[classId].specs[specSlug].specNodes).forEach(
          (talentKey, index) => {
            classesInfo[classId].specs[specSlug].specNodes[talentKey].index =
              skillMappings[index];
            if (
              classesInfo[classId].specs[specSlug].specNodes[talentKey].spells
                .length === 1
            ) {
              classesInfo[classId].specs[specSlug].specNodes[
                talentKey
              ].maxPoints =
                classesInfo[classId].specs[specSlug].specNodes[
                  talentKey
                ].spells[0].maxRanks;
            } else {
              classesInfo[classId].specs[specSlug].specNodes[
                talentKey
              ].maxPoints = 1;
            }
          }
        );
        Object.keys(classesInfo[classId].specs[specSlug].classNodes).forEach(
          (talentKey, index) => {
            classesInfo[classId].specs[specSlug].classNodes[talentKey].index =
              skillMappings[index];
            if (
              classesInfo[classId].specs[specSlug].classNodes[talentKey].spells
                .length === 1
            ) {
              classesInfo[classId].specs[specSlug].classNodes[
                talentKey
              ].maxPoints =
                classesInfo[classId].specs[specSlug].classNodes[
                  talentKey
                ].spells[0].maxRanks;
            } else {
              classesInfo[classId].specs[specSlug].classNodes[
                talentKey
              ].maxPoints = 1;
            }
          }
        );
      }
      if (classesInfo[classId].specs[specSlug].id === specId) {
        importClass = classesInfo[classId].specs[specSlug].classNodes;
        importSpec = classesInfo[classId].specs[specSlug].specNodes;
      }
    });
    buildString += `${historySeparator}${classId}${separator}${specId}`;
    if (classId == 12 || classId == 13) binaryArray.read(1);
    for (let i = 0; i < talentNodeIds.length; i++) {
      let isSelectedNode = binaryArray.read(1);
      let targetNodeInCurrentBuild;
      let treeType;
      if (importClass[talentNodeIds[i]]) {
        targetNodeInCurrentBuild = importClass[talentNodeIds[i]];
        treeType = "class";
      }
      if (importSpec[talentNodeIds[i]]) {
        targetNodeInCurrentBuild = importSpec[talentNodeIds[i]];
        treeType = "spec";
      }
      if (isSelectedNode === 1) {
        if (binaryArray.read(1) === 1) {
          let pointsInvested = binaryArray.read(6);
          if (treeType === "class") {
            for (let j = 0; j < pointsInvested; j++) {
              classString += `${targetNodeInCurrentBuild.index}`;
            }
          } else {
            for (let j = 0; j < pointsInvested; j++) {
              specString += `${targetNodeInCurrentBuild.index}`;
            }
          }
        } else {
          if (treeType === "class") {
            for (let j = 0; j < targetNodeInCurrentBuild.maxPoints; j++) {
              classString += `${targetNodeInCurrentBuild.index}`;
            }
          } else {
            for (let j = 0; j < targetNodeInCurrentBuild.maxPoints; j++) {
              specString += `${targetNodeInCurrentBuild.index}`;
            }
          }
        }
        if (binaryArray.read(1) === 1) {
          let choice = binaryArray.read(2);
          if (treeType === "class") {
            classString = classString.replace(
              targetNodeInCurrentBuild.index,
              `${targetNodeInCurrentBuild.index}${choice}`
            );
          } else {
            specString = specString.replace(
              targetNodeInCurrentBuild.index,
              `${targetNodeInCurrentBuild.index}${choice}`
            );
          }
        }
      }
    }
    buildString += `${classString}${specString}${pvpSeparator}`;
    containerHtml
      .querySelector(`.playable-class[data-class-id="${classId}"]`)
      .click();
    containerHtml
      .querySelector(`.playable-spec[data-class-id="${specId}"]`)
      .click();
    importInput.value = "";
    buildHistory({ type: "import-string", url: buildString });
  }
  class BinaryArrayReader {
    constructor(exportString) {
      this.array = [];
      for (let i = 0; i < exportString.length; i++) {
        let value = base64Table.indexOf(exportString[i]);
        let valueBitArray = [
          (value >> 5) & 1,
          (value >> 4) & 1,
          (value >> 3) & 1,
          (value >> 2) & 1,
          (value >> 1) & 1,
          value & 1,
        ];
        this.array.push(valueBitArray);
      }
      this.arrayIndex = 0;
      this.bitCursor = 5;
    }
    read(width) {
      let resultArray = [];
      let readBits = 0;
      while (readBits < width) {
        if (this.array[this.arrayIndex]) {
          resultArray.unshift(this.array[this.arrayIndex][this.bitCursor]);
          if (this.bitCursor === 0) {
            this.bitCursor = 5;
            this.arrayIndex += 1;
          } else {
            this.bitCursor -= 1;
          }
        }
        readBits += 1;
      }
      let result = 0;
      for (let i = 0; i < width; i++) {
        result += resultArray[width - 1 - i] << i;
      }
      return result;
    }
  }
  function generateExportString(url) {
    let specName;
    let returnExportString = "";
    let classBuild;
    let specBuild;
    let classExportConfigArray = [];
    let classId;
    let specId;
    if (url) {
      classBuild = url.substring(
        url.indexOf(classSeparator) + 1,
        url.indexOf(specSeparator)
      );
      specBuild = url.substring(
        url.indexOf(specSeparator) + 1,
        url.indexOf(pvpSeparator)
      );
      classId = parseInt(
        url.substring(url.indexOf(historySeparator) + 1, url.indexOf(separator))
      );
      specId = parseInt(
        url.substring(url.indexOf(separator) + 2, url.indexOf(classSeparator))
      );
    }
    classes.forEach((cls) => {
      cls.specializations.forEach((spec) => {
        if (spec.id === specId) {
          specName = spec.name.toLowerCase().replace(" ", "-");
        }
      });
    });
    Object.keys(classesInfo).forEach((classKey) => {
      if (parseInt(classKey) !== classId) return;
      Object.keys(classesInfo[classKey].specs).forEach((specSlug) => {
        Object.keys(classesInfo[classKey].specs[specSlug].specNodes).forEach(
          (talentKey, index) => {
            classesInfo[classKey].specs[specSlug].specNodes[talentKey].index =
              skillMappings[index];
          }
        );
        Object.keys(classesInfo[classKey].specs[specSlug].classNodes).forEach(
          (talentKey, index) => {
            classesInfo[classKey].specs[specSlug].classNodes[talentKey].index =
              skillMappings[index];
          }
        );
        if (classesInfo[classKey].specs[specSlug].id === specId) {
          classesInfo[classKey].extraNodeIds.forEach((extraNodeId) => {
            let obj = {};
            obj[extraNodeId] = { id: extraNodeId, isSelected: false };
            classExportConfigArray.push(obj);
          });
          Object.keys(classesInfo[classKey].specs[specSlug].classNodes).forEach(
            (talentKey) => {
              if (
                classBuild.indexOf(
                  classesInfo[classKey].specs[specSlug].classNodes[talentKey]
                    .index
                ) !== -1
              ) {
                if (
                  classesInfo[classKey].specs[specSlug].classNodes[talentKey]
                    .type === "square" ||
                  classesInfo[classKey].specs[specSlug].classNodes[talentKey]
                    .type === "round"
                ) {
                  const nrOfPoints = [
                    ...classBuild.matchAll(
                      classesInfo[classKey].specs[specSlug].classNodes[
                        talentKey
                      ].index
                    ),
                  ].length;
                  let obj = {};
                  if (
                    nrOfPoints ===
                    classesInfo[classKey].specs[specSlug].classNodes[talentKey]
                      .spells[0].maxRanks
                  ) {
                    obj[talentKey] = {
                      id: parseInt(talentKey),
                      isSelected: true,
                      isPartiallyFilled: false,
                      isChoiceNode: false,
                    };
                  } else {
                    obj[talentKey] = {
                      id: parseInt(talentKey),
                      isSelected: true,
                      isPartiallyFilled: true,
                      pointsInvested: nrOfPoints,
                      isChoiceNode: false,
                    };
                  }
                  classExportConfigArray.push(obj);
                }
                if (
                  classesInfo[classKey].specs[specSlug].classNodes[talentKey]
                    .type === "choice"
                ) {
                  const pos = classBuild.indexOf(
                    classesInfo[classKey].specs[specSlug].classNodes[talentKey]
                      .index
                  );
                  const activeChoice = parseInt(
                    classBuild.slice(pos + 1, pos + 2)
                  );
                  let obj = {};
                  obj[talentKey] = {
                    id: parseInt(talentKey),
                    isSelected: true,
                    isPartiallyFilled: false,
                    isChoiceNode: true,
                    choiceEntrySelected: activeChoice,
                  };
                  classExportConfigArray.push(obj);
                }
              } else {
                let obj = {};
                obj[talentKey] = { id: parseInt(talentKey), isSelected: false };
                classExportConfigArray.push(obj);
              }
            }
          );
          Object.keys(classesInfo[classKey].specs[specSlug].specNodes).forEach(
            (talentKey) => {
              if (
                specBuild.indexOf(
                  classesInfo[classKey].specs[specSlug].specNodes[talentKey]
                    .index
                ) !== -1
              ) {
                if (
                  classesInfo[classKey].specs[specSlug].specNodes[talentKey]
                    .type === "square" ||
                  classesInfo[classKey].specs[specSlug].specNodes[talentKey]
                    .type === "round"
                ) {
                  const nrOfPoints = [
                    ...specBuild.matchAll(
                      classesInfo[classKey].specs[specSlug].specNodes[talentKey]
                        .index
                    ),
                  ].length;
                  let obj = {};
                  if (
                    nrOfPoints ===
                    classesInfo[classKey].specs[specSlug].specNodes[talentKey]
                      .maxPoints
                  ) {
                    obj[talentKey] = {
                      id: parseInt(talentKey),
                      isSelected: true,
                      isPartiallyFilled: false,
                      isChoiceNode: false,
                    };
                  } else {
                    obj[talentKey] = {
                      id: parseInt(talentKey),
                      isSelected: true,
                      isPartiallyFilled: true,
                      pointsInvested: nrOfPoints,
                      isChoiceNode: false,
                    };
                  }
                  classExportConfigArray.push(obj);
                }
                if (
                  classesInfo[classKey].specs[specSlug].specNodes[talentKey]
                    .type === "choice"
                ) {
                  const pos = specBuild.indexOf(
                    classesInfo[classKey].specs[specSlug].specNodes[talentKey]
                      .index
                  );
                  const activeChoice = parseInt(
                    specBuild.slice(pos + 1, pos + 2)
                  );
                  let obj = {};
                  obj[talentKey] = {
                    id: parseInt(talentKey),
                    isSelected: true,
                    isPartiallyFilled: false,
                    isChoiceNode: true,
                    choiceEntrySelected: activeChoice,
                  };
                  classExportConfigArray.push(obj);
                }
              } else {
                let obj = {};
                obj[talentKey] = { id: parseInt(talentKey), isSelected: false };
                classExportConfigArray.push(obj);
              }
            }
          );
        } else {
          Object.keys(classesInfo[classKey].specs[specSlug].specNodes).forEach(
            (talentKey) => {
              let obj = {};
              obj[talentKey] = { id: parseInt(talentKey), isSelected: false };
              classExportConfigArray.push(obj);
            }
          );
          Object.keys(classesInfo[classKey].specs[specSlug].classNodes).forEach(
            (talentKey) => {
              let obj = {};
              obj[talentKey] = { id: parseInt(talentKey), isSelected: false };
              classExportConfigArray.push(obj);
            }
          );
        }
      });
    });
    let configHash = {};
    classExportConfigArray.forEach((configStep) => {
      const configStepId = Object.keys(configStep)[0];
      if (configHash[configStepId]) configHash[configStepId].push(configStep);
      else configHash[configStepId] = [configStep];
    });
    let filteredConfigArray = [];
    Object.keys(configHash).forEach((id) => {
      let index = 0;
      while (configHash[id].length > 1 && configHash[id].length > index) {
        if (configHash[id][index][id].isSelected) index++;
        else configHash[id].splice(index, 1);
      }
      if (configHash[id].length > 1)
        console.log("More than one talent selected for a given ID");
      filteredConfigArray.push(configHash[id][0]);
    });
    classExportConfigArray = filteredConfigArray;
    classExportConfigArray = classExportConfigArray
      .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
      .filter((item, pos, ary) => {
        return !pos || Object.keys(item)[0] !== Object.keys(ary[pos - 1])[0];
      })
      .map((entry) => Object.values(entry)[0]);
    const binaryArray = new BinaryArrayWriter();
    binaryArray.write(8, 1);
    binaryArray.write(16, specId);
    for (let i = 0; i < 16; i++) {
      binaryArray.write(8, 0);
    }
    if (classId == 12 || classId == 13) binaryArray.write(1, 0);
    for (let i = 0; i < classExportConfigArray.length; i++) {
      let node = classExportConfigArray[i];
      if (node.isSelected) {
        binaryArray.write(1, 1);
        if (node.isPartiallyFilled) {
          binaryArray.write(1, 1);
          binaryArray.write(6, node.pointsInvested);
        } else {
          binaryArray.write(1, 0);
        }
        if (node.isChoiceNode) {
          binaryArray.write(1, 1);
          binaryArray.write(2, node.choiceEntrySelected);
        } else {
          binaryArray.write(1, 0);
        }
      } else {
        binaryArray.write(1, 0);
      }
    }
    returnExportString = binaryArray.toExportString();
    return returnExportString;
  }
  class BinaryArrayWriter {
    constructor() {
      this.array = [[]];
      this.arrayIndex = 0;
    }
    write(width, value) {
      for (let i = 0; i < width; i++) {
        this.array[this.arrayIndex].unshift((value >> i) & 1);
        if (this.array[this.arrayIndex].length === 6) {
          this.arrayIndex += 1;
          this.array[this.arrayIndex] = [];
        }
      }
    }
    toExportString() {
      let string = "";
      if (this.array[this.arrayIndex].length === 0) {
        this.array.pop();
        this.arrayIndex -= 1;
      }
      while (this.array[this.arrayIndex].length !== 6) {
        this.array[this.arrayIndex].unshift(0);
      }
      for (let i = 0; i < this.array.length; i++) {
        let value =
          this.array[i][5] * 1 +
          this.array[i][4] * 2 +
          this.array[i][3] * 4 +
          this.array[i][2] * 8 +
          this.array[i][1] * 16 +
          this.array[i][0] * 32;
        string += base64Table[value];
      }
      return string;
    }
  }
  setImgVariables();
  fetchedFiles.push(
    fetchFile(`${baseDbUrl}/classes_basic_info.json?v=${jsonVersion}`)
  );
  fetchedFiles.push(
    fetchFile(`${baseDbUrl}/pvp-talents.json?v=${jsonVersion}`)
  );
  drawAllEmbedTreesHelper = drawAllEmbedTrees;
  drawEmbedTreesHelper = drawEmbedTrees;
  Promise.allSettled(fetchedFiles).then((data) => {
    classes = data[0].value;
    pvpTalents = data[1].value;
    generateTooltipHtml();
    generateImportGameScriptHtml();
    if (containerHtml) {
      history.replaceState(
        history.state,
        "",
        window.location.href
          .replace("|", pvpSeparator)
          .replace("%7C", pvpSeparator)
      );
      generateStaticHtml();
      userMessageHtml.querySelector("button").addEventListener("click", () => {
        userMessageHtml.classList.remove("visible");
      });
      initializeBuild();
    }
    if (typeof embeddedDragonflightInitObject !== "undefined") {
      embeddedDragonflightInitObject.forEach((initObject) => {
        initObject.intervalRange = Math.floor(100 / initObject.steps.length);
        initObject.sliderPositions = [0];
        if (initObject.startingStep > initObject.steps.length) {
          initObject.startingStep = initObject.steps.length;
        }
        switch (initObject.steps.length) {
          case 1:
            break;
          case 2:
            initObject.sliderPositions = [0, 100];
            break;
          default:
            const intervalsBreakpoints = (
              100 /
              (initObject.steps.length - 1)
            ).toFixed(2);
            const nrOfIntervals = initObject.steps.length - 2;
            for (let i = 1; i <= nrOfIntervals; i++) {
              initObject.sliderPositions.push(i * intervalsBreakpoints);
            }
            initObject.sliderPositions.push(100);
            break;
        }
        initObject.disableControls = initObject.steps.length === 1;
        generateEmbed(initObject);
      });
    }
    addCanvasEvents();
  });
})();

