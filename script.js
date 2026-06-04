// ===== PRODUCTS DATABASE =====
const productsData = [
    {
        id: 1,
        name: 'GoPro HERO6 4K Action Camera - Black',
        price: 99.50,
        oldPrice: 1128.00,
        rating: 7.5,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Plastic',
        type: 'Action Camera',
        description: 'The GoPro HERO6 Black is the most powerful GoPro ever. Shoot stunning 4K60 and 1080p240 video, and 12MP photos. Features a new GP1 chip, improved image stabilization, and voice control.',
        specs: {
            Model: '#CHDHX-601',
            Resolution: '4K60',
            Waterproof: '10m',
            Battery: '1220mAh',
            Weight: '117g'
        },
        supplier: 'TechZone LLC',
        supplierCountry: 'us',
        supplierCity: 'New York',
        priceTiers: [
            { price: 99.50, range: '1-50 pcs' },
            { price: 89.00, range: '50-200 pcs' },
            { price: 79.00, range: '200+ pcs' }
        ]
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21 Smartphone',
        price: 57.70,
        oldPrice: 850.00,
        rating: 5.9,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Glass & Metal',
        type: 'Smartphone',
        description: 'Samsung Galaxy S21 features a 6.2-inch Dynamic AMOLED display, triple camera system, and 5G connectivity. Powered by Exynos 2100 processor.',
        specs: {
            Model: 'SM-G991B',
            Display: '6.2 inch',
            RAM: '8GB',
            Storage: '128GB',
            Battery: '4000mAh'
        },
        supplier: 'Samsung Store',
        supplierCountry: 'kr',
        supplierCity: 'Seoul',
        priceTiers: [
            { price: 57.70, range: '1-50 pcs' },
            { price: 49.00, range: '50-200 pcs' },
            { price: 42.00, range: '200+ pcs' }
        ]
    },
    {
        id: 3,
        name: 'Xiaomi Mi 11 Pro Smartphone',
        price: 45.00,
        oldPrice: 620.00,
        rating: 7.5,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Glass & Ceramic',
        type: 'Smartphone',
        description: 'Xiaomi Mi 11 Pro comes with Snapdragon 888, 120Hz curved AMOLED display, and 67W wireless charging. Professional-grade camera system.',
        specs: {
            Model: 'Mi 11 Pro',
            Display: '6.81 inch',
            RAM: '12GB',
            Storage: '256GB',
            Battery: '5000mAh'
        },
        supplier: 'Xiaomi Official',
        supplierCountry: 'cn',
        supplierCity: 'Beijing',
        priceTiers: [
            { price: 45.00, range: '1-50 pcs' },
            { price: 38.00, range: '50-200 pcs' },
            { price: 32.00, range: '200+ pcs' }
        ]
    },
    {
        id: 4,
        name: 'MacBook Pro 13 inch Laptop',
        price: 340.00,
        oldPrice: 1299.00,
        rating: 7.5,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Aluminum',
        type: 'Laptop',
        description: 'MacBook Pro with Apple M1 chip delivers breakthrough performance and amazing battery life. Features a stunning Retina display and Touch Bar.',
        specs: {
            Model: 'MYD82LL/A',
            Processor: 'Apple M1',
            RAM: '8GB',
            Storage: '256GB SSD',
            Display: '13.3 inch Retina'
        },
        supplier: 'Apple Reseller',
        supplierCountry: 'us',
        supplierCity: 'California',
        priceTiers: [
            { price: 340.00, range: '1-10 pcs' },
            { price: 310.00, range: '10-50 pcs' },
            { price: 285.00, range: '50+ pcs' }
        ]
    },
    {
        id: 5,
        name: 'Smart Watch Series 7 Gray',
        price: 129.95,
        oldPrice: 399.00,
        rating: 7.5,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Aluminum & Glass',
        type: 'Smartwatch',
        description: 'Smart Watch with always-on Retina display, blood oxygen sensor, ECG app, and fitness tracking. Water resistant up to 50 meters.',
        specs: {
            Model: 'Series 7',
            Display: '41mm OLED',
            Battery: '18 hours',
            'Water Resistance': '50m',
            Connectivity: 'GPS + Cellular'
        },
        supplier: 'Watch World',
        supplierCountry: 'de',
        supplierCity: 'Berlin',
        priceTiers: [
            { price: 129.95, range: '1-20 pcs' },
            { price: 115.00, range: '20-100 pcs' },
            { price: 99.00, range: '100+ pcs' }
        ]
    },
    {
        id: 6,
        name: 'Canon EOS 2000D DSLR Camera',
        price: 249.00,
        oldPrice: 580.00,
        rating: 7.5,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Plastic & Metal',
        type: 'DSLR Camera',
        description: 'Canon EOS 2000D with 24.1 Megapixel CMOS sensor, DIGIC 4+ Image Processor, and Built-in Wi-Fi and NFC. Perfect for beginners.',
        specs: {
            Model: 'EOS 2000D',
            Megapixels: '24.1 MP',
            'ISO Range': '100-6400',
            'Video': 'Full HD 1080p',
            'Battery Life': '500 shots'
        },
        supplier: 'Canon Official',
        supplierCountry: 'jp',
        supplierCity: 'Tokyo',
        priceTiers: [
            { price: 249.00, range: '1-20 pcs' },
            { price: 225.00, range: '20-100 pcs' },
            { price: 199.00, range: '100+ pcs' }
        ]
    },
    {
        id: 7,
        name: 'iPhone 13 Pro Max',
        price: 399.00,
        oldPrice: 1099.00,
        rating: 7.5,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Stainless Steel & Glass',
        type: 'Smartphone',
        description: 'iPhone 13 Pro Max with A15 Bionic chip, Pro camera system with macro photography, ProMotion 120Hz display, and all-day battery life.',
        specs: {
            Model: 'A2643',
            Display: '6.7 inch Super Retina',
            RAM: '6GB',
            Storage: '128GB',
            Battery: '4352mAh'
        },
        supplier: 'Apple Store',
        supplierCountry: 'us',
        supplierCity: 'California',
        priceTiers: [
            { price: 399.00, range: '1-10 pcs' },
            { price: 369.00, range: '10-50 pcs' },
            { price: 340.00, range: '50+ pcs' }
        ]
    },
    {
        id: 8,
        name: 'OnePlus 9 Pro 5G Phone',
        price: 79.00,
        oldPrice: 750.00,
        rating: 7.5,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Glass & Metal',
        type: 'Smartphone',
        description: 'OnePlus 9 Pro 5G with Snapdragon 888, Hasselblad camera system, 120Hz fluid display, and 65W Warp Charge technology.',
        specs: {
            Model: 'LE2123',
            Display: '6.7 inch AMOLED',
            RAM: '12GB',
            Storage: '256GB',
            Battery: '4500mAh'
        },
        supplier: 'OnePlus Store',
        supplierCountry: 'cn',
        supplierCity: 'Shenzhen',
        priceTiers: [
            { price: 79.00, range: '1-20 pcs' },
            { price: 68.00, range: '20-100 pcs' },
            { price: 58.00, range: '100+ pcs' }
        ]
    },
    {
        id: 9,
        name: 'Huawei P40 Pro Smartphone',
        price: 65.00,
        oldPrice: 699.00,
        rating: 7.5,
        orders: 154,
        shipping: 'Free Shipping',
        image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        ],
        category: 'tech',
        condition: 'Brand new',
        material: 'Glass & Ceramic',
        type: 'Smartphone',
        description: 'Huawei P40 Pro with Leica quad camera system, 6.58 inch OLED display, Kirin 990 5G processor, and 40W wireless charging.',
        specs: {
            Model: 'ELS-NX9',
            Display: '6.58 inch OLED',
            RAM: '8GB',
            Storage: '256GB',
            Battery: '4200mAh'
        },
        supplier: 'Huawei Store',
        supplierCountry: 'cn',
        supplierCity: 'Shenzhen',
        priceTiers: [
            { price: 65.00, range: '1-20 pcs' },
            { price: 55.00, range: '20-100 pcs' },
            { price: 47.00, range: '100+ pcs' }
        ]
    }
];

