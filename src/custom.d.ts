// src/custom.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      VITE_API_KEY: string;
    }
  }
  