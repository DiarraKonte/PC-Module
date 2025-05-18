// modules/index.ts
import pcGaming from './choix-pc/data';
import optimisation from './optimisastion/data';
import GPU from './pc-GPU/data';
import CPU from './pc-CPU/data';
import RAM from './RAM/data';
import OS from './OS/data';
import Peripherique from './peripherique/data'


export const MODULES = {
  [pcGaming.meta.slug]: pcGaming,
  [GPU.meta.slug]: GPU,
  [CPU.meta.slug]: CPU,
  [optimisation.meta.slug]: optimisation,
  [RAM.meta.slug]: RAM,
  [OS.meta.slug]: OS,
  [Peripherique.meta.slug]: Peripherique

} as const;

export type Module = typeof pcGaming; // Type partagé

// Helper pour récupérer un module
export const getModule = (slug: string) => 
  MODULES[slug as keyof typeof MODULES];