const DATA = {
  categories: ["BlueInk", "HWL", "Saturation"],

  paperFormats: [
    { name: '8.5"x11" White 70#', cost: 0.0382, categories: ["BlueInk", "HWL"] },
    { name: '8.5"x11" Yellow 60#', cost: 0.0248, categories: ["BlueInk", "HWL"] },
    { name: '8.5"x13" White 70#', cost: 0.0464, categories: ["BlueInk", "HWL"] },
    { name: '8.5"x11" White bottom perf 60#', cost: null, categories: ["BlueInk", "HWL"] },
    { name: '8.5"x11" Two ply Carbonless', cost: null, categories: ["BlueInk", "HWL"] },
    { name: '5.5"x8.5" White 80# cover', cost: 0.0334, categories: ["BlueInk", "HWL"] },
    { name: '8.75"x11.75" White 7pt cover', cost: 0.0410, categories: ["BlueInk", "Saturation"] },
    { name: '6"x11" White 100# cover', cost: null, categories: ["BlueInk", "Saturation"] },
    { name: '4"x8" White 80# cover', cost: 0.0223, categories: ["BlueInk"] }
  ],

  dataLists: [
    { name: "In-House", cost: 0.0000, categories: ["BlueInk", "HWL"] },
    { name: "Conquest VIN", cost: 0.1725, categories: ["BlueInk", "HWL"] },
    { name: "Name Only Saturation", cost: 0.0100, categories: ["Saturation"] },
    { name: "Credit", cost: 0.1208, categories: ["BlueInk", "HWL"] },
    { name: "Bankruptcy", cost: 0.0690, categories: ["BlueInk", "HWL"] }
  ],

  envelopeTypes: [
    { name: "#10 Envelope", cost: 0.0276, categories: ["BlueInk", "HWL"] },
    { name: '6"x9.5" Envelope', cost: 0.0387, categories: ["BlueInk", "HWL", "Saturation"] },
    { name: "Pink Granny", cost: 0.0670, categories: ["BlueInk"] },
    { name: "#10 Window Envelope", cost: 0.0316, categories: ["BlueInk", "HWL"] }
  ],

  colorOptions: [
    { name: "1/0 Color", cost: 0.0110, categories: ["BlueInk", "HWL"] },
    { name: "4/0 Color", cost: 0.0200, categories: ["BlueInk", "HWL"] },
    { name: "4/1 Color", cost: 0.0310, categories: ["BlueInk", "HWL"] },
    { name: "4/4 Color", cost: 0.0400, categories: ["BlueInk", "HWL", "Saturation"] }
  ],

  fixedCosts: {
    BlueInk: [
      { name: "Operating", cost: 0.0500 },
      { name: "Prepress & Fulfillment", cost: 0.1000 },
      { name: "Ship to 1 SCF", cost: 0.0400 },
      { name: "Postage", cost: 0.3550 },
      { name: "Post-it Note", cost: 0.0275 }
    ],
    HWL: [
      { name: "Operating", cost: 0.0500 },
      { name: "Prepress & Fulfillment", cost: 0.1000 },
      { name: "Ship to 1 SCF", cost: 0.0400 },
      { name: "Postage", cost: 0.3550 },
      { name: "Machine", cost: 0.1000 },
      { name: "Envelope Labor", cost: 0.0415 },
      { name: "HWL Long Form Labor", cost: 0.1250 },
      { name: "Post-it w/ Labor", cost: 0.0490 }
    ],
    Saturation: [
      { name: "Operating", cost: 0.0500 },
      { name: "Prepress & Fulfillment", cost: 0.1000 },
      { name: "Ship to 1 SCF", cost: 0.0400 },
      { name: "Postage", cost: 0.2450 },
      { name: "Envelope", cost: 0.0387 },
      { name: "Name Only Saturation Data", cost: 0.0110 }
    ]
  },

  productOptions: {
    HWL: {
      '8.5"x11" White 70#': [
        "8.5 x 11 Bankruptcy Letter",
        "8.5 x 11 Email Buyback",
        "8.5 x 11 Email LLT",
        "8.5 x 11 White Letterhead with Envelope (With or without business card)",
        "8.5 x 11 BK Fresh Start Letter (no voucher for GA)",
        "8.5 x 11 Preapproval Letter (no voucher for GA)",
        "8.5 x 11 Loan Lease Termination Letter (no voucher for GA)"
      ],
      '8.5"x11" Yellow 60#': [
        "8.5 x 11 Yellow Letter with Oversized Business Card",
        "8.5 x 11 Yellow Letter with Envelope (With or without business card)"
      ],
      '8.5"x13" White 70#': [
        "8.5 x 13 BK Fresh Start Letter",
        "8.5 x 13 BK NOTICE",
        "8.5 x 13 Preapproval Letter",
        "8.5 x 13 Loan Lease Termination Letter"
      ],
      '8.5"x11" White bottom perf 60#': [
        "8.5 x 11 Faux Check Letter"
      ],
      '8.5"x11" Two ply Carbonless': [
        "8.5 x 11 Carbonless Letter"
      ],
      '5.5"x8.5" White 80# cover': [
        "5.5 x 8.5 Note Card W 6 x 9.5 Envelope - Elaine Font"
      ]
    },

    BlueInk: {
      '8.5"x11" White 70#': [
        "8.5 x 11 Bankruptcy Letter",
        "8.5 x 11 Email Buyback",
        "8.5 x 11 Email LLT",
        "8.5 x 11 White Letterhead with Envelope (With or without business card)",
        "8.5 x 11 BK Fresh Start Letter (no voucher for GA)",
        "8.5 x 11 Preapproval Letter (no voucher for GA)",
        "8.5 x 11 Loan Lease Termination Letter (no voucher for GA)"
      ],
      '8.5"x11" Yellow 60#': [
        "8.5 x 11 Yellow Letter with Oversized Business Card",
        "8.5 x 11 Yellow Letter with Envelope (With or without business card)"
      ],
      '8.5"x13" White 70#': [
        "8.5 x 13 BK Fresh Start Letter",
        "8.5 x 13 BK NOTICE",
        "8.5 x 13 Preapproval Letter",
        "8.5 x 13 Loan Lease Termination Letter"
      ],
      '8.5"x11" White bottom perf 60#': [
        "8.5 x 11 Faux Check Letter"
      ],
      '8.5"x11" Two ply Carbonless': [
        "8.5 x 11 Carbonless Letter"
      ],
      '5.5"x8.5" White 80# cover': [
        "5.5 x 8.5 Note Card (With or without envelope (6 x 9.5))"
      ],
      '6"x11" White 100# cover': [
        "6 x 11 Service Postcard"
      ],
      '4"x8" White 80# cover': [
        "8.25 x 4.25 Hyper BlueInk Personalized NoteCard W AI Personal Offer"
      ]
    },

    Saturation: {}
  },

  autoEnvelopeByCategoryAndPaper: {
    BlueInk: {
      '8.5"x11" White 70#': "#10 Envelope",
      '8.5"x11" Yellow 60#': "#10 Envelope",
      '8.5"x13" White 70#': "#10 Envelope",
      '8.5"x11" White bottom perf 60#': "#10 Envelope",
      '8.5"x11" Two ply Carbonless': '6"x9.5" Envelope',
      '5.5"x8.5" White 80# cover': '6"x9.5" Envelope',
      '6"x11" White 100# cover': "No Envelope",
      '4"x8" White 80# cover': "Pink Granny"
    },
    HWL: {
      '8.5"x11" White 70#': "#10 Envelope",
      '8.5"x11" Yellow 60#': "#10 Envelope",
      '8.5"x13" White 70#': "#10 Envelope",
      '8.5"x11" White bottom perf 60#': "#10 Envelope",
      '8.5"x11" Two ply Carbonless': '6"x9.5" Envelope',
      '5.5"x8.5" White 80# cover': '6"x9.5" Envelope'
    },
    Saturation: {
      '8.75"x11.75" White 7pt cover': '6"x9.5" Envelope',
      '6"x11" White 100# cover': '6"x9.5" Envelope'
    }
  },

  aiVideoRule: {
    category: "BlueInk",
    paperFormat: '4"x8" White 80# cover',
    setupCostUnder10000: 600.00,
    perPieceCostAtOrAbove10000: 0.0600,
    customAiLikenessVideoFlat: 600.00
  }
};