// Save products to localStorage for detail page
localStorage.setItem('productsData', JSON.stringify(productsData));
// ===== REAL PRODUCT IMAGES =====
const productImages = {
    'smartwatch': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
    'laptop': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop',
    'headphones': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    'gopro': 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop',
    'canon': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop',
    'phone1': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop',
    'phone2': 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=200&h=200&fit=crop',
    'phone3': 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200&h=200&fit=crop',
    'tshirt': 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=200&fit=crop',
    'jacket': 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=200&fit=crop',
    'coat': 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=200&h=200&fit=crop',
    'bag': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
    'wallet': 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=200&h=200&fit=crop',
    'banner': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=300&fit=crop',
    'sofa': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop',
    'chair': 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=200&h=200&fit=crop',
    'mixer': 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=200&h=200&fit=crop',
    'camera': 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=200&fit=crop',
    'gaming': 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=200&h=200&fit=crop',
    'kettle': 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&h=200&fit=crop',
    'tshirt2': 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=200&h=200&fit=crop',
};

// ===== AUTO REPLACE IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src') || '';
        const filename = src.split('/').pop().split('.')[0].toLowerCase();
        if (productImages[filename]) {
            img.src = productImages[filename];
        }
        // Fix broken images
        img.onerror = function() {
            const name = this.src.split('/').pop().split('.')[0];
            if (productImages[name]) {
                this.src = productImages[name];
            }
        };
    });
    updateCartCount();
});

