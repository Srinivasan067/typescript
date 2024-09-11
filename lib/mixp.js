var _a;
import mixpanel from 'mixpanel-browser';
mixpanel.init((_a = process.env["NEXT_PUBLIC_MIXPANEL_TOKEN"]) !== null && _a !== void 0 ? _a : '', {
    api_host: 'https://mp.allcaps.ai',
    persistence: 'localStorage',
    ignore_dnt: true,
});
var collectPerfMetrics = process.env["NEXT_PUBLIC_COLLECT_LATENCY"] === "true";
export function mixp_track(event, properties) {
    if (!collectPerfMetrics)
        return;
    mixpanel.track(event, properties, { send_immediately: true });
}
