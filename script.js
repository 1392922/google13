/* ==============================================
 * [ 🌟 您的「新聞資料庫」(網站的「大腦」) 🌟 ]
 * ==============================================
 * * 這是您網站上所有可被搜尋的文章。
 *
 * [ 您的操作說明 ]
 *
 * 當您按照「步驟 1」建立了新的文章檔案 (例如 article-12.html) 後，
 * 您必須來此處執行「步驟 2」：
 *
 * 1. 複製下面任一 { ... } 區塊 (從 "{" 到 "}" 都要複製)。
 * 2. 在 "newsDatabase" 列表的最尾端 (在 "]" 之前) 貼上。
 * 3. [重要] 確保您貼上的區塊前面有一個逗號 "," (用來分隔資料)。
 * 4. 修改 "id", "title", "summary", "url" 和 "image" 的內容。
 *
 * 範例：
    {
        id: "article-12",
        title: "一篇新的報導",
        summary: "這篇報導的概文...",
        url: "article-12.html",
        image: "https://via.placeholder.com/400x225.png?text=新文章"
    }
 *
 */
const newsDatabase = [
    /* 提示：這是「娛樂新聞」類別 */
    {
        id: "article-1",
        title: "一隻貓咪學會了如何按門鈴",
        summary: "這隻聰明的貓咪在觀察主人數週後...",
        url: "article-1.html",
        image: "https://via.placeholder.com/400x225.png?text=搞笑圖片1"
    },
    {
        id: "article-5",
        title: "報導：一場笑話馬拉松比賽持續 48 小時",
        summary: "參賽者被要求連續講笑話，直到只剩一人站著...",
        url: "article-5.html",
        image: "https://via.placeholder.com/400x225.png?text=搞笑圖片2"
    },
    {
        id: "article-11",
        title: "慈禧在大清的最後一場戰爭",
        summary: "本次大清帝國在經歷兩甲午戰爭後...",
        url: "article-11.html",
        image: "https://via.placeholder.com/400x225.png?text=搞笑圖片2"
    },

    /* 提示：這是「非承平新聞」類別 */
    {
        id: "article-2",
        title: "X地區發生強烈地震",
        summary: "當地時間凌晨，X地區發生規模 7.0 地震...",
        url: "article-2.html",
        image: "https://via.placeholder.com/400x225.png?text=災難報導"
    },
    {
        id: "article-3",
        title: "邊境衝突持續升溫",
        summary: "目擊者稱，雙方在邊境線附近發生交火...",
        url: "article-3.html",
        image: "https://via.placeholder.com/400x225.png?text=戰爭報導"
    },

    /* 提示：這是「公正新聞」類別 */
    {
        id: "article-4",
        title: "最新經濟數據分析",
        summary: "本季 GDP 增長 1.5%，數據顯示服務業是主要驅動力...",
        url: "article-4.html",
        image: "https://via.placeholder.com/400x225.png?text=公正報導"
    },

    /* 提示：這是「即時新聞」類別 */
    {
        id: "article-6",
        title: "[快訊] 央行宣布利率不變",
        summary: "央行於今日下午宣布，將維持目前利率 1.5% 不變...",
        url: "article-6.html",
        image: "https://via.placeholder.com/400x225.png?text=即時新聞1"
    },
    {
        id: "article-7",
        title: "[即時] X 科技公司發布新款晶片",
        summary: "X 科技 CEO 剛剛在發布會上展示了其最新的 AI 晶片...",
        url: "article-7.html",
        image: "https://via.placeholder.com/400x225.png?text=即時新聞2"
    },
    {
        id: "article-8",
        title: "[突發] A 地區發生 5.0 地震",
        summary: "據地震中心報告，A 地區剛剛發生 5.0 地震...",
        url: "article-8.html",
        image: "https://via.placeholder.com/400x225.png?text=即時新聞3"
    },
    {
        id: "article-9",
        title: "[快訊] 國防部發表聲明",
        summary: "針對近期海域情勢，國防部發表聲明...",
        url: "article-9.html",
        image: "https://via.placeholder.com/400x225.png?text=即時新聞4"
    },
    {
        id: "article-10",
        title: "[賽況] 冠軍賽比數 3:2",
        summary: "世界冠軍賽目前進入第 8 局，藍隊暫時以 3:2 領先...",
        url: "article-10.html",
        image: "https://via.placeholder.com/400x225.png?text=即時新聞5"
    }
];


/* ==============================================
 * [ 1. 處理搜尋 ]
 * (在 "navbar" 上的搜尋框被提交時觸發)
 * ==============================================
 * * 提示：此功能會獲取搜尋框的文字，
 * 並將其作為參數 "q" 傳遞到 search-results.html 頁面。
 * 您不需要修改此處的程式碼。
 */
function handleSearch(event) {
    event.preventDefault(); 
    let input = document.getElementById('searchInput');
    let searchTerm = input.value.trim();
    if (searchTerm) {
        window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
    }
}


/* ==============================================
 * [ 2. 顯示搜尋結果 ]
 * (只在 "search-results.html" 頁面載入時觸發)
 * ==============================================
 * * 提示：此功能只會在 search-results.html 頁面執行。
 * 它會讀取網址列的參數 "q"，
 * 然後搜索 "newsDatabase" 並顯示結果。
 */
function displaySearchResults() {
    const resultsContainer = document.getElementById('search-results-content');
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('q');
    
    if (!searchTerm || !resultsContainer) {
        return;
    }

    let filter = searchTerm.toUpperCase();
    let matches = [];

    // 遍歷 "新聞資料庫"
    for (const article of newsDatabase) {
        if (article.title.toUpperCase().indexOf(filter) > -1 || article.summary.toUpperCase().indexOf(filter) > -1) {
            matches.push(article);
        }
    }

    // [第一點優化] 顯示您要求的 "搜尋結果顯示..."
    resultsContainer.innerHTML = `<h2>搜尋結果顯示： "${searchTerm}"</h2>`;

    let resultsGrid = document.createElement('div');
    resultsGrid.className = 'news-grid';

    if (matches.length > 0) {
        for (const match of matches) {
            // 動態建立新聞卡片 HTML
            let cardHtml = `
                <article class="news-card">
                    <img src="${match.image}" alt="${match.title}">
                    <div class="card-content">
                        <h3>${match.title}</h3>
                        <p>${match.summary}</p>
                        <a href="${match.url}" class="read-more">閱讀更多</a>
                    </div>
                </article>
            `;
            resultsGrid.innerHTML += cardHtml;
        }
        resultsContainer.appendChild(resultsGrid);
    } else {
        // [第一點優化] 顯示您要求的 "搜尋沒有結果.......😭"
        resultsContainer.innerHTML += '<p class="no-results">搜尋沒有結果.......😭</p>';
    }
}

/* ==============================================
 * [ 3. 頁面載入時自動執行 ]
 * * 提示：您不需要修改此處的程式碼。
 * ==============================================
 */
document.addEventListener('DOMContentLoaded', () => {
    // 檢查我們是否在 "search-results.html" 頁面上
    if (document.body.classList.contains('search-results-page')) {
        // 如果是，才執行 "顯示搜尋結果" 的功能
        displaySearchResults();
    }
});
