import React from 'react'

import {AbCard} from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/AbCard',
  component: AbCard
} as ComponentMeta<typeof AbCard>

const Template: ComponentStory<typeof AbCard> = () => <AbCard><div>teste</div></AbCard>

export const Primary = Template.bind({})