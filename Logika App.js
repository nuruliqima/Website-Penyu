document.addEventListener('DOMContentLoaded', () => {
    const events = [
        {
            date: "18 - 19 Oktober 2025",
            title: "Transplantasi Karang",
            description: "Yuk gabung dalam kegiatan Transplantasi Karang untuk bersama-sama menjaga ekosistem laut kita. Item Kegiatan: Camping Lingkungan, Obrolan Malam Tentang Alam & Konservasi, dan Transplantasi Karang.",
            image: "https://source.unsplash.com/800x600/?coral,underwater"
        },
        {
            date: "01 Oktober 2025",
            title: "Maccerita: Mattemmu Taung Wekkatellu",
            description: "Merangkai Kearifan: Peran Seni, Budaya, Lingkungan & Pariwisata dalam pembangunan berkelanjutan. Di tengah arus globalisasi, kearifan lokal menjadi sumber nilai yang meneguhkan identitas. Mari menyatukan potensi seni, budaya, lingkungan, dan pariwisata.",
            image: "EVENT.jpg"
        },
        {
            date: "20 - 21 September 2025",
            title: "Tudang Sipulung Camp",
            description: "Kenali lebih jauh konservasi dan pariwisata di kegiatan Tudang Sipulung. Item Kegiatan: Nobar Film, Bincang santai seputar konservasi dan pariwisata, Pameran UMKM komunitas.",
            image: "https://source.unsplash.com/800x600/?camp,beach"
        },
        {
            date: "13 - 14 September 2025",
            title: "Mangrove Camp 2025",
            description: "Saatnya bergerak untuk bumi! Yuk gabung di Mangrove Camp 2025 untuk bersama menjaga ekosistem pesisir melalui penanaman mangrove dan aksi lingkungan lainnya.",
            image: "https://source.unsplash.com/800x600/?mangrove,planting"
        },
    ];

    const eventContainer = document.getElementById('event-container');
    eventContainer.innerHTML = ''; 
    events.forEach(event => {
        const eventElement = `
            <div class="event-item">
                <div class="event-image-container">
                    <img src="${event.image}" alt="${event.title}" class="event-image">
                </div>
                <div class="event-text-container">
                    <p class="text-sm text-pink-500 font-semibold">${event.date}</p>
                    <h3 class="mt-2 text-3xl font-bold text-slate-800">${event.title}</h3>
                    <p class="mt-4 text-slate-600 leading-relaxed">${event.description}</p>
                </div>
            </div>
        `;
        eventContainer.innerHTML += eventElement;
    });

    // Mobile Menu Logic
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Change header style on scroll
    const header = document.getElementById('main-header');
    window.onscroll = function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
});

