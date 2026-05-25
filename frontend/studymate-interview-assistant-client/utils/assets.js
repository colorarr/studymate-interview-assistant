const asset = name => `/static/assest/${name}`

export const icons = {
	logo: asset('icon-logo-mark.png'),
	knowledge: asset('icon-knowledge-base.png'),
	file: asset('icon-file.png'),
	upload: asset('icon-upload.png'),
	send: asset('icon-send.png'),
	search: asset('icon-search.png'),
	history: asset('icon-history.png'),
	user: asset('icon-user.png'),
	delete: asset('icon-delete.png'),
	retry: asset('icon-retry.png'),
	chat: asset('icon-chat.png'),
	source: asset('icon-source.png'),
	success: asset('icon-success.png'),
	warning: asset('icon-warning.png'),
	error: asset('icon-error.png'),
	plus: asset('icon-plus.png'),
	more: asset('icon-more.png'),
	menu: asset('icon-menu.png'),
	close: asset('icon-close.png'),
	left: asset('icon-chevron-left.png'),
	right: asset('icon-chevron-right.png'),
	down: asset('icon-chevron-down.png'),
	filePdf: asset('icon-file-pdf.png'),
	fileDoc: asset('icon-file-doc.png'),
	fileMd: asset('icon-file-md.png'),
	fileTxt: asset('icon-file-txt.png')
}

export const backgrounds = {
	auth: asset('bg-auth-mobile.png'),
	emptyKnowledge: asset('bg-empty-knowledge.png'),
	chatSource: asset('bg-chat-source.png')
}

export function fileIcon(type) {
	const normalized = String(type || '').toLowerCase()
	if (normalized === 'pdf') return icons.filePdf
	if (normalized === 'doc' || normalized === 'docx' || normalized === 'word') return icons.fileDoc
	if (normalized === 'md' || normalized === 'markdown') return icons.fileMd
	if (normalized === 'txt') return icons.fileTxt
	return icons.file
}
