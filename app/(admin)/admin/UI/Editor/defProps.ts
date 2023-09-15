import { Link } from '@mantine/tiptap'
import Highlight from '@tiptap/extension-highlight'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import SubScript from '@tiptap/extension-subscript'
import Image from '@tiptap/extension-image'

const editorProps = {
	extensions: [
		StarterKit,
		Underline,
		Link,
		Superscript,
		SubScript,
		Highlight,
		TextAlign.configure({ types: ['heading', 'paragraph'] }),
		Image,
	],
}

export default editorProps
