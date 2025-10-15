import { create } from 'zustand';
import { MOCK_CONTENT } from '../data/content';

interface ProductPageStore {
  hero: typeof MOCK_CONTENT.hero;
  whyChoose: typeof MOCK_CONTENT.whyChoose;
  capabilities: typeof MOCK_CONTENT.capabilities;
  integrations: typeof MOCK_CONTENT.integrations;
  idealFor: typeof MOCK_CONTENT.idealFor;
  glance: typeof MOCK_CONTENT.glance;
  cta: typeof MOCK_CONTENT.cta;
  footer: typeof MOCK_CONTENT.footer;
  setContent: (partial: Partial<ProductPageStore>) => void;
}

export const useProductPageStore = create<ProductPageStore>((set) => ({
  ...MOCK_CONTENT,
  setContent: (partial) => set(partial),
}));
