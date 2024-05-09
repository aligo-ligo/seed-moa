import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SubGoalState {
  subGoalValue: string;
  setSubGoalValue: (by: string) => void;
  CheckedDate: string | null;
  setCheckedDate: (value: string | null) => void;
}

export const useSubGoalStore = create<SubGoalState>()(
  devtools(
    persist(
      (set) => ({
        subGoalValue: '',
        CheckedDate: '',
        setSubGoalValue: (by) => set({ subGoalValue: by }),
        setCheckedDate: (value) => set({ CheckedDate: value }),
      }),
      {
        name: 'subGoal-storage', // persist key
      },
    ),
  ),
);


