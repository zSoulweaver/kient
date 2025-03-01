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

function flatten<T>(obj: T): Flattened<T> {
	// Handle arrays
	if (Array.isArray(obj)) {
		return obj.map((item) => flatten(item)) as Flattened<T>
	}

	// Handle null or non-objects
	if (!obj || typeof obj !== 'object') {
		return obj as Flattened<T>
	}

	// Handle Date objects
	if (obj instanceof Date) {
		return obj.toISOString() as Flattened<T>
	}

	const result: Record<string, unknown> = {}

	for (const key in obj) {
		// biome-ignore lint/suspicious/noExplicitAny: Safe
		if (key.startsWith('_') || typeof (obj as any)[key] === 'function') {
			continue
		}

		// biome-ignore lint/suspicious/noExplicitAny: Safe
		const value = (obj as any)[key]

		if (value && typeof value === 'object' && 'toJSON' in value) {
			result[key] = flatten(value)
		} else if (Array.isArray(value)) {
			result[key] = flatten(value)
		} else {
			result[key] = value
		}
	}

	return result as Flattened<T>
}

export { flatten, type Flattened }