// ===== DROPDOWN TOGGLE =====
function toggleDropdown(menuId) {
    const allMenus = document.querySelectorAll('.dropdown-menu');
    const allTriggers = document.querySelectorAll('.dropdown-trigger');
    const targetMenu = document.getElementById(menuId);

    allMenus.forEach(menu => {
        if (menu.id !== menuId) menu.classList.remove('show');
    });
    allTriggers.forEach(trigger => {
        if (trigger.nextElementSibling?.id !== menuId) trigger.classList.remove('active');
    });

    targetMenu.classList.toggle('show');
    const trigger = targetMenu.previousElementSibling;
    if (trigger) trigger.classList.toggle('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown') && !e.target.closest('.icon-item')) {
        document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
        document.querySelectorAll('.dropdown-trigger').forEach(t => t.classList.remove('active'));
    }
});

// ===== LANGUAGE =====
function setLanguage(lang) {
    const btn = document.querySelector('.lang-btn span');
    if (btn) btn.textContent = lang;
    document.getElementById('langMenu')?.classList.remove('show');
}

// ===== SHIP TO =====
function setShipTo(code, country) {
    const flag = document.getElementById('selectedFlag');
    if (flag) flag.src = `https://flagcdn.com/w20/${code}.png`;
    document.getElementById('shipMenu')?.classList.remove('show');
}

