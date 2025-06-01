// TypeScript type for a module used in Previewpage.tsx
export interface ModuleMeta {
  slug: string;
  title: string;
  description: string;
  price: number;
  category?: string;
}

export interface ModuleData {
  meta: ModuleMeta;
  lessons?: Array<{ slug: string; title: string; content?: string }>;
}
