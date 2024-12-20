<template>
  <div id="my-cal-inline"></div>
</template>

<script setup lang="ts">
import { onMounted, defineProps } from 'vue'

const props = defineProps<{
  bookingType: 'free' | 'paid'
}>()

const duration = props.bookingType === 'free' ? 'justany-itoua/15min' : 'justany-itoua/60min'
const eventSlug = props.bookingType === 'free' ? 'justany-itoua/15min' : 'justany-itoua/60min'

onMounted(() => {
  (function (C: any, A: any, L: any) {
    let p = function (a: any, ar: any) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [] as any[];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  // Safely initialize Cal
  window.Cal?.("init", duration, { origin: "https://cal.com" });

  // Safely configure inline calendar
  window.Cal?.ns?.[duration]("inline", {
    elementOrSelector: "#my-cal-inline",
    config: { "layout": "month_view" },
    calLink: eventSlug,
  });

  // Safely configure UI settings
  window.Cal?.ns?.[duration]("ui", {
    "hideEventTypeDetails": false,
    "layout": "month_view",
    "theme": "auto",
    "hideBranding": true,
  });
})
</script>

<style scoped>

</style>
