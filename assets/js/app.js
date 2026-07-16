// Localization Database Matrix Engine
const translations = {
    ms: {
        "nav-home": "Utama", "nav-about": "Asal Usul", "nav-menu": "Menu", "nav-location": "Lokasi", "nav-reviews": "Testimoni", "nav-btn-order": "Tempah Sekarang",
        "hero-sub": "Resepi Asli Satay Terengganu Sejak 1988", "hero-title": "Segar Dari Bara Api Setiap Hari", "hero-btn-view": "Lihat Menu", "hero-btn-loc": "Lokasi Hari Ini",
        "hero-desc": "Daging premium diperap rapi bersama ramuan herba tradisional asli, dibakar sempurna menghasilkan rasa klasik kegemaran komuniti setempat.",
        "about-title": "Warisan Cita Rasa Tradisional", "about-p1": "Satay Pak Mat menyediakan kualiti hidangan jalanan terbaik menggunakan formulasi warisan turun-temurun sejak puluhan tahun. Kami mengekalkan kaedah perapan intensif 12 jam untuk memastikan rempah meresap ke dalam serat daging paling dalam.",
        "about-f1-desc": "Bahan mentah segar disembelih bersih.", "about-f2-title": "Arang Kayu Asli", "about-f2-desc": "Aroma asap semulajadi yang memukau.",
        "menu-title": "Menu & Pengiraan Tempahan", "menu-desc": "Pilih unit kuantiti hidangan di bawah untuk menjana rumusan pesanan WhatsApp secara automatik.",
        "cart-title": "Rumusan Pesanan", "cart-empty": "Tiada item dipilih.", "cart-total": "Jumlah Anggaran:", "form-name": "Nama Penuh *", "form-loc": "Lokasi Pengambilan *",
        "form-time": "Waktu Pengambilan Semasa *", "cart-btn": "Hantar Tempahan WhatsApp", "loc-badge": "Status Kedai", "loc-title": "Lokasi Kami Hari Ini",
        "loc-desc": "Disebabkan jadual tapak niaga berkala, sila semak lokasi aktif harian bagi mengelakkan kekeliruan.",
        "loc-today-title": "Destinasi Aktif:", "loc-table-title": "Jadual Operasi Mingguan Kontingensi",
        "info-hub": "Hubungi Talian", "info-nav": "Aplikasi Navigasi", "info-hours": "Waktu Standby", "review-title": "Maklum Balas Pelanggan"
    },
    en: {
        "nav-home": "Home", "nav-about": "Heritage", "nav-menu": "Menu", "nav-location": "Location", "nav-reviews": "Reviews", "nav-btn-order": "Order Now",
        "hero-sub": "Original Malaysian Satay Recipe Since 1988", "hero-title": "Freshly Grilled Charcoal Fire Daily", "hero-btn-view": "View Menu", "hero-btn-loc": "Today's Location",
        "hero-desc": "Premium meat meticulously marinated with inherited traditional herbs, perfectly flame-grilled to serve you the signature classic taste local communities love.",
        "about-title": "Traditional Heritage Taste Legacy", "about-p1": "Satay Pak Mat delivers pristine street food delicacies powered by generational secret family spice mixtures. We enforce rigorous 12-hour traditional cold-marination to infuse rich layers deep into every fiber.",
        "about-f1-desc": "Strict clean standard fresh daily supplies.", "about-f2-title": "Natural Wood Charcoal", "about-f2-desc": "Captivating authentic rustic woody smoky profiles.",
        "menu-title": "Menu & Dynamic Estimator", "menu-desc": "Modify product quantities below to automatically pre-compile structured Malaysian natural-dialect WhatsApp dispatch configurations.",
        "cart-title": "Order Summary", "cart-empty": "No items selected.", "cart-total": "Estimated Total:", "form-name": "Full Name *", "form-loc": "Collection Destination *",
        "form-time": "Target Collection Time *", "cart-btn": "Dispatch WhatsApp Order", "loc-badge": "Stall Analytics", "loc-title": "Our Operational Destination Today",
        "loc-desc": "Due to changing weekly operating dynamic locations, verify the matching live daily operating perimeter.",
        "loc-today-title": "Active Site Destination:", "loc-table-title": "Standard Contingency Weekly Schedule Blueprint",
        "info-hub": "Communication Line", "info-nav": "Navigation Tools", "info-hours": "Standby Engagements", "review-title": "Validated Customer Testimonials"
    }
};

