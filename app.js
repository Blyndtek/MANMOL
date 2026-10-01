const iconPaths = {
  inbox: '<path d="M4 5.5h16v13H4z"/><path d="M4 14h4l1.5 2h5L16 14h4"/>',
  users: '<path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"/><circle cx="10" cy="7.5" r="3.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 6.8M17 15.2a3.5 3.5 0 0 1 3 3.3V20"/>',
  box: '<path d="m4 7 8-4 8 4v10l-8 4-8-4z"/><path d="m4 7 8 4 8-4M12 11v10"/>',
  chart: '<path d="M4 19V5M4 19h17"/><path d="m7 15 3-3 3 2 5-6"/>',
  settings: '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z"/>',
  search: '<circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 4 4"/>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chevron: '<path d="m7 10 5 5 5-5"/>',
  more: '<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.9 1.6c-1 .8-1.7 1.2-1.7 2.6M12 16.5h.01"/>',
  phone: '<path d="M6.6 3.5 8.5 7 6.7 8.5a15 15 0 0 0 6.8 6.8l1.5-1.8 3.5 1.9-.7 3a1.6 1.6 0 0 1-1.8 1.2C9.7 18.6 3.4 12.3 2.4 6a1.6 1.6 0 0 1 1.2-1.8z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
  map: '<path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3zM9 3v15M15 6v15"/>',
  tag: '<path d="M20 13 13 20 3 10V3h7z"/><circle cx="7" cy="7" r="1"/>',
  send: '<path d="m21 3-7.5 18-3.7-7.3L3 10zM21 3 9.8 13.7"/>',
  paperclip: '<path d="m20 11.5-8.8 8.8a5 5 0 0 1-7.1-7.1l9.2-9.2a3.5 3.5 0 0 1 5 5l-9.1 9.1a2 2 0 0 1-2.9-2.9l8.6-8.6"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
};