// ===== SEARCH =====
function handleSearch() {
    const query = document.getElementById('searchInput')?.value.trim();
    const category = document.getElementById('searchCategory')?.value;
    if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}&cat=${category}`;
    }
}

document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleSearch();
});

// ===== CART COUNT =====
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const el = document.getElementById('cartCount');
    if (el) el.textContent = count;
}

// ===== ADD TO CART =====
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showCartNotification(product.name);
}

// Cart notification
function showCartNotification(name) {
    const notif = document.createElement('div');
    notif.className = 'cart-notif';
    notif.innerHTML = `<i class="fa-solid fa-check"></i> "${name}" added to cart!`;
    document.body.appendChild(notif);
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 2500);
}

// ===== COUNTDOWN TIMER =====
function startCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(targetDate.getHours() + 13);
    targetDate.setMinutes(targetDate.getMinutes() + 34);

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const d = document.getElementById('days');
        const h = document.getElementById('hours');
        const m = document.getElementById('minutes');
        const s = document.getElementById('seconds');

        if (d) d.textContent = String(days).padStart(2, '0');
        if (h) h.textContent = String(hours).padStart(2, '0');
        if (m) m.textContent = String(minutes).padStart(2, '0');
        if (s) s.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

startCountdown();

// ===== PRODUCTS PAGE =====

// Toggle Sidebar Filters
function toggleFilter(filterId) {
    const body = document.getElementById(filterId);
    const header = body?.previousElementSibling;
    if (!body) return;
    body.classList.toggle('hidden');
    if (header) header.classList.toggle('collapsed');
}

// Grid / List View Toggle
function setView(type) {
    const grid = document.getElementById('productsGrid');
    const list = document.getElementById('productsList');
    const gridBtn = document.getElementById('gridViewBtn');
    const listBtn = document.getElementById('listViewBtn');

    if (type === 'grid') {
        grid?.classList.remove('hidden');
        list?.classList.add('hidden');
        gridBtn?.classList.add('active');
        listBtn?.classList.remove('active');
    } else {
        list?.classList.remove('hidden');
        grid?.classList.add('hidden');
        listBtn?.classList.add('active');
        gridBtn?.classList.remove('active');
    }
}

// Apply Filters
function applyFilters() {
    const activeFiltersEl = document.getElementById('activeFilters');
    const filterTagsEl = document.getElementById('filterTags');
    if (!activeFiltersEl || !filterTagsEl) return;

    // Collect active filter tags for display
    const tags = [];
    document.querySelectorAll('.filter-body input[type="checkbox"]:checked').forEach(cb => {
        const label = cb.closest('label');
        if (label) {
            const text = label.textContent.trim();
            if (text) tags.push(text);
        }
    });

    if (tags.length > 0) {
        activeFiltersEl.style.display = 'flex';
        filterTagsEl.innerHTML = tags.map(tag =>
            `<span class="filter-tag">${tag}
                <button onclick="removeFilter(this)">✕</button>
            </span>`
        ).join('');
    } else {
        activeFiltersEl.style.display = 'none';
        filterTagsEl.innerHTML = '';
    }

    // ===== ACTUALLY FILTER PRODUCTS =====
    const grid = document.getElementById('productsGrid');
    const list = document.getElementById('productsList');
    if (!grid) return;

    // --- Brands (from brandsFilter) ---
    const selectedBrands = [];
    document.querySelectorAll('#brandsFilter input[type="checkbox"]:checked').forEach(cb => {
        const label = cb.closest('label');
        if (label) selectedBrands.push(label.textContent.trim().toLowerCase());
    });

    // --- Manufacturer (from manufacturerFilter) ---
    document.querySelectorAll('#manufacturerFilter input[type="checkbox"]:checked').forEach(cb => {
        const label = cb.closest('label');
        if (label) selectedBrands.push(label.textContent.trim().toLowerCase());
    });

    // --- Features (Metallic, Plastic cover, 8GB Ram, etc.) ---
    const selectedFeatures = [];
    document.querySelectorAll('#featuresFilter input[type="checkbox"]:checked').forEach(cb => {
        const label = cb.closest('label');
        if (label) selectedFeatures.push(label.textContent.trim().toLowerCase());
    });

    // --- Condition ---
    const conditionEl = document.querySelector('#conditionFilter input[type="radio"]:checked');
    const selectedCondition = conditionEl ? conditionEl.value : 'any';

    // --- Price range ---
    const minPrice = parseFloat(document.getElementById('minPrice')?.value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice')?.value) || 999999;

    // --- Ratings ---
    const selectedRatings = [];
    document.querySelectorAll('#ratingsFilter input[type="checkbox"]:checked').forEach(cb => {
        const label = cb.closest('label');
        if (label) {
            const starText = label.textContent;
            const count = (starText.match(/⭐/g) || []).length;
            if (count > 0) selectedRatings.push(count);
        }
    });

    // --- Sort ---
    const sortVal = document.getElementById('sortSelect')?.value || 'featured';

    // Filter products
    let filtered = productsData.filter(p => {
        // Brand filter
        if (selectedBrands.length > 0) {
            const match = selectedBrands.some(b =>
                p.name.toLowerCase().includes(b) ||
                p.supplier.toLowerCase().includes(b)
            );
            if (!match) return false;
        }

        // Features filter — match against material, type, specs
        if (selectedFeatures.length > 0) {
            const productText = (
                p.material + ' ' + p.type + ' ' +
                Object.values(p.specs || {}).join(' ') + ' ' +
                p.description
            ).toLowerCase();
            const match = selectedFeatures.some(f => productText.includes(f));
            if (!match) return false;
        }

        // Condition filter
        if (selectedCondition !== 'any') {
            const condMap = { 'new': 'brand new', 'refurbished': 'refurbished', 'old': 'old' };
            if (!p.condition.toLowerCase().includes(condMap[selectedCondition] || selectedCondition)) return false;
        }

        // Price filter
        if (p.price < minPrice || p.price > maxPrice) return false;

        // Ratings filter — rating out of 10, map stars: 5★=8+, 4★=6+, 3★=4+
        if (selectedRatings.length > 0) {
            const ratingMap = { 5: 8, 4: 6, 3: 4 };
            const match = selectedRatings.some(s => p.rating >= (ratingMap[s] || 0));
            if (!match) return false;
        }

        return true;
    });

    // Sort
    if (sortVal === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sortVal === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sortVal === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sortVal === 'orders') filtered.sort((a, b) => b.orders - a.orders);

    // Update results count
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) resultsCount.textContent = filtered.length.toLocaleString();

    // Re-render grid
    grid.innerHTML = filtered.length === 0
        ? `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#8B8B8B;font-size:15px;">No products match your filters.</div>`
        : filtered.map(product => `
        <div class="product-card-grid" onclick="goToProduct(${product.id})">
            <div class="card-wishlist" onclick="event.stopPropagation()">
                <i class="fa-regular fa-heart"></i>
            </div>
            <img src="${product.image}" alt="${product.name}">
            <p class="card-price">$${product.price} <span class="old-price">$${product.oldPrice}</span></p>
            <div class="card-rating">
                <span class="stars-sm">★★★★</span>
                <span class="rating-num">${product.rating}</span>
            </div>
            <p class="card-name">${product.name}</p>
        </div>
    `).join('');

    // Re-render list
    if (list) {
        list.innerHTML = filtered.length === 0
            ? `<div style="text-align:center;padding:40px;color:#8B8B8B;font-size:15px;">No products match your filters.</div>`
            : filtered.map(product => `
            <div class="product-card-list" onclick="goToProduct(${product.id})">
                <img src="${product.image}" alt="${product.name}">
                <div class="list-info">
                    <h3>${product.name}</h3>
                    <div class="list-price-row">
                        <span class="list-price">$${product.price}</span>
                        <span class="list-old-price">$${product.oldPrice}</span>
                    </div>
                    <div class="list-meta">
                        <span class="stars-sm">★★★★</span>
                        <span class="rating-num">${product.rating}</span>
                        <span class="dot">•</span>
                        <span>${product.orders} orders</span>
                        <span class="dot">•</span>
                        <span class="free-ship">${product.shipping}</span>
                    </div>
                    <p class="list-desc">${product.description}</p>
                    <a href="#" class="view-details">View details</a>
                </div>
                <div class="list-wishlist">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        `).join('');
    }
}

