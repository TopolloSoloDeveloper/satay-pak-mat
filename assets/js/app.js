let menuData = [
    { 
        id: 'sate-ayam', 
        name_bm: 'Sate Ayam', 
        name_en: 'Chicken Sate', 
        desc_bm: 'Daging dada ayam fresh diperap serai wangi, memang empuk & juicy gila.', 
        desc_en: 'Fresh chicken breast marinated in lemongrass, super tender & juicy.', 
        price: 1.20, 
        unit_bm: 'cucuk', 
        unit_en: 'cucuk',
        min: 10,
        max: 1000,
        image_url: 'menu1.webp' 
    },
    { 
        id: 'sate-daging', 
        name_bm: 'Sate Daging', 
        name_en: 'Beef Sate', 
        desc_bm: 'Daging lembu premium tak ada lemak, lembut gila bila kunyah.', 
        desc_en: 'Premium lean beef cutlets with rich traditional spices. So soft!', 
        price: 1.50, 
        unit_bm: 'cucuk', 
        unit_en: 'cucuk',
        min: 10,
        max: 1000,
        image_url: 'menu2.webp' 
    },
    { 
        id: 'sate-kambing', 
        name_bm: 'Sate Kambing', 
        name_en: 'Mutton Sate', 
        desc_bm: 'Daging kambing empuk kaw-kaw, tak ada bau hamis & penuh rempah.', 
        desc_en: 'Juicy local mutton cuts seasoned to perfection. No gamey smell.', 
        price: 2.50, 
        unit_bm: 'cucuk', 
        unit_en: 'cucuk',
        min: 10,
        max: 1000,
        image_url: 'menu3.webp' 
    },
    { 
        id: 'nasi-impit', 
        name_bm: 'Nasi Impit', 
        name_en: 'Rice Cake', 
        desc_bm: 'Nasi impit kiub (1 ketul = 4 potong), ngam sangat layan dengan kuah kacang.', 
        desc_en: 'Compressed rice cakes (1 piece = 4 cuts), perfect match for peanut sauce.', 
        price: 1.00, 
        unit_bm: 'ketul', 
        unit_en: 'ketul',
        min: 1,
        max: 500,
        image_url: 'menu4.webp' 
    }
];

