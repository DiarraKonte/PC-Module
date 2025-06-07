import intro from './intro/data';
import OS from './OS/data';
import ventilation from './ventilation/data';
import GPUBase from './pc-GPU/GPUBase/data';
import GPUAMDINTELNVIDIA from './pc-GPU/AMD-INTEL-NVIDIA/data';
import audio from './peripherique-gaming/audio/data';
import clavier from './peripherique-gaming/clavier/data';
import confort from './bonus/confort/data';
import souris from './peripherique-gaming/souris/data';
import ecran from './peripherique-gaming/ecran/data';
import CPUbase from './pc-CPU/CPUbase/data';
import CPUchoisir from './pc-CPU/ChoisirCPU/data';
import CPUcooling from './pc-CPU/cooling/data';
import choixRam from './RAM/choixRam/data';
import Ram from './RAM/Ram/data';
import portable from './portable/data';
import profils from './bonus/profils/data';
import optimisation from './optimisastion/data';
import alimentation from './alimentation/data';
import cartemere from './cartemere/data';
import stockage from './Stockage/data';
import montage from './montage/data';
import premonter from './Premonter/data';
import boitier from './boitier/data';

export const IntroPC = {
  [intro.meta.slug]: intro,
  [premonter.meta.slug]: premonter,
}

export const boitierPC = {
  [boitier.meta.slug]: boitier,
}

export const CartemerePC = {
  [cartemere.meta.slug]: cartemere,
}

export const GPU_MODULES = {
  [GPUBase.meta.slug]: GPUBase,
  [GPUAMDINTELNVIDIA.meta.slug]: GPUAMDINTELNVIDIA,
};

export const CPU_MODULES = {
    [CPUbase.meta.slug]: CPUbase,
    [CPUchoisir.meta.slug]: CPUchoisir,
    [CPUcooling.meta.slug]: CPUcooling,
};
export const STORAGE_MODULES = {
    [stockage.meta.slug]: stockage,
};

export const RAM_MODULES = {
  [Ram.meta.slug]: Ram,
  [choixRam.meta.slug]: choixRam,
};

export const ALIMENTATION_MODULES = {
  [alimentation.meta.slug]: alimentation,
};

export const MONTAGE_MODULES = {
  [montage.meta.slug]: montage,
};

export const OS_MODULES = {
  [OS.meta.slug]: OS,
};

export const PORTABLE_MODULES = {
  [portable.meta.slug]: portable,
};

export const VENTILATION_MODULES = {
  [ventilation.meta.slug]: ventilation,
};

export const PERIPHERIQUE_MODULES = {
  [audio.meta.slug]: audio,
  [clavier.meta.slug]: clavier,
  [souris.meta.slug]: souris,
  [ecran.meta.slug]: ecran,
};

export const Bonus_MODULES = {
  [confort.meta.slug]: confort,
  [profils.meta.slug]: profils,
  [optimisation.meta.slug]: optimisation,
};

export const ALL_MODULES = {
  ...IntroPC,
  ...boitierPC,
  ...CartemerePC,
  ...GPU_MODULES,
  ...CPU_MODULES,
  ...STORAGE_MODULES,
  ...RAM_MODULES,
  ...ALIMENTATION_MODULES,
  ...MONTAGE_MODULES,
  ...OS_MODULES,
  ...PORTABLE_MODULES,
  ...VENTILATION_MODULES,
  ...PERIPHERIQUE_MODULES,
  ...Bonus_MODULES,
};

export type Module = typeof ALL_MODULES;

export const getModule = (slug: string) =>
  ALL_MODULES[slug as keyof typeof ALL_MODULES];