// Remove single filter
function removeFilter(btn) {
    const tag = btn.closest('.filter-tag');
    const tagText = tag?.textContent.trim().replace('✕', '').trim();
    document.querySelectorAll('.filter-body input[type="checkbox"]').forEach(cb => {
        const label = cb.closest('label');
        if (label?.textContent.trim() === tagText) cb.checked = false;
    });
    applyFilters();
}

// Clear all filters
function clearAllFilters() {
    document.querySelectorAll('.filter-body input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('.filter-body input[type="radio"]').forEach(rb => {
        rb.checked = rb.value === 'any';
    });
    applyFilters();
}

// Price range update
function updatePriceRange(value) {
    const maxEl = document.getElementById('maxPrice');
    if (maxEl) maxEl.value = value;
}
// ===== RENDER PRODUCTS =====
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const list = document.getElementById('productsList');
    if (!grid) return;

    // GRID VIEW
    grid.innerHTML = productsData.map(product => `
        <div class="product-card-grid" onclick="goToProduct(${product.id})">
            <div class="card-wishlist" onclick="event.stopPropagation()">
                <i class="fa-regular fa-heart"></i>
            </div>
            <img src="${product.image}" alt="${product.name}">
            <p class="card-price">$${product.price} <span class="old-price">$${product.oldPrice}</span></p>
            <div class="card-rating">
                <span class="stars-sm">★★★★</span>
                <span class="rating-num">${product.rating}</span>
            </div>
            <p class="card-name">${product.name}</p>
        </div>
    `).join('');

    // LIST VIEW
    if (list) {
        list.innerHTML = productsData.map(product => `
            <div class="product-card-list" onclick="goToProduct(${product.id})">
                <img src="${product.image}" alt="${product.name}">
                <div class="list-info">
                    <h3>${product.name}</h3>
                    <div class="list-price-row">
                        <span class="list-price">$${product.price}</span>
                        <span class="list-old-price">$${product.oldPrice}</span>
                    </div>
                    <div class="list-meta">
                        <span class="stars-sm">★★★★</span>
                        <span class="rating-num">${product.rating}</span>
                        <span class="dot">•</span>
                        <span>${product.orders} orders</span>
                        <span class="dot">•</span>
                        <span class="free-ship">${product.shipping}</span>
                    </div>
                    <p class="list-desc">${product.description}</p>
                    <a href="#" class="view-details">View details</a>
                </div>
                <div class="list-wishlist">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        `).join('');
    }
}

