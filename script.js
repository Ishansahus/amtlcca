const PAGE_ROUTES = {
  home: 'home.html',
  about: 'about.html',
  services: 'services.html',
  team: 'team.html',
  events: 'events.html',
  contact: 'contact.html'
};

const WHATSAPP_PHONE = '919897119465';
const WHATSAPP_PREFILLED_MESSAGE =
  'नमस्ते जी, मुझे आगरा महानगर टेंट, लाइट, क्रोकरी एंड कैटर्स एसोसिएशन के बारे जानकारी चाहिए।';

// Paste your Google Sheet link here after publishing it or making it public.
// Supported formats:
// 1. https://docs.google.com/spreadsheets/d/.../edit#gid=0
// 2. https://docs.google.com/spreadsheets/d/.../export?format=csv&gid=0
const EVENTS_SHEET_URL = '';

const EVENT_COLOR_SCHEMES = {
  orange: 'linear-gradient(135deg,#E8760A,#FF9800)',
  green: 'linear-gradient(135deg,#2E7D32,#4CAF50)',
  blue: 'linear-gradient(135deg,#1565C0,#1976D2)',
  purple: 'linear-gradient(135deg,#7B1FA2,#9C27B0)',
  red: 'linear-gradient(135deg,#C62828,#E53935)',
  gold: 'linear-gradient(135deg,#B7791F,#D69E2E)'
};

const EVENT_STATUS_MAP = {
  upcoming: { className: 'status-upcoming', label: 'आगामी' },
  ongoing: { className: 'status-ongoing', label: 'चल रहा है' },
  soon: { className: 'status-upcoming', label: 'शीघ्र आने वाला' },
  past: { className: 'status-past', label: 'संपन्न' },
  completed: { className: 'status-past', label: 'संपन्न' }
};

const FALLBACK_EVENTS = [
  {
    day: '15',
    month: 'अप्रैल 2025',
    type: 'वार्षिक आयोजन',
    title: 'वार्षिक सामान्य बैठक 2025',
    description: 'एसोसिएशन की वार्षिक बैठक जिसमें पिछले वर्ष का लेखा-जोखा, नई नीतियां और आगामी योजनाओं पर विचार किया जाएगा।',
    location: 'बाग मुजफ्फर खान, आगरा',
    time: 'सुबह 10 बजे',
    status: 'upcoming',
    color: 'orange'
  },
  {
    day: '20',
    month: 'मई 2025',
    type: 'प्रशिक्षण',
    title: 'नए उद्यमी कार्यशाला',
    description: 'टेंट और कैटरिंग व्यवसाय में नए लोगों के लिए एक विशेष कार्यशाला। व्यापार शुरू करने से लेकर सफलता तक के गुर सीखें।',
    location: 'आगरा',
    time: 'सुबह 9 बजे - शाम 5 बजे',
    status: 'upcoming',
    color: 'orange'
  },
  {
    day: '5',
    month: 'जून 2025',
    type: 'सम्मान समारोह',
    title: 'सर्वश्रेष्ठ व्यवसायी सम्मान समारोह',
    description: 'इस वर्ष के सर्वश्रेष्ठ प्रदर्शन करने वाले सदस्यों को एसोसिएशन की ओर से विशेष सम्मान और प्रमाण पत्र दिए जाएंगे।',
    location: 'होटल मांगलिक, आगरा',
    time: 'शाम 6 बजे',
    status: 'upcoming',
    color: 'green'
  },
  {
    day: '12',
    month: 'मार्च 2025',
    type: 'मीटिंग',
    title: 'त्रैमासिक बैठक - मार्च 2025',
    description: 'सदस्यों की त्रैमासिक बैठक जिसमें व्यापारिक मुद्दों, नई नीतियों और सदस्यता अभियान पर चर्चा हुई।',
    location: 'एसोसिएशन कार्यालय',
    time: 'दोपहर 2 बजे',
    status: 'past',
    color: 'blue'
  },
  {
    day: '26',
    month: 'जनवरी 2025',
    type: 'राष्ट्रीय पर्व',
    title: 'गणतंत्र दिवस समारोह',
    description: 'एसोसिएशन द्वारा गणतंत्र दिवस पर विशेष समारोह आयोजित किया गया। सभी सदस्यों ने भाग लिया।',
    location: 'एसोसिएशन कार्यालय',
    time: 'सुबह 8 बजे',
    status: 'past',
    color: 'purple'
  },
  {
    day: 'TBD',
    month: '2025',
    type: 'मेला',
    title: 'टेंट-लाइट व्यापार मेला आगरा',
    description: 'आगरा में पहला टेंट एवं इवेंट इंडस्ट्री व्यापार मेला। नई तकनीक, उत्पाद और व्यापारिक साझेदारियां।',
    location: 'आगरा (स्थान TBD)',
    time: '2 दिन',
    status: 'soon',
    color: 'orange'
  }
];

