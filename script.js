const translations = {
    tw: {
        header_title: "AI EduPlan 平台建置藍圖 (進階細節版)",
        header_desc: "專為人工智慧課程設計，原生支援繁中、印尼、越南，整合國際在地金流的現代化平台。點擊下方流程節點查看深入的技術元件與執行方式。",
        node_1: "平台基礎建設", node_2: "多語系與在地化", node_3: "跨境金流架構", node_4: "AI 助教與影音", node_5: "部署與持續整合",
        p1_title: "01. 平台基礎建設 (Infrastructure)",
        p1_b1_t: "前端應用層 (Frontend)", p1_b1_1: "<strong>框架:</strong> Next.js 提供 SSR/SSG，確保最高 SEO 權重。", p1_b1_2: "<strong>狀態管理:</strong> Zustand 或 Redux Toolkit。", p1_b1_3: "<strong>UI:</strong> TailwindCSS 結合 Framer Motion 實作平滑動畫。",
        p1_b2_t: "後端微服務 (Backend)", p1_b2_1: "<strong>核心 API:</strong> FastAPI (Python) – 極佳的非同步效能。", p1_b2_2: "<strong>任務佇列:</strong> Celery + RabbitMQ 處理耗時任務。", p1_b2_3: "<strong>資料庫:</strong> PostgreSQL (主資料) + Redis (快取)。",
        p1_b3_t: "身份驗證 (Auth)", p1_b3_1: "<strong>機制:</strong> JWT 搭配 HttpOnly Cookies 防範 XSS 攻擊。", p1_b3_2: "<strong>OAuth:</strong> 支援 Google, GitHub 快速登入。", p1_b3_3: "<strong>權限控制:</strong> RBAC 分離學生、講師、管理員。",
        p2_title: "02. 全球化多語系策略 (i18n)", p2_desc: "不只是翻譯文字，還包含時區、貨幣符號、與排版的全面在地化。",
        p2_f1_t: "IP 定位 (GeoIP)", p2_f1_d: "偵測來源國家，自動設定時區與幣別。",
        p2_f2_t: "載入語系", p2_f2_d: "優先顯示當地語系，無配對則 fallback 英文。",
        p2_f3_t: "動態排版調整", p2_f3_d: "印尼/越南文字串較長，UI 容器動態適應。",
        p2_b1_t: "AI 自動化翻譯工作流", p2_b1_1: "原始內容撰寫以 <strong>繁體中文</strong> 為主。", p2_b1_2: "呼叫 OpenAI API，批次翻譯成印尼文與越南文。", p2_b1_3: "推送至後台，由當地母語人士進行人工校對。",
        p2_b2_t: "區域化體驗設定", p2_b2_1: "<strong>時間:</strong> 使用 <code>date-fns-tz</code> 轉換為學員當地時間。", p2_b2_2: "<strong>字體:</strong> 針對不同語系載入最佳化字體避免缺字。",
        p3_title: "03. 跨境與在地金流架構", p3_desc: "針對東南亞市場，深度整合當地虛擬帳號與電子錢包。",
        p3_b1_t: "支付網關動態路由", p3_b1_1: "<strong>台灣:</strong> 綠界 (ECPay) - 信用卡與超商。", p3_b1_2: "<strong>印尼/越南:</strong> Xendit - GoPay, MoMo 或虛擬帳號。", p3_b1_3: "<strong>國際:</strong> Stripe API，以 USD 計價。",
        p3_b2_t: "交易狀態機 (Webhook)", p3_b2_1: "<code>PENDING</code>: 等待非同步付款。", p3_b2_2: "<code>PAID</code>: 收到 Gateway Webhook，解鎖課程。", p3_b2_3: "<code>FAILED</code>: 超時未付款，釋放名額。",
        p4_title: "04. AI 助教與影音分發",
        p4_b1_t: "HLS 加密串流架構", p4_b1_1: "<strong>儲存轉檔:</strong> AWS S3 搭配 MediaConvert 切片 HLS。", p4_b1_2: "<strong>內容保護:</strong> 結合 AES-128 加密，防堵直接下載。", p4_b1_3: "<strong>全球分發:</strong> 透過 CloudFront CDN 確保印尼/越南不卡頓。",
        p4_b2_t: "RAG 課程助教", p4_b2_1: "<strong>資料向量化:</strong> 將影片逐字稿存入 Vector DB。", p4_b2_2: "<strong>精準問答:</strong> 自動帶入提問當下的時間段上下文。", p4_b2_3: "<strong>多語支援:</strong> 自動將外語提問對齊繁中知識庫並翻譯解答。",
        p5_title: "05. 發布與持續整合 (CI/CD)",
        p5_b1_t: "GitHub Actions 部署", p5_b1_1: "<strong>靜態行銷頁:</strong> 推送至 main 自動佈署至 gh-pages 分支。", p5_b1_2: "<strong>後端服務:</strong> 通過 PyTest 後封裝 Docker 推送雲端。",
        p5_b2_t: "國際化 SEO 策略", p5_b2_1: "<strong>Hreflang Tags:</strong> 標記各語言版本對應關係。", p5_b2_2: "<strong>Schema.org:</strong> 讓 Google 搜尋結果直接顯示評分與課程價格。"
    },
    en: {
        header_title: "AI EduPlan Architecture Blueprint",
        header_desc: "A modern platform designed for AI courses, natively supporting traditional Chinese, Indonesian, and Vietnamese with integrated local payment gateways.",
        node_1: "Infrastructure", node_2: "Localization (i18n)", node_3: "Payment Gateways", node_4: "AI & Content Delivery", node_5: "CI/CD & Deployment",
        p1_title: "01. Platform Infrastructure",
        p1_b1_t: "Frontend Architecture", p1_b1_1: "<strong>Framework:</strong> Next.js SSR/SSG for maximum SEO.", p1_b1_2: "<strong>State:</strong> Zustand or Redux Toolkit.", p1_b1_3: "<strong>UI:</strong> TailwindCSS & Framer Motion for glassmorphism.",
        p1_b2_t: "Backend Microservices", p1_b2_1: "<strong>Core API:</strong> FastAPI (Python) for async AI integration.", p1_b2_2: "<strong>Queue:</strong> Celery + RabbitMQ for heavy tasks.", p1_b2_3: "<strong>DB:</strong> PostgreSQL (Core) + Redis (Cache).",
        p1_b3_t: "Authentication (Auth)", p1_b3_1: "<strong>Mechanism:</strong> JWT with HttpOnly Cookies.", p1_b3_2: "<strong>OAuth:</strong> Google & GitHub quick login.", p1_b3_3: "<strong>Access:</strong> RBAC separating students, instructors, admins.",
        p2_title: "02. Global Localization (i18n)", p2_desc: "Not just text translation, but comprehensive localization of timezones, currencies, and layouts.",
        p2_f1_t: "GeoIP Mapping", p2_f1_d: "Detect country to set timezone and currency.",
        p2_f2_t: "Load Language", p2_f2_d: "Prioritize local lang, fallback to English.",
        p2_f3_t: "Dynamic Layouts", p2_f3_d: "Adapt UI to longer ID/VN strings.",
        p2_b1_t: "AI Translation Pipeline", p2_b1_1: "Source content is written in <strong>Traditional Chinese</strong>.", p2_b1_2: "Batch translate via OpenAI API to ID & VN.", p2_b1_3: "Push to Review Dashboard for native human proofreading.",
        p2_b2_t: "Regional Experience", p2_b2_1: "<strong>Time:</strong> Converted to local timezone via <code>date-fns-tz</code>.", p2_b2_2: "<strong>Fonts:</strong> Load optimized fonts to prevent missing glyphs.",
        p3_title: "03. Cross-Border Payments", p3_desc: "Deep integration with virtual accounts and e-wallets for SEA markets.",
        p3_b1_t: "Gateway Routing", p3_b1_1: "<strong>Taiwan:</strong> ECPay - Credit Card & Convenience stores.", p3_b1_2: "<strong>ID/VN:</strong> Xendit - GoPay, MoMo, Virtual Accounts.", p3_b1_3: "<strong>Global:</strong> Stripe API in USD.",
        p3_b2_t: "Transaction Webhooks", p3_b2_1: "<code>PENDING</code>: Await async offline payment.", p3_b2_2: "<code>PAID</code>: Webhook received, unlock course.", p3_b2_3: "<code>FAILED</code>: Timeout, release promotion slot.",
        p4_title: "04. AI Assistant & Video CDN",
        p4_b1_t: "HLS Encrypted Streaming", p4_b1_1: "<strong>Storage:</strong> AWS S3 & MediaConvert for HLS.", p4_b1_2: "<strong>Protection:</strong> AES-128 encryption prevents downloads.", p4_b1_3: "<strong>CDN:</strong> CloudFront ensures smooth SEA playback.",
        p4_b2_t: "RAG Teaching Assistant", p4_b2_1: "<strong>Vector DB:</strong> Store transcribed video text chunks.", p4_b2_2: "<strong>Context:</strong> Auto-inject current video timestamp context.", p4_b2_3: "<strong>Multi-lang:</strong> Translate foreign queries to query Chinese DB.",
        p5_title: "05. CI/CD & Marketing",
        p5_b1_t: "GitHub Actions", p5_b1_1: "<strong>Landing:</strong> Auto-deploy static pages to gh-pages branch.", p5_b1_2: "<strong>Backend:</strong> PyTest -> Docker build -> Push to Cloud.",
        p5_b2_t: "International SEO", p5_b2_1: "<strong>Hreflang:</strong> Tag relationships between language versions.", p5_b2_2: "<strong>Schema.org:</strong> Display ratings & prices directly in Google."
    },
    id: {
        header_title: "AI EduPlan: Cetak Biru Arsitektur",
        header_desc: "Platform modern untuk kursus AI, mendukung bahasa Mandarin, Indonesia, dan Vietnam dengan gateway pembayaran lokal yang terintegrasi.",
        node_1: "Infrastruktur", node_2: "Lokalisasi (i18n)", node_3: "Gateway Pembayaran", node_4: "Asisten AI & Video", node_5: "Penyebaran (CI/CD)",
        p1_title: "01. Infrastruktur Platform",
        p1_b1_t: "Arsitektur Frontend", p1_b1_1: "<strong>Kerangka:</strong> Next.js SSR untuk SEO maksimum.", p1_b1_2: "<strong>State:</strong> Zustand atau Redux Toolkit.", p1_b1_3: "<strong>UI:</strong> TailwindCSS & Framer Motion.",
        p1_b2_t: "Layanan Backend", p1_b2_1: "<strong>API Utama:</strong> FastAPI (Python).", p1_b2_2: "<strong>Antrean:</strong> Celery + RabbitMQ.", p1_b2_3: "<strong>Basis Data:</strong> PostgreSQL + Redis.",
        p1_b3_t: "Autentikasi", p1_b3_1: "<strong>Mekanisme:</strong> JWT dengan HttpOnly Cookies.", p1_b3_2: "<strong>OAuth:</strong> Login cepat Google & GitHub.", p1_b3_3: "<strong>Akses:</strong> RBAC untuk siswa, instruktur, admin.",
        p2_title: "02. Strategi Lokalisasi (i18n)", p2_desc: "Terjemahan teks, zona waktu, mata uang, dan tata letak UI.",
        p2_f1_t: "Pemetaan GeoIP", p2_f1_d: "Deteksi IP untuk zona waktu dan mata uang.",
        p2_f2_t: "Muat Bahasa", p2_f2_d: "Prioritaskan ID/VN/TW, fallback ke Inggris.",
        p2_f3_t: "Tata Letak Dinamis", p2_f3_d: "Sesuaikan UI untuk teks ID/VN yang panjang.",
        p2_b1_t: "Alur Terjemahan AI", p2_b1_1: "Sumber utama dalam <strong>Mandarin Tradisional</strong>.", p2_b1_2: "Terjemahan massal AI ke ID & VN.", p2_b1_3: "Tinjauan manusia (Native Speaker).",
        p2_b2_t: "Pengaturan Regional", p2_b2_1: "<strong>Waktu:</strong> Dikonversi ke zona waktu lokal.", p2_b2_2: "<strong>Font:</strong> Font yang dioptimalkan.",
        p3_title: "03. Integrasi Pembayaran Lokal", p3_desc: "Integrasi dengan dompet digital dan Virtual Account (VA).",
        p3_b1_t: "Perutean Gateway", p3_b1_1: "<strong>Taiwan:</strong> ECPay - Kartu Kredit.", p3_b1_2: "<strong>Indonesia/Vietnam:</strong> Xendit - GoPay, MoMo, VA.", p3_b1_3: "<strong>Global:</strong> Stripe API (USD).",
        p3_b2_t: "Status Transaksi", p3_b2_1: "<code>PENDING</code>: Menunggu pembayaran offline.", p3_b2_2: "<code>PAID</code>: Akses kursus dibuka.", p3_b2_3: "<code>FAILED</code>: Kadaluarsa.",
        p4_title: "04. Asisten AI & CDN Video",
        p4_b1_t: "Streaming HLS Terenkripsi", p4_b1_1: "<strong>Penyimpanan:</strong> AWS S3 & MediaConvert.", p4_b1_2: "<strong>Keamanan:</strong> Enkripsi AES-128 anti-unduh.", p4_b1_3: "<strong>CDN:</strong> CloudFront untuk streaming lancar di Asia Tenggara.",
        p4_b2_t: "Asisten RAG AI", p4_b2_1: "<strong>Vector DB:</strong> Menyimpan transkrip video.", p4_b2_2: "<strong>Konteks:</strong> Konteks stempel waktu video otomatis.", p4_b2_3: "<strong>Multi-bahasa:</strong> Terjemahan otomatis ke DB Mandarin.",
        p5_title: "05. CI/CD & Pemasaran",
        p5_b1_t: "Penyebaran GitHub Actions", p5_b1_1: "<strong>Halaman Landing:</strong> Auto-deploy ke GitHub Pages.", p5_b1_2: "<strong>Backend:</strong> PyTest -> Docker -> Cloud.",
        p5_b2_t: "SEO Internasional", p5_b2_1: "<strong>Hreflang:</strong> Hubungan antar versi bahasa.", p5_b2_2: "<strong>Schema.org:</strong> Cuplikan kaya di Google."
    },
    vn: {
        header_title: "Bản vẽ Kiến trúc AI EduPlan",
        header_desc: "Nền tảng hiện đại dành cho các khóa học AI, hỗ trợ tiếng Trung, tiếng Indonesia và tiếng Việt với cổng thanh toán địa phương.",
        node_1: "Cơ sở hạ tầng", node_2: "Bản địa hóa (i18n)", node_3: "Cổng thanh toán", node_4: "Trợ lý AI & Video", node_5: "Triển khai (CI/CD)",
        p1_title: "01. Cơ sở hạ tầng nền tảng",
        p1_b1_t: "Kiến trúc Frontend", p1_b1_1: "<strong>Framework:</strong> Next.js SSR cho SEO.", p1_b1_2: "<strong>State:</strong> Zustand hoặc Redux Toolkit.", p1_b1_3: "<strong>UI:</strong> TailwindCSS & Framer Motion.",
        p1_b2_t: "Dịch vụ Backend", p1_b2_1: "<strong>API Chính:</strong> FastAPI (Python).", p1_b2_2: "<strong>Hàng đợi:</strong> Celery + RabbitMQ.", p1_b2_3: "<strong>Cơ sở dữ liệu:</strong> PostgreSQL + Redis.",
        p1_b3_t: "Xác thực (Auth)", p1_b3_1: "<strong>Cơ chế:</strong> JWT + HttpOnly Cookies.", p1_b3_2: "<strong>OAuth:</strong> Đăng nhập Google & GitHub.", p1_b3_3: "<strong>Quyền truy cập:</strong> RBAC cho sinh viên, giảng viên.",
        p2_title: "02. Chiến lược Bản địa hóa (i18n)", p2_desc: "Dịch thuật văn bản, múi giờ, tiền tệ và giao diện người dùng.",
        p2_f1_t: "Bản đồ GeoIP", p2_f1_d: "Phát hiện IP cho múi giờ và tiền tệ.",
        p2_f2_t: "Tải ngôn ngữ", p2_f2_d: "Ưu tiên VN/ID/TW, dự phòng tiếng Anh.",
        p2_f3_t: "Giao diện động", p2_f3_d: "Thích ứng UI với văn bản dài.",
        p2_b1_t: "Luồng dịch AI", p2_b1_1: "Bản gốc viết bằng <strong>Tiếng Trung</strong>.", p2_b1_2: "Dịch tự động qua AI sang ID & VN.", p2_b1_3: "Người bản xứ chỉnh sửa.",
        p2_b2_t: "Trải nghiệm Khu vực", p2_b2_1: "<strong>Thời gian:</strong> Chuyển đổi theo múi giờ địa phương.", p2_b2_2: "<strong>Phông chữ:</strong> Phông chữ được tối ưu hóa.",
        p3_title: "03. Thanh toán xuyên biên giới", p3_desc: "Tích hợp sâu với ví điện tử và tài khoản ảo.",
        p3_b1_t: "Định tuyến Thanh toán", p3_b1_1: "<strong>Đài Loan:</strong> ECPay.", p3_b1_2: "<strong>Việt Nam:</strong> Xendit / MoMo.", p3_b1_3: "<strong>Toàn cầu:</strong> Stripe API (USD).",
        p3_b2_t: "Trạng thái Giao dịch", p3_b2_1: "<code>PENDING</code>: Đang chờ thanh toán.", p3_b2_2: "<code>PAID</code>: Mở khóa khóa học.", p3_b2_3: "<code>FAILED</code>: Hết hạn.",
        p4_title: "04. Trợ lý AI & Phân phối Video",
        p4_b1_t: "Truyền phát HLS được mã hóa", p4_b1_1: "<strong>Lưu trữ:</strong> AWS S3 & MediaConvert.", p4_b1_2: "<strong>Bảo mật:</strong> Mã hóa AES-128 chống tải xuống.", p4_b1_3: "<strong>CDN:</strong> CloudFront cho Đông Nam Á.",
        p4_b2_t: "Trợ lý RAG AI", p4_b2_1: "<strong>Vector DB:</strong> Lưu bản ghi video.", p4_b2_2: "<strong>Ngữ cảnh:</strong> Ngữ cảnh thời gian video tự động.", p4_b2_3: "<strong>Đa ngôn ngữ:</strong> Dịch tự động sang DB tiếng Trung.",
        p5_title: "05. Triển khai & Tiếp thị",
        p5_b1_t: "GitHub Actions", p5_b1_1: "<strong>Landing Page:</strong> Tự động triển khai lên GH Pages.", p5_b1_2: "<strong>Backend:</strong> PyTest -> Docker -> Cloud.",
        p5_b2_t: "SEO Quốc tế", p5_b2_1: "<strong>Hreflang:</strong> Mối quan hệ giữa các ngôn ngữ.", p5_b2_2: "<strong>Schema.org:</strong> Xếp hạng trực tiếp trên Google."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.node');
    const panels = document.querySelectorAll('.panel');
    const langSelect = document.getElementById('lang-select');

    // Horizontal Node Click
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            nodes.forEach(n => n.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            node.classList.add('active');
            const targetId = node.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) targetPanel.classList.add('active');
        });
    });

    // Language Switching
    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        const dict = translations[lang];
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });
    });
});
