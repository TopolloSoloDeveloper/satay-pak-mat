// Pengurusan Imej Menggunakan Fail WebP Tempatan Kosong Sedia Diupload Ke GitHub
let menuData = [
    { 
        id: 'satay-ayam', 
        name_bm: 'Satay Ayam Pasaran', 
        name_en: 'Premium Chicken Satay', 
        desc_bm: 'Daging dada ayam segar diperap serai wangi, empuk & juicy.', 
        desc_en: 'Fresh chicken breast marinated in heritage lemongrass formulation.', 
        price: 1.20, 
        unit_bm: 'cucuk', 
        unit_en: 'stick', 
        image_url: 'menu1.webp' 
    },
    { 
        id: 'satay-daging', 
        name_bm: 'Satay Daging Batang Pinang', 
        name_en: 'Tenderloin Beef Satay', 
        desc_bm: 'Daging lembu premium tanpa lemak, tekstur lembut dikunyah.', 
        desc_en: 'Lean premium beef cutlets injected with rich local traditional spices.', 
        price: 1.50, 
        unit_bm: 'cucuk', 
        unit_en: 'stick', 
        image_url: 'menu2.webp' 
    },
    { 
        id: 'satay-kambing', 
        name_bm: 'Satay Kambing Lumayan', 
        name_en: 'Juicy Mutton Satay', 
        desc_bm: 'Daging kambing empuk premium tanpa bau hamis, kaya rempah.', 
        desc_en: 'Juicy local mutton cuts seasoned to absolute perfection.', 
        price: 2.00, 
        unit_bm: 'cucuk', 
        unit_en: 'stick', 
        image_url: 'menu3.webp' 
    },
    { 
        id: 'nasi-impit', 
        name_bm: 'Nasi Impit Padat', 
        name_en: 'Traditional Rice Cake', 
        desc_bm: 'Nasi impit kiub tradisional, gandingan terbaik kuah kacang.', 
        desc_en: 'Compact compressed cubed rice cakes perfect for peanut sauce dipping.', 
        price: 2.00, 
        unit_bm: 'biji', 
        unit_en: 'pcs', 
        image_url: 'menu4.webp' 
    }
];

// Jadual Lokasi Mingguan Bersama Pautan Google Maps Real-Time Mengikut Hari
let weeklySchedule = [
    { id: 1, day_name_bm: 'Isnin', day_name_en: 'Monday', location_name_bm: 'Pasar Malam Taman ABC', location_name_en: 'Taman ABC Night Market', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Taman+ABC' },
    { id: 2, day_name_bm: 'Selasa', day_name_en: 'Tuesday', location_name_bm: 'Tapak Niaga Keramat', location_name_en: 'Keramat Trading Site', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Tapak+Niaga+Keramat' },
    { id: 3, day_name_bm: 'Rabu', day_name_en: 'Wednesday', location_name_bm: 'Cuti Rehat', location_name_en: 'Closed', operating_hours: '-', is_closed: true, maps_url: '#' },
    { id: 4, day_name_bm: 'Khamis', day_name_en: 'Khamis', location_name_bm: 'Pasar Malam Kampung Baru', location_name_en: 'Kampung Baru Night Market', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Kampung+Baru+Kuala+Lumpur' },
    { id: 5, day_name_bm: 'Jumaat', day_name_en: 'Friday', location_name_bm: 'Tapak Niaga Setiawangsa', location_name_en: 'Setiawangsa Trading Site', operating_hours: '5:00 PM - 11:00 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Tapak+Niaga+Setiawangsa' },
    { id: 6, day_name_bm: 'Sabtu', day_name_en: 'Saturday', location_name_bm: 'Pasar Malam Melawati', location_name_en: 'Melawati Night Market', operating_hours: '4:30 PM - 11:00 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Taman+Melawati' },
    { id: 7, day_name_bm: 'Ahad', day_name_en: 'Sunday', location_name_bm: 'Cuti Rehat', location_name_en: 'Closed', operating_hours: '-', is_closed: true, maps_url: '#' }
];

let currentLang = 'ms';
let cartState = {};

document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
    initRealTimeLocationSystem();
    renderWeeklySchedule();
    updateCartDOM();
});

function toggleLanguage() {
    currentLang = currentLang === 'ms' ? 'en' : 'ms';
    document.getElementById('lang-toggle').innerText = currentLang === 'ms' ? '🇲🇾 BM' : '🇬🇧 English';
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
        const qty = cartState[item.id] || 0;
        const chosenTransition = hoverTransitions[index % hoverTransitions.length];

        container.innerHTML += `
            <div class="bg-card-dark rounded-xl overflow-hidden border border-neutral-800 flex flex-col justify-between ${chosenTransition}">
                <div>
                    <img src="${item.image_url}" alt="${name}" class="w-full h-36 sm:h-40 object-cover">
                    <div class="p-4">
                        <div class="flex justify-between items-start gap-2">
                            <h3 class="text-white font-bold text-xs sm:text-sm uppercase tracking-wide">${name}</h3>
                            <span class="text-amber-400 font-black text-xs">RM ${item.price.toFixed(2)}</span>
                        </div>
                        <p class="text-gray-400 text-[11px] mt-2 font-light leading-relaxed">${desc}</p>
                    </div>
                </div>
                <div class="p-4 pt-0">
                    <div class="flex items-center justify-between mt-3 bg-input-dark rounded-lg border border-neutral-800 p-1">
                        <button onclick="changeQtyOneByOne('${item.id}', -1)" class="text-gray-400 hover:text-red-500 px-3 py-1 font-bold text-sm transition">-</button>
                        <input type="number" min="0" value="${qty}" id="input-qty-${item.id}" oninput="manualQtyInput('${item.id}', this.value)" class="w-12 text-center bg-transparent text-white font-mono font-bold text-xs focus:outline-none">
                        <button onclick="changeQtyOneByOne('${item.id}', 1)" class="text-gray-400 hover:text-emerald-400 px-3 py-1 font-bold text-sm transition">+</button>
                    </div>
                </div>
            </div>`;
    });
}