let weeklySchedule = [
    { id: 1, day_name_bm: 'Isnin', day_name_en: 'Monday', location_name_bm: 'Pasar Malam Taman ABC', location_name_en: 'Taman ABC Night Market', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Taman+ABC' },
    { id: 2, day_name_bm: 'Selasa', day_name_en: 'Tuesday', location_name_bm: 'Tapak Niaga Keramat', location_name_en: 'Keramat Trading Site', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Tapak+Niaga+Keramat' },
    { id: 3, day_name_bm: 'Rabu', day_name_en: 'Wednesday', location_name_bm: 'Cuti Rehat', location_name_en: 'Stall Closed', operating_hours: '-', is_closed: true, maps_url: '#' },
    { id: 4, day_name_bm: 'Khamis', day_name_en: 'Thursday', location_name_bm: 'Pasar Malam Kampung Baru', location_name_en: 'Kampung Baru Night Market', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Campung+Baru+Kuala+Lumpur' },
    { id: 5, day_name_bm: 'Jumaat', day_name_en: 'Friday', location_name_bm: 'Tapak Niaga Setiawangsa', location_name_en: 'Setiawangsa Trading Site', operating_hours: '5:00 PM - 11:00 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Tapak+Niaga+Setiawangsa' },
    { id: 6, day_name_bm: 'Sabtu', day_name_en: 'Saturday', location_name_bm: 'Pasar Malam Melawati', location_name_en: 'Melawati Night Market', operating_hours: '4:30 PM - 11:00 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Taman+Melawati' },
    { id: 7, day_name_bm: 'Ahad', day_name_en: 'Sunday', location_name_bm: 'Cuti Rehat', location_name_en: 'Closed', operating_hours: '-', is_closed: true, maps_url: '#' }
];

const translations = {
    ms: {
        "nav-home": "Home", "nav-about": "Kisah Kami", "nav-menu": "Menu", "nav-location": "Lokasi",
        "hero-sub": "Resepi Ori Sejak 1988", "hero-title": "Fresh Bakar Dari Bara Api Tiap Hari",
        "hero-desc": "Daging premium diperap rapi dengan rempah rahsia tradisi, dibakar padu punya.",
        "hero-btn-view": "Tengok Menu", "hero-btn-loc": "Port Hari Ini",
        "about-title": "Kisah Resepi Turun-Temurun",
        "about-p1": "Kita kekalkan cara bakar stail lama guna arang kayu asli selama 12 jam. Bau asap dia memang ngam so rasa sate tu lain macam power dia.",
        "menu-title": "Menu & Kira Harga",
        "menu-desc": "Sate min 10 cucuk, max 1000 cucuk ya. Klik je butang tambah atau taip terus kuantiti.",
        "cart-title": "Order List Anda", "cart-empty": "Bakul kosong lagi bro.", "cart-total": "Total Anggaran:",
        "form-name": "Nama Penuh *", "form-loc": "Drop-off / Lokasi Ambil *", "form-time": "Jam Nak Ambil *",
        "cart-btn": "Send Order ke WhatsApp", "loc-badge": "Shop Status", "loc-title": "Port Berniaga Hari Ini",
        "loc-today-title": "Hari ini kita setup booth kat:", "loc-btn-maps": "Waze / Google Maps Ke Sini",
        "loc-table-title": "Jadual Tapak Niaga Mingguan", "tag-today": "LIVE NOW", "placeholder-name": "Taip nama penuh anda",
        "cart-reset": "Clear Semua"
    },
    en: {
        "nav-home": "Home", "nav-about": "Our Story", "nav-menu": "Menu", "nav-location": "Location",
        "hero-sub": "Original Recipe Since 1988", "hero-title": "Freshly Grilled On Charcoal Fire",
        "hero-desc": "Premium meat marinated with top-tier secret spices, perfectly grilled daily.",
        "hero-btn-view": "Check Menu", "hero-btn-loc": "Today's Spot",
        "about-title": "Our Authentic Heritage Legacy",
        "about-p1": "We keep it real with our 12-hour traditional marination and natural wood charcoal grill. That premium smoky flavor hits different!",
        "menu-title": "Menu & Price Estimator",
        "menu-desc": "Sate min 10 sticks, max 1000 sticks. Tap + / - or just type your quantity directly.",
        "cart-title": "Your Order List", "cart-empty": "Your cart is currently empty.", "cart-total": "Estimated Total:",
        "form-name": "Full Name *", "form-loc": "Pick-up Point *", "form-time": "Pick-up Time *",
        "cart-btn": "Send Order to WhatsApp", "loc-badge": "Stall Analytics", "loc-title": "Where We At Today",
        "loc-today-title": "Today we are operating at:", "loc-btn-maps": "Open Google Maps Route",
        "loc-table-title": "Weekly Night Market Location Schedule", "tag-today": "TODAY", "placeholder-name": "Type your full name here",
        "cart-reset": "Reset Cart"
    }
};

let currentLang = 'ms';
let cartState = {};

document.addEventListener("DOMContentLoaded", () => {
    initRealTimeLocationSystem();
    applyLocalization();
});

function toggleLanguage() {
    currentLang = currentLang === 'ms' ? 'en' : 'ms';
    document.getElementById('lang-toggle').innerText = currentLang === 'ms' ? '🇲🇾 MY' : '🇬🇧 EN';
    applyLocalization();
}

function applyLocalization() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });
    
    const nameInput = document.getElementById('order-name');
    if (nameInput) {
        nameInput.placeholder = translations[currentLang]['placeholder-name'];
    }

    renderMenu();
    initRealTimeLocationSystem();
    renderWeeklySchedule();
    updateCartDOM();
}

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';
    const hoverTransitions = ['hover-lift', 'hover-bounce'];

    menuData.forEach((item, index) => {
        const name = currentLang === 'ms' ? item.name_bm : item.name_en;
        const desc = currentLang === 'ms' ? item.desc_bm : item.desc_en;
        const unit = currentLang === 'ms' ? item.unit_bm : item.unit_en;
        const qty = cartState[item.id] || 0;
        const chosenTransition = hoverTransitions[index % hoverTransitions.length];

        container.innerHTML += `
            <div class="bg-card-dark rounded-xl overflow-hidden border border-neutral-800 flex flex-col justify-between ${chosenTransition}">
                <div>
                    <img src="${item.image_url}" alt="${name}" class="w-full h-36 sm:h-40 object-cover">
                    <div class="p-4">
                        <div class="flex justify-between items-start gap-2">
                            <h3 class="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">${name} (${unit})</h3>
                            <span class="text-amber-400 font-black text-xs whitespace-nowrap">RM ${item.price.toFixed(2)}</span>
                        </div>
                        <p class="text-gray-400 text-[11px] mt-2 font-light leading-relaxed">${desc}</p>
                    </div>
                </div>
                <div class="p-4 pt-0">
                    <div class="flex items-center justify-between mt-3 bg-input-dark rounded-lg border border-neutral-800 p-1">
                        <button onclick="changeQtyOneByOne('${item.id}', -1)" class="text-gray-400 hover:text-red-500 px-3 py-1 font-bold text-sm transition">-</button>
                        
                        <div class="flex items-center space-x-1">
                            <!-- Tukar ke oninput untuk update 100% Real-Time masa user tengah menaip -->
                            <input type="number" min="0" max="${item.max}" value="${qty}" id="input-qty-${item.id}" oninput="liveQtyInput('${item.id}', this.value)" class="w-10 text-center bg-transparent text-white font-mono font-bold text-xs focus:outline-none">
                            <span class="text-gray-500 text-[10px] font-bold pr-1">${unit}</span>
                        </div>
                        
                        <button onclick="changeQtyOneByOne('${item.id}', 1)" class="text-gray-400 hover:text-emerald-400 px-3 py-1 font-bold text-sm transition">+</button>
                    </div>
                </div>
            </div>`;
    });
}