const el = {
  quantity: document.getElementById("quantity"),
  category: document.getElementById("category"),
  paperFormat: document.getElementById("paperFormat"),
  productType: document.getElementById("productType"),
  autoEnvelope: document.getElementById("autoEnvelope"),
  dataList: document.getElementById("dataList"),
  colorOption: document.getElementById("colorOption"),
  fixedCharges: document.getElementById("fixedCharges"),
  aiVideoSection: document.getElementById("aiVideoSection"),
  addAiVideo: document.getElementById("addAiVideo"),
  addCustomAiLikenessVideo: document.getElementById("addCustomAiLikenessVideo"),
  calculateBtn: document.getElementById("calculateBtn"),
  resetBtn: document.getElementById("resetBtn"),
  status: document.getElementById("status"),
  costPerPiece: document.getElementById("costPerPiece"),
  totalCost: document.getElementById("totalCost"),
  notes: document.getElementById("notes"),
  breakdown: document.getElementById("breakdown")
};

function usd(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  }).format(value);
}

function findByName(items, name) {
  return items.find(item => item.name === name) || null;
}

function optionsByCategory(items, category) {
  return items.filter(item => item.categories.includes(category));
}

function populateSelect(selectElement, items, placeholder, includeSkip = false) {
  selectElement.innerHTML = "";

  const firstOption = document.createElement("option");
  firstOption.value = "";
  firstOption.textContent = includeSkip ? "Skip" : placeholder;
  selectElement.appendChild(firstOption);

  items.forEach(item => {
    const option = document.createElement("option");
    option.value = item.name || item;
    option.textContent = item.name || item;
    selectElement.appendChild(option);
  });

  selectElement.disabled = items.length === 0;
}

