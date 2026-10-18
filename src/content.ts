export const BIZ = {
  name: 'Interliving',
  phone: '+60 17-973 2329', tel: '+60179732329', wa: '60179732329',
  address: 'Designer Office Suites, Sunway Velocity, 3 Jalan Peel, 55100 Kuala Lumpur',
  maps: 'https://www.google.com/maps/place/Interliving/@3.1295711,101.7236552,17z',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=3.1295711,101.7236552',
  osm: 'https://www.openstreetmap.org/?mlat=3.1295711&mlon=101.7236552#map=17/3.1295711/101.7236552',
  google: '4.2',
  velCredit: 'https://commons.wikimedia.org/wiki/File:Sunway_velocity_1.jpg',
}

const en = {
  meta: { title: 'Interliving | Home interiors & organisation, Sunway Velocity KL', desc: 'Interliving is based at Designer Office Suites, Sunway Velocity, Kuala Lumpur. Send photos or a floor plan of your space on WhatsApp to talk through interior design, layout and organisation. +60 17-973 2329.' },
  langLabel: 'BM', langAria: 'BM · Tukar ke Bahasa Melayu',
  a11y: { skip: 'Skip to content', main: 'Main', mobile: 'Menu', menuOpen: 'Open menu', menuClose: 'Close menu', bar: 'Quick contact', pin: 'Interliving location' },
  nav: [['services', 'Services'], ['start', 'How to start'], ['ideas', 'Ideas'], ['visit', 'Visit'], ['contact', 'Contact']] as [string, string][],
  cta: 'WhatsApp', call: 'Call', directions: 'Directions', barCta: 'Enquire',
  hero: {
    kicker: 'Sunway Velocity · Kuala Lumpur',
    h1a: 'Homes that work', h1b: 'as well as they look.',
    sub: 'Interliving works on home interiors and organisation from Designer Office Suites at Sunway Velocity. Tell us about your space and what isn’t working, and start the conversation on WhatsApp.',
    cta: 'Start an enquiry', cta2: 'Call',
    rating: 'rating on Google Maps',
    illus: 'Illustrative photos, not Interliving projects',
  },
  services: {
    kicker: 'What to ask us about', title: 'From one cluttered room to the whole home',
    items: [
      ['01', 'Interior design', 'Look and feel, colours, materials and furniture for a room or a whole home.'],
      ['02', 'Layout & space planning', 'Making a small condo or an awkward room easier to live in.'],
      ['03', 'Storage & organisation', 'Wardrobes, kitchens and shelving planned around how you actually use them.'],
    ] as [string, string, string][],
    note: 'Not sure where your project fits? Describe it in your own words; we’ll tell you if we can help.',
  },
  start: {
    kicker: 'How to start', title: 'Three things to send',
    steps: [['Photos or a short video', 'Of the room or home as it is today.'], ['A floor plan, if you have one', 'Even a rough sketch with measurements helps.'], ['What you want to change', 'Your goal, your timeline and a budget range.']] as [string, string][],
  },
  ideas: { kicker: 'Ideas', title: 'Calm, practical, lived-in', note: 'Inspiration images (Unsplash), not Interliving projects.', alts: ['Kitchen with open shelving', 'Open-plan living and dining area', 'Styled shelf with ceramics and plants', 'Built-in shelving', 'Neutral living room', 'Bedroom with soft textiles'] },
  visit: {
    kicker: 'Visit', title: 'Find us at Sunway Velocity',
    sub: 'Interliving is listed at Designer Office Suites in Sunway Velocity, off Jalan Peel in Cheras. Message ahead to arrange a time before you come.',
    photo: 'Sunway Velocity, Kuala Lumpur', credit: 'Photo: Brownc / Wikimedia Commons, CC BY-SA 4.0',
    address: 'Address', phone: 'WhatsApp & phone', maps: 'Open in Google Maps',
    mapAlt: 'Street map of Cheras, Kuala Lumpur, with Sunway Velocity marked', mapCredit: 'Map © OpenStreetMap contributors',
  },
  form: {
    kicker: 'Contact', title: 'Tell us about your space',
    sub: 'Fill in what you know. We’ll turn it into a WhatsApp message, and you can attach photos in the chat.',
    type: 'What do you need?', types: ['Interior design', 'Layout & space planning', 'Storage & organisation', 'Not sure yet'],
    prop: 'Property', props: ['Condo / apartment', 'Landed house', 'Office', 'Other'],
    area: 'Area / neighbourhood', areaPh: 'e.g. Cheras, Mont Kiara',
    msg: 'A few words about the project', msgPh: 'e.g. 3-bedroom condo, want more storage in the kitchen and bedrooms',
    send: 'Send on WhatsApp', preview: 'Message preview', hint: 'This opens WhatsApp with your message. Nothing is sent until you press send there.',
    build: (o: { t: string; p: string; a: string; m: string }) => `Hi Interliving, I'd like to ask about a project.\nService: ${o.t}\nProperty: ${o.p}${o.a ? `\nArea: ${o.a}` : ''}${o.m ? `\nDetails: ${o.m}` : ''}\nI can send photos here. Thank you!`,
  },
  faq: {
    title: 'Questions',
    items: [
      ['Do I need a floor plan to get started?', 'No. Photos and rough measurements are enough to start the conversation.'],
      ['Can I visit the office?', 'Yes, by arrangement. Message on WhatsApp first so someone is there to meet you.'],
      ['Is this the Interliving furniture brand?', 'No. This page is for the Interliving listed at Sunway Velocity, Kuala Lumpur, It is not the website of the international furniture retailer of the same name.'],
    ] as [string, string][],
  },
  footer: { explore: 'Explore', reach: 'Contact', photos: 'Sunway Velocity photo by Brownc via Wikimedia Commons (CC BY-SA 4.0). Interior photos are illustrative stock images (Unsplash), not Interliving projects.', pitch: 'Website concept prepared for this business. Not an official site yet — open to making it yours.', pitchLink: 'Contact the designer', rights: 'All rights reserved.', toTop: 'Back to top' },
}
export type Content = typeof en