const icon = (name, size = 16) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || ''}</svg>`;

const conversations = [
  {
    id: 'eli', name: 'Eli Soledad', initials: 'ES', phone: '+54 9 11 •••• 7091', role: 'Fabricante de losetas', channel: 'Instagram', time: '18:13', unread: 2,
    preview: 'El lunes nos trajeron 2 pallets. Muchas gracias.', product: 'Cemento blanco OYAK', quantity: '2 pallets', location: 'Canning, Buenos Aires', stage: 'Cotización enviada', statusClass: 'quote', tags: ['B2B', 'Cemento blanco', 'Canning'], nextAction: 'Retomar contacto en 7 días', color: '#ae7054',
    messages: [
      ['in', 'Hola buenas tardes. El lunes nos trajeron 2 pallets. Muchas gracias.', '18:13'],
      ['out', 'Hola Soledad, ¡perfecto! Gracias por avisarnos. Para la próxima entrega podemos revisar un precio especial por volumen.', '18:14'],
      ['in', 'Buenísimo. Seguramente volvamos a necesitar para el próximo pedido.', '18:16'],
    ],
  },
  {
    id: 'martin', name: 'Martín R.', initials: 'MR', phone: '+54 9 11 •••• 0629', role: 'Particular', channel: 'Facebook', time: '17:42', unread: 1,
    preview: '¿Tienen envío a CABA? Estoy en Boedo.', product: 'Cemento rápido blanco', quantity: 'A confirmar', location: 'Boedo, CABA', stage: 'Nuevo lead', statusClass: 'new', tags: ['Cemento', 'Envío', 'CABA'], nextAction: 'Confirmar costo de envío', color: '#5d83ab',
    messages: [
      ['in', 'Hola, ¿tienen envío a CABA? Estoy en Boedo.', '17:42'],
      ['out', 'Sí, podemos cotizarlo según la zona y la cantidad. ¿Cuántas bolsas necesitás?', '17:44'],
    ],
  },
  {
    id: 'mariana', name: 'Mariana López', initials: 'ML', phone: '+54 9 221 •••• 1315', role: 'Instaladora de piscinas', channel: 'WhatsApp', time: '16:28', unread: 0,
    preview: 'Necesito 10 cajas, pegamento y 2 pastinas.', product: 'Venecita Malawi celeste', quantity: '10 cajas + adhesivos', location: 'La Plata, Buenos Aires', stage: 'Esperando respuesta', statusClass: 'wait', tags: ['Venecitas', 'Malawi', 'Instaladora'], nextAction: 'Validar disponibilidad de color', color: '#718a9a',
    messages: [
      ['in', 'Es Malawi, no es la Vis. Necesito 10 cajas, 1 pegamento y 2 pastinas.', '16:28'],
      ['out', 'Perfecto, lo revisamos. ¿Lo necesitás para retirar o querés que cotizemos envío?', '16:31'],
    ],
  },
  {
    id: 'gustavo', name: 'Gustavo B.', initials: 'GB', phone: '+54 9 341 •••• 7091', role: 'Fabricante', channel: 'Instagram', time: '15:50', unread: 0,
    preview: 'Es para fabricar losetas atérmicas.', product: 'Piedra 0/1 + marmolina', quantity: 'Por bolsón', location: 'Rosario, Santa Fe', stage: 'Ganado', statusClass: 'won', tags: ['Losetas', 'Mayorista', 'Rosario'], nextAction: 'Consultar consumo mensual', color: '#668d7e',
    messages: [
      ['in', 'Es para fabricar losetas atérmicas. También necesitaría piedra y marmolina.', '15:50'],
      ['out', 'Perfecto, podemos armar una propuesta por bolsón y revisar el consumo mensual.', '15:52'],
    ],
  },
  {
    id: 'lucas', name: 'Lucas Fernández', initials: 'LF', phone: '+54 9 11 •••• 7396', role: 'Particular', channel: 'Instagram', time: '14:06', unread: 0,
    preview: '¿Tenés símil piedra Bali color arena?', product: 'Símil piedra Bali', quantity: '30 m lineales', location: 'Canning, Buenos Aires', stage: 'Cotización enviada', statusClass: 'quote', tags: ['Bali', 'Piscina', 'Canning'], nextAction: 'Enviar cálculo por metros', color: '#9c8059',
    messages: [
      ['in', '¿Tenés símil piedra Bali color arena?', '14:06'],
      ['out', 'Sí, podemos cotizarlo. ¿Cuántos metros necesitás cubrir y para cuándo?', '14:08'],
    ],
  },
];

// El estado de la IA vive en cada conversación: apagarla en un chat no afecta a los demás.
conversations.forEach((person) => { if (typeof person.aiEnabled !== 'boolean') person.aiEnabled = true; });

const catalogProducts = [
  { id: 'cemento-superwhite', name: 'Cemento blanco Super White', category: 'Cemento', unit: 'Bolsa 25 kg', price: 'USD 17', iva: 'No incluido', stock: 'Consultar', updated: '23/09/2026', freshness: 'review', note: 'Precio de referencia tomado de las conversaciones.' },
  { id: 'cemento-premium', name: 'Cemento blanco Premium Pro White', category: 'Cemento', unit: 'Bolsa 25 kg', price: 'USD 20', iva: 'No incluido', stock: 'Consultar', updated: '23/09/2026', freshness: 'review', note: 'Validar precio antes de cotizar.' },
  { id: 'bolson-cemento', name: 'Bolsón de cemento OYAK', category: 'Cemento', unit: 'Bolsón 1,5 t', price: 'A cargar', iva: 'No incluido', stock: 'Consultar', updated: 'Sin actualizar', freshness: 'missing', note: 'El bot debe derivar a un asesor.' },
  { id: 'venecita-azul', name: 'Venecita Azul Mixto', category: 'Revestimientos', unit: 'Caja 2 m² · 16 kg', price: 'A cargar', iva: 'No incluido', stock: 'Consultar', updated: 'Sin actualizar', freshness: 'missing', note: 'Precio por caja o por m².' },
  { id: 'venecita-teal', name: 'Venecita Teal', category: 'Revestimientos', unit: 'Caja 2 m² · 16 kg', price: 'A cargar', iva: 'No incluido', stock: 'Consultar', updated: 'Sin actualizar', freshness: 'missing', note: 'Precio por caja o por m².' },
  { id: 'símil-bali', name: 'Símil piedra Bali', category: 'Revestimientos', unit: 'm²', price: '$ 26.700', iva: 'No incluido', stock: 'Consultar', updated: '23/09/2026', freshness: 'review', note: 'Precio de referencia de una conversación.' },
  { id: 'kalekim', name: 'Kalekim 1054 Technoflex', category: 'Pegamentos', unit: 'Bolsa', price: 'A cargar', iva: 'No incluido', stock: 'Consultar', updated: 'Sin actualizar', freshness: 'missing', note: 'Adhesivo flexible para interior y exterior.' },
  { id: 'marmolina', name: 'Marmolina #80 blanca', category: 'Materiales', unit: 'Bolsa / bolsón', price: 'A cargar', iva: 'No incluido', stock: 'Consultar', updated: 'Sin actualizar', freshness: 'missing', note: 'Material para losetas atérmicas.' },
  { id: 'piedra-01', name: 'Piedra 0/1', category: 'Materiales', unit: 'Bolsa / bolsón', price: 'A cargar', iva: 'No incluido', stock: 'Consultar', updated: 'Sin actualizar', freshness: 'missing', note: 'Granulometría 0/1 para losetas.' },
  { id: 'filtro-mgi', name: 'Filtro Serie V · MGI Pool', category: 'Filtros', unit: 'Unidad', price: 'A cargar', iva: 'No incluido', stock: 'Consultar', updated: 'Sin actualizar', freshness: 'missing', note: 'Válvula de 6 posiciones.' },
  { id: 'bomba-rowa', name: 'Bomba Rowa Tempo 5/1 STE', category: 'Bombas', unit: 'Unidad', price: 'A cargar', iva: 'No incluido', stock: 'Consultar', updated: 'Sin actualizar', freshness: 'missing', note: '0,5 HP · 40 L/min · 35 m.' },
];

const initialView = ['inbox', 'crm', 'catalog', 'settings'].includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'inbox';
const storedSidebarWidth = Number.parseInt(window.localStorage.getItem('manmol-sidebar-width') || '', 10);
const initialSidebarWidth = Number.isFinite(storedSidebarWidth) ? Math.min(320, Math.max(88, storedSidebarWidth)) : 246;
const state = { activeView: initialView, selectedId: 'eli', search: '', filter: 'all', catalogSearch: '', catalogCategory: 'Todos', catalogSelected: [], sidebarWidth: initialSidebarWidth, toast: null };
const app = document.querySelector('#app');

function initialsAvatar(person, large = false) {
  return `<div class="avatar" style="background:${person.color || '#718a9a'};${large ? 'width:54px;height:54px;font-size:15px;' : ''}">${person.initials}</div>`;
}

function statusBadge(person) { return `<span class="status ${person.statusClass}">${person.stage}</span>`; }

function renderShell(content) {
  const sidebarCollapsed = state.sidebarWidth <= 112;
  app.innerHTML = `<div class="app-shell ${sidebarCollapsed ? 'sidebar-is-collapsed' : ''}" style="--sidebar-width:${state.sidebarWidth}px">
    <aside class="sidebar ${sidebarCollapsed ? 'collapsed' : ''}">
      <div class="brand"><div class="brand-mark">M</div><div class="brand-word"><strong>ManMol</strong><span>Centro comercial</span></div></div>
      <button class="workspace-switcher"> <div class="workspace-icon">MM</div><div class="workspace-copy"><strong>ManMol Argentina</strong><span>Equipo comercial</span></div>${icon('chevron', 14)}</button>
      <div class="nav-label">Workspace</div>
      <nav class="nav">
        <button class="nav-button ${state.activeView === 'inbox' ? 'active' : ''}" data-view="inbox">${icon('inbox')}<span>Conversaciones</span><span class="nav-count">8</span></button>
        <button class="nav-button ${state.activeView === 'crm' ? 'active' : ''}" data-view="crm">${icon('users')}<span>CRM de clientes</span></button>
        <button class="nav-button ${state.activeView === 'catalog' ? 'active' : ''}" data-view="catalog">${icon('box')}<span>Catálogo y precios</span></button>
      </nav>
      <div class="nav-label" style="margin-top:27px">Administración</div>
      <nav class="nav"><button class="nav-button ${state.activeView === 'settings' ? 'active' : ''}" data-view="settings">${icon('settings')}<span>Configuración</span></button></nav>
      <div class="sidebar-spacer"></div>
      <div class="sidebar-help">${icon('help', 17)}<p><strong>¿Necesitás ayuda?</strong>Revisá la guía del centro comercial.</p></div>
      <div class="user-card"><div class="avatar" style="background:#527582">JP</div><div class="user-copy"><strong>Juan Pablo</strong><span>Administrador</span></div>${icon('more', 15)}</div>
      <div class="sidebar-resizer" id="sidebar-resizer" role="separator" tabindex="0" aria-orientation="vertical" aria-valuemin="88" aria-valuemax="320" aria-valuenow="${state.sidebarWidth}" aria-label="Ajustar ancho del menú" title="Arrastrá para ajustar el ancho del menú"></div>
    </aside>
    <main class="main">${content}</main>
  </div>`;
  bindShellEvents();
}

function renderTopbar(label, title, action = '') {
  return `<div class="topbar"><div><div class="eyebrow"><span class="eyebrow-dot"></span>${label}</div><h1>${title}</h1></div><div class="topbar-actions"><button class="icon-button" title="Notificaciones">${icon('bell')}</button>${action}</div></div>`;
}

function renderMetrics() {
  const leads = conversations.length;
  const clients = conversations.filter((person) => person.statusClass === 'won').length;
  const openConversations = conversations.filter((person) => person.statusClass !== 'won').length;
  const metrics = [
    ['Leads', leads, 'Total de contactos en seguimiento', 'users'],
    ['Clientes', clients, 'Leads con OC confirmada', 'box'],
    ['Conversaciones abiertas', openConversations, 'Chats pendientes de cierre', 'inbox'],
  ];
  return `<div class="metric-grid">${metrics.map(([label, value, note, ico]) => `<div class="metric-card"><div class="metric-top"><span>${label}</span><span class="metric-icon">${icon(ico, 14)}</span></div><div class="metric-value">${String(value).padStart(2, '0')}</div><span class="metric-note">${note}</span></div>`).join('')}</div>`;
}

function renderConversationList() {
  const visible = conversations.filter((person) => {
    const matchesSearch = `${person.name} ${person.product} ${person.location}`.toLowerCase().includes(state.search.toLowerCase());
    const matchesFilter = state.filter === 'all' || (state.filter === 'unread' && person.unread > 0) || (state.filter === 'waiting' && person.statusClass === 'wait');
    return matchesSearch && matchesFilter;
  });
  return `<section class="conversation-panel"><div class="panel-heading"><h2>Bandeja de entrada</h2><span class="small-count">${visible.length} activos</span></div><div class="search-box">${icon('search', 14)}<input id="conversation-search" type="search" placeholder="Buscar conversación" value="${state.search}" /></div><div class="filter-row"><button class="filter-button ${state.filter === 'all' ? 'active' : ''}" data-filter="all">Todas</button><button class="filter-button ${state.filter === 'unread' ? 'active' : ''}" data-filter="unread">No leídas</button><button class="filter-button ${state.filter === 'waiting' ? 'active' : ''}" data-filter="waiting">Esperando</button></div><div class="conversation-list">${visible.length ? visible.map((person) => `<button class="conversation-item ${person.id === state.selectedId ? 'selected' : ''}" data-conversation="${person.id}">${initialsAvatar(person)}<div class="conversation-copy"><div class="conversation-name-row"><span class="conversation-name">${person.name}</span><span class="conversation-time">${person.time}</span></div><div class="conversation-preview">${person.preview}</div><div class="conversation-meta"><span class="channel">${person.channel}</span>${person.unread ? '<span class="unread-dot"></span>' : ''}</div></div></button>`).join('') : '<div class="empty-state"><strong>Sin resultados</strong>Probá con otro término.</div>'}</div></section>`;
}

function renderMessages(person) {
  return `<div class="messages"><div class="day-divider">Hoy, 29 de septiembre</div>${person.messages.map(([direction, text, time]) => `<div class="message-row ${direction === 'out' ? 'outgoing' : ''}"><div class="message-bubble">${text}<span class="message-time">${time}${direction === 'out' ? ' ✓✓' : ''}</span></div></div>`).join('')}</div>`;
}

function renderChat(person) {
  const closed = person.statusClass === 'won';
  const aiEnabled = person.aiEnabled !== false;
  return `<section class="chat-panel"><div class="chat-heading">${initialsAvatar(person)}<div class="chat-person"><strong>${person.name}</strong><span>${person.phone} · ${person.role}</span></div><div class="ai-control ${aiEnabled ? '' : 'paused'}"><div><strong>IA del chat</strong><span>${aiEnabled ? 'Activa' : 'Pausada'}</span></div><button class="toggle ${aiEnabled ? 'on' : ''}" id="toggle-ai" type="button" role="switch" aria-checked="${aiEnabled}" aria-label="${aiEnabled ? 'Desactivar IA en este chat' : 'Activar IA en este chat'}" title="${aiEnabled ? 'Desactivar IA solo en este chat' : 'Activar IA solo en este chat'}"><span></span></button></div><div class="chat-actions"><button class="icon-button" title="Llamar">${icon('phone', 15)}</button><button class="secondary-button lead-button" id="open-lead">${icon('external', 13)} Abrir lead</button><button class="${closed ? 'secondary-button closed-lead' : 'primary-button'} lead-button" id="close-lead">${closed ? '✓ Lead cerrado' : 'Cerrar lead'}</button><button class="icon-button" title="Más acciones">${icon('more', 16)}</button></div></div>${aiEnabled ? '' : '<div class="ai-paused-notice"><span class="ai-paused-dot"></span><strong>IA pausada en este chat</strong><span>El equipo responde manualmente hasta volver a activarla.</span></div>'}<div class="chat-context"><span>Interés:</span><strong>${person.product}</strong><span class="context-pill">${person.stage}</span></div><div class="lead-quick-details"><span><small>Cantidad</small><strong>${person.quantity}</strong></span><span><small>Ubicación</small><strong>${person.location}</strong></span><span><small>Etiquetas</small><strong>${person.tags.slice(0, 2).join(' · ')}</strong></span></div>${renderMessages(person)}<div class="composer ${aiEnabled ? '' : 'composer-manual'}"><button class="icon-button" title="Adjuntar">${icon('paperclip', 16)}</button><textarea id="message-draft" placeholder="${aiEnabled ? 'Escribí un mensaje...' : 'Escribí una respuesta manual...'}"></textarea><button class="primary-button send-button" id="send-message" title="Enviar">${icon('send', 15)}</button></div></section>`;
}

function renderCustomerPanel(person) {
  return `<aside class="customer-panel"><div class="customer-header">${initialsAvatar(person, true)}<strong>${person.name}</strong><span>${person.phone}</span><div style="margin-top:10px">${statusBadge(person)}</div></div><div class="profile-section"><h3>Información del cliente</h3><div class="profile-line">${icon('users', 14)}<div><span>Tipo de cliente</span><strong>${person.role}</strong></div></div><div class="profile-line">${icon('map', 14)}<div><span>Ubicación</span><strong>${person.location}</strong></div></div><div class="profile-line">${icon('box', 14)}<div><span>Compra estimada</span><strong>${person.quantity}</strong></div></div></div><div class="profile-section"><h3>Etiquetas</h3><div class="tag-list">${person.tags.map((tag, index) => `<span class="tag ${index === 0 ? 'orange' : ''}">${tag}</span>`).join('')}</div></div><div class="profile-section"><h3>Próxima acción</h3><div class="next-action"><strong>${icon('chart', 12)} ${person.nextAction}</strong><span>La tarea quedará visible para el equipo comercial.</span></div></div><div class="profile-section"><button class="secondary-button" style="width:100%" id="open-crm">${icon('external', 13)} Ver ficha completa en CRM</button></div></aside>`;
}

function renderInbox() {
  const person = conversations.find((item) => item.id === state.selectedId) || conversations[0];
  renderShell(`${renderTopbar('WhatsApp comercial', 'Conversaciones', `<button class="primary-button" id="new-conversation">${icon('plus', 14)} Nueva conversación</button>`)}<div class="whatsapp-note"><span class="online-dot"></span><strong>Canal conectado</strong><span>WhatsApp Business · bandeja del equipo comercial</span></div><div class="inbox-layout">${renderConversationList()}${renderChat(person)}</div>`);
}

function getCrmRows() {
  return conversations.map((person) => ({ ...person, lastActivity: person.time === '18:13' ? 'Hoy, 18:13' : `Hoy, ${person.time}`, segment: person.role }));
}

function renderCrm() {
  const crmRows = getCrmRows();
  renderShell(`${renderTopbar('Gestión comercial', 'CRM de clientes', `<button class="secondary-button" id="export-crm">${icon('download', 14)} Exportar</button><button class="primary-button" id="new-lead">${icon('plus', 14)} Nuevo lead</button>`)}<div class="crm-header"><div><p class="crm-subtitle">Seguimiento de leads, oportunidades y clientes de ManMol.</p></div></div>${renderMetrics()}<div class="crm-toolbar"><div class="search-box">${icon('search', 14)}<input id="crm-search" type="search" placeholder="Buscar por nombre, teléfono o producto" /></div><button class="select-button">Todos los estados ${icon('chevron', 13)}</button><button class="select-button">Todos los segmentos ${icon('chevron', 13)}</button><button class="icon-button" title="Filtros">${icon('filter', 15)}</button></div><div class="crm-table-wrap"><table class="crm-table"><thead><tr><th>Cliente</th><th>Interés principal</th><th>Segmento</th><th>Ubicación</th><th>Estado</th><th>Última actividad</th><th></th></tr></thead><tbody id="crm-body">${crmRows.map((person) => `<tr data-crm-row="${person.id}"><td><div class="lead-person">${initialsAvatar(person)}<div><strong>${person.name}</strong><span>${person.phone}</span></div></div></td><td><div class="interest"><strong>${person.product}</strong><span>${person.quantity}</span></div></td><td>${person.segment}</td><td>${person.location}</td><td>${statusBadge(person)}</td><td>${person.lastActivity}</td><td><button class="table-action" data-open-chat="${person.id}">Abrir chat ${icon('external', 12)}</button></td></tr>`).join('')}</tbody></table></div>`);
}

function freshnessBadge(product) {
  const labels = { fresh: 'Actualizado', review: 'Revisar', missing: 'Falta actualizar' };
  return `<span class="freshness ${product.freshness}"><span></span>${labels[product.freshness]}</span>`;
}

function parseCatalogPrice(product) {
  const raw = String(product.price || '').replace(/[^0-9,.-]/g, '');
  if (!raw || product.price === 'A cargar') return null;
  const normalized = raw.includes('.') ? raw.replace(/\./g, '').replace(',', '.') : raw.replace(',', '.');
  const value = Number(normalized);
  if (!Number.isFinite(value)) return null;
  return { value, currency: String(product.price).toUpperCase().includes('USD') ? 'USD' : 'ARS' };
}

function formatCatalogPrice(value, currency) {
  const formatted = new Intl.NumberFormat('es-AR', { minimumFractionDigits: currency === 'USD' ? 2 : 0, maximumFractionDigits: 2 }).format(value);
  return currency === 'USD' ? `USD ${formatted}` : `$ ${formatted}`;
}

function renderCatalog() {
  const categories = ['Todos', ...new Set(catalogProducts.map((product) => product.category))];
  const visibleProducts = catalogProducts.filter((product) => {
    const matchesCategory = state.catalogCategory === 'Todos' || product.category === state.catalogCategory;
    const matchesSearch = `${product.name} ${product.category} ${product.unit} ${product.note}`.toLowerCase().includes(state.catalogSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const ready = catalogProducts.filter((product) => product.freshness === 'fresh').length;
  const needsReview = catalogProducts.filter((product) => product.freshness !== 'fresh').length;
  renderShell(`${renderTopbar('Datos para cotizar', 'Catálogo y precios', `<button class="secondary-button" id="refresh-catalog">${icon('download', 14)} Importar lista</button><button class="secondary-button" id="bulk-price">${icon('chart', 14)} Ajustar precios</button><button class="primary-button" id="new-product">${icon('plus', 14)} Agregar producto</button>`)}<div class="catalog-rule">${icon('help', 15)}<div><strong>Estos son los datos que usará el bot para responder y cotizar.</strong><span>Si falta precio, unidad, IVA, stock o vigencia, el producto queda para revisión y el bot deriva a un asesor.</span></div><span class="rule-status">${ready} listos · ${needsReview} para revisar</span></div><div class="catalog-overview"><div class="catalog-stat"><span class="stat-label">Productos en catálogo</span><strong>${catalogProducts.length}</strong><span>en ${categories.length - 1} categorías</span></div><div class="catalog-stat"><span class="stat-label">Precios por revisar</span><strong class="warning-number">${needsReview}</strong><span>requieren confirmación</span></div><div class="catalog-stat"><span class="stat-label">Modo de ajuste</span><strong>Manual</strong><span>individual o masivo</span></div><div class="catalog-stat"><span class="stat-label">Última revisión</span><strong>23/09</strong><span>actualizar antes de cotizar</span></div></div><div class="catalog-toolbar"><div class="search-box">${icon('search', 14)}<input id="catalog-search" type="search" placeholder="Buscar producto, categoría o dato técnico" value="${state.catalogSearch}" /></div><div class="catalog-filters">${categories.map((category) => `<button class="catalog-filter ${state.catalogCategory === category ? 'active' : ''}" data-catalog-category="${category}">${category}</button>`).join('')}</div></div><section class="catalog-products catalog-products-full"><div class="section-heading"><div><h2>Tabla maestra de productos</h2><span>Completá los campos de cada fila para habilitar la cotización automática.</span></div><span class="table-requirements">Obligatorios: unidad · precio · moneda · IVA · stock · vigencia</span></div><div class="product-table-wrap"><table class="product-table"><thead><tr><th>Producto y alias</th><th>Presentación / dato técnico</th><th>Precio vigente</th><th>IVA</th><th>Stock</th><th>Actualización</th><th>Acción</th></tr></thead><tbody>${visibleProducts.map((product) => `<tr data-product-row="${product.id}"><td><div class="product-name"><div class="product-dot ${product.category.toLowerCase().replace('ó', 'o')}">${product.category.slice(0, 1)}</div><div><strong>${product.name}</strong><span>${product.category}</span></div></div></td><td><div class="product-detail"><strong>${product.unit}</strong><span>${product.note}</span></div></td><td><strong class="product-price ${product.price === 'A cargar' ? 'not-loaded' : ''}">${product.price}</strong></td><td>${product.iva}</td><td>${product.stock}</td><td><div>${freshnessBadge(product)}<span class="updated-date">${product.updated}</span></div></td><td><button class="table-action edit-product" data-edit-product="${product.id}">Editar</button></td></tr>`).join('')}</tbody></table>${visibleProducts.length === 0 ? '<div class="empty-state"><strong>Sin productos</strong>Probá con otra búsqueda o categoría.</div>' : ''}</div></section>`);
}

function closeModal() {
  document.querySelector('.modal-backdrop')?.remove();
}

function openNewLeadEditor() {
  closeModal();
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `<div class="modal-card lead-modal-card"><div class="modal-heading"><div><span class="eyebrow">Alta de lead</span><h2>Nuevo lead</h2></div><button class="icon-button" id="close-modal">×</button></div><p class="modal-help">Cargá los datos de contacto para crear la ficha y abrir el chat de WhatsApp. Después podés escribir el primer mensaje desde la conversación.</p><div class="form-grid"><label class="form-wide">Nombre del lead<input id="new-lead-name" autocomplete="name" placeholder="Ej. Martín Rodríguez" /></label><label class="form-wide">Número de WhatsApp<input id="new-lead-phone" autocomplete="tel" inputmode="tel" placeholder="Ej. +54 9 11 5555-5555" /></label></div><div class="modal-footer"><button class="secondary-button" id="cancel-modal">Cancelar</button><button class="primary-button" id="save-new-lead">Crear y abrir conversación</button></div></div>`;
  document.body.appendChild(modal);
  modal.querySelector('#close-modal').addEventListener('click', closeModal);
  modal.querySelector('#cancel-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  modal.querySelector('#save-new-lead').addEventListener('click', () => {
    const name = modal.querySelector('#new-lead-name').value.trim();
    const phone = modal.querySelector('#new-lead-phone').value.trim();
    if (!name) { modal.querySelector('#new-lead-name').focus(); showToast('Cargá el nombre del lead'); return; }
    if (phone.replace(/\D/g, '').length < 6) { modal.querySelector('#new-lead-phone').focus(); showToast('Cargá un número de WhatsApp válido'); return; }
    const id = `lead-${Date.now()}`;
    const nameParts = name.split(/\s+/).filter(Boolean);
    const initials = nameParts.slice(0, 2).map((part) => part[0]).join('').toUpperCase() || 'NL';
    conversations.unshift({
      id, name, initials, phone, role: 'Lead nuevo', channel: 'WhatsApp', time: 'Ahora', unread: 0,
      preview: 'Conversación nueva', product: 'Interés a definir', quantity: 'A confirmar', location: 'A confirmar',
      stage: 'Nuevo lead', statusClass: 'new', tags: ['Lead nuevo'], nextAction: 'Enviar primer mensaje', color: '#557c8a',
      aiEnabled: true, messages: [],
    });
    state.selectedId = id;
    state.activeView = 'inbox';
    closeModal();
    renderInbox();
    document.querySelector('#message-draft')?.focus();
    showToast('Lead creado. Ya podés enviarle un mensaje');
  });
  modal.querySelector('#new-lead-name').focus();
}

function openProductEditor(id) {
  const product = catalogProducts.find((item) => item.id === id);
  if (!product) return;
  closeModal();
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `<div class="modal-card"><div class="modal-heading"><div><span class="eyebrow">Actualizar catálogo</span><h2>${product.name}</h2></div><button class="icon-button" id="close-modal">×</button></div><p class="modal-help">Al guardar, el bot podrá utilizar este precio en sus cotizaciones automáticas.</p><div class="form-grid"><label>Precio<input id="edit-price" value="${product.price === 'A cargar' ? '' : product.price}" placeholder="Ej. USD 17 o $ 26.700" /></label><label>Unidad<select id="edit-unit"><option ${product.unit === 'Bolsa 25 kg' ? 'selected' : ''}>Bolsa 25 kg</option><option ${product.unit === 'Caja 2 m² · 16 kg' ? 'selected' : ''}>Caja 2 m² · 16 kg</option><option ${product.unit === 'm²' ? 'selected' : ''}>m²</option><option ${product.unit === 'Bolsón 1,5 t' ? 'selected' : ''}>Bolsón 1,5 t</option><option ${product.unit === 'Unidad' ? 'selected' : ''}>Unidad</option><option ${product.unit === 'Bolsa / bolsón' ? 'selected' : ''}>Bolsa / bolsón</option></select></label><label>IVA<select id="edit-iva"><option ${product.iva === 'No incluido' ? 'selected' : ''}>No incluido</option><option ${product.iva === 'Incluido' ? 'selected' : ''}>Incluido</option><option>Consultar</option></select></label><label>Stock<input id="edit-stock" value="${product.stock === 'Consultar' ? '' : product.stock}" placeholder="Ej. 20 unidades o Consultar" /></label></div><div class="modal-footer"><button class="secondary-button" id="cancel-modal">Cancelar</button><button class="primary-button" id="save-product">Guardar y marcar actualizado</button></div></div>`;
  document.body.appendChild(modal);
  modal.querySelector('#close-modal').addEventListener('click', closeModal);
  modal.querySelector('#cancel-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  modal.querySelector('#save-product').addEventListener('click', () => {
    const price = modal.querySelector('#edit-price').value.trim();
    if (!price) { modal.querySelector('#edit-price').focus(); showToast('Cargá un precio antes de marcarlo actualizado'); return; }
    product.price = price;
    product.unit = modal.querySelector('#edit-unit').value;
    product.iva = modal.querySelector('#edit-iva').value;
    product.stock = modal.querySelector('#edit-stock').value.trim() || 'Consultar';
    product.updated = 'Ahora';
    product.freshness = 'fresh';
    closeModal();
    renderCatalog();
    showToast('Producto actualizado: el bot ya puede cotizarlo');
  });
}

function openNewProductEditor() {
  closeModal();
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `<div class="modal-card"><div class="modal-heading"><div><span class="eyebrow">Alta de catálogo</span><h2>Agregar producto</h2></div><button class="icon-button" id="close-modal">×</button></div><p class="modal-help">El producto se crea como “Revisar” hasta completar precio, IVA, stock y vigencia.</p><div class="form-grid"><label>Nombre del producto<input id="new-name" placeholder="Ej. Venecita Verde Mixto" /></label><label>Categoría<select id="new-category"><option>Cemento</option><option>Revestimientos</option><option>Venecitas</option><option>Pegamentos</option><option>Materiales</option><option>Filtros</option><option>Bombas</option><option>Mantenimiento de piscina</option></select></label><label>Unidad / empaque<input id="new-unit" placeholder="Ej. Caja 2 m² · 16 kg" /></label><label>Precio inicial<input id="new-price" placeholder="Ej. USD 17 o $ 26.700" /></label><label>IVA<select id="new-iva"><option>No incluido</option><option>Incluido</option><option>Consultar</option></select></label><label>Stock<input id="new-stock" placeholder="Ej. Consultar" /></label><label class="form-wide">Dato técnico / alias<input id="new-note" placeholder="Peso, cobertura, medidas, nombres alternativos o datos a pedir" /></label></div><div class="modal-footer"><button class="secondary-button" id="cancel-modal">Cancelar</button><button class="primary-button" id="save-new-product">Agregar a la tabla</button></div></div>`;
  document.body.appendChild(modal);
  modal.querySelector('#close-modal').addEventListener('click', closeModal);
  modal.querySelector('#cancel-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  modal.querySelector('#save-new-product').addEventListener('click', () => {
    const name = modal.querySelector('#new-name').value.trim();
    if (!name) { modal.querySelector('#new-name').focus(); showToast('Cargá el nombre del producto'); return; }
    const baseId = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `producto-${Date.now()}`;
    let id = baseId;
    let suffix = 2;
    while (catalogProducts.some((item) => item.id === id)) id = `${baseId}-${suffix++}`;
    const price = modal.querySelector('#new-price').value.trim();
    catalogProducts.push({ id, name, category: modal.querySelector('#new-category').value, unit: modal.querySelector('#new-unit').value.trim() || 'A definir', price: price || 'A cargar', iva: modal.querySelector('#new-iva').value, stock: modal.querySelector('#new-stock').value.trim() || 'Consultar', updated: 'Sin actualizar', freshness: price ? 'review' : 'missing', note: modal.querySelector('#new-note').value.trim() || 'Completar peso, cobertura, medidas y alias.' });
    closeModal();
    renderCatalog();
    showToast('Producto agregado a la tabla');
  });
}

function openBulkPriceEditor() {
  closeModal();
  state.catalogSelected = [];
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `<div class="modal-card"><div class="modal-heading"><div><span class="eyebrow">Actualización masiva</span><h2>Ajustar precios</h2></div><button class="icon-button" id="close-modal">×</button></div><p class="modal-help">Primero elegí si querés ajustar todos los productos con precio o seleccionar productos específicos.</p><div class="form-grid"><label>Aplicar a<select id="bulk-scope"><option value="all">Todos los productos con precio</option><option value="selected">Seleccionar productos</option></select></label><label>Variación porcentual<input id="bulk-percent" type="number" step="0.01" placeholder="Ej. 10" /></label></div><div class="bulk-product-selector" id="bulk-product-selector" hidden><div class="bulk-selector-heading"><strong>Seleccioná los productos</strong><span id="bulk-selection-count">0 seleccionados</span></div><div class="bulk-product-list">${catalogProducts.map((product) => `<label class="bulk-product-option"><input type="checkbox" data-bulk-product="${product.id}" /><span><strong>${product.name}</strong><small>${product.price} · ${product.category}</small></span></label>`).join('')}</div></div><div class="modal-footer"><button class="secondary-button" id="cancel-modal">Cancelar</button><button class="primary-button" id="save-bulk-price">Aplicar variación</button></div></div>`;
  document.body.appendChild(modal);
  modal.querySelector('#close-modal').addEventListener('click', closeModal);
  modal.querySelector('#cancel-modal').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  modal.querySelector('#bulk-scope').addEventListener('change', (event) => {
    modal.querySelector('#bulk-product-selector').hidden = event.target.value !== 'selected';
  });
  modal.querySelectorAll('[data-bulk-product]').forEach((input) => input.addEventListener('change', () => {
    const id = input.dataset.bulkProduct;
    if (input.checked) state.catalogSelected = [...new Set([...state.catalogSelected, id])];
    else state.catalogSelected = state.catalogSelected.filter((selectedId) => selectedId !== id);
    modal.querySelector('#bulk-selection-count').textContent = `${state.catalogSelected.length} seleccionados`;
  }));
  modal.querySelector('#save-bulk-price').addEventListener('click', () => {
    const percent = Number(modal.querySelector('#bulk-percent').value);
    if (!Number.isFinite(percent) || percent === 0) { modal.querySelector('#bulk-percent').focus(); showToast('Indicá un porcentaje distinto de cero'); return; }
    const scope = modal.querySelector('#bulk-scope').value;
    const targets = scope === 'selected' ? catalogProducts.filter((product) => state.catalogSelected.includes(product.id)) : catalogProducts;
    if (scope === 'selected' && targets.length === 0) { showToast('Seleccioná al menos un producto'); return; }
    let updated = 0;
    let skipped = 0;
    targets.forEach((product) => {
      const parsed = parseCatalogPrice(product);
      if (!parsed) { skipped += 1; return; }
      product.price = formatCatalogPrice(parsed.value * (1 + percent / 100), parsed.currency);
      product.updated = 'Ahora';
      if (product.freshness !== 'fresh') product.freshness = 'review';
      updated += 1;
    });
    state.catalogSelected = [];
    closeModal();
    renderCatalog();
    showToast(`${updated} precios actualizados${skipped ? ` · ${skipped} sin precio numérico` : ''}`);
  });
}

function renderPlaceholder(view) {
  const labels = { catalog: ['Catálogo y precios', 'Productos, stock y reglas de cotización'], settings: ['Configuración', 'Canales, usuarios y reglas de atención'] };
  const [title, subtitle] = labels[view];
  renderShell(`${renderTopbar('Próximamente', title)}<div class="empty-state" style="margin-top:80px"><div class="metric-icon" style="margin:0 auto 15px;color:var(--orange);background:var(--orange-soft);width:48px;height:48px">${icon(view === 'catalog' ? 'box' : 'settings', 23)}</div><strong>${title}</strong><span>${subtitle}. Esta sección queda preparada para la siguiente iteración.</span></div>`);
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function bindSidebarResizer() {
  const resizer = document.querySelector('#sidebar-resizer');
  const shell = document.querySelector('.app-shell');
  if (!resizer || !shell) return;
  let startX = 0;
  let startWidth = state.sidebarWidth;

  const applyWidth = (width) => {
    state.sidebarWidth = Math.min(320, Math.max(88, Math.round(width)));
    window.localStorage.setItem('manmol-sidebar-width', String(state.sidebarWidth));
    shell.style.setProperty('--sidebar-width', `${state.sidebarWidth}px`);
    shell.classList.toggle('sidebar-is-collapsed', state.sidebarWidth <= 112);
    shell.querySelector('.sidebar')?.classList.toggle('collapsed', state.sidebarWidth <= 112);
    resizer.setAttribute('aria-valuenow', String(state.sidebarWidth));
  };

  const stopResize = () => {
    document.body.classList.remove('resizing-sidebar');
    window.removeEventListener('pointermove', moveResize);
    window.removeEventListener('pointerup', stopResize);
  };

  const moveResize = (event) => applyWidth(startWidth + event.clientX - startX);

  resizer.addEventListener('pointerdown', (event) => {
    startX = event.clientX;
    startWidth = state.sidebarWidth;
    document.body.classList.add('resizing-sidebar');
    window.addEventListener('pointermove', moveResize);
    window.addEventListener('pointerup', stopResize, { once: true });
    event.preventDefault();
  });
  resizer.addEventListener('dblclick', () => applyWidth(246));
  resizer.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { applyWidth(state.sidebarWidth - 12); event.preventDefault(); }
    if (event.key === 'ArrowRight') { applyWidth(state.sidebarWidth + 12); event.preventDefault(); }
    if (event.key === 'Home') { applyWidth(88); event.preventDefault(); }
    if (event.key === 'End') { applyWidth(320); event.preventDefault(); }
  });
}

function bindShellEvents() {
  bindSidebarResizer();
  document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => {
    state.activeView = button.dataset.view;
    if (state.activeView === 'inbox') renderInbox();
    else if (state.activeView === 'crm') renderCrm();
    else if (state.activeView === 'catalog') renderCatalog();
    else renderPlaceholder(state.activeView);
  }));

  document.querySelectorAll('[data-conversation]').forEach((button) => button.addEventListener('click', () => {
    state.selectedId = button.dataset.conversation;
    const person = conversations.find((item) => item.id === state.selectedId);
    if (person) person.unread = 0;
    renderInbox();
  }));

  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
    state.filter = button.dataset.filter;
    renderInbox();
  }));

  const search = document.querySelector('#conversation-search');
  if (search) search.addEventListener('input', (event) => { state.search = event.target.value; renderInbox(); const input = document.querySelector('#conversation-search'); input.focus(); input.setSelectionRange(input.value.length, input.value.length); });

  const draft = document.querySelector('#message-draft');
  const send = document.querySelector('#send-message');
  if (send && draft) send.addEventListener('click', () => {
    const text = draft.value.trim();
    if (!text) return;
    const person = conversations.find((item) => item.id === state.selectedId);
    person.messages.push(['out', text, 'Ahora']);
    person.preview = text;
    renderInbox();
    showToast('Mensaje agregado a la conversación demo');
  });

  document.querySelector('#open-crm')?.addEventListener('click', () => { state.activeView = 'crm'; renderCrm(); });
  document.querySelector('#open-lead')?.addEventListener('click', () => { state.activeView = 'crm'; renderCrm(); });
  document.querySelector('#toggle-ai')?.addEventListener('click', () => {
    const person = conversations.find((item) => item.id === state.selectedId);
    if (!person) return;
    person.aiEnabled = person.aiEnabled === false;
    renderInbox();
    showToast(person.aiEnabled ? 'IA activada solo para este chat' : 'IA pausada solo para este chat');
  });
  document.querySelector('#close-lead')?.addEventListener('click', () => {
    const person = conversations.find((item) => item.id === state.selectedId);
    if (!person || person.statusClass === 'won') return;
    person.stage = 'Ganado';
    person.statusClass = 'won';
    person.nextAction = 'Cliente cerrado';
    renderInbox();
    showToast('Lead cerrado y guardado como ganado');
  });
  document.querySelector('#new-conversation')?.addEventListener('click', () => showToast('La creación de conversaciones se conectará a WhatsApp Business'));
  document.querySelector('#new-lead')?.addEventListener('click', openNewLeadEditor);
  document.querySelector('#export-crm')?.addEventListener('click', () => showToast('Exportación demo: conectaremos CSV/XLSX al backend'));

  const crmSearch = document.querySelector('#crm-search');
  if (crmSearch) crmSearch.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll('[data-crm-row]').forEach((row) => { row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none'; });
  });

  document.querySelectorAll('[data-open-chat]').forEach((button) => button.addEventListener('click', () => { state.selectedId = button.dataset.openChat; state.activeView = 'inbox'; renderInbox(); }));

  const catalogSearch = document.querySelector('#catalog-search');
  if (catalogSearch) catalogSearch.addEventListener('input', (event) => {
    state.catalogSearch = event.target.value;
    renderCatalog();
    const input = document.querySelector('#catalog-search');
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  });
  document.querySelectorAll('[data-catalog-category]').forEach((button) => button.addEventListener('click', () => { state.catalogCategory = button.dataset.catalogCategory; renderCatalog(); }));
  document.querySelector('#refresh-catalog')?.addEventListener('click', () => showToast('La importación se conectará a la lista maestra de precios'));
  document.querySelector('#new-product')?.addEventListener('click', openNewProductEditor);
  document.querySelector('#bulk-price')?.addEventListener('click', openBulkPriceEditor);
  document.querySelectorAll('[data-edit-product]').forEach((button) => button.addEventListener('click', () => openProductEditor(button.dataset.editProduct)));
}

if (state.activeView === 'inbox') renderInbox();
else if (state.activeView === 'crm') renderCrm();
else if (state.activeView === 'catalog') renderCatalog();
else renderPlaceholder(state.activeView);
