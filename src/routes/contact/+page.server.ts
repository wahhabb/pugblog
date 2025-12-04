import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { Actions } from './$types';
import { GOOGLE_APP_PASSWORD } from '$env/static/private';

console.log('&&^&&&&& ' + GOOGLE_APP_PASSWORD)
// Create a transporter for mail.deepwebworks.com
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "wahhabb@gmail.com",
    pass: GOOGLE_APP_PASSWORD,
  },
});

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;

		// Validate inputs
		if (!name || !email || !message) {
			return fail(400, {
				error: 'All fields are required'
			});
		}

		if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			return fail(400, {
				error: 'Please provide a valid email address'
			});
		}

		try {
			// Send email
			const info = await transporter.sendMail({
				from: email,
				to: 'wahhab@deepwebworks.com',
				subject: `New Contact Form Submission from ${name}`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${escapeHtml(name)}</p>
					<p><strong>Email:</strong> ${escapeHtml(email)}</p>
					<p><strong>Message:</strong></p>
					<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
				`
			});

			console.log('Email sent:', info);
			return {
				success: true
			};
		} catch (error) {
			console.error('Error sending email:', error);
			return fail(500, {
				error: 'Failed to send email. Please try again later.'
			});
		}
	}
};

function escapeHtml(text: string): string {
	const map: { [key: string]: string } = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	};
	return text.replace(/[&<>"']/g, (m) => map[m]);
}