function showPage(page) {
  const target = PAGE_ROUTES[page] || PAGE_ROUTES.home;
  window.location.href = target;
  return false;
}

function closeMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (!navLinks || !hamburger) return;

  navLinks.classList.remove('open');
  hamburger.classList.remove('active');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  if (!navLinks || !hamburger) return;

  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
}

function buildWhatsAppUrl(message = WHATSAPP_PREFILLED_MESSAGE) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function injectWhatsAppFloat() {
  if (document.querySelector('.whatsapp-float')) return;

  const button = document.createElement('a');
  button.className = 'whatsapp-float';
  button.href = buildWhatsAppUrl();
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.setAttribute('aria-label', 'WhatsApp पर चैट करें');
  button.setAttribute('title', 'WhatsApp पर चैट करें');
  button.innerHTML = `
    <span class="whatsapp-float__icon-wrap" aria-hidden="true">
      <svg class="whatsapp-float__icon" viewBox="0 0 32 32" fill="none">
        <path
          fill="currentColor"
          d="M27.28 4.68A15.31 15.31 0 0 0 16.36.02C7.9.02 1 6.9 1 15.37c0 2.7.7 5.35 2.04 7.69L.88 31.98l9.12-2.38a15.3 15.3 0 0 0 6.34 1.4h.01c8.46 0 15.35-6.89 15.35-15.35 0-4.1-1.6-7.96-4.42-10.97ZM16.35 28.4h-.01a12.7 12.7 0 0 1-6.08-1.55l-.44-.26-5.41 1.41 1.45-5.27-.29-.46a12.73 12.73 0 0 1-1.95-6.89c0-7.02 5.72-12.74 12.76-12.74 3.4 0 6.59 1.32 8.98 3.72a12.67 12.67 0 0 1 3.72 9.01c0 7.03-5.72 12.75-12.73 12.75Z"
        />
        <path
          fill="currentColor"
          d="M23.34 19.5c-.38-.19-2.23-1.1-2.58-1.22-.35-.13-.61-.19-.87.18-.25.38-.99 1.23-1.21 1.49-.22.25-.44.28-.82.09-.38-.19-1.58-.58-3-1.84-1.11-.99-1.85-2.2-2.07-2.57-.22-.38-.02-.58.17-.77.17-.17.38-.44.57-.66.19-.22.25-.38.38-.63.13-.25.06-.47-.03-.66-.1-.19-.86-2.07-1.18-2.84-.31-.74-.63-.64-.87-.65h-.74c-.25 0-.66.09-1 .47-.35.38-1.32 1.29-1.32 3.15 0 1.86 1.35 3.65 1.54 3.9.19.25 2.64 4.03 6.4 5.66.89.39 1.59.62 2.13.8.89.28 1.69.24 2.33.15.71-.11 2.23-.91 2.55-1.79.31-.88.31-1.63.22-1.79-.1-.16-.35-.25-.73-.44Z"
        />
      </svg>
    </span>
    <span class="whatsapp-float__content">
      <span class="whatsapp-float__label">WhatsApp</span>
      <span class="whatsapp-float__sub">जानकारी के लिए चैट करें</span>
    </span>
  `;

  document.body.appendChild(button);
}

