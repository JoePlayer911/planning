const translations = {
    tw: {
        back_btn: "返回建置藍圖",
        demo_title: "AI 課程平台互動原型",
        demo_desc: "在此模擬真實的跨國金流付款及 AI 智慧助教互動。您可以點擊「立即購買」來觸發不同國家的金流網關模擬。",
        locked_title: "課程尚未解鎖",
        locked_desc: "此為進階 AI 技術實戰課程，請點擊下方按鈕模擬跨境金流付款以解鎖完整課程與 AI 功能。",
        buy_btn: "立即購買課程 (Buy Course)",
        video_playing: "AI 課程影片模擬播放中...",
        bot_title: "AI 專屬課程助教",
        bot_welcome: "哈囉！我是這堂課的 AI 助教。在影片播放中隨時可以向我發問，我能閱讀講義與字幕並立即回答您。",
        q1_btn: "什麼是感知器？",
        q2_btn: "印尼/越南語翻譯設定",
        chat_placeholder: "輸入您的問題...",
        proc_title: "正在模擬 Webhook 金流對接...",
        proc_desc: "Xendit / Stripe / ECPay 自動網關通信中",
        modal_title: "模擬金流支付結帳",
        modal_loc: "您的地理位置 (模擬 IP 路由)",
        modal_pay: "推薦支付方式",
        modal_amt: "支付金額 (模擬轉換)",
        modal_confirm: "模擬完成付款 (Confirm Payment)",
        toast_success: "付款成功！課程已全解鎖。",
        sub_1: "「在本章節中，我們將學習神經網路的基本單元：感知器（Perceptron）。」",
        sub_2: "「感知器接收多個輸入訊號，經過加權求和，並使用激活函數輸出結果。」",
        sub_3: "「這就是建構現代深度學習多層感知器 (MLP) 的重要起點。」",
        bot_answer_q1: "感知器（Perceptron）是人工神經網路（ANN）中最基礎的單元。它會接收多個輸入（Inputs），各輸入乘以相應權重（Weights）後加總，再加上偏差值（Bias）。最後經過一個激活函數（如 Step function）決定是否輸出訊號。這模擬了人類生物神經元的運作方式！",
        bot_answer_q2: "印尼語與越南語的翻譯採用了 Whisper 進行影片自動化轉錄生成文字稿，隨後傳送至後台微服務進行 AI 字幕分塊翻譯，並交由當地專業人員潤飾，最後包裝為獨立 HLS 字幕檔上傳至 AWS CloudFront 網域供全球學員讀取。"
    },
    en: {
        back_btn: "Back to Blueprint",
        demo_title: "AI Course Platform Prototype",
        demo_desc: "Simulate real cross-border payments and interactive AI teaching assistant. Click 'Buy Now' to trigger payment gateway simulations.",
        locked_title: "Course Locked",
        locked_desc: "This is an advanced AI development course. Click below to simulate cross-border payments and unlock the contents.",
        buy_btn: "Buy Course Now",
        video_playing: "AI Course Video Playing (Simulation)...",
        bot_title: "AI Course Assistant",
        bot_welcome: "Hello! I am your AI learning assistant. Ask me anything about the video, and I will read the transcript to answer instantly.",
        q1_btn: "What is a Perceptron?",
        q2_btn: "Indo/Viet translation details",
        chat_placeholder: "Type your question...",
        proc_title: "Simulating Payment Webhooks...",
        proc_desc: "Communicating with Xendit / Stripe / ECPay gateways",
        modal_title: "Simulated Checkout",
        modal_loc: "Simulated User Location (IP Routing)",
        modal_pay: "Recommended Local Payment",
        modal_amt: "Amount (Simulated FX Exchange)",
        modal_confirm: "Simulate Payment Success",
        toast_success: "Payment Success! Course completely unlocked.",
        sub_1: "\"In this chapter, we will learn about the basic unit of neural networks: the Perceptron.\"",
        sub_2: "\"The perceptron receives multiple input signals, weights them, sums them, and outputs via an activation function.\"",
        sub_3: "\"This is the essential building block for modern Multi-Layer Perceptrons (MLP) in Deep Learning.\"",
        bot_answer_q1: "A perceptron is the most fundamental unit of an Artificial Neural Network (ANN). It takes multiple inputs, multiplies them by weights, sums them up, adds a bias, and passes the result through an activation function (like a step function) to decide the output. It models how biological neurons fire!",
        bot_answer_q2: "For Indonesian and Vietnamese translations, we use OpenAI Whisper to generate transcripts. Then we split them and translate them using AI, followed by a human review step. Lastly, they are hosted as standalone HLS subtitle files on AWS CloudFront CDN for global users."
    },
    id: {
        back_btn: "Kembali ke Cetak Biru",
        demo_title: "Prototipe Platform Kursus AI",
        demo_desc: "Simulasikan pembayaran lintas batas nyata dan asisten pengajar AI interaktif. Klik 'Beli Sekarang' untuk memicu simulasi pembayaran.",
        locked_title: "Kursus Terkunci",
        locked_desc: "Ini adalah kursus pengembangan AI tingkat lanjut. Klik di bawah untuk mensimulasikan pembayaran dan membuka konten.",
        buy_btn: "Beli Kursus Sekarang",
        video_playing: "Video Kursus AI Diputar (Simulasi)...",
        bot_title: "Asisten Pembelajaran AI",
        bot_welcome: "Halo! Saya asisten pembelajaran AI Anda. Tanyakan apa saja tentang video ini, saya akan membaca transkrip untuk menjawab secara instan.",
        q1_btn: "Apa itu Perceptron?",
        q2_btn: "Detail terjemahan Indo/Viet",
        chat_placeholder: "Ketik pertanyaan Anda...",
        proc_title: "Mensimulasikan Webhook Pembayaran...",
        proc_desc: "Berkomunikasi dengan gerbang Xendit / Stripe / ECPay",
        modal_title: "Simulasi Pembayaran",
        modal_loc: "Simulasi Lokasi Pengguna (GeoIP)",
        modal_pay: "Rekomendasi Metode Pembayaran Lokal",
        modal_amt: "Jumlah Pembayaran (Simulasi Nilai Tukar)",
        modal_confirm: "Simulasikan Keberhasilan Pembayaran",
        toast_success: "Pembayaran Berhasil! Kursus telah terbuka sepenuhnya.",
        sub_1: "\"Dalam bab ini, kita akan mempelajari unit dasar jaringan saraf: Perceptron.\"",
        sub_2: "\"Perceptron menerima beberapa sinyal input, mengalikan dengan bobot, menjumlahkannya, dan mengirim ke fungsi aktivasi.\"",
        sub_3: "\"Ini adalah langkah awal yang penting dalam membangun Multi-Layer Perceptron (MLP) dalam pembelajaran mendalam modern.\"",
        bot_answer_q1: "Perceptron adalah unit paling dasar dari Jaringan Saraf Tiruan (ANN). Ia menerima beberapa input, mengalikan masing-masing dengan bobot, menjumlahkannya, menambahkan bias, lalu meneruskannya melalui fungsi aktivasi (seperti fungsi tangga) untuk menentukan output. Ini meniru cara kerja sel saraf biologis manusia!",
        bot_answer_q2: "Untuk terjemahan Bahasa Indonesia dan Vietnam, kami menggunakan OpenAI Whisper untuk transkripsi otomatis. Kemudian kami membagi teks dan menerjemahkannya menggunakan AI, lalu langkah peninjauan oleh penutur asli. Terakhir, file subtitle HLS diunggah ke AWS CloudFront CDN untuk diakses siswa secara global."
    },
    vn: {
        back_btn: "Quay lại Bản vẽ",
        demo_title: "Nguyên mẫu Nền tảng Khóa học AI",
        demo_desc: "Mô phỏng thanh toán xuyên biên giới thực tế và trợ lý giảng dạy AI tương tác. Nhấp vào 'Mua ngay' để kích hoạt mô phỏng cổng thanh toán.",
        locked_title: "Khóa học chưa mở khóa",
        locked_desc: "Đây là khóa học phát triển AI nâng cao. Nhấp vào bên dưới để mô phỏng thanh toán xuyên biên giới và mở khóa nội dung.",
        buy_btn: "Mua khóa học ngay",
        video_playing: "Video khóa học AI đang phát (Mô phỏng)...",
        bot_title: "Trợ lý học tập AI",
        bot_welcome: "Xin chào! Tôi là trợ lý học tập AI của bạn. Hãy hỏi tôi bất cứ điều gì về video, tôi sẽ đọc bản ghi chép để trả lời ngay lập tức.",
        q1_btn: "Perceptron là gì?",
        q2_btn: "Chi tiết dịch thuật Trung/Việt",
        chat_placeholder: "Nhập câu hỏi của bạn...",
        proc_title: "Đang mô phỏng Webhook thanh toán...",
        proc_desc: "Đang giao tiếp kết nối cổng Xendit / Stripe / ECPay",
        modal_title: "Mô phỏng Thanh toán",
        modal_loc: "Mô phỏng vị trí (IP Routing)",
        modal_pay: "Phương thức thanh toán khuyên dùng",
        modal_amt: "Số tiền thanh toán (Mô phỏng tỷ giá)",
        modal_confirm: "Mô phỏng thanh toán thành công",
        toast_success: "Thanh toán thành công! Khóa học đã được mở khóa hoàn toàn.",
        sub_1: "\"Trong chương này, chúng ta sẽ tìm hiểu về đơn vị cơ bản của mạng nơ-ron: Perceptron.\"",
        sub_2: "\"Perceptron nhận nhiều tín hiệu đầu vào, nhân với trọng số tương ứng, cộng lại và đưa qua hàm kích hoạt.\"",
        sub_3: "\"Đây là viên gạch nền tảng để xây dựng Multi-Layer Perceptron (MLP) trong Deep Learning hiện đại.\"",
        bot_answer_q1: "Perceptron là đơn vị cơ bản nhất của mạng nơ-ron nhân tạo (ANN). Nó nhận nhiều đầu vào, nhân chúng với trọng số, cộng lại, thêm một giá trị độ lệch (bias), và chuyển kết quả qua một hàm kích hoạt (như hàm bước) để quyết định đầu ra. Nó mô phỏng cách hoạt động của tế bào thần kinh sinh học!",
        bot_answer_q2: "Đối với bản dịch tiếng Việt và Indonesia, chúng tôi sử dụng OpenAI Whisper để chuyển mã tự động. Sau đó chia nhỏ văn bản và dịch bằng AI, rồi nhờ chuyên gia bản địa hiệu đính lại. Cuối cùng, các tệp phụ đề HLS được lưu trữ trên AWS CloudFront CDN để học viên toàn cầu truy cập."
    }
};

const regionalPaymentDetails = {
    tw: {
        amount: "NT$ 2,980 元",
        methods: [
            { id: "ecpay_credit", name: "綠界信用卡 (ECPay Credit)" },
            { id: "ecpay_cvs", name: "超商代碼繳費 (Convenience Store)" },
            { id: "virtual_atm", name: "ATM 虛擬帳號轉帳" }
        ]
    },
    id: {
        amount: "Rp 1.450.000 IDR",
        methods: [
            { id: "xendit_gopay", name: "GoPay / OVO / DANA (Xendit)" },
            { id: "xendit_va_bni", name: "Bank Transfer Virtual Account (BNI/Mandiri)" },
            { id: "xendit_alfamart", name: "Retail Outlets (Alfamart)" }
        ]
    },
    vn: {
        amount: "2.350.000 VND",
        methods: [
            { id: "momo_wallet", name: "Ví Điện Tử MoMo" },
            { id: "zalopay", name: "Ví Điện Tử ZaloPay" },
            { id: "xendit_vn_bank", name: "Chuyển Khoản Ngân Hàng (Nội Địa)" }
        ]
    },
    en: {
        amount: "$99.00 USD",
        methods: [
            { id: "stripe_credit", name: "Credit Card (Visa/Mastercard via Stripe)" },
            { id: "stripe_apple", name: "Apple Pay / Google Pay" },
            { id: "paypal", name: "PayPal Express Checkout" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLanguage = 'tw';
    let isUnlocked = false;

    // Elements
    const langSelect = document.getElementById('lang-select');
    const buyBtn = document.getElementById('buy-course-btn');
    const paymentModal = document.getElementById('payment-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const simulatedRegion = document.getElementById('simulated-region');
    const simulatedAmount = document.getElementById('simulated-amount');
    const methodsContainer = document.getElementById('methods-container');
    const confirmPaymentBtn = document.getElementById('confirm-payment-btn');
    const paymentProcessing = document.getElementById('payment-processing');
    const videoLockOverlay = document.getElementById('video-lock-overlay');
    const paySuccessToast = document.getElementById('pay-success-toast');
    const chatBox = document.getElementById('chat-box');
    const chatInputField = document.getElementById('chat-input-field');
    const sendChatBtn = document.getElementById('send-chat-btn');
    const quickBtns = document.querySelectorAll('.quick-btn');
    const subtitleElement = document.getElementById('subtitle-element');

    // Language Switching
    langSelect.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateUI();
    });

    function updateUI() {
        const dict = translations[currentLanguage];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });
    }

    // Modal control
    buyBtn.addEventListener('click', () => {
        paymentModal.classList.add('active');
        updatePaymentDetails();
    });

    closeModalBtn.addEventListener('click', () => {
        paymentModal.classList.remove('active');
    });

    // Handle Region Selection in Checkout
    simulatedRegion.addEventListener('change', updatePaymentDetails);

    function updatePaymentDetails() {
        const region = simulatedRegion.value;
        const info = regionalPaymentDetails[region];
        simulatedAmount.textContent = info.amount;

        // Render recommended local payment methods
        methodsContainer.innerHTML = '';
        info.methods.forEach((method, idx) => {
            const opt = document.createElement('div');
            opt.className = `pay-method-option ${idx === 0 ? 'active' : ''}`;
            opt.textContent = method.name;
            opt.addEventListener('click', () => {
                document.querySelectorAll('.pay-method-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
            });
            methodsContainer.appendChild(opt);
        });
    }

    // Simulate Pay Complete
    confirmPaymentBtn.addEventListener('click', () => {
        paymentProcessing.classList.add('active');

        // Simulate API Webhook latency
        setTimeout(() => {
            paymentProcessing.classList.remove('active');
            paymentModal.classList.remove('active');
            
            // Unlock Course
            isUnlocked = true;
            videoLockOverlay.style.opacity = '0';
            setTimeout(() => {
                videoLockOverlay.style.display = 'none';
            }, 500);

            // Toast feedback
            paySuccessToast.classList.add('active');
            setTimeout(() => {
                paySuccessToast.classList.remove('active');
            }, 4000);

            // Start subtitle roll simulation
            startSubtitleRotation();
        }, 2200);
    });

    // Subtitle rotating simulation
    function startSubtitleRotation() {
        let step = 1;
        setInterval(() => {
            step = (step % 3) + 1;
            const dict = translations[currentLanguage];
            subtitleElement.textContent = dict[`sub_${step}`];
        }, 6000);
    }

    // Chatbot simulation
    sendChatBtn.addEventListener('click', handleUserChat);
    chatInputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserChat();
    });

    function appendMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `msg ${sender}`;
        msg.innerHTML = text;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function handleUserChat() {
        const text = chatInputField.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        chatInputField.value = '';

        // Sim response
        setTimeout(() => {
            appendMessage("...", 'bot');
            const placeholderMsg = chatBox.lastElementChild;

            setTimeout(() => {
                const dict = translations[currentLanguage];
                placeholderMsg.innerHTML = currentLanguage === 'tw' 
                    ? "抱歉，我的微調知識庫正在載入中。請使用左側預設的快速提問，或是購買解鎖課程後開啟完整 AI 智慧問答管道！"
                    : "Sorry, my customized knowledge base is still loading. Please use the quick questions below or unlock the course to enable full AI Q&A access!";
            }, 1200);
        }, 500);
    }

    // Quick Question Button Clicks
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const qType = btn.getAttribute('data-q');
            const dict = translations[currentLanguage];
            const qText = btn.textContent;

            appendMessage(qText, 'user');

            setTimeout(() => {
                appendMessage("...", 'bot');
                const lastMsg = chatBox.lastElementChild;

                setTimeout(() => {
                    if (qType === 'q1') {
                        lastMsg.innerHTML = dict.bot_answer_q1;
                    } else if (qType === 'q2') {
                        lastMsg.innerHTML = dict.bot_answer_q2;
                    }
                }, 1000);
            }, 600);
        });
    });
});