function renderCategories() {
  DATA.categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    el.category.appendChild(option);
  });
}

function updatePaperFormats() {
  const category = el.category.value;
  const papers = category ? optionsByCategory(DATA.paperFormats, category) : [];
  populateSelect(el.paperFormat, papers, "Select Paper Format", false);
  el.productType.innerHTML = '<option value="">Select Product Type</option>';
  el.productType.disabled = true;
  el.autoEnvelope.textContent = "Select Category and Paper Format";
  updateAiVideoVisibility();
}

function updateProductTypes() {
  const category = el.category.value;
  const paperFormat = el.paperFormat.value;

  const productTypes = DATA.productOptions?.[category]?.[paperFormat] || [];
  populateSelect(el.productType, productTypes, "Select Product Type", false);

  if (productTypes.length === 0) {
    el.productType.innerHTML = '<option value="">No Product Types Available</option>';
    el.productType.disabled = true;
  }
}

function updateAutoEnvelopeDisplay() {
  const category = el.category.value;
  const paperFormat = el.paperFormat.value;

  if (!category || !paperFormat) {
    el.autoEnvelope.textContent = "Select Category and Paper Format";
    return;
  }

  const envelope =
    DATA.autoEnvelopeByCategoryAndPaper?.[category]?.[paperFormat] || null;

  if (!envelope) {
    el.autoEnvelope.textContent = "No auto-envelope rule found";
    return;
  }

  el.autoEnvelope.textContent = envelope;
}

function updateDataLists() {
  const category = el.category.value;
  const items = category ? optionsByCategory(DATA.dataLists, category) : [];
  populateSelect(el.dataList, items, "Skip", true);
}

function updateColorOptions() {
  const category = el.category.value;
  const items = category ? optionsByCategory(DATA.colorOptions, category) : [];
  populateSelect(el.colorOption, items, "Skip", true);
}

function renderFixedCharges() {
  const category = el.category.value;
  const items = DATA.fixedCosts[category] || [];

  if (!category) {
    el.fixedCharges.innerHTML = "Select Category first";
    el.fixedCharges.classList.add("muted");
    return;
  }

  el.fixedCharges.classList.remove("muted");

  if (items.length === 0) {
    el.fixedCharges.innerHTML = "No fixed charges available";
    return;
  }

  el.fixedCharges.innerHTML = items
    .map(
      (item, index) => `
        <label class="checkbox-row">
          <input type="checkbox" value="${escapeHtml(item.name)}" data-index="${index}" />
          <span>${escapeHtml(item.name)} (${usd(item.cost)})</span>
        </label>
      `
    )
    .join("");
}