function normalizeSheetUrl(url) {
  const trimmed = (url || '').trim();
  if (!trimmed) return '';
  if (trimmed.includes('/export?format=csv')) return trimmed;
  if (trimmed.includes('/pub?output=csv')) return trimmed;

  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (!match) return trimmed;

  const gidMatch = trimmed.match(/[?#&]gid=([0-9]+)/);
  const gid = gidMatch ? gidMatch[1] : '0';
  return `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=csv&gid=${gid}`;
}

function getStatusConfig(statusValue) {
  const key = (statusValue || '').toString().trim().toLowerCase();
  return EVENT_STATUS_MAP[key] || EVENT_STATUS_MAP.upcoming;
}

function getHeaderStyle(colorValue) {
  const colorKey = (colorValue || 'orange').toString().trim().toLowerCase();
  const background = EVENT_COLOR_SCHEMES[colorKey] || EVENT_COLOR_SCHEMES.orange;
  return `background:${background};`;
}

function escapeHtml(value) {
  return (value || '')
    .toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseCsvLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  values.push(current);
  return values.map((value) => value.trim());
}

function parseCsv(csvText) {
  const rows = csvText
    .replace(/\r/g, '')
    .split('\n')
    .filter((line) => line.trim().length > 0);

  if (!rows.length) return [];

  const headers = parseCsvLine(rows[0]).map((header) =>
    header.toLowerCase().replace(/\s+/g, '_')
  );

  return rows.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row = {};

    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });

    return row;
  });
}

function findRowValue(row, keys) {
  for (const key of keys) {
    if (row[key]) return row[key];
  }
  return '';
}

function isRowVisible(row) {
  const hiddenValue = findRowValue(row, ['hidden', 'hide', 'visible', 'show']);
  const normalized = hiddenValue.toString().trim().toLowerCase();

  if (!normalized) return true;
  if (normalized === 'false' || normalized === 'no' || normalized === 'hidden') return false;
  if (normalized === '0') return false;
  return true;
}

function mapSheetRowToEvent(row) {
  if (!isRowVisible(row)) return null;

  const event = {
    day: findRowValue(row, ['day', 'date_day']),
    month: findRowValue(row, ['month', 'date_month']),
    type: findRowValue(row, ['type', 'category']),
    title: findRowValue(row, ['title', 'name']),
    description: findRowValue(row, ['description', 'details']),
    location: findRowValue(row, ['location', 'venue']),
    time: findRowValue(row, ['time', 'timing']),
    status: findRowValue(row, ['status']),
    color: findRowValue(row, ['color', 'theme']),
    sortOrder: Number(findRowValue(row, ['sort_order', 'sortorder', 'order']) || 0)
  };

  if (!event.title) return null;
  return event;
}

function renderEvents(events, grid) {
  if (!grid) return;

  if (!events.length) {
    grid.innerHTML = '<div class="events-empty">Abhi koi event add nahi kiya gaya hai.</div>';
    return;
  }

  grid.innerHTML = events
    .map((event) => {
      const status = getStatusConfig(event.status);
      const locationMarkup = event.location
        ? `<span><span aria-hidden="true">📍</span> ${escapeHtml(event.location)}</span>`
        : '';
      const timeMarkup = event.time
        ? `<span><span aria-hidden="true">⏰</span> ${escapeHtml(event.time)}</span>`
        : '';

      return `
        <div class="event-card">
          <div class="event-header" style="${getHeaderStyle(event.color)}">
            <div class="event-date-box">
              <div class="day">${escapeHtml(event.day || 'TBD')}</div>
              <div class="month">${escapeHtml(event.month || '')}</div>
            </div>
            <span class="event-type">${escapeHtml(event.type || 'कार्यक्रम')}</span>
          </div>
          <div class="event-body">
            <h3>${escapeHtml(event.title)}</h3>
            <p>${escapeHtml(event.description || '')}</p>
            <div class="event-meta">
              ${locationMarkup}
              ${timeMarkup}
            </div>
            <span class="event-status ${status.className}">${status.label}</span>
          </div>
        </div>
      `;
    })
    .join('');
}

function ensureEventsStatusNode(grid) {
  let statusNode = document.getElementById('eventsSourceStatus');
  if (statusNode || !grid) return statusNode;

  statusNode = document.createElement('div');
  statusNode.id = 'eventsSourceStatus';
  statusNode.className = 'events-source-note';
  grid.insertAdjacentElement('beforebegin', statusNode);
  return statusNode;
}

function setEventsStatus(message, type = '') {
  const grid = document.querySelector('.events-grid');
  const statusNode = ensureEventsStatusNode(grid);
  if (!statusNode) return;

  statusNode.className = `events-source-note${type ? ` ${type}` : ''}`;
  statusNode.textContent = message;
}

