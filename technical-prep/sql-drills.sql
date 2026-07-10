-- Mission Analytics SQL Drills
-- Adapt table and column names as needed.

-- Assumed tables:
-- telemetry_events(asset_id, event_id, event_time, received_time, metric_name, metric_value, software_version)
-- alerts(alert_id, asset_id, created_at, severity, alert_type)
-- maintenance(asset_id, maintenance_time, maintenance_type)
-- detections(detection_id, sensor_id, object_id, detected_at, confidence)

-- 1. Latest telemetry event for every asset and metric.
WITH ranked AS (
    SELECT
        asset_id,
        metric_name,
        event_time,
        metric_value,
        ROW_NUMBER() OVER (
            PARTITION BY asset_id, metric_name
            ORDER BY event_time DESC
        ) AS rn
    FROM telemetry_events
)
SELECT asset_id, metric_name, event_time, metric_value
FROM ranked
WHERE rn = 1;

-- 2. Detect duplicate event IDs.
SELECT
    event_id,
    COUNT(*) AS occurrence_count
FROM telemetry_events
GROUP BY event_id
HAVING COUNT(*) > 1;

-- 3. Find events received more than five minutes late.
SELECT
    asset_id,
    event_id,
    event_time,
    received_time,
    received_time - event_time AS delivery_delay
FROM telemetry_events
WHERE received_time > event_time + INTERVAL '5 minutes';

-- 4. Rolling five-event average by asset and metric.
SELECT
    asset_id,
    metric_name,
    event_time,
    metric_value,
    AVG(metric_value) OVER (
        PARTITION BY asset_id, metric_name
        ORDER BY event_time
        ROWS BETWEEN 4 PRECEDING AND CURRENT ROW
    ) AS rolling_avg_5
FROM telemetry_events;

-- 5. Critical alerts without maintenance in the following 24 hours.
SELECT
    a.alert_id,
    a.asset_id,
    a.created_at
FROM alerts a
LEFT JOIN maintenance m
    ON m.asset_id = a.asset_id
   AND m.maintenance_time >= a.created_at
   AND m.maintenance_time < a.created_at + INTERVAL '24 hours'
WHERE a.severity = 'critical'
  AND m.asset_id IS NULL;

-- Verbal checklist before writing SQL:
-- 1. What is the grain of each table?
-- 2. Which rows must be preserved?
-- 3. Can the join multiply records?
-- 4. How should nulls behave?
-- 5. What validates the result?