function updateAiVideoVisibility() {
  const show =
    el.category.value === DATA.aiVideoRule.category &&
    el.paperFormat.value === DATA.aiVideoRule.paperFormat;

  el.aiVideoSection.classList.toggle("hidden", !show);

  if (!show) {
    el.addAiVideo.checked = false;
    el.addCustomAiLikenessVideo.checked = false;
  }
}

function getSelectedFixedCharges() {
  const checked = el.fixedCharges.querySelectorAll('input[type="checkbox"]:checked');
  return Array.from(checked).map(input => input.value);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderNotes(notes, isError = false) {
  if (!notes.length) {
    el.notes.className = "notes";
    el.notes.textContent = "No notes.";
    return;
  }

  el.notes.className = isError ? "notes error" : "notes";
  el.notes.innerHTML = `<ul class="notes-list">${notes
    .map(note => `<li>${escapeHtml(note)}</li>`)
    .join("")}</ul>`;
}

function renderBreakdown(lines) {
  if (!lines.length) {
    el.breakdown.textContent = "No calculation yet.";
    return;
  }

  el.breakdown.innerHTML = lines
    .map(line => {
      const right = line.type === "money"
        ? usd(line.value)
        : escapeHtml(line.value);

      return `
        <div class="breakdown-item">
          <div>${escapeHtml(line.label)}</div>
          <div>${right}</div>
        </div>
      `;
    })
    .join("");
}

function resetResults() {
  el.status.textContent = "Waiting";
  el.costPerPiece.textContent = "$0.0000";
  el.totalCost.textContent = "$0.0000";
  renderNotes([]);
  renderBreakdown([]);
}

function resetForm() {
  el.quantity.value = "";
  el.category.value = "";
  updatePaperFormats();
  updateDataLists();
  updateColorOptions();
  renderFixedCharges();
  updateAutoEnvelopeDisplay();
  updateAiVideoVisibility();
  resetResults();
}

function calculate() {
  const quantity = Number(el.quantity.value);
  const category = el.category.value;
  const paperFormat = el.paperFormat.value;
  const productType = el.productType.value || null;
  const dataList = el.dataList.value || null;
  const colorOption = el.colorOption.value || null;
  const selectedFixedCharges = getSelectedFixedCharges();
  const addAiVideo = el.addAiVideo.checked;
  const addCustomAiLikenessVideo = el.addCustomAiLikenessVideo.checked;

  const notes = [];
  const breakdown = [];

  if (!quantity || quantity <= 0) {
    el.status.textContent = "ERROR";
    el.costPerPiece.textContent = "ERROR";
    el.totalCost.textContent = "ERROR";
    renderNotes(["Quantity is required before any calculations can happen."], true);
    renderBreakdown([]);
    return;
  }

  if (!category) {
    el.status.textContent = "ERROR";
    el.costPerPiece.textContent = "ERROR";
    el.totalCost.textContent = "ERROR";
    renderNotes(["Category is required."], true);
    renderBreakdown([]);
    return;
  }

  if (!paperFormat) {
    el.status.textContent = "ERROR";
    el.costPerPiece.textContent = "ERROR";
    el.totalCost.textContent = "ERROR";
    renderNotes(["Paper Format is required."], true);
    renderBreakdown([]);
    return;
  }

  const paperItem = findByName(DATA.paperFormats, paperFormat);
  if (!paperItem) {
    notes.push(`Paper Format was not found: ${paperFormat}`);
  } else if (paperItem.cost === null) {
    notes.push(`Missing cost for Paper Format: ${paperFormat}`);
  }

  const autoEnvelopeName =
    DATA.autoEnvelopeByCategoryAndPaper?.[category]?.[paperFormat] || null;

  let envelopeItem = null;
  if (autoEnvelopeName && autoEnvelopeName !== "No Envelope") {
    envelopeItem = findByName(DATA.envelopeTypes, autoEnvelopeName);
    if (!envelopeItem) {
      notes.push(`Auto Envelope was not found: ${autoEnvelopeName}`);
    } else if (envelopeItem.cost === null) {
      notes.push(`Missing cost for Envelope Type: ${autoEnvelopeName}`);
    }
  }

  let dataItem = null;
  if (dataList) {
    dataItem = findByName(DATA.dataLists, dataList);
    if (!dataItem) {
      notes.push(`Data List was not found: ${dataList}`);
    } else if (dataItem.cost === null) {
      notes.push(`Missing cost for Data List: ${dataList}`);
    }
  }

  let colorItem = null;
  if (colorOption) {
    colorItem = findByName(DATA.colorOptions, colorOption);
    if (!colorItem) {
      notes.push(`Color Option was not found: ${colorOption}`);
    } else if (colorItem.cost === null) {
      notes.push(`Missing cost for Color Option: ${colorOption}`);
    }
  }

  const fixedCostItems = [];
  for (const fixedName of selectedFixedCharges) {
    const item = (DATA.fixedCosts[category] || []).find(fc => fc.name === fixedName);
    if (!item) {
      notes.push(`Fixed Cost was not found: ${fixedName}`);
    } else if (item.cost === null) {
      notes.push(`Missing cost for Fixed Cost: ${fixedName}`);
    } else {
      fixedCostItems.push(item);
    }
  }

  if (notes.length > 0) {
    el.status.textContent = "ERROR";
    el.costPerPiece.textContent = "ERROR";
    el.totalCost.textContent = "ERROR";
    renderNotes(notes, true);
    renderBreakdown([]);
    return;
  }

  let costPerPiece = 0;
  let extraFlatTotal = 0;

  costPerPiece += paperItem.cost;
  breakdown.push({ label: `Paper Format: ${paperFormat}`, value: paperItem.cost, type: "money" });

  if (productType) {
    breakdown.push({ label: "Product Type", value: productType, type: "text" });
  }

  if (autoEnvelopeName === "No Envelope") {
    breakdown.push({ label: "Auto Envelope", value: "No Envelope", type: "text" });
  } else if (envelopeItem) {
    costPerPiece += envelopeItem.cost;
    breakdown.push({ label: `Auto Envelope: ${autoEnvelopeName}`, value: envelopeItem.cost, type: "money" });
  } else {
    breakdown.push({ label: "Auto Envelope", value: "No auto-envelope rule", type: "text" });
  }

  if (dataItem) {
    costPerPiece += dataItem.cost;
    breakdown.push({ label: `Data List: ${dataList}`, value: dataItem.cost, type: "money" });
  }

  if (colorItem) {
    costPerPiece += colorItem.cost;
    breakdown.push({ label: `Color Option: ${colorOption}`, value: colorItem.cost, type: "money" });
  }

  fixedCostItems.forEach(item => {
    costPerPiece += item.cost;
    breakdown.push({ label: `Fixed Cost: ${item.name}`, value: item.cost, type: "money" });
  });

  if (
    addAiVideo &&
    category === DATA.aiVideoRule.category &&
    paperFormat === DATA.aiVideoRule.paperFormat
  ) {
    if (quantity >= 10000) {
      costPerPiece += DATA.aiVideoRule.perPieceCostAtOrAbove10000;
      breakdown.push({
        label: "AI Video",
        value: DATA.aiVideoRule.perPieceCostAtOrAbove10000,
        type: "money"
      });
    } else {
      extraFlatTotal += DATA.aiVideoRule.setupCostUnder10000;
      breakdown.push({
        label: "AI Video Setup Flat",
        value: DATA.aiVideoRule.setupCostUnder10000,
        type: "money"
      });
    }
  }

  if (addCustomAiLikenessVideo) {
    extraFlatTotal += DATA.aiVideoRule.customAiLikenessVideoFlat;
    breakdown.push({
      label: "Custom AI Likeness Video Flat",
      value: DATA.aiVideoRule.customAiLikenessVideoFlat,
      type: "money"
    });
  }

  const totalCost = costPerPiece * quantity + extraFlatTotal;

  el.status.textContent = "OK";
  el.costPerPiece.textContent = usd(costPerPiece);
  el.totalCost.textContent = usd(totalCost);

  renderNotes([], false);
  renderBreakdown(breakdown);
}

el.category.addEventListener("change", () => {
  updatePaperFormats();
  updateDataLists();
  updateColorOptions();
  renderFixedCharges();
  updateAutoEnvelopeDisplay();
});

el.paperFormat.addEventListener("change", () => {
  updateProductTypes();
  updateAutoEnvelopeDisplay();
  updateAiVideoVisibility();
});

el.calculateBtn.addEventListener("click", calculate);
el.resetBtn.addEventListener("click", resetForm);

renderCategories();
resetForm();