const skills: string[] = ['Front', 'Back', 'Fullstack', 'DevOps']

for (const skill of skills) {
	console.log(skill.toLowerCase());
}

const summary = skills
	.filter(skill => skill !== 'DevOps')
	.map(skill => skill + 'developer')
	.reduce((a, b) => a + b)

console.log(summary);
