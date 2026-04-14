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
      { name: "Post-it Note", cost: 0.0275 },
      { name: "Business Card", cost: 0.0300 }
    ],
    HWL: [
      { name: "Operating", cost: 0.0500 },
      { name: "Prepress & Fulfillment", cost: 0.1000 },
      { name: "Ship to 1 SCF", cost: 0.0400 },
      { name: "Postage", cost: 0.3550 },
      { name: "Machine", cost: 0.1000 },
      { name: "Envelope Labor", cost: 0.0415 },
      { name: "HWL Long Form Labor", cost: 0.1250 },
      { name: "Post-it w/ Labor", cost: 0.0490 },
      { name: "Business Card", cost: 0.0300 }
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

  autoIncludedFixedCostsByCategory: {
    HWL: [
      "Operating",
      "Prepress & Fulfillment",
      "Ship to 1 SCF",
      "Machine",
      "Postage"
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
    setupCostUnder10000: 600.0,
    perPieceCostAtOrAbove10000: 0.06,
    customAiLikenessVideoFlat: 600.0
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
  status: document.getElementById("status"),
  costPerPiece: document.getElementById("costPerPiece"),
  totalCost: document.getElementById("totalCost"),
  notes: document.getElementById("notes")
};

function usd4(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  }).format(value);
}

