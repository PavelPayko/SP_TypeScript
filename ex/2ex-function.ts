enum Statuses {
	PUBLISHED = "published",
	DRAFT = "draft",
	DELETED = "deleted"
}

async function getFaqs(req: {
	topicId: number,
	status?: Statuses
}): Promise<{
	question: string,
	answer: string,
	tags: string[],
	likes: number,
	status: Statuses
}[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}