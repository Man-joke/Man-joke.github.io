// 데이터 배열
const dataTitle = [
  {
    id: "홈페이지",
    newText: "홈페이지",
  },
  {
    id: "홈페이지 접속 오류 안내_PC",
    newText: "홈페이지 접속 오류 안내_PC",
  },
  {
    id: "메타 광고 랜딩 서비스소개 웹페이지",
    newText: "메타 광고 랜딩 서비스소개 웹페이지",
  },
  {
    id: "개인정보처리방침",
    newText: "개인정보처리방침",
  },
];

const dataList = [
  {
    id: "홈페이지",
    item: {
      text: [
        "유플래너_PC_01_메인",
        "PC_서비스소개_가계부",
        "PC_서비스소개_공동관리",
      ],
    },
  },
  {
    id: "홈페이지 접속 오류 안내_PC",
    item: {
      text: ["홈페이지 접속 오류 안내_PC"],
    },
  },
  {
    id: "메타 광고 랜딩 서비스소개 웹페이지",
    item: {
      text: ["PC_마케팅콘텐츠_자동가계부", "PC_마케팅콘텐츠_커플가계부"],
    },
  },
  {
    id: "개인정보처리방침",
    item: {
      text: ["PC_유플래너_개인정보처리방침_230418"],
    },
  },
];

// 트리 구조를 추가할 부모 요소 선택
const treeContainer = document.querySelector(".tree-list-warp");

dataTitle.forEach((titleItem, index) => {
  // 새로운 트리 노드 생성
  const treeNode = document.createElement("div");
  treeNode.className = "tree-treenode";
  treeNode.innerHTML = `
          <div class="treenode">
              <div class="anticon">
                  <svg
                      viewBox="0 0 1024 1024"
                      focusable="false"
                      data-icon="caret-down"
                      width="1rem"
                      height="1rem"
                      fill="currentColor"
                  >
                      <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                  </svg>
              </div>
              <div class="tree-node-content-wrapper">
                  <span class="tree-iconEle tree-icon__customize">
                      <span role="img" class="anticon-folder">
                          <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="folder"
                              width="1rem"
                              height="1rem"
                              fill="currentColor"
                          >
                              <path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"></path>
                          </svg>
                      </span>
                  </span>
              </div>
              <div class="tree-title">
                  <div style="display: flex;">
                      <div class="text">${titleItem.newText}</div>
                  </div>
              </div>
          </div>
          <ul class="tree-content-list"></ul>
      `;

  // 트리 노드를 컨테이너에 추가
  treeContainer.appendChild(treeNode);

  // 현재 노드의 tree-content-list 선택
  const treeContentList = treeNode.querySelector(".tree-content-list");

  // dataList에서 index에 맞는 항목 추가
  const listItem = dataList[index];
  if (listItem) {
    // `item.text` 배열의 각 항목 처리
    listItem.item.text.forEach((text) => {
      const treeContentItem = document.createElement("li");
      treeContentItem.className = "tree-content-item";
      treeContentItem.dataset.href = text;
      treeContentItem.innerHTML = `
              <div class="tree-content-wrapper">
                  <div class="tree-iconEle" style="display: flex;">
                      <div class="anticon-file">
                          <svg viewBox="64 64 896 896" focusable="false"
                              data-icon="file" width="1em" height="1em"
                              fill="currentColor" aria-hidden="true">
                              <path
                                  d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z">
                              </path>
                          </svg>
                      </div>
                      <div>
                          <span class="tag tag-green">완료</span>
                      </div>
                  </div>
                  <div class="content-title">
                      <div class="text">${text}</div>
                  </div>
              </div>
            `;
      // 트리 항목 추가
      treeContentList.appendChild(treeContentItem);
    });
  }
});