// Go to product detail
function goToProduct(productId) {
    localStorage.setItem('selectedProduct', String(productId));
    localStorage.setItem('productsData', JSON.stringify(productsData));
    window.location.href = 'product-detail.html';
}

// Seller's profile function
function sellerProfile() {
    const product = window._currentProduct;
    if (!product) return;
    alert(`Supplier: ${product.supplier}\nCity: ${product.supplierCity}\nVerified Seller\nWorldwide Shipping`);
}

// ===== MOBILE CATEGORY CHIP FILTER =====
function setMobileCatChip(el, cat) {
    // Update active chip
    document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');

    // Filter products
    const grid = document.getElementById('productsGrid');
    const list = document.getElementById('productsList');
    if (!grid) return;

    let filtered = cat ? productsData.filter(p => p.category === cat) : [...productsData];

    grid.innerHTML = filtered.length === 0
        ? `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#8B8B8B;">No products found.</div>`
        : filtered.map(product => `
            <div class="product-card-grid" onclick="goToProduct(${product.id})">
                <div class="card-wishlist" onclick="event.stopPropagation()">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <img src="${product.image}" alt="${product.name}">
                <p class="card-price">$${product.price} <span class="old-price">$${product.oldPrice}</span></p>
                <div class="card-rating">
                    <span class="stars-sm">★★★★</span>
                    <span class="rating-num">${product.rating}</span>
                </div>
                <p class="card-name">${product.name}</p>
            </div>
        `).join('');

    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) resultsCount.textContent = filtered.length.toLocaleString();
}

