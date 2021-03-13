import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { analytics } from '../index'

export default function SignUp({
  setZipCode,
}: {
  setZipCode: React.Dispatch<React.SetStateAction<number | null>>
}) {
  const [zipCode, updateZipCode] = useState<number | null>(null)
  return (
    <Form
      onSubmit={event => {
        event.preventDefault()
        analytics.track('signUp', {
          category: 'Conversion',
          label: 'signUpButton',
          value: 1,
        })
        setZipCode(zipCode)
      }}>
      <ZipCodeLabel htmlFor='ZipCode'>Please enter your ZipCode</ZipCodeLabel>
      <ZipCode
        pattern='^\d{5}(?:[-\s]\d{4})?$'
        id='ZipCode'
        type='text'
        onChange={e => updateZipCode(Number(e.target.value))}></ZipCode>
      <TermsLabel htmlFor='TermsCheck'>Please accept the terms and conditions</TermsLabel>
      <TermsCheck id='TermsCheck' type='checkbox' required={true}></TermsCheck>
      <SignUpButton type='submit' value='Sign Up'></SignUpButton>
    </Form>
  )
}

const Form = styled.form`
  display: block;
`
const ZipCodeLabel = styled.label``
const ZipCode = styled.input``
const TermsLabel = styled.label``
const TermsCheck = styled.input``
const SignUpButton = styled.input``
