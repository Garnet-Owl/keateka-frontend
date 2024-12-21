export const API_ENDPOINTS = {
  api: process.env.NEXT_PUBLIC_API_URL,
  ws: process.env.NEXT_PUBLIC_WS_URL,
  apiPrefix: process.env.NEXT_PUBLIC_API_V1_PREFIX,
} as const;

export const APP_CONFIG = {
  businessHours: {
    start: Number(process.env.NEXT_PUBLIC_BUSINESS_HOURS_START ?? 8),
    end: Number(process.env.NEXT_PUBLIC_BUSINESS_HOURS_END ?? 20),
  },
  pricing: {
    baseRate: Number(process.env.NEXT_PUBLIC_BASE_RATE_PER_HOUR ?? 500),
    serviceFee: Number(process.env.NEXT_PUBLIC_SERVICE_FEE_PERCENTAGE ?? 10),
    minDuration: Number(process.env.NEXT_PUBLIC_MIN_CLEANING_DURATION ?? 60),
  },
} as const;
