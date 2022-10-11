import React from 'react'
import {FormGroup, Label, Input, Message} from './ContactStyled'

const Contact = () => {
  return (
    <div>
    <FormGroup>
      <Label htmlFor="label">Label</Label>
      <Input id="label" />
      <Message>This is the validation message</Message>
    </FormGroup>
    <FormGroup>
      <Label>Label 2</Label>
      <Input />
      <Message>This is the validation message</Message>
    </FormGroup>
  </div>
  )
}

export default Contact