import React from 'react'

import {AbOptionGroup, AbOptionGroupProps} from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/AbOptionGroup',
  component: AbOptionGroup
} as ComponentMeta<typeof AbOptionGroup>

const Template: ComponentStory<typeof AbOptionGroup> = (args) => <AbOptionGroup {...args}/>

export const Primary = Template.bind({})

Primary.args = {
  options: [
    {
      id: 1,
      header: 'E-book',
      body: 'R$ 00.00',
      footer: '.pdf, .epub, .mob'
    },
    {
      id: 2,
      header: 'E-book',
      body: 'R$ 00.00',
      footer: '.pdf, .epub, .mob'
    },
    {
      id: 3,
      header: 'E-book',
      body: 'R$ 00.00',
      footer: '.pdf, .epub, .mob'
    }
  ],
  defaultValue: 1
} as AbOptionGroupProps
