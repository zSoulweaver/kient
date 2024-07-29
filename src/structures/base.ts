import type { Kient } from '../kient'

// biome-ignore lint/suspicious/noExplicitAny: Decorator
export function Expose(target: any, propertyKey: any) {
	if (!target.constructor.exposedProperties) {
		target.constructor.exposedProperties = []
	}
	target.constructor.exposedProperties.push(propertyKey)
}

export class Base {
	kient!: Kient

	raw(): Partial<Base> {
		const rawData: Partial<Base> = {}
		// biome-ignore lint/suspicious/noExplicitAny: Decorator magic
		const exposedProperties = (this.constructor as any).exposedProperties as string[]

		for (const prop of exposedProperties) {
			rawData[prop as keyof Omit<Base, 'kient'>] = this[prop as keyof Omit<Base, 'kient'>]
		}

		return rawData
	}

	toJSON() {
		return this.raw()
	}
}
