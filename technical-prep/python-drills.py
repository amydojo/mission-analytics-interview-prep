"""Mission analytics phone-screen Python drills.

These are deliberately practical: parsing events, validating records, deduplicating
retries, and calculating operational summaries. Run with Python 3.11+.
"""

from __future__ import annotations

from collections import defaultdict
from dataclasses import dataclass
from datetime import datetime, timezone
from typing import Any, Iterable


@dataclass(frozen=True)
class TelemetryEvent:
    event_id: str
    asset_id: str
    event_time: datetime
    metric_name: str
    metric_value: float
    software_version: str | None = None


def parse_timestamp(value: str) -> datetime:
    """Parse an ISO-8601 timestamp and normalize it to UTC."""
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    if parsed.tzinfo is None:
        raise ValueError("Timestamp must include a timezone")
    return parsed.astimezone(timezone.utc)


def parse_event(payload: dict[str, Any]) -> TelemetryEvent:
    """Validate and parse one raw telemetry payload.

    Interview discussion:
    - Which fields are required?
    - Should malformed records be rejected or quality-flagged?
    - How should schema versions be handled?
    """
    required = {"event_id", "asset_id", "event_time", "metric_name", "metric_value"}
    missing = required.difference(payload)
    if missing:
        raise ValueError(f"Missing required fields: {sorted(missing)}")

    metric_value = float(payload["metric_value"])
    return TelemetryEvent(
        event_id=str(payload["event_id"]),
        asset_id=str(payload["asset_id"]),
        event_time=parse_timestamp(str(payload["event_time"])),
        metric_name=str(payload["metric_name"]),
        metric_value=metric_value,
        software_version=(
            str(payload["software_version"])
            if payload.get("software_version") is not None
            else None
        ),
    )


def deduplicate_events(events: Iterable[TelemetryEvent]) -> tuple[list[TelemetryEvent], int]:
    """Keep the first event for each stable event ID and count duplicates."""
    seen: set[str] = set()
    unique: list[TelemetryEvent] = []
    duplicate_count = 0

    for event in events:
        if event.event_id in seen:
            duplicate_count += 1
            continue
        seen.add(event.event_id)
        unique.append(event)

    return unique, duplicate_count


def latest_by_asset_and_metric(
    events: Iterable[TelemetryEvent],
) -> dict[tuple[str, str], TelemetryEvent]:
    """Return the newest event for each asset and metric."""
    latest: dict[tuple[str, str], TelemetryEvent] = {}

    for event in events:
        key = (event.asset_id, event.metric_name)
        current = latest.get(key)
        if current is None or event.event_time > current.event_time:
            latest[key] = event

    return latest


def find_outliers_by_asset(
    events: Iterable[TelemetryEvent], threshold: float
) -> dict[str, list[TelemetryEvent]]:
    """Group events whose absolute metric value exceeds a supplied threshold."""
    outliers: dict[str, list[TelemetryEvent]] = defaultdict(list)
    for event in events:
        if abs(event.metric_value) > threshold:
            outliers[event.asset_id].append(event)
    return dict(outliers)


def main() -> None:
    raw_events = [
        {
            "event_id": "evt-1",
            "asset_id": "asset-a",
            "event_time": "2026-07-10T12:00:00Z",
            "metric_name": "temperature_c",
            "metric_value": 42.0,
            "software_version": "1.4.2",
        },
        {
            "event_id": "evt-1",  # retry duplicate
            "asset_id": "asset-a",
            "event_time": "2026-07-10T12:00:00Z",
            "metric_name": "temperature_c",
            "metric_value": 42.0,
            "software_version": "1.4.2",
        },
        {
            "event_id": "evt-2",
            "asset_id": "asset-a",
            "event_time": "2026-07-10T12:05:00Z",
            "metric_name": "temperature_c",
            "metric_value": 85.0,
            "software_version": "1.4.2",
        },
    ]

    parsed: list[TelemetryEvent] = []
    errors: list[tuple[dict[str, Any], str]] = []

    for payload in raw_events:
        try:
            parsed.append(parse_event(payload))
        except (TypeError, ValueError) as exc:
            errors.append((payload, str(exc)))

    unique, duplicates = deduplicate_events(parsed)
    latest = latest_by_asset_and_metric(unique)
    outliers = find_outliers_by_asset(unique, threshold=80.0)

    print(f"valid={len(parsed)} errors={len(errors)} duplicates={duplicates}")
    print("latest:", latest)
    print("outliers:", outliers)


if __name__ == "__main__":
    main()


# Additional verbal drills
# 1. Modify deduplication to keep the latest received record rather than the first.
# 2. Handle conflicting records with the same event_id but different payloads.
# 3. Process a file too large to fit in memory.
# 4. Add schema-version-aware parsing.
# 5. Write unit tests for malformed timestamps, null values, and duplicate IDs.
# 6. Explain time and space complexity for each function.
