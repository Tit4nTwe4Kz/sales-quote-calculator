from __future__ import annotations

from dataclasses import dataclass
from typing import Any

from catalog import (
    AI_VIDEO_RULE,
    AUTO_ENVELOPE_BY_CATEGORY_AND_PAPER,
    CATEGORIES,
    COLOR_OPTIONS,
    DATA_LISTS,
    ENVELOPE_TYPES,
    FIXED_COSTS,
    PAPER_FORMATS,
    PRODUCT_OPTIONS,
)


@dataclass
class QuoteResult:
    status: str
    cost_per_piece: float | None
    total_cost: float | None
    notes: list[str]
    breakdown: list[tuple[str, float | str]]


def usd(value: float) -> str:
    return f"${value:,.4f}"


def prompt_int(prompt: str) -> int:
    while True:
        raw = input(prompt).strip()
        if not raw:
            print("Quantity is required.")
            continue
        try:
            value = int(raw)
            if value <= 0:
                print("Enter a whole number greater than 0.")
                continue
            return value
        except ValueError:
            print("Enter a valid whole number.")


def prompt_menu(title: str, options: list[str], allow_skip: bool = False) -> str | None:
    print(f"\n{title}")
    indexed = list(options)
    if allow_skip:
        indexed = ["Skip"] + indexed

    for i, option in enumerate(indexed, start=1):
        print(f"{i}. {option}")

    while True:
        raw = input("Choose one number: ").strip()
        try:
            choice = int(raw)
            if 1 <= choice <= len(indexed):
                selected = indexed[choice - 1]
                if allow_skip and selected == "Skip":
                    return None
                return selected
            print("That number is not in the list.")
        except ValueError:
            print("Enter a valid number.")


def prompt_multi_select(title: str, options: list[dict[str, Any]]) -> list[str]:
    print(f"\n{title}")
    print("Select one or more by typing numbers separated by commas.")
    print("Example: 1,3,5")
    print("Press Enter with nothing typed to select none.\n")

    for i, item in enumerate(options, start=1):
        print(f'{i}. {item["name"]} ({usd(item["cost"])})')

    while True:
        raw = input("\nChoose fixed charges: ").strip()

        if raw == "":
            return []

        parts = [part.strip() for part in raw.split(",") if part.strip()]

        try:
            numbers = [int(part) for part in parts]
        except ValueError:
            print("Use only numbers separated by commas, like 1,2,4")
            continue

        if len(set(numbers)) != len(numbers):
            print("Do not repeat numbers.")
            continue

        if not all(1 <= number <= len(options) for number in numbers):
            print("One or more numbers are not in the list.")
            continue

        return [options[number - 1]["name"] for number in numbers]


def prompt_yes_no(prompt: str) -> bool:
    while True:
        raw = input(f"{prompt} (y/n): ").strip().lower()
        if raw in {"y", "yes"}:
            return True
        if raw in {"n", "no"}:
            return False
        print("Please type y or n.")


def filter_by_category(items: list[dict[str, Any]], category: str) -> list[dict[str, Any]]:
    return [item for item in items if category in item["categories"]]


def get_item_by_name(items: list[dict[str, Any]], name: str) -> dict[str, Any]:
    for item in items:
        if item["name"] == name:
            return item
    raise ValueError(f"Item not found: {name}")


def get_auto_envelope(category: str, paper_format: str) -> str | None:
    return AUTO_ENVELOPE_BY_CATEGORY_AND_PAPER.get(category, {}).get(paper_format)


