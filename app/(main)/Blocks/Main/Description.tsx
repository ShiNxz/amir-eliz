import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

const Description = () => {
	return (
		<motion.h2
			className='text-lg sm:text-xl lg:text-2xl text-gray-600 px-8 2xl:px-0 2xl:w-1/2 text-center lg:mx-auto'
			variants={fadeUp}
			viewport={{ once: true }}
			whileInView='in'
			initial='start'
			custom={1}
		>
			פתרונות מותאמים אישית לצרכי הלקוח, פיתוח אתרים ואפליקציות בדגש על עיצוב מודרני, חווית משתמש מעולה ואבטחה
			מקסימלית, כל פרויקט נבנה בהתאמה אישית לצרכי הלקוח, ובכך מבטיח את התוצאה הטובה ביותר
		</motion.h2>
	)
}

export default Description