// Initialize products page
if (document.getElementById('productsGrid')) {
    renderProducts();

    // ===== READ URL PARAMS & AUTO-APPLY =====
    const params = new URLSearchParams(window.location.search);
    const urlSort = params.get('sort');
    const urlCat = params.get('cat');
    const urlSearch = params.get('search');

    // Apply sort from URL
    if (urlSort) {
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.value = urlSort;
        }
    }

    // Apply search from URL
    if (urlSearch) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = urlSearch;
    }

    // Auto-apply filters/sort on page load if URL has params
    if (urlSort || urlCat || urlSearch) {
        // Small delay so DOM is ready
        setTimeout(() => {
            const grid = document.getElementById('productsGrid');
            const list = document.getElementById('productsList');
            if (!grid) return;

            let filtered = [...productsData];

            // Category filter
            if (urlCat) {
                filtered = filtered.filter(p => p.category === urlCat);
            }

            // Search filter
            if (urlSearch) {
                const q = urlSearch.toLowerCase();
                filtered = filtered.filter(p =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    p.type.toLowerCase().includes(q)
                );
            }

            // Sort
            if (urlSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
            else if (urlSort === 'price-high') filtered.sort((a, b) => b.price - a.price);
            else if (urlSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
            else if (urlSort === 'orders') filtered.sort((a, b) => b.orders - a.orders);
            else if (urlSort === 'featured') filtered = filtered; // default order

            // Update count
            const resultsCount = document.getElementById('resultsCount');
            if (resultsCount) resultsCount.textContent = filtered.length.toLocaleString();

            // Update current category label
            const currentCat = document.getElementById('currentCat');
            if (currentCat) {
                if (urlSearch) currentCat.textContent = `"${urlSearch}"`;
                else if (urlSort === 'rating') currentCat.textContent = 'Top Rated';
                else if (urlSort === 'orders') currentCat.textContent = 'Best Sellers';
                else if (urlSort === 'featured') currentCat.textContent = 'Hot Offers';
                else if (urlCat) currentCat.textContent = urlCat.charAt(0).toUpperCase() + urlCat.slice(1);
            }

            // Re-render grid
            grid.innerHTML = filtered.length === 0
                ? `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#8B8B8B;font-size:15px;">No products found.</div>`
                : filtered.map(product => `
                <div class="product-card-grid" onclick="goToProduct(${product.id})">
                    <div class="card-wishlist" onclick="event.stopPropagation()">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <img src="${product.image}" alt="${product.name}">
                    <p class="card-price">$${product.price} <span class="old-price">$${product.oldPrice}</span></p>
                    <div class="card-rating">
                        <span class="stars-sm">★★★★</span>
                        <span class="rating-num">${product.rating}</span>
                    </div>
                    <p class="card-name">${product.name}</p>
                </div>
            `).join('');

            // Re-render list
            if (list) {
                list.innerHTML = filtered.map(product => `
                    <div class="product-card-list" onclick="goToProduct(${product.id})">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="list-info">
                            <h3>${product.name}</h3>
                            <div class="list-price-row">
                                <span class="list-price">$${product.price}</span>
                                <span class="list-old-price">$${product.oldPrice}</span>
                            </div>
                            <div class="list-meta">
                                <span class="stars-sm">★★★★</span>
                                <span class="rating-num">${product.rating}</span>
                                <span class="dot">•</span>
                                <span>${product.orders} orders</span>
                                <span class="dot">•</span>
                                <span class="free-ship">${product.shipping}</span>
                            </div>
                            <p class="list-desc">${product.description}</p>
                            <a href="#" class="view-details">View details</a>
                        </div>
                        <div class="list-wishlist">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                `).join('');
            }
        }, 50);
    }
}
// ===== PRODUCT DETAIL PAGE FUNCTIONS =====

// Change main image on thumbnail click
function changeImage(thumbEl, imgSrc) {
    document.getElementById('mainImage').src = imgSrc;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
}

// Switch tabs
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));
    const activeTab = document.getElementById('tab-' + tabName);
    if (activeTab) activeTab.classList.add('active');
    // Find the button by checking its onclick text content match
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes("'" + tabName + "'")) {
            btn.classList.add('active');
        }
    });
}
// ===== MOBILE DRAWER =====
function openDrawer() {
    document.getElementById('mobileDrawer')?.classList.add('open');
    document.getElementById('mobileOverlay')?.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeDrawer() {
    document.getElementById('mobileDrawer')?.classList.remove('open');
    document.getElementById('mobileOverlay')?.classList.remove('open');
    document.body.style.overflow = '';
}

// ===== MOBILE CART SYNC =====
function updateMobileCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const el = document.getElementById('mobileCartCount');
    if (el) el.textContent = count;
}
document.addEventListener('DOMContentLoaded', updateMobileCartCount);

// ===== MOBILE IMAGE NAVIGATOR (Product Detail) =====
let mobileImgIndex = 0;
function mobileImgNav(dir) {
    const thumbs = document.querySelectorAll('.thumb');
    if (!thumbs.length) return;
    mobileImgIndex = (mobileImgIndex + dir + thumbs.length) % thumbs.length;
    const thumb = thumbs[mobileImgIndex];
    const imgSrc = thumb.querySelector('img').src.replace('w=80&h=80', 'w=400&h=400');
    changeImage(thumb, imgSrc);
}

// Show mobile nav buttons on small screens
function initMobileImgNav() {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.img-nav-btn').forEach(btn => btn.style.display = 'flex');
    }
}
document.addEventListener('DOMContentLoaded', initMobileImgNav);
window.addEventListener('resize', initMobileImgNav);

// ===== MOBILE FILTER BAR SHOW/HIDE =====
function initMobileFilterBar() {
    const bar = document.querySelector('.mobile-filter-bar');
    if (bar && window.innerWidth <= 768) bar.style.display = 'flex';
}
document.addEventListener('DOMContentLoaded', initMobileFilterBar);
window.addEventListener('resize', initMobileFilterBar);