type ExcludeFunctionsAndPrivate<T> = {
	[K in keyof T as K extends `_${string}`
		? never
		: // biome-ignore lint/suspicious/noExplicitAny: Safe
			T[K] extends (...args: any[]) => any
			? never
			: K]: T[K] extends object ? Flattened<T[K]> : T[K]
}

type Flattened<T> = T extends Array<infer U>
	? Flattened<U>[]
	: T extends object
		? ExcludeFunctionsAndPrivate<T>
		: T

function flatten<T>(obj: T, ...props: Record<string, boolean | string>[]): Flattened<T> {
	// Handle null or non-objects
	if (!obj || typeof obj !== 'object') {
		return obj as Flattened<T>
	}

	// Handle arrays
	if (Array.isArray(obj)) {
		return obj.map((item) => flatten(item)) as Flattened<T>
	}

	// Get all non-private properties (exclude keys starting with '_')
	const objProps = Object.keys(obj)
		.filter((key) => !key.startsWith('_'))
		.map((key) => ({ [key]: true }))

	// Merge provided props with object props safely
	const mergedProps: Record<string, boolean | string> = Object.assign(
		{},
		...objProps, // Spread array of objects
		...props, // Spread additional props
	)

	const out: Record<string, unknown> = {}

	for (const [prop, newProp] of Object.entries(mergedProps)) {
		if (!newProp) continue
		const outputKey = newProp === true ? prop : newProp

		// biome-ignore lint/suspicious/noExplicitAny: Safe
		const element = (obj as any)[prop]
		const elemIsObj = element && typeof element === 'object'
		// biome-ignore lint/suspicious/noShadowRestrictedNames: Safe
		const valueOf = elemIsObj && typeof element.valueOf === 'function' ? element.valueOf() : null
		const hasToJSON = elemIsObj && typeof element.toJSON === 'function'

		// Handle Date objects explicitly
		if (element instanceof Date) {
			out[outputKey] = element.toISOString()
		}
		// If it's an array, process each element
		else if (Array.isArray(element)) {
			out[outputKey] = element.map((elm) => (hasToJSON ? elm.toJSON() : flatten(elm)))
		}
		// If it has a toJSON method, use its result
		else if (hasToJSON) {
			out[outputKey] = element.toJSON()
		}
		// If it's an object with a primitive valueOf, use that
		else if (elemIsObj && valueOf && typeof valueOf !== 'object') {
			out[outputKey] = valueOf
		}
		// If it's a non-primitive object, flatten it
		else if (elemIsObj) {
			out[outputKey] = flatten(element)
		}
		// Otherwise, use the element as-is (primitives)
		else {
			out[outputKey] = element
		}
	}

	return out as Flattened<T>
}

export { flatten, type Flattened }
