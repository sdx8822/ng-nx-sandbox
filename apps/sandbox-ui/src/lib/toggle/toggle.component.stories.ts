import type { Meta, StoryObj } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToggleComponent> = {
  component: ToggleComponent,
  title: 'ToggleComponent',
};
export default meta;
type Story = StoryObj<ToggleComponent>;

export const Primary: Story = {
  args: {
    labels: [],
    nullablbe: true,
  },
};

export const Heading: Story = {
  args: {
    labels: [],
    nullablbe: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/toggle works!/gi)).toBeTruthy();
  },
};