function changeQtyOneByOne(itemId, change) {
    if (!cartState[itemId]) cartState[itemId] = 0;
    cartState[itemId] += change;
    if (cartState[itemId] <= 0) delete cartState[itemId];
    
    document.getElementById(`input-qty-${itemId}`).value = cartState[itemId] || 0;
    updateCartDOM();
}

function manualQtyInput(itemId, val) {
    let parsed = parseInt(val);
    if (isNaN(parsed) || parsed <= 0) {
        delete cartState[itemId];
    } else {
        cartState[itemId] = parsed;
    }
    updateCartDOM();
}

function updateCartDOM() {
    const container = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total-price');
    container.innerHTML = '';
    let total = 0;

    const keys = Object.keys(cartState);
    if (keys.length === 0) {
        container.innerHTML = `<p class="text-neutral-500 text-center py-4">Tiada item dipilih.</p>`;
        totalDisplay.innerText = "RM 0.00";
        return;
    }

    keys.forEach(id => {
        const item = menuData.find(m => m.id === id);
        const name = currentLang === 'ms' ? item.name_bm : item.name_en;
        const sub = item.price * cartState[id];
        total += sub;

        container.innerHTML += `
            <div class="flex justify-between items-center py-2.5">
                <div>
                    <span class="text-white font-bold block">${name}</span>
                    <span class="text-neutral-500 text-[11px]">${cartState[id]} x RM ${item.price.toFixed(2)}</span>
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
    
    document.getElementById('today-location-display').innerText = locName;
    document.getElementById('today-hours-display').innerText = todayMatch.is_closed ? "" : `⏰ ${todayMatch.operating_hours}`;
    
    const mapsBtn = document.getElementById('live-google-maps-btn');
    if (todayMatch.is_closed) {
        mapsBtn.style.display = 'none';
    } else {
        mapsBtn.style.display = 'inline-flex';
        mapsBtn.href = todayMatch.maps_url;
    }

    const dropdown = document.getElementById('order-location');
    dropdown.innerHTML = '';
    weeklySchedule.forEach(s => {
        if (!s.is_closed) {
            dropdown.innerHTML += `<option value="${s.location_name_bm}" ${s.id === dayIdx ? 'selected' : ''}>${s.location_name_bm}</option>`;
        }
    });
}

function renderWeeklySchedule() {
    const container = document.getElementById('weekly-schedule-container');
    container.innerHTML = '';
    let currentDayIdx = new Date().getDay();
    if (currentDayIdx === 0) currentDayIdx = 7;

    weeklySchedule.forEach(day => {
        const isToday = day.id === currentDayIdx;
        const activeRowClass = isToday ? 'bg-amber-500/10 border-l-4 border-amber-500 font-bold' : '';

        container.innerHTML += `
            <div class="flex flex-col sm:flex-row justify-between p-3 sm:p-4 transition duration-200 hover:bg-neutral-800/40 ${activeRowClass}">
                <span class="text-white font-bold uppercase w-28 flex items-center gap-1">
                    ${currentLang === 'ms' ? day.day_name_bm : day.day_name_en}
                    ${isToday ? '<span class="text-[9px] bg-amber-500 text-black px-1.5 py-0.5 rounded font-black">HARI INI</span>' : ''}
                </span>
                <span class="text-neutral-300 flex-1 mt-1 sm:mt-0">${currentLang === 'ms' ? day.location_name_bm : day.location_name_en}</span>
                <span class="text-amber-400 font-mono mt-1 sm:mt-0 font-bold">${day.is_closed ? '' : day.operating_hours}</span>
            </div>`;
    });
}

function sendWhatsAppOrder() {
    const name = document.getElementById('order-name').value.trim();
    const loc = document.getElementById('order-location').value;
    const time = document.getElementById('order-time').value;
    
    if (!name || !time || Object.keys(cartState).length === 0) {
        alert("Sila isi nama, masa pengambilan & pilih satay terlebih dahulu!"); return;
    }
    
    let msg = "Assalamualaikum Pak Mat 😊\nSy nak buat tempahan.\n────────────\n";
    let total = 0;
    Object.keys(cartState).forEach(id => {
        const item = menuData.find(m => m.id === id);
        const sub = item.price * cartState[id];
        total += sub;
        msg += `${item.name_bm} x${cartState[id]}\nRM ${sub.toFixed(2)}\n`;
    });
    msg += `────────────\nJumlah: RM ${total.toFixed(2)}\n\nNama: ${name}\nLokasi ambil: ${loc}\nJam ambil: ${time}\n\nTerima kasih Pak Mat!`;
    window.open(`https://api.whatsapp.com/send?phone=60123456789&text=${encodeURIComponent(msg)}`, '_blank');
}