function usd2(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
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

function getAutoIncludedFixedCosts(category) {
  return DATA.autoIncludedFixedCostsByCategory[category] || [];
}

function getSelectableFixedCosts(category) {
  const allFixedCosts = DATA.fixedCosts[category] || [];
  const autoIncluded = getAutoIncludedFixedCosts(category);
  return allFixedCosts.filter(item => !autoIncluded.includes(item.name));
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

  const envelope = DATA.autoEnvelopeByCategoryAndPaper?.[category]?.[paperFormat] || null;
  el.autoEnvelope.textContent = envelope || "No auto-envelope rule found";
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
  const items = getSelectableFixedCosts(category);

  if (!category) {
    el.fixedCharges.innerHTML = "Select Category first";
    return;
  }

  if (items.length === 0) {
    el.fixedCharges.innerHTML = "No optional fixed charges available";
    return;
  }

  el.fixedCharges.innerHTML = items.map(item => `
    <label class="checkbox-row">
      <input type="checkbox" value="${item.name}" />
      <span>${item.name} (${usd4(item.cost)})</span>
    </label>
  `).join("");
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

function renderNoteLines(lines) {
  if (!lines.length) {
    el.notes.textContent = "No notes.";
    return;
  }

  el.notes.innerHTML = lines.map(line => `<div>${line}</div>`).join("");
}

function setError(notes) {
  el.status.textContent = "ERROR";
  el.costPerPiece.textContent = "ERROR";
  el.totalCost.textContent = "ERROR";
  renderNoteLines(notes);
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

  const noteLines = [];

  if (!quantity || quantity <= 0) {
    setError(["Quantity is required before any calculations can happen."]);
    return;
  }

  if (!category) {
    setError(["Category is required."]);
    return;
  }

  if (!paperFormat) {
    setError(["Paper Format is required."]);
    return;
  }

  const paperItem = findByName(DATA.paperFormats, paperFormat);
  if (!paperItem || paperItem.cost === null) {
    setError([`Missing cost for Paper Format: ${paperFormat}`]);
    return;
  }

  let costPerPiece = paperItem.cost;
  let extraFlatTotal = 0;

  noteLines.push(`Paper Format: ${paperFormat} = ${usd4(paperItem.cost)} per piece`);

  if (productType) {
    noteLines.push(`Product Type: ${productType}`);
  }

  const autoEnvelopeName = DATA.autoEnvelopeByCategoryAndPaper?.[category]?.[paperFormat] || null;

  if (autoEnvelopeName === "No Envelope") {
    noteLines.push("Auto Envelope: No Envelope");
  } else if (autoEnvelopeName) {
    const envelopeItem = findByName(DATA.envelopeTypes, autoEnvelopeName);
    if (!envelopeItem || envelopeItem.cost === null) {
      setError([`Missing cost for Envelope Type: ${autoEnvelopeName}`]);
      return;
    }
    costPerPiece += envelopeItem.cost;
    noteLines.push(`Auto Envelope: ${autoEnvelopeName} = ${usd4(envelopeItem.cost)} per piece`);
  } else {
    noteLines.push("Auto Envelope: No auto-envelope rule found");
  }

  if (dataList) {
    const dataItem = findByName(DATA.dataLists, dataList);
    if (!dataItem || dataItem.cost === null) {
      setError([`Missing cost for Data List: ${dataList}`]);
      return;
    }
    costPerPiece += dataItem.cost;
    noteLines.push(`Data List: ${dataList} = ${usd4(dataItem.cost)} per piece`);
  }

  if (colorOption) {
    const colorItem = findByName(DATA.colorOptions, colorOption);
    if (!colorItem || colorItem.cost === null) {
      setError([`Missing cost for Color Option: ${colorOption}`]);
      return;
    }
    costPerPiece += colorItem.cost;
    noteLines.push(`Color Option: ${colorOption} = ${usd4(colorItem.cost)} per piece`);
  }

  const autoIncludedFixedCosts = getAutoIncludedFixedCosts(category);
  autoIncludedFixedCosts.forEach(fixedName => {
    const item = (DATA.fixedCosts[category] || []).find(fc => fc.name === fixedName);
    if (item) {
      costPerPiece += item.cost;
      noteLines.push(`Fixed Cost (Auto Included): ${item.name} = ${usd4(item.cost)} per piece`);
    }
  });

  selectedFixedCharges.forEach(fixedName => {
    const item = (DATA.fixedCosts[category] || []).find(fc => fc.name === fixedName);
    if (item) {
      costPerPiece += item.cost;
      noteLines.push(`Fixed Cost: ${item.name} = ${usd4(item.cost)} per piece`);
    }
  });

  if (
    category === "HWL" &&
    selectedFixedCharges.includes("HWL Long Form Labor") &&
    selectedFixedCharges.includes("Envelope Labor")
  ) {
    costPerPiece -= 0.02;
    noteLines.push(`HWL Discount: HWL Long Form Labor + Envelope Labor = -${usd4(0.02)} per piece`);
  }

  if (
    category === "HWL" &&
    selectedFixedCharges.includes("Post-it w/ Labor") &&
    selectedFixedCharges.includes("Envelope Labor")
  ) {
    costPerPiece -= 0.02;
    noteLines.push(`HWL Discount: Post-it w/ Labor + Envelope Labor = -${usd4(0.02)} per piece`);
  }

  if (
    addAiVideo &&
    category === DATA.aiVideoRule.category &&
    paperFormat === DATA.aiVideoRule.paperFormat
  ) {
    if (quantity >= 10000) {
      costPerPiece += DATA.aiVideoRule.perPieceCostAtOrAbove10000;
      noteLines.push(`AI Video = ${usd4(DATA.aiVideoRule.perPieceCostAtOrAbove10000)} per piece`);
    } else {
      extraFlatTotal += DATA.aiVideoRule.setupCostUnder10000;
      noteLines.push(`AI Video Setup Flat = ${usd2(DATA.aiVideoRule.setupCostUnder10000)}`);
    }
  }

  if (addCustomAiLikenessVideo) {
    extraFlatTotal += DATA.aiVideoRule.customAiLikenessVideoFlat;
    noteLines.push(`Custom AI Likeness Video Flat = ${usd2(DATA.aiVideoRule.customAiLikenessVideoFlat)}`);
  }

  const rawTotalCost = (costPerPiece * quantity) + extraFlatTotal;
  const roundedTotalCost = Math.round(rawTotalCost);

  el.status.textContent = "OK";
  el.costPerPiece.textContent = usd4(costPerPiece);
  el.totalCost.textContent = usd2(roundedTotalCost);
  renderNoteLines(noteLines);
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

renderCategories();
updatePaperFormats();
updateDataLists();
updateColorOptions();
renderFixedCharges();