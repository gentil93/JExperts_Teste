export function removePhoneMask(text: string): string {
	let parsedText = text.replace(/\s/g, '')
	parsedText = parsedText.replace('(', '')
	parsedText = parsedText.replace(')', '')
	parsedText = parsedText.replace('-', '')
	return parsedText
}

export function handleCellphone(v: string): string {
	v = v.replace(/\D/g, '')
	v = v.replace(/^(\d{2})(\d)/g, '($1) $2')
	v = v.replace(/(\d)(\d{4})$/, '$1-$2')
	return v
}