function changeQtyOneByOne(itemId, change) {
    const item = menuData.find(m => m.id === itemId);
    if (!cartState[itemId]) cartState[itemId] = 0;
    
    if (cartState[itemId] === 0 && change > 0) {
        cartState[itemId] = item.min;
    } else {
        cartState[itemId] += change;
    }

    if (cartState[itemId] < item.min && change < 0) {
        cartState[itemId] = 0; 
    }
    
    if (cartState[itemId] > item.max) cartState[itemId] = item.max;
    if (cartState[itemId] <= 0) delete cartState[itemId];
    
    document.getElementById(`input-qty-${itemId}`).value = cartState[itemId] || 0;
    updateCartDOM();
}

// Fungsi Input Real-Time Serta-merta Semasa Menaip
function liveQtyInput(itemId, val) {
    let parsed = parseInt(val);
    const item = menuData.find(m => m.id === itemId);

    if (isNaN(parsed) || parsed <= 0) {
        delete cartState[itemId];
    } else {
        if (parsed > item.max) parsed = item.max;
        cartState[itemId] = parsed;
    }
    updateCartDOM();
}

// Fungsi Reset Order Butang
function resetOrder() {
    cartState = {};
    menuData.forEach(item => {
        const element = document.getElementById(`input-qty-${item.id}`);
        if (element) element.value = 0;
    });
    updateCartDOM();
}

function updateCartDOM() {
    const container = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total-price');
    container.innerHTML = '';
    let total = 0;

    const keys = Object.keys(cartState);
    if (keys.length === 0) {
        container.innerHTML = `<p class="text-neutral-500 text-center py-4">${translations[currentLang]['cart-empty']}</p>`;
        totalDisplay.innerText = "RM 0.00";
        return;
    }

    // Suntik Butang Reset Di Atas Senarai Order List
    const resetText = translations[currentLang]['cart-reset'];
    container.innerHTML += `
        <div class="flex justify-end pb-2">
            <button onclick="resetOrder()" class="text-red-400 hover:text-red-500 font-bold text-[11px] uppercase flex items-center space-x-1 transition duration-200">
                <i class="fa-solid fa-trash-can"></i>
                <span>${resetText}</span>
            </button>
        </div>`;

    keys.forEach(id => {
        const item = menuData.find(m => m.id === id);
        const name = currentLang === 'ms' ? item.name_bm : item.name_en;
        const unit = currentLang === 'ms' ? item.unit_bm : item.unit_en;
        const sub = item.price * cartState[id];
        total += sub;

        container.innerHTML += `
            <div class="flex justify-between items-center py-2.5 border-b border-neutral-800/50">
                <div>
                    <span class="text-white font-bold block">${name}</span>
                    <span class="text-neutral-500 text-[11px]">${cartState[id]} ${unit} x RM ${item.price.toFixed(2)}</span>
                </div>
                <span class="text-white font-mono">RM ${sub.toFixed(2)}</span>
            </div>`;
    });
    totalDisplay.innerText = `RM ${total.toFixed(2)}`;
}

