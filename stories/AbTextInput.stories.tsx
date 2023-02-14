import React from 'react'

import {AbTextInput, AbTextInputProps} from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/AbTextInput',
  component: AbTextInput
} as ComponentMeta<typeof AbTextInput>

const Template: ComponentStory<typeof AbTextInput> = (args) => <AbTextInput {...args}/>

export const Primary = Template.bind({})

Primary.args = {
  inputName: 'email',
  labelText: 'Email',
  onChange: (value) => {console.log(value)},
  placeholderText: 'Digite seu email',
} satisfies AbTextInputProps
