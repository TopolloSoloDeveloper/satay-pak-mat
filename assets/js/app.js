// Database Tempatan Mengandungi Pautan Gambar Makanan Yang Betul & Tepat
let menuData = [
    { 
        id: 'satay-ayam', 
        name_bm: 'Satay Ayam Pasaran', 
        name_en: 'Premium Chicken Satay', 
        desc_bm: 'Daging ayam segar diperap serai wangi, empuk & juicy.', 
        desc_en: 'Fresh chicken thigh pieces marinated in heritage lemongrass formulation.', 
        price: 1.20, 
        unit_bm: 'cucuk', 
        unit_en: 'stick', 
        image_url: 'https://images.unsplash.com/photo-1529692236671-f1f6e994a529?auto=format&fit=crop&w=500&q=80' // Gambar Bakar Satay Ayam Realistik
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
        image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=80' // Gambar Satay Daging Atas Pemanggang
    },
    { 
        id: 'satay-kambing', 
        name_bm: 'Satay Kambing Lumayan', 
        name_en: 'Juicy Mutton Satay', 
        desc_bm: 'Daging kambing empuk tanpa bau hamis, rasa kaya rempah.', 
        desc_en: 'Juicy local mutton cuts seasoned to absolute perfection.', 
        price: 2.00, 
        unit_bm: 'cucuk', 
        unit_en: 'stick', 
        image_url: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=500&q=80' // Gambar Daging Kambing Bakar Berempah
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
        image_url: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80' // Gambar Nasi Tradisional
    }
];

// Jadual Lokasi Mingguan Beserta URL Pautan Google Maps Pasar Malam Yang Betul
let weeklySchedule = [
    { id: 1, day_name_bm: 'Isnin', day_name_en: 'Monday', location_name_bm: 'Pasar Malam Taman ABC', location_name_en: 'Taman ABC Night Market', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Taman+ABC' },
    { id: 2, day_name_bm: 'Selasa', day_name_en: 'Tuesday', location_name_bm: 'Tapak Niaga Keramat', location_name_en: 'Keramat Trading Site', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Tapak+Niaga+Keramat' },
    { id: 3, day_name_bm: 'Rabu', day_name_en: 'Wednesday', location_name_bm: 'Cuti Rehat', location_name_en: 'Stall Closed', operating_hours: '-', is_closed: true, maps_url: '#' },
    { id: 4, day_name_bm: 'Khamis', day_name_en: 'Thursday', location_name_bm: 'Pasar Malam Kampung Baru', location_name_en: 'Kampung Baru Night Market', operating_hours: '4:30 PM - 10:30 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Kampung+Baru' },
    { id: 5, day_name_bm: 'Jumaat', day_name_en: 'Friday', location_name_bm: 'Tapak Niaga Setiawangsa', location_name_en: 'Setiawangsa Trading Site', operating_hours: '5:00 PM - 11:00 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Tapak+Niaga+Setiawangsa' },
    { id: 6, day_name_bm: 'Sabtu', day_name_en: 'Saturday', location_name_bm: 'Pasar Malam Melawati', location_name_en: 'Melawati Night Market', operating_hours: '4:30 PM - 11:00 PM', is_closed: false, maps_url: 'https://maps.google.com/?q=Pasar+Malam+Melawati' },
    { id: 7, day_name_bm: 'Ahad', day_name_en: 'Sunday', location_name_bm: 'Cuti Rehat', location_name_en: 'Stall Closed', operating_hours: '-', is_closed: true, maps_url: '#' }
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
    
    menuData.forEach(item => {
        const name = currentLang === 'ms' ? item.name_bm : item.name_en;
        const desc = currentLang === 'ms' ? item.desc_bm : item.desc_en;
        const unit = currentLang === 'ms' ? item.unit_bm : item.unit_en;
        const qty = cartState[item.id] || 0;

        // Kad menu menggunakan gabungan transition rawak (card-rotate + hover effects)
        container.innerHTML += `
            <div class="card-premium rounded-xl overflow-hidden shadow-lg card-rotate flex flex-col justify-between">
                <div>
                    <img src="${item.image_url}" alt="${name}" class="w-full h-44 object-cover transition transform hover:scale-110 duration-500">
                    <div class="p-4">
                        <div class="flex justify-between items-start gap-2">
                            <h3 class="text-white font-bold text-sm uppercase tracking-wide">${name}</h3>
                            <span class="text-amber-400 font-black text-xs whitespace-nowrap">RM ${item.price.toFixed(2)}/${unit}</span>
                        </div>
                        <p class="text-gray-400 text-xs mt-2 font-light leading-relaxed">${desc}</p>
                    </div>
                </div>
                <div class="p-4 pt-0">
                    <div class="flex items-center justify-between mt-4 bg-[#121212] rounded-lg border border-neutral-800 p-1">
                        <!-- Perubahan 1 by 1 -->
                        <button onclick="changeQtyOneByOne('${item.id}', -1)" class="text-gray-400 hover:text-red-500 px-3 py-1 font-bold text-base transition-all duration-200 transform hover:scale-125">-</button>
                        
                        <!-- User boleh tulis sendiri kuantiti -->
                        <input type="number" min="0" value="${qty}" id="input-qty-${item.id}" oninput="manualQtyInput('${item.id}', this.value)" class="w-16 text-center bg-transparent text-white font-mono font-bold text-sm focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none">
                        
                        <button onclick="changeQtyOneByOne('${item.id}', 1)" class="text-gray-400 hover:text-emerald-400 px-3 py-1 font-bold text-base transition-all duration-200 transform hover:scale-125">+</button>
                    </div>
                </div>
            </div>`;
    });
}

// Tambah/Tolak Kuantiti 1 demi 1
function changeQtyOneByOne(itemId, change) {
    if (!cartState[itemId]) cartState[itemId] = 0;
    cartState[itemId] += change;
    
    if (cartState[itemId] <= 0) {
        delete cartState[itemId];
    }
    
    document.getElementById(`input-qty-${itemId}`).value = cartState[itemId] || 0;
    updateCartDOM();
}

// Boleh tulis kuantiti sendiri secara manual
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
        container.innerHTML = `<p class="text-neutral-500 text-center py-6">${currentLang === 'ms' ? 'Tiada item dipilih.' : 'No items selected.'}</p>`;
        totalDisplay.innerText = "RM 0.00";
        return;
    }

    keys.forEach(id => {
        const item = menuData.find(m => m.id === id);
        const name = currentLang === 'ms' ? item.name_bm : item.name_en;
        const sub = item.price * cartState[id];
        total += sub;

        container.innerHTML += `
            <div class="flex justify-between items-center py-3 transition duration-300 hover:bg-neutral-800/40 px-2 rounded-lg">
                <div>
                    <span class="text-white font-bold text-xs block">${name}</span>
                    <span class="text-gray-400 text-xs">${cartState[id]} x RM ${item.price.toFixed(2)}</span>
                </div>
                <span class="text-white font-mono text-xs">RM ${sub.toFixed(2)}</span>
            </div>`;
    });
    totalDisplay.innerText = `RM ${total.toFixed(2)}`;
}