function initRealTimeLocationSystem() {
    let dayIdx = new Date().getDay(); 
    if (dayIdx === 0) dayIdx = 7; 
    
    const todayMatch = weeklySchedule.find(s => s.id === dayIdx);
    const locName = currentLang === 'ms' ? todayMatch.location_name_bm : todayMatch.location_name_en;
    
    const displayNode = document.getElementById('today-location-display');
    if (displayNode) displayNode.innerText = locName;

    const hoursNode = document.getElementById('today-hours-display');
    if (hoursNode) hoursNode.innerText = todayMatch.is_closed ? "" : `⏰ ${todayMatch.operating_hours}`;
    
    const mapsBtn = document.getElementById('live-google-maps-btn');
    if (mapsBtn) {
        if (todayMatch.is_closed) {
            mapsBtn.style.display = 'none';
        } else {
            mapsBtn.style.display = 'inline-flex';
            mapsBtn.href = todayMatch.maps_url;
        }
    }

    const dropdown = document.getElementById('order-location');
    if (dropdown) {
        dropdown.innerHTML = '';
        weeklySchedule.forEach(s => {
            if (!s.is_closed) {
                const optionLabel = currentLang === 'ms' ? s.location_name_bm : s.location_name_en;
                dropdown.innerHTML += `<option value="${s.location_name_bm}" ${s.id === dayIdx ? 'selected' : ''}>${optionLabel}</option>`;
            }
        });
    }
}

function renderWeeklySchedule() {
    const container = document.getElementById('weekly-schedule-container');
    container.innerHTML = '';
    let currentDayIdx = new Date().getDay();
    if (currentDayIdx === 0) currentDayIdx = 7;

    weeklySchedule.forEach(day => {
        const isToday = day.id === currentDayIdx;
        const activeRowClass = isToday ? 'bg-amber-500/10 border-l-4 border-amber-500 font-bold' : '';
        const dayLabel = currentLang === 'ms' ? day.day_name_bm : day.day_name_en;
        const locLabel = currentLang === 'ms' ? day.location_name_bm : day.location_name_en;
        const tagToday = translations[currentLang]['tag-today'];

        container.innerHTML += `
            <div class="flex flex-col sm:flex-row justify-between p-3 sm:p-4 transition duration-200 hover:bg-neutral-800/40 ${activeRowClass}">
                <span class="text-white font-bold uppercase w-28 flex items-center gap-1">
                    ${dayLabel}
                    ${isToday ? `<span class="text-[9px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-black">${tagToday}</span>` : ''}
                </span>
                <span class="text-neutral-300 flex-1 mt-1 sm:mt-0">${locLabel}</span>
                <span class="text-amber-400 font-mono mt-1 sm:mt-0 font-bold">${day.is_closed ? '' : day.operating_hours}</span>
            </div>`;
    });
}

function sendWhatsAppOrder() {
    const name = document.getElementById('order-name').value.trim();
    const loc = document.getElementById('order-location').value;
    const time = document.getElementById('order-time').value;
    
    if (!name || !time || Object.keys(cartState).length === 0) {
        const alertMsg = currentLang === 'ms' ? "Isi nama, masa & pilih sate dulu bro!" : "Please fill in your name, pick-up time & select sate first!";
        alert(alertMsg); 
        return;
    }
    
    let msg = "Assalamualaikum Pak Mat 😊\nSy nak buat tempahan.\n────────────\n";
    let total = 0;
    Object.keys(cartState).forEach(id => {
        const item = menuData.find(m => m.id === id);
        const sub = item.price * cartState[id];
        total += sub;
        
        if (id === 'nasi-impit') {
            const totalPotong = cartState[id] * 4;
            msg += `${item.name_bm} x${cartState[id]} ketul (${totalPotong} potong)\nRM ${sub.toFixed(2)}\n`;
        } else {
            msg += `${item.name_bm} x${cartState[id]} cucuk\nRM ${sub.toFixed(2)}\n`;
        }
    });
    msg += `────────────\nJumlah: RM ${total.toFixed(2)}\n\nNama: ${name}\nLokasi ambil: ${loc}\nJam ambil: ${time}\n\nTerima kasih Pak Mat!`;
    
    const targetPhoneNumber = "60143252403"; 
    window.open(`https://api.whatsapp.com/send?phone=${targetPhoneNumber}&text=${encodeURIComponent(msg)}`, '_blank');
}