const ms: Content = {
  meta: { title: 'Interliving | Hiasan dalaman & susun atur rumah, Sunway Velocity KL', desc: 'Interliving beroperasi di Designer Office Suites, Sunway Velocity, Kuala Lumpur. Hantar foto atau pelan lantai ruang anda di WhatsApp untuk berbincang tentang reka bentuk dalaman, susun atur dan penyimpanan. +60 17-973 2329.' },
  langLabel: 'EN', langAria: 'EN · Switch to English',
  a11y: { skip: 'Langkau ke kandungan', main: 'Utama', mobile: 'Menu', menuOpen: 'Buka menu', menuClose: 'Tutup menu', bar: 'Hubungi pantas', pin: 'Lokasi Interliving' },
  nav: [['services', 'Perkhidmatan'], ['start', 'Cara bermula'], ['ideas', 'Idea'], ['visit', 'Lawati'], ['contact', 'Hubungi']],
  cta: 'WhatsApp', call: 'Telefon', directions: 'Arah', barCta: 'Tanya',
  hero: {
    kicker: 'Sunway Velocity · Kuala Lumpur',
    h1a: 'Rumah yang selesa', h1b: 'dan cantik dipandang.',
    sub: 'Interliving mengendalikan hiasan dalaman dan penyusunan rumah dari Designer Office Suites di Sunway Velocity. Ceritakan tentang ruang anda dan apa yang kurang sesuai, kemudian mulakan perbualan di WhatsApp.',
    cta: 'Mulakan pertanyaan', cta2: 'Telefon',
    rating: 'penarafan di Google Maps',
    illus: 'Foto ilustrasi, bukan projek Interliving',
  },
  services: {
    kicker: 'Apa yang boleh ditanya', title: 'Dari satu bilik bersepah hingga seluruh rumah',
    items: [
      ['01', 'Reka bentuk dalaman', 'Gaya, warna, bahan dan perabot untuk satu bilik atau seluruh rumah.'],
      ['02', 'Susun atur & perancangan ruang', 'Menjadikan kondo kecil atau bilik yang janggal lebih mudah didiami.'],
      ['03', 'Penyimpanan & penyusunan', 'Almari, dapur dan rak yang dirancang mengikut cara anda menggunakannya.'],
    ],
    note: 'Tidak pasti projek anda termasuk dalam kategori mana? Terangkan dengan kata-kata anda sendiri; kami akan maklumkan jika kami boleh membantu.',
  },
  start: {
    kicker: 'Cara bermula', title: 'Tiga perkara untuk dihantar',
    steps: [['Foto atau video pendek', 'Keadaan bilik atau rumah sekarang.'], ['Pelan lantai, jika ada', 'Lakaran kasar dengan ukuran pun sudah membantu.'], ['Apa yang ingin diubah', 'Matlamat, tempoh masa dan anggaran bajet anda.']],
  },
  ideas: { kicker: 'Idea', title: 'Tenang, praktikal, selesa didiami', note: 'Imej inspirasi (Unsplash), bukan projek Interliving.', alts: ['Dapur dengan rak terbuka', 'Ruang tamu dan makan konsep terbuka', 'Rak hiasan dengan seramik dan tumbuhan', 'Rak terbina dalam', 'Ruang tamu bertona neutral', 'Bilik tidur dengan tekstil lembut'] },
  visit: {
    kicker: 'Lawati', title: 'Cari kami di Sunway Velocity',
    sub: 'Interliving tersenarai di Designer Office Suites, Sunway Velocity, berhampiran Jalan Peel di Cheras. Hantar mesej dahulu untuk menetapkan masa sebelum datang.',
    photo: 'Sunway Velocity, Kuala Lumpur', credit: 'Foto: Brownc / Wikimedia Commons, CC BY-SA 4.0',
    address: 'Alamat', phone: 'WhatsApp & telefon', maps: 'Buka di Google Maps',
    mapAlt: 'Peta jalan Cheras, Kuala Lumpur, dengan Sunway Velocity ditanda', mapCredit: 'Peta © penyumbang OpenStreetMap',
  },
  form: {
    kicker: 'Hubungi', title: 'Ceritakan tentang ruang anda',
    sub: 'Isikan apa yang anda tahu. Kami akan jadikannya mesej WhatsApp, dan anda boleh melampirkan foto dalam perbualan.',
    type: 'Apa yang anda perlukan?', types: ['Reka bentuk dalaman', 'Susun atur & perancangan ruang', 'Penyimpanan & penyusunan', 'Belum pasti'],
    prop: 'Jenis hartanah', props: ['Kondo / apartmen', 'Rumah teres / banglo', 'Pejabat', 'Lain-lain'],
    area: 'Kawasan', areaPh: 'cth. Cheras, Mont Kiara',
    msg: 'Sedikit tentang projek anda', msgPh: 'cth. kondo 3 bilik, mahu lebih ruang simpanan di dapur dan bilik tidur',
    send: 'Hantar di WhatsApp', preview: 'Pratonton mesej', hint: 'Ini membuka WhatsApp dengan mesej anda. Tiada apa yang dihantar sehingga anda menekan hantar di sana.',
    build: (o) => `Hai Interliving, saya ingin bertanya tentang satu projek.\nPerkhidmatan: ${o.t}\nHartanah: ${o.p}${o.a ? `\nKawasan: ${o.a}` : ''}${o.m ? `\nButiran: ${o.m}` : ''}\nSaya boleh hantar foto di sini. Terima kasih!`,
  },
  faq: {
    title: 'Soalan lazim',
    items: [
      ['Perlukah saya ada pelan lantai untuk bermula?', 'Tidak. Foto dan ukuran kasar sudah memadai untuk memulakan perbincangan.'],
      ['Bolehkah saya melawat pejabat?', 'Boleh, dengan temu janji. Hantar mesej di WhatsApp dahulu supaya ada yang menyambut anda.'],
      ['Adakah ini jenama perabot Interliving?', 'Bukan. Laman ini untuk Interliving yang tersenarai di Sunway Velocity, Kuala Lumpur, Ia bukan laman web peruncit perabot antarabangsa yang sama nama.'],
    ],
  },
  footer: { explore: 'Laman', reach: 'Hubungi', photos: 'Foto Sunway Velocity oleh Brownc melalui Wikimedia Commons (CC BY-SA 4.0). Foto dalaman ialah imej stok ilustrasi (Unsplash), bukan projek Interliving.', pitch: 'Konsep laman web ini disediakan untuk perniagaan ini. Belum menjadi laman rasmi — boleh dijadikan milik anda.', pitchLink: 'Hubungi pereka', rights: 'Hak cipta terpelihara.', toTop: 'Kembali ke atas' },
}

export const content = { en, ms }
