import { create } from 'zustand';
import { FilmProps } from '@/models';

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  openModal: (type: ModalType, data: FilmProps) => void;
  closeModal: () => void;
  data: FilmProps | null;
}

type ModalType = 'film';

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  data: null,
  openModal: (type, data) => set({ isOpen: true, type, data }),
  closeModal: () => set({ isOpen: false, type: null, data: null }),
}));