async function loadEventsFromSheet(grid) {
  const sheetUrl = normalizeSheetUrl(grid?.dataset.sheetUrl || EVENTS_SHEET_URL);

  if (!sheetUrl) {
    setEventsStatus(
      'Mobile update setup ready hai. Bas Google Sheet ka public link script.js ke EVENTS_SHEET_URL me paste karna hai. Tab tak demo events dikh rahe hain.'
    );
    renderEvents(FALLBACK_EVENTS, grid);
    return;
  }

  grid.innerHTML = '<div class="events-empty">Google Sheet se events load ho rahe hain...</div>';

  try {
    const response = await fetch(sheetUrl, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const csvText = await response.text();
    const rows = parseCsv(csvText);
    const events = rows
      .map(mapSheetRowToEvent)
      .filter(Boolean)
      .sort((a, b) => a.sortOrder - b.sortOrder);

    if (!events.length) {
      setEventsStatus(
        'Sheet connect ho gayi, lekin rows blank hain. Columns rakhein: day, month, title, description, location, time, type, status, color.',
        'is-warning'
      );
      renderEvents([], grid);
      return;
    }

    setEventsStatus(
      'Live Google Sheet connected. Ab aap phone se Google Sheets app me row add ya edit karke event cards update kar sakte hain.'
    );
    renderEvents(events, grid);
  } catch (error) {
    setEventsStatus(
      'Google Sheet load nahi ho payi, isliye demo events dikh rahe hain. Check karein: sheet public/viewable ho aur link sahi ho.',
      'is-warning'
    );
    renderEvents(FALLBACK_EVENTS, grid);
  }
}

function initEventsPage() {
  const grid = document.querySelector('.events-grid');
  if (!grid) return;
  loadEventsFromSheet(grid);
}

function submitForm() {
  const nameInput = document.getElementById('f-name');
  const phoneInput = document.getElementById('f-phone');
  const emailInput = document.getElementById('f-email');
  const subjectInput = document.getElementById('f-subject');
  const msgInput = document.getElementById('f-msg');
  if (!nameInput || !phoneInput || !subjectInput || !msgInput) return;

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput ? emailInput.value.trim() : '';
  const subject = subjectInput.value;
  const msg = msgInput.value.trim();

  if (!name || !phone || !subject || !msg) {
    alert('Please fill all required fields.');
    return;
  }

  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length !== 10) {
    alert('Please enter a valid 10-digit mobile number.');
    return;
  }

  const lines = [
    'New Inquiry from Website',
    '',
    `Name: ${name}`,
    `Mobile: ${phone}`,
    `Email: ${email || 'N/A'}`,
    `Subject: ${subject}`,
    `Message: ${msg}`
  ];
  const waUrl = buildWhatsAppUrl(lines.join('\n'));

  const popup = window.open(waUrl, '_blank', 'noopener,noreferrer');
  if (!popup) window.location.href = waUrl;

  const success = document.getElementById('form-success');
  if (success) {
    success.style.display = 'block';
    success.textContent = 'WhatsApp opened with your message. Please tap Send there to complete.';
    setTimeout(() => {
      success.style.display = 'none';
    }, 6000);
  }

  nameInput.value = '';
  phoneInput.value = '';
  if (emailInput) emailInput.value = '';
  subjectInput.value = '';
  msgInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  injectWhatsAppFloat();

  document.querySelectorAll('a[onclick*="showPage"]').forEach((anchor) => {
    const onclickValue = anchor.getAttribute('onclick') || '';
    const match = onclickValue.match(/showPage\(['"]([^'"]+)['"]\)/);
    if (!match) return;
    const pageKey = match[1];
    const href = PAGE_ROUTES[pageKey];
    if (!href) return;
    if (!anchor.getAttribute('href')) {
      anchor.setAttribute('href', href);
    }
  });

  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  if (navLinks) {
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  document.addEventListener('click', (event) => {
    if (!navLinks || !hamburger) return;
    if (!navLinks.classList.contains('open')) return;
    if (navLinks.contains(event.target) || hamburger.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });

  initEventsPage();
});

window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (btn) btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
