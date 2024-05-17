import type { Meta, StoryObj } from '@storybook/react';

import SeedCard from '.';

const meta = {
  title: 'Components/seedCard',
  component: SeedCard,
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SeedCard>;

export default meta;

type Story = StoryObj<typeof SeedCard>;

const mockSeed = {
  completedRoutineCount: 1,
  endDate: '2024-05-23',
  id: 145,
  routineInfos: [
    {
      value: 'teset',
    },
  ],
  seed: 'ㅁㄷㄹㅁㄷ',
  seedState: 'SEED' as const,
  startDate: '2024-05-17',
};

const mockInActiveSeed = {
  completedRoutineCount: 1,
  endDate: '2024-05-15',
  id: 145,
  routineInfos: [
    {
      value: 'teset',
    },
  ],
  seed: 'ㅁㄷㄹㅁㄷ',
  seedState: 'SEED' as const,
  startDate: '2024-05-17',
};

export const Active: Story = {
  decorators: (Story) => (
    <main className="w-[410px] layout overflow-auto bg-gray-10 scroll-smooth flex flex-col gap-6">
      <Story />
      <Story />
    </main>
  ),
  args: {
    ...mockSeed,
  },
};

export const InActive: Story = {
  decorators: (Story) => (
    <main className="w-[410px] layout overflow-auto bg-gray-10 scroll-smooth flex flex-col gap-6">
      <Story />
      <Story />
    </main>
  ),
  args: {
    ...mockInActiveSeed,
  },
};
