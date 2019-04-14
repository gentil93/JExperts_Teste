import * as React from 'react'
const useState = React.useState

import { validEmail } from '../utils/validators'
import { handleCellphone, removePhoneMask } from '../utils/stringParsers'

export interface UseInputInterface {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	error?: string
	touched?: boolean
	setTouched?: (touched: boolean) => void
	onBlur?: (args: any) => void
}

export function useInput(
	initialValue: string,
	required: boolean = false
): UseInputInterface {
	const [value, setValue] = useState(initialValue)
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}
	const returnProps = {
		onChange: handleChange,
		value
	}
	if (required) {
		return decorateRequire(returnProps)
	} else {
		return returnProps
	}
}

export function useEmailInput(
	initialValue: string,
	required: boolean = false
): UseInputInterface {
	const [email, setEmail] = useState(initialValue)
	const [error, setError] = useState('')
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { value } = e.target
		setError('')
		setEmail(value)
	}
	function checkEmail(e: React.FocusEvent<HTMLInputElement>) {
		const { value } = e.target
		if (!validEmail(value)) {
			setError('Por favor digite um email válido')
		}
	}
	const returnProps = {
		onChange: handleChange,
		value: email,
		error,
		type: 'email',
		onBlur: checkEmail
	}
	if (required) {
		return decorateRequire(returnProps)
	} else {
		return returnProps
	}
}

function decorateRequire(hookObj: {
	value: string
	error?: string
	onBlur?: any
	onChange: any
}) {
	const [internalError, setInternalError] = useState('')
	const [touched, setTouched] = useState(false)
	function handleBlur(args: any) {
		if (hookObj.onBlur) {
			hookObj.onBlur(args)
		}
		setTouched(true)
	}
	const requiredStr = 'campo é requerido'
	if (!internalError && touched && !hookObj.value) {
		setInternalError(requiredStr)
	} else if (internalError && touched && hookObj.value && !hookObj.error) {
		setInternalError('')
	}
	return {
		...hookObj,
		error: internalError || hookObj.error,
		setTouched,
		touched,
		onBlur: handleBlur
	}
}

export function usePhoneInput(initialValue: string, required: boolean = false) {
	const [phone, setPhone] = useState(initialValue)
	const [rawValue, setRawValue] = useState(initialValue)
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPhone(handleCellphone(e.target.value))
		setRawValue(removePhoneMask(e.target.value))
	}
	const returnProps = {
		onChange: handleChange,
		value: phone,
		maxLength: 15,
		rawValue
	}
	if (required) {
		return decorateRequire(returnProps)
	} else {
		return returnProps
	}
}
