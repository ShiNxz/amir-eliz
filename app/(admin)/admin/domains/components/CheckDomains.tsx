'use client'

import notification from '@/utils/functions/notification'
import useDomainsStore from '../store'
import { useEffect } from 'react'

const CheckDomains = () => {
	const domains = useDomainsStore((state) => state.domains)

	useEffect(() => {
		console.log('domains', domains)

		domains.forEach((domain) => {
			const { expDate } = domain
			const now = new Date()
			const exp = new Date(expDate)

			if (exp < now) {
				notification(null, 'שימו לב!', `הדומיין: ${domain.domain} פג תוקף`, 'error')
			} else {
				// check if exp is less than 30 days
				const diff = exp.getTime() - now.getTime()
				const days = diff / (1000 * 3600 * 24)

				if (days < 30) {
					notification(
						null,
						'שימו לב!',
						`הדומיין: ${domain.domain} יפוג בעוד ${days.toFixed(0)} ימים`,
						'warning'
					)
				}
			}
		})
	}, [domains])

	return <></>
}

export default CheckDomains
