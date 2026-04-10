from __future__ import annotations

CATEGORIES = ["BlueInk", "HWL", "Saturation"]

PAPER_FORMATS = [
    {
        "name": '8.5"x11" White 70#',
        "cost": 0.0382,
        "categories": ["BlueInk", "HWL"],
    },
    {
        "name": '8.5"x11" Yellow 60#',
        "cost": 0.0248,
        "categories": ["BlueInk", "HWL"],
    },
    {
        "name": '8.5"x13" White 70#',
        "cost": 0.0464,
        "categories": ["BlueInk", "HWL"],
    },
    {
        "name": '8.5"x11" White bottom perf 60#',
        "cost": None,
        "categories": ["BlueInk", "HWL"],
    },
    {
        "name": '8.5"x11" Two ply Carbonless',
        "cost": None,
        "categories": ["BlueInk", "HWL"],
    },
    {
        "name": '5.5"x8.5" White 80# cover',
        "cost": 0.0334,
        "categories": ["BlueInk", "HWL"],
    },
    {
        "name": '8.75"x11.75" White 7pt cover',
        "cost": 0.0410,
        "categories": ["BlueInk", "Saturation"],
    },
    {
        "name": '6"x11" White 100# cover',
        "cost": None,
        "categories": ["BlueInk", "Saturation"],
    },
    {
        "name": '4"x8" White 80# cover',
        "cost": 0.0223,
        "categories": ["BlueInk"],
    },
]

DATA_LISTS = [
    {"name": "In-House", "cost": 0.0000, "categories": ["BlueInk", "HWL"]},
    {"name": "Conquest VIN", "cost": 0.1725, "categories": ["BlueInk", "HWL"]},
    {"name": "Name Only Saturation", "cost": 0.0100, "categories": ["Saturation"]},
    {"name": "Credit", "cost": 0.1208, "categories": ["BlueInk", "HWL"]},
    {"name": "Bankruptcy", "cost": 0.0690, "categories": ["BlueInk", "HWL"]},
]

ENVELOPE_TYPES = [
    {"name": "#10 Envelope", "cost": 0.0276, "categories": ["BlueInk", "HWL"]},
    {"name": '6"x9.5" Envelope', "cost": 0.0387, "categories": ["BlueInk", "HWL", "Saturation"]},
    {"name": "Pink Granny", "cost": 0.0670, "categories": ["BlueInk"]},
    {"name": "#10 Window Envelope", "cost": 0.0316, "categories": ["BlueInk", "HWL"]},
]

COLOR_OPTIONS = [
    {"name": "1/0 Color", "cost": 0.0110, "categories": ["BlueInk", "HWL"]},
    {"name": "4/0 Color", "cost": 0.0200, "categories": ["BlueInk", "HWL"]},
    {"name": "4/1 Color", "cost": 0.0310, "categories": ["BlueInk", "HWL"]},
    {"name": "4/4 Color", "cost": 0.0400, "categories": ["BlueInk", "HWL", "Saturation"]},
]

FIXED_COSTS = {
    "BlueInk": [
        {"name": "Operating", "cost": 0.0500},
        {"name": "Prepress & Fulfillment", "cost": 0.1000},
        {"name": "Ship to 1 SCF", "cost": 0.0400},
        {"name": "Postage", "cost": 0.3550},
        {"name": "Post-it Note", "cost": 0.0275},
    ],
    "HWL": [
        {"name": "Operating", "cost": 0.0500},
        {"name": "Prepress & Fulfillment", "cost": 0.1000},
        {"name": "Ship to 1 SCF", "cost": 0.0400},
        {"name": "Postage", "cost": 0.3550},
        {"name": "Machine", "cost": 0.1000},
        {"name": "Envelope Labor", "cost": 0.0415},
        {"name": "HWL Long Form Labor", "cost": 0.1250},
        {"name": "Post-it w/ Labor", "cost": 0.0490},
    ],
    "Saturation": [
        {"name": "Operating", "cost": 0.0500},
        {"name": "Prepress & Fulfillment", "cost": 0.1000},
        {"name": "Ship to 1 SCF", "cost": 0.0400},
        {"name": "Postage", "cost": 0.2450},
        {"name": "Envelope", "cost": 0.0387},
        {"name": "Name Only Saturation Data", "cost": 0.0110},
    ],
}