def calculate_quote(
    quantity: int,
    category: str,
    paper_format: str,
    product_type: str | None,
    data_list: str | None,
    color_option: str | None,
    selected_fixed_costs: list[str],
    add_ai_video: bool,
    add_custom_ai_likeness_video: bool,
) -> QuoteResult:
    notes: list[str] = []
    breakdown: list[tuple[str, float | str]] = []

    paper_item = get_item_by_name(PAPER_FORMATS, paper_format)
    if paper_item["cost"] is None:
        notes.append(f"Missing cost for Paper Format: {paper_format}")

    auto_envelope_name = get_auto_envelope(category, paper_format)

    if data_list:
        data_item = get_item_by_name(DATA_LISTS, data_list)
        if data_item["cost"] is None:
            notes.append(f"Missing cost for Data List: {data_list}")
    else:
        data_item = None

    if color_option:
        color_item = get_item_by_name(COLOR_OPTIONS, color_option)
        if color_item["cost"] is None:
            notes.append(f"Missing cost for Color Option: {color_option}")
    else:
        color_item = None

    envelope_item = None
    if auto_envelope_name and auto_envelope_name != "No Envelope":
        envelope_item = get_item_by_name(ENVELOPE_TYPES, auto_envelope_name)
        if envelope_item["cost"] is None:
            notes.append(f"Missing cost for Envelope Type: {auto_envelope_name}")

    if notes:
        return QuoteResult(
            status="ERROR",
            cost_per_piece=None,
            total_cost=None,
            notes=notes,
            breakdown=[],
        )

    running_cpp = 0.0

    running_cpp += paper_item["cost"]
    breakdown.append((f"Paper Format: {paper_format}", paper_item["cost"]))

    if product_type:
        breakdown.append((f"Product Type: {product_type}", "selected"))

    if auto_envelope_name == "No Envelope":
        breakdown.append(("Auto Envelope: No Envelope", "selected"))
    elif envelope_item:
        running_cpp += envelope_item["cost"]
        breakdown.append((f"Auto Envelope: {auto_envelope_name}", envelope_item["cost"]))
    else:
        breakdown.append(("Auto Envelope: None", "selected"))

    if data_item:
        running_cpp += data_item["cost"]
        breakdown.append((f"Data List: {data_list}", data_item["cost"]))

    if color_item:
        running_cpp += color_item["cost"]
        breakdown.append((f"Color Option: {color_option}", color_item["cost"]))

    for fixed_name in selected_fixed_costs:
        fixed_item = next(item for item in FIXED_COSTS[category] if item["name"] == fixed_name)
        running_cpp += fixed_item["cost"]
        breakdown.append((f"Fixed Cost: {fixed_name}", fixed_item["cost"]))

    extra_flat_total = 0.0

    if (
        add_ai_video
        and category == AI_VIDEO_RULE["category"]
        and paper_format == AI_VIDEO_RULE["paper_format"]
    ):
        if quantity >= 10000:
            running_cpp += AI_VIDEO_RULE["per_piece_cost_at_or_above_10000"]
            breakdown.append(("AI Video", AI_VIDEO_RULE["per_piece_cost_at_or_above_10000"]))
        else:
            extra_flat_total += AI_VIDEO_RULE["setup_cost_under_10000"]
            breakdown.append(("AI Video Setup Flat", AI_VIDEO_RULE["setup_cost_under_10000"]))

    if add_custom_ai_likeness_video:
        extra_flat_total += AI_VIDEO_RULE["custom_ai_likeness_video_flat"]
        breakdown.append(("Custom AI Likeness Video Flat", AI_VIDEO_RULE["custom_ai_likeness_video_flat"]))

    total_cost = (running_cpp * quantity) + extra_flat_total

    return QuoteResult(
        status="OK",
        cost_per_piece=running_cpp,
        total_cost=total_cost,
        notes=[],
        breakdown=breakdown,
    )


def main() -> None:
    print("\nSales Quote Calculator\n")

    quantity = prompt_int("Enter quantity: ")

    category = prompt_menu("Select Category", CATEGORIES)
    assert category is not None

    category_papers = filter_by_category(PAPER_FORMATS, category)
    paper_format = prompt_menu(
        "Select Paper Format",
        [item["name"] for item in category_papers],
    )
    assert paper_format is not None

    product_options = PRODUCT_OPTIONS.get(category, {}).get(paper_format, [])
    product_type = None
    if product_options:
        product_type = prompt_menu("Select Product Type", product_options, allow_skip=False)

    auto_envelope_name = get_auto_envelope(category, paper_format)
    print("\nEnvelope Selection")
    if auto_envelope_name is None:
        print("No auto-envelope rule found for this selection.")
    elif auto_envelope_name == "No Envelope":
        print("Auto-selected envelope: No Envelope")
    else:
        print(f"Auto-selected envelope: {auto_envelope_name}")

    category_data = filter_by_category(DATA_LISTS, category)
    data_list = prompt_menu(
        "Select Data List",
        [item["name"] for item in category_data],
        allow_skip=True,
    )

    category_colors = filter_by_category(COLOR_OPTIONS, category)
    color_option = prompt_menu(
        "Select Simplex/Duplex Color",
        [item["name"] for item in category_colors],
        allow_skip=True,
    )

    selected_fixed_costs = prompt_multi_select(
        "Fixed Charges",
        FIXED_COSTS[category],
    )

    add_ai_video = False
    add_custom_ai_likeness_video = False

    if category == "BlueInk" and paper_format == '4"x8" White 80# cover':
        add_ai_video = prompt_yes_no('Add "AI Video"?')
        add_custom_ai_likeness_video = prompt_yes_no('Add "Custom AI Likeness Video" flat $600?')

    input('\nPress Enter to "Calculate Cost"...')

    result = calculate_quote(
        quantity=quantity,
        category=category,
        paper_format=paper_format,
        product_type=product_type,
        data_list=data_list,
        color_option=color_option,
        selected_fixed_costs=selected_fixed_costs,
        add_ai_video=add_ai_video,
        add_custom_ai_likeness_video=add_custom_ai_likeness_video,
    )

    print("\n========== RESULT ==========")
    print(f"Status: {result.status}")

    if result.status == "ERROR":
        print("Cost Per Piece: ERROR")
        print("Total Cost: ERROR")
        print("Notes:")
        for note in result.notes:
            print(f"- {note}")
        return

    print(f"Cost Per Piece: {usd(result.cost_per_piece or 0.0)}")
    print(f"Total Cost: {usd(result.total_cost or 0.0)}")

    print("\nBreakdown:")
    for label, value in result.breakdown:
        if isinstance(value, str):
            print(f"- {label}")
        elif value < 10:
            print(f"- {label}: {usd(value)} per piece")
        else:
            print(f"- {label}: {usd(value)}")


if __name__ == "__main__":
    main()