let currentLang = 'ms';
let menuData = [
    { id: 'm1', name_bm: 'Satay Ayam', name_en: 'Chicken Satay', desc_bm: 'Daging dada ayam lembut diperap kunyit & serai asli', desc_en: 'Tender chicken breast infused with fresh lemongrass', price: 1.20, unit_bm: 'cucuk', unit_en: 'stick', image_url: 'https://images.unsplash.com/photo-1529692236671-f1f6e994a529?auto=format&fit=crop&w=400&q=80' },
    { id: 'm2', name_bm: 'Satay Daging', name_en: 'Beef Satay', desc_bm: 'Daging batang pinang premium dengan siraman adunan rempah', desc_en: 'Premium tenderloin chunks coated with signature rich spices', price: 1.50, unit_bm: 'cucuk', unit_en: 'stick', image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80' },
    { id: 'm3', name_bm: 'Nasi Impit', name_en: 'Compressed Rice Cake', desc_bm: 'Nasi impit potong kiub padat kawan karib kuah kacang', desc_en: 'Traditional dense cubed rice cakes ideal for dipping sauce', price: 2.00, unit_bm: 'biji', unit_en: 'pcs', image_url: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=400&q=80' }
];

let weeklySchedule = [
    { id: 1, day_name_bm: 'Isnin', day_name_en: 'Monday', location_name_bm: 'Pasar Malam Taman ABC', location_name_en: 'Taman ABC Night Market', operating_hours: '4:30 PM - 10:30 PM', is_closed: false },
    { id: 2, day_name_bm: 'Selasa', day_name_en: 'Tuesday', location_name_bm: 'Tapak Niaga Keramat', location_name_en: 'Keramat Trading Site', operating_hours: '4:30 PM - 10:30 PM', is_closed: false },
    { id: 3, day_name_bm: 'Rabu', day_name_en: 'Wednesday', location_name_bm: 'Cuti Rehat', location_name_en: 'Closed', operating_hours: '-', is_closed: true },
    { id: 4, day_name_bm: 'Khamis', day_name_en: 'Thursday', location_name_bm: 'Pasar Malam Kampung Baru', location_name_en: 'Kampung Baru Night Market', operating_hours: '4:30 PM - 10:30 PM', is_closed: false },
    { id: 5, day_name_bm: 'Jumaat', day_name_en: 'Friday', location_name_bm: 'Tapak Niaga Setiawangsa', location_name_en: 'Setiawangsa Trading Site', operating_hours: '5:00 PM - 11:00 PM', is_closed: false }
];

let cartState = {};

// Initialization Orchestrator
document.addEventListener("DOMContentLoaded", () => {
    evaluateEmergencyBanner();
    renderMenu();
    calculateActiveDayLocation();
    renderWeeklySchedule();
    applyLocalization();
});

function toggleLanguage() {
    currentLang = currentLang === 'ms' ? 'en' : 'ms';
    document.getElementById('lang-toggle').innerText = currentLang === 'ms' ? '🇲🇾 BM' : '🇬🇧 English';
    applyLocalization();
    renderMenu();
    calculateActiveDayLocation();
    renderWeeklySchedule();
    updateCartDOM();
}

function applyLocalization() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const translationKey = element.getAttribute("data-i18n");
        if (translations[currentLang][translationKey]) {
            element.innerText = translations[currentLang][translationKey];
        }
    });
}

function evaluateEmergencyBanner() {
    // Simulated state for demonstration logic; fetch runtime states directly from Supabase tables dynamically in production.
    const mockUrgentBannerActive = true; 
    if (mockUrgentBannerActive) {
        const banner = document.getElementById('emergency-banner');
        const textNode = document.getElementById('emergency-text');
        textNode.innerText = currentLang === 'ms' 
            ? "🚨 UPDATE TERKINI: Hari ini Satay Pak Mat berpindah operasi ke Pasar Malam Kampung Baru disebabkan faktor cuaca lebat!"
            : "🚨 EMERGENCY CHANGE: Today Satay Pak Mat moves layout operations into Kampung Baru Night Market due to torrential weather conditions!";
        banner.classList.remove('hidden');
    }
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';
    
    menuData.forEach(item => {
        const name = currentLang === 'ms' ? item.name_bm : item.name_en;
        const desc = currentLang === 'ms' ? item.desc_bm : item.desc_en;
        const unit = currentLang === 'ms' ? item.unit_bm : item.unit_en;
        const currentQty = cartState[item.id] || 0;

        container.innerHTML += `
            <div class="card-bg rounded-xl overflow-hidden border border-neutral-800 transition transform hover:scale-[1.01] hover:border-neutral-700 flex flex-col justify-between">
                <div>
                    <img src="${item.image_url}" alt="${name}" class="w-full h-44 object-cover">
                    <div class="p-4">
                        <div class="flex justify-between items-start">
                            <h3 class="text-white font-bold tracking-wide text-base uppercase">${name}</h3>
                            <span class="text-amber-500 font-black text-sm">RM ${item.price.toFixed(2)}<span class="text-neutral-500 font-normal text-xs">/${unit}</span></span>
                        </div>
                        <p class="text-neutral-400 text-xs mt-1.5 font-light leading-relaxed">${desc}</p>
                    </div>
                </div>
                <div class="p-4 pt-0">
                    <div class="flex items-center justify-between mt-4 bg-[#121212] rounded-lg border border-neutral-800 p-1">
                        <button onclick="updateQty('${item.id}', -5)" class="text-gray-400 hover:text-amber-500 px-3 py-1 font-bold text-base transition">-</button>
                        <span class="text-white font-mono font-bold text-sm" id="qty-counter-${item.id}">${currentQty}</span>
                        <button onclick="updateQty('${item.id}', 5)" class="text-gray-400 hover:text-amber-500 px-3 py-1 font-bold text-base transition">+</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function updateQty(itemId, quantityChange) {
    if (!cartState[itemId]) cartState[itemId] = 0;
    cartState[itemId] += quantityChange;
    if (cartState[itemId] <= 0) delete cartState[itemId];
    
    const countDisplay = document.getElementById(`qty-counter-${itemId}`);
    if (countDisplay) countDisplay.innerText = cartState[itemId] || 0;
    
    updateCartDOM();
}

function updateCartDOM() {
    const itemsContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total-price');
    itemsContainer.innerHTML = '';
    
    let totalAccumulated = 0;
    const activeItemKeys = Object.keys(cartState);

    if (activeItemKeys.length === 0) {
        itemsContainer.innerHTML = `<p class="text-neutral-500 text-center py-6">${translations[currentLang]['cart-empty']}</p>`;
        totalDisplay.innerText = "RM 0.00";
        return;
    }

    activeItemKeys.forEach(id => {
        const item = menuData.find(m => m.id === id);
        const name = currentLang === 'ms' ? item.name_bm : item.name_en;
        const currentQty = cartState[id];
        const computedSubtotal = item.price * currentQty;
        totalAccumulated += computedSubtotal;

        itemsContainer.innerHTML += `
            <div class="flex justify-between items-center py-3">
                <div>
                    <span class="text-white font-medium text-sm block">${name}</span>
                    <span class="text-neutral-500 text-xs">${currentQty} x RM ${item.price.toFixed(2)}</span>
                </div>
                <span class="text-white font-mono text-sm">RM ${computedSubtotal.toFixed(2)}</span>
            </div>
        `;
    });

    totalDisplay.innerText = `RM ${totalAccumulated.toFixed(2)}`;
}

function calculateActiveDayLocation() {
    const localDayIndex = new Date().getDay(); // 0 = Ahad/Sunday, 1 = Isnin/Monday, etc.
    const normalizedIndex = localDayIndex === 0 ? 7 : localDayIndex; 
    
    const targetMatch = weeklySchedule.find(s => s.id === normalizedIndex) || weeklySchedule[0];
    const targetDisplayNode = document.getElementById('today-location-display');
    const targetHoursNode = document.getElementById('today-hours-display');
    const selectLocationDropdown = document.getElementById('order-location');
    
    const currentLocName = currentLang === 'ms' ? targetMatch.location_name_bm : targetMatch.location_name_en;
    targetDisplayNode.innerText = currentLocName;
    targetHoursNode.innerText = targetMatch.is_closed ? "" : `⏰ ${targetMatch.operating_hours}`;

    // Re-render drop-down options matrix configuration setup dynamically
    selectLocationDropdown.innerHTML = '';
    weeklySchedule.forEach(sch => {
        if (!sch.is_closed) {
            const labelText = currentLang === 'ms' ? sch.location_name_bm : sch.location_name_en;
            selectLocationDropdown.innerHTML += `<option value="${sch.location_name_bm}" ${sch.id === normalizedIndex ? 'selected' : ''}>${labelText}</option>`;
        }
    });
}

function renderWeeklySchedule() {
    const container = document.getElementById('weekly-schedule-container');
    container.innerHTML = '';

    weeklySchedule.forEach(day => {
        const dayLabel = currentLang === 'ms' ? day.day_name_bm : day.day_name_en;
        const locLabel = currentLang === 'ms' ? day.location_name_bm : day.location_name_en;
        
        container.innerHTML += `
            <div class="flex flex-col sm:flex-row justify-between sm:items-center p-4 hover:bg-neutral-800/40 transition">
                <span class="text-white font-bold text-sm tracking-wide w-28 uppercase">${dayLabel}</span>
                <span class="text-neutral-300 text-sm flex-1 mt-1 sm:mt-0 font-light">${locLabel}</span>
                <span class="text-amber-500 font-mono text-xs mt-1 sm:mt-0">${day.is_closed ? '' : day.operating_hours}</span>
            </div>
        `;
    });
}

// 5. Intelligent WhatsApp Message Compiler (Natural Short-form Dialect)
function sendWhatsAppOrder() {
    const nameInput = document.getElementById('order-name').value.trim();
    const locationSelect = document.getElementById('order-location').value;
    const timeInput = document.getElementById('order-time').value;

    if (!nameInput || !timeInput) {
        alert(currentLang === 'ms' ? "Sila lengkapkan maklumat nama dan jam pengambilan!" : "Please fill out your name and desired collection window coordinates!");
        return;
    }

    if (Object.keys(cartState).length === 0) {
        alert(currentLang === 'ms' ? "Sila pilih sekurang-kurangnya 1 item daripada menu!" : "Please add at least 1 menu catalog vector item into your cart bucket!");
        return;
    }

    let itemsPayloadString = "";
    let grandTotal = 0;

    Object.keys(cartState).forEach(id => {
        const matchingItem = menuData.find(m => m.id === id);
        const subValue = matchingItem.price * cartState[id];
        grandTotal += subValue;
        itemsPayloadString += `${matchingItem.name_bm} x${cartState[id]}\nRM ${subValue.toFixed(2)}\n`;
    });

    // Native Localised Malaysian Dialect Transformation (Natural Shortforms formatting)
    const whatsappPayload = 
`Assalamualaikum Pak Mat 😊
Sy nak buat tempahan.
────────────
${itemsPayloadString}────────────
Jumlah: RM ${grandTotal.toFixed(2)}

Nama: ${nameInput}
Lokasi ambil: ${locationSelect}
Jam ambil: ${timeInput}

Terima kasih 😊`;

    const cleanEncodedUri = encodeURIComponent(whatsappPayload);
    const targetPhoneNumber = "60123456789"; // Configure with real system telephone credentials
    window.open(`https://api.whatsapp.com/send?phone=${targetPhoneNumber}&text=${cleanEncodedUri}`, '_blank');
}