PRODUCT_OPTIONS = {
    "HWL": {
        '8.5"x11" White 70#': [
            '8.5 x 11 Bankruptcy Letter',
            '8.5 x 11 Email Buyback',
            '8.5 x 11 Email LLT',
            '8.5 x 11 White Letterhead with Envelope (With or without business card)',
            '8.5 x 11 BK Fresh Start Letter (no voucher for GA)',
            '8.5 x 11 Preapproval Letter (no voucher for GA)',
            '8.5 x 11 Loan Lease Termination Letter (no voucher for GA)',
        ],
        '8.5"x11" Yellow 60#': [
            '8.5 x 11 Yellow Letter with Oversized Business Card',
            '8.5 x 11 Yellow Letter with Envelope (With or without business card)',
        ],
        '8.5"x13" White 70#': [
            '8.5 x 13 BK Fresh Start Letter',
            '8.5 x 13 BK NOTICE',
            '8.5 x 13 Preapproval Letter',
            '8.5 x 13 Loan Lease Termination Letter',
        ],
        '8.5"x11" White bottom perf 60#': [
            '8.5 x 11 Faux Check Letter',
        ],
        '8.5"x11" Two ply Carbonless': [
            '8.5 x 11 Carbonless Letter',
        ],
        '5.5"x8.5" White 80# cover': [
            '5.5 x 8.5 Note Card W 6 x 9.5 Envelope - Elaine Font',
        ],
    },
    "BlueInk": {
        '8.5"x11" White 70#': [
            '8.5 x 11 Bankruptcy Letter',
            '8.5 x 11 Email Buyback',
            '8.5 x 11 Email LLT',
            '8.5 x 11 White Letterhead with Envelope (With or without business card)',
            '8.5 x 11 BK Fresh Start Letter (no voucher for GA)',
            '8.5 x 11 Preapproval Letter (no voucher for GA)',
            '8.5 x 11 Loan Lease Termination Letter (no voucher for GA)',
        ],
        '8.5"x11" Yellow 60#': [
            '8.5 x 11 Yellow Letter with Oversized Business Card',
            '8.5 x 11 Yellow Letter with Envelope (With or without business card)',
        ],
        '8.5"x13" White 70#': [
            '8.5 x 13 BK Fresh Start Letter',
            '8.5 x 13 BK NOTICE',
            '8.5 x 13 Preapproval Letter',
            '8.5 x 13 Loan Lease Termination Letter',
        ],
        '8.5"x11" White bottom perf 60#': [
            '8.5 x 11 Faux Check Letter',
        ],
        '8.5"x11" Two ply Carbonless': [
            '8.5 x 11 Carbonless Letter',
        ],
        '5.5"x8.5" White 80# cover': [
            '5.5 x 8.5 Note Card (With or without envelope (6 x 9.5))',
        ],
        '6"x11" White 100# cover': [
            '6 x 11 Service Postcard',
        ],
        '4"x8" White 80# cover': [
            '8.25 x 4.25 Hyper BlueInk Personalized NoteCard W AI Personal Offer',
        ],
    },
    "Saturation": {},
}

AUTO_ENVELOPE_BY_CATEGORY_AND_PAPER = {
    "BlueInk": {
        '8.5"x11" White 70#': "#10 Envelope",
        '8.5"x11" Yellow 60#': "#10 Envelope",
        '8.5"x13" White 70#': "#10 Envelope",
        '8.5"x11" White bottom perf 60#': "#10 Envelope",
        '8.5"x11" Two ply Carbonless': '6"x9.5" Envelope',
        '5.5"x8.5" White 80# cover': '6"x9.5" Envelope',
        '6"x11" White 100# cover': "No Envelope",
        '4"x8" White 80# cover': "Pink Granny",
    },
    "HWL": {
        '8.5"x11" White 70#': "#10 Envelope",
        '8.5"x11" Yellow 60#': "#10 Envelope",
        '8.5"x13" White 70#': "#10 Envelope",
        '8.5"x11" White bottom perf 60#': "#10 Envelope",
        '8.5"x11" Two ply Carbonless': '6"x9.5" Envelope',
        '5.5"x8.5" White 80# cover': '6"x9.5" Envelope',
    },
    "Saturation": {
        '8.75"x11.75" White 7pt cover': '6"x9.5" Envelope',
        '6"x11" White 100# cover': '6"x9.5" Envelope',
    },
}

AI_VIDEO_RULE = {
    "category": "BlueInk",
    "paper_format": '4"x8" White 80# cover',
    "setup_cost_under_10000": 600.00,
    "per_piece_cost_at_or_above_10000": 0.0600,
    "custom_ai_likeness_video_flat": 600.00,
}