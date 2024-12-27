const MICROLINK_API = "https://api.microlink.io";
const API_KEY = import.meta.env.VITE_MICROLINK_API_KEY;

export interface MicrolinkResponse {
  screenshot: {
    url: string;
  };
  meta: {
    title: string;
    description: string;
    image: {
      url: string;
    };
    logo: {
      url: string;
    };
    author: string;
    publisher: string;
    lang: string;
  };
  insights: {
    technologies: string[];
    lighthouse: {
      performance: number;
      accessibility: number;
      seo: number;
      bestPractices: number;
    };
  };
}

export interface ScreenshotOptions {
  element?: string; // Sélecteur CSS pour capturer un élément spécifique
  embed?: boolean; // Pour l'intégration HTML directe
  type?: "jpeg" | "png";
  quality?: number; // 0-100
  width?: number;
  height?: number;
  scaleFactor?: number;
  animations?: boolean;
}

// Types for Lighthouse options
export interface LighthouseOptions {
  output?: "json" | "html" | "csv";
  preset?:
    | "default"
    | "desktop"
    | "experimental"
    | "full"
    | "lr-desktop"
    | "lr-mobile"
    | "perf";
  onlyCategories?: string[];
}

// Types for Technology detection
export interface Technology {
  name: string;
  confidence: number;
  logo: string;
  url: string;
  categories: string[];
}

export interface MicrolinkOptions {
  device?: "desktop" | "tablet" | "mobile";
  width?: number;
  height?: number;
  insights?: {
    lighthouse?: boolean | LighthouseOptions;
    technologies?: boolean;
  };
  screenshot?: boolean | ScreenshotOptions;
}

const DEFAULT_OPTIONS: MicrolinkOptions = {
  device: "desktop",
  width: 1200,
  height: 630,
  insights: {
    technologies: true,
    lighthouse: true,
  },
  screenshot: {
    fullPage: false,
    overlay: true,
    waitFor: 2000,
    type: "jpeg",
    quality: 80,
  } as ScreenshotOptions,
};

export const getMicrolinkScreenshotUrl = (
  url: string,
  options: Partial<ScreenshotOptions> = {}
) => {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    "screenshot.type": options.type || "jpeg",
    "screenshot.quality": (options.quality || 80).toString(),
    embed: "screenshot.url",
  });

  if (options.element) params.append("screenshot.element", options.element);
  if (options.width)
    params.append("screenshot.width", options.width.toString());
  if (options.height)
    params.append("screenshot.height", options.height.toString());

  if (API_KEY) {
    params.append("apiKey", API_KEY);
  }

  // Utiliser l'URL directe de Microlink au lieu du proxy
  return `${MICROLINK_API}?${params}`;
};

const fetchMeta = async (_url: string, params: URLSearchParams) => {
  const metaParams = new URLSearchParams(params);
  metaParams.append("meta", "true");
  metaParams.append("screenshot", "false");
  metaParams.append("insights", "false");

  const response = await fetch(`${MICROLINK_API}?${metaParams}`);
  return response.ok ? response.json() : null;
};

const fetchInsights = async (url: string, params: URLSearchParams) => {
  const insightsParams = new URLSearchParams(params);
  insightsParams.append("meta", "false");
  insightsParams.append("screenshot", "false");
  insightsParams.append("insights", "true");

  const response = await fetch(`${MICROLINK_API}?${insightsParams}`);
  return response.ok ? response.json() : null;
};

const fetchScreenshot = async (url: string, params: URLSearchParams) => {
  const screenshotParams = new URLSearchParams(params);
  screenshotParams.append("meta", "false");
  screenshotParams.append("screenshot", "true");
  screenshotParams.append("insights", "false");

  const response = await fetch(`${MICROLINK_API}?${screenshotParams}`);
  return response.ok ? response.json() : null;
};

export const getMicrolinkData = async (
  url: string,
  options: Partial<MicrolinkOptions> = {}
) => {
  const mergedOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  try {
    const baseParams = new URLSearchParams({ url });
    // Ajoutez vos paramètres communs ici...

    // Exécuter les requêtes en parallèle
    const [metaResult, insightsResult, screenshotResult] =
      await Promise.allSettled([
        fetchMeta(url, baseParams),
        mergedOptions.insights
          ? fetchInsights(url, baseParams)
          : Promise.resolve(null),
        mergedOptions.screenshot
          ? fetchScreenshot(url, baseParams)
          : Promise.resolve(null),
      ]);

    // Combiner les résultats
    const combinedData: MicrolinkResponse = {
      meta:
        (metaResult.status === "fulfilled" && metaResult.value?.data?.meta) ||
        {},
      insights:
        (insightsResult.status === "fulfilled" &&
          insightsResult.value?.data?.insights) ||
        {},
      screenshot:
        (screenshotResult.status === "fulfilled" &&
          screenshotResult.value?.data?.screenshot) ||
        {},
    };

    // Vérifier si au moins une requête a réussi
    if (
      Object.keys(combinedData.meta).length === 0 &&
      Object.keys(combinedData.insights).length === 0 &&
      Object.keys(combinedData.screenshot).length === 0
    ) {
      throw new Error("Aucune donnée n'a pu être récupérée");
    }

    return combinedData;
  } catch (error) {
    console.error("Microlink fetch error:", error);
    return createFallbackResponse();
  }
};

const createFallbackResponse = () => ({
  screenshot: {
    url: "/images/fallback-preview.jpg",
  },
  meta: {
    title: "Aperçu non disponible",
    description: "Impossible de charger l'aperçu du site",
    image: { url: "/images/fallback-preview.jpg" },
    logo: { url: "" },
    author: "",
    publisher: "",
    lang: "",
  },
  insights: {
    technologies: [],
    lighthouse: {
      performance: 0,
      accessibility: 0,
      seo: 0,
      bestPractices: 0,
    },
  },
});
