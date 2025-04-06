import crypto from 'node:crypto'

export interface VerifySignatureParams {
	publicKey: string
	messageId: string
	signature: string
	timestamp: string
	body: string
}

export async function verifyWebhookSignature(params: VerifySignatureParams) {
	try {
		const data = `${params.messageId}.${params.timestamp}.${params.body}`

		const verifer = crypto.createVerify('RSA-SHA256')
		verifer.update(data)

		const signature = Buffer.from(params.signature, 'base64')
		const isValid = verifer.verify(params.publicKey, signature)
		if (!isValid) {
			console.warn('Webhook signature verification failed')
		}
		return isValid
	} catch (err) {
		console.error('Unable to verify signature of webhook event', err)
		return false
	}
}
