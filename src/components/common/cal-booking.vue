<template>
  <div id="my-cal-inline"></div>
</template>

<script setup lang="ts">
import { onMounted, defineProps } from 'vue'

type CalFunction = {
  (...args: unknown[]): void;
  q: unknown[];
  ns?: Record<string, any>;
  loaded?: boolean;
}

const props = defineProps<{
  bookingType: 'free' | 'paid'
}>()

const duration = props.bookingType === 'free' ? 'justany-itoua/15min' : 'justany-itoua/60min'
const eventSlug = props.bookingType === 'free' ? 'justany-itoua/15min' : 'justany-itoua/60min'

onMounted(() => {
  (function (C: Window, A: string, L: string) {
    let p = function (a: CalFunction, ar: IArguments | unknown[]) {
      if (!a.q) a.q = [];
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal as CalFunction;
      let ar = arguments;
      if (cal && !cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api as CalFunction, arguments); } as CalFunction;
        api.q = [];
        const namespace = ar[1] as string;
        if (cal && namespace) {
          cal.ns = cal.ns || {};
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace] as CalFunction, ar);
          p(cal, ["initNamespace", namespace]);
        }
        return;
      }
      if (cal) p(cal, ar);
    } as CalFunction;
  })(window, "https://app.cal.com/embed/embed.js", "init");

  if (window.Cal) {
    window.Cal("init", duration, { origin: "https://cal.com" });

    if (window.Cal.ns && typeof window.Cal.ns[duration] === 'function') {
      (window.Cal.ns[duration])("inline", {
        elementOrSelector: "#my-cal-inline",
        config: { "layout": "month_view" },
        calLink: eventSlug,
      });

      (window.Cal.ns[duration])("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "theme": "auto",
        "hideBranding": true,
      });
    }
  }
})
</script>

<style scoped></style>