// Mengubah & Membaca Jadual Lokasi Mengikut Hari Real-Time Komputer/Telefon
function initRealTimeLocationSystem() {
    let dayIdx = new Date().getDay(); // 0 = Ahad, 1 = Isnin, dll.
    if (dayIdx === 0) dayIdx = 7; // Tukar Ahad kepada index ke-7
    
    const todayMatch = weeklySchedule.find(s => s.id === dayIdx) || weeklySchedule[3];
    const locName = currentLang === 'ms' ? todayMatch.location_name_bm : todayMatch.location_name_en;
    
    document.getElementById('today-location-display').innerText = locName;
    document.getElementById('today-hours-display').innerText = todayMatch.is_closed ? "" : `⏰ ${todayMatch.operating_hours}`;
    
    // Kemaskini link butang Google Maps secara dinamik
    const mapsBtn = document.getElementById('live-google-maps-btn');
    if (todayMatch.is_closed) {
        mapsBtn.style.display = 'none';
    } else {
        mapsBtn.style.display = 'inline-flex';
        mapsBtn.href = todayMatch.maps_url;
    }

    // Set lokasi lalai pilihan borang tempahan mengikut lokasi aktif hari ini
    const dropdown = document.getElementById('order-location');
    dropdown.innerHTML = '';
    weeklySchedule.forEach(s => {
        if (!s.is_closed) {
            dropdown.innerHTML += `<option value="${s.location_name_bm}" ${s.id === dayIdx ? 'selected' : ''}>${currentLang === 'ms' ? s.location_name_bm : s.location_name_en}</option>`;
        }
    });
}

function renderWeeklySchedule() {
    const container = document.getElementById('weekly-schedule-container');
    container.innerHTML = '';
    
    let currentDayIdx = new Date().getDay();
    if (currentDayIdx === 0) currentDayIdx = 7;

    weeklySchedule.forEach(day => {
        // Jika hari tersebut adalah hari ini, kita bagi highlight border/background cerah sedikit
        const isToday = day.id === currentDayIdx;
        const todayHighlightClass = isToday ? 'bg-amber-500/10 border-l-4 border-amber-500 font-bold' : '';

        container.innerHTML += `
            <div class="flex flex-col sm:flex-row justify-between p-4 transition duration-300 hover:bg-neutral-100 ${todayHighlightClass}">
                <span class="text-gray-900 font-bold text-xs uppercase w-24 flex items-center">
                    ${currentLang === 'ms' ? day.day_name_bm : day.day_name_en}
                    ${isToday ? ' <span class="ml-1 text-[9px] bg-amber-500 text-black px-1.5 py-0.5 rounded-full font-black">HARI INI</span>' : ''}
                </span>
                <span class="text-gray-600 text-xs flex-1 mt-1 sm:mt-0">${currentLang === 'ms' ? day.location_name_bm : day.location_name_en}</span>
                <span class="text-amber-600 font-mono text-xs mt-1 sm:mt-0 font-bold">${day.is_closed ? '' : day.operating_hours}</span>
            </div>`;
    });
}

function sendWhatsAppOrder() {
    const name = document.getElementById('order-name').value.trim();
    const loc = document.getElementById('order-location').value;
    const time = document.getElementById('order-time').value;
    
    if (!name || !time || Object.keys(cartState).length === 0) {
        alert("Sila isi maklumat nama, masa, dan kuantiti pesanan anda!"); 
        return;
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
