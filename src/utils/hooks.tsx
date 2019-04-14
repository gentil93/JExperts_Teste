import * as React from 'react'
const useState = React.useState

import { validEmail } from '../utils/validators'

interface UseInput {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	error?: string
	setTouched?: (touched: boolean) => void
	onBlur?: (args: any) => void
}

export function useInput(
	initialValue: string,
	required: boolean = false
): UseInput {
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

// export function useEmailInput(initialValue: string, required: boolean = false) {
// 	const [email, setEmail] = useState(initialValue)
// 	const [error, setError] = useState('')
// 	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
// 		const { value } = e.target
// 		setError('')
// 		setEmail(value)
// 	}
// 	function checkEmail(e: React.FocusEvent<HTMLInputElement>) {
// 		const { value } = e.target
// 		if (!validEmail(value)) {
// 			setError('Por favor digite um email válido')
// 		}
// 	}
// 	const returnProps = {
// 		onChange: handleChange,
// 		value: email,
// 		error,
// 		type: 'email',
// 		onBlur: checkEmail
// 	}
// 	if (required) {
// 		return decorateRequire(returnProps)
// 	} else {
// 		return returnProps
// 	}
// }

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
		onBlur: handleBlur
	}
}
