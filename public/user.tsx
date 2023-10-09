export const INFO = {

	socials: {
		github: "https://github.com/chrstinalin",
		linkedin: "https://linkedin.com/in/chrstina"
	},

	languages: ["Typescript", "Javascript", "HTML", "CSS", "Java", "Python", "SQL", "Assembly", "C/C++"],

	frameworks: ["React.js", "Next.js", "Nest.js", "Express", "Tailwind CSS", "Pandas", "Ant Design"],

	tools: ["SQL Server", "Casbin", "Prisma ORM", "Git", "CentOS Hosting", "Figma"],

	home: {
		title: "Hello, I'm Christina!",
		description:
			[
				"3rd year CS student at UofT.",
				"Fullstack developer with an eye for clean, elegant software."
			],
		photo: [
			'photos/trip2.JPG']
	},

	about: {
		title: "About Me",
		description:
			"Born & raised in Hamilton, Ontario, I'm a challenge-seeker who strives to go above and beyond. \n\n On the side, I enjoy digital illustration & product design, where I've previously done freelance work and sold custom merchandise. \n\n In light of my work, I was named one of ten 2021 Horatio Alger National Entreprenurial Scholars in Canada.",
		photos: [
			'photos/pin.jpg',
			'photos/gala.jpg',
			'photos/horatio.png',
		]
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Full Stack Software Intern @ PMG Holdings",
			subtitle: "May 2023 - Present",
			description:
				`Developed & deployed a Node.js CRUD web application under a Canadian pallet manufacturing conglomerate. Redesigned, migrated, and extended both the SQL Server database and the original ColdFusion enterprise resource planning (ERP) software to a modern tech stack. 
				
				The system manages various key business processes of three subsidiary companies, including scheduling and dispatching contracts valued in the hundreds of thousands with retail & warehouse companies such as Amazon, Walmart and Home Depot. 
				
				◦ Addressed SQL Server structural concerns by redesigning the database under stricter schema & conventions.
				◦ Developed the software’s Nest.js REST API, communication with the database via Prisma ORM, and access control & policy management via Casbin.
				◦ Designed & implemented a web-based React.js application to facilitate communication with the API.
				◦ Deployed these services on traditional CentOS servers.
				`,
			banner: "photos/pallet.jpg",
			logo: "photos/react.png"
		},

		// {
		// 	title: "HermesAI",
		// 	subtitle: "Python, HTML/CSS",
		// 	description:
		// 		`H`,
			// logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
		// 	banner: "https://media.licdn.com/dms/image/C562DAQHeqPuuvcc2ag/profile-treasury-image-shrink_800_800/0/1674564861906?e=1695736800&v=beta&t=CC3y7DUTisfDggx2K-124ThXjIg2d5mAx4JgkDKXDOg",
		// 	linkText: "View Project",
		// 	link: "https://github.com",
		// },

		{
			title: "Communify - Collaborative Music Platform (2022)",
			subtitle: "Java, Swing",
			description:
				`An offline prototype of a collaborative music-streaming platform. Allows users to listen to music and create private playlists. On top of all user features, artists can upload and view their songs on their dashboard. Provides recommendations based on the individual songs or playlists and have collaborative ‘spaces’ – public radios that users can both listen to and contribute to.
				
				◦ Implemented the MP3 data uploading process, metadata parsing & persistence using Jaudiotagger.
				◦ Introduced a modern UI design utilizing the FlatLaf library.
				◦ Developed a strong understanding of clean architecture and coding in a large team.
				`,
			logo: "photos/java.png",
			banner: "photos/communify.png",
			linkText: "View Project",
			link: "https://github.com/CSC207-2022F-UofT/course-project-team-communify",
		},

		{
			title: "Covid Sentimentality - Data Congregation & Analysis Tool (2021)",
			subtitle: "Python",
			description:
				`Scrapes and parses through Twitter data, quantifying human sentimentality of tweets through a word-emotion association lexicon. Analyzes how perception towards COVID-19 changes in relation to statistics over time.
				
				◦ Implemented mass Twitter data-scraping via the Twint library.
				◦ Utilized the Pandas library in analyzing & manipulating the emotional index of tweets.
				◦ Developed algorithm to calculate indices using a word-emotion lexicon and approximate & phonetic matching.
				`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			banner: "photos/covid_sentimentality.jpg",
			linkText: "View Project",
			link: "https://github.com/chrstinalin/COVID_Sentimentality",
		},

		{
			title: "CoFit App Design (2020)",
			subtitle: "Figma, Marvel",
			description:
				`Lead developer. One of two winners of the Waterloo Catalyst Conference. Brainstormed, designed and wireframed an app over two days. CoFit is a mobile app connecting users and promoting collaborative workouts and recipes in light of COVID-19. Promotes health and wellness even indoors.
				
				◦ Coordinated team and introduced the overarching design principles.
				◦ Designed the application with Figma, wireframed with Marvel.
				◦ Winning application at the Waterloo Catalyst Conference.
				`,
			logo: "https://assets.asana.biz/transform/ba9b63a3-f255-4088-b5fe-14ab4628f50b/logo-app-figma",
			banner: "photos/cofit.png",
			linkText: "View Project",
			link: "https://www.youtube.com/watch?v=Stc3jOQQ4og",
		},

		{
			title: "Dungeon Crawler (2020)",
			subtitle: "Java, Slick2D, LWJGL",
			description:
				`Solo project. Features procedurally-generated parallax maps using a modular algorithm, unique player movement, several unique NPCs and enemies, as well as upgrades and quests. Developed over the course of a week.
				
				◦ Implemented algorithm for the Spelunky-style procedurally-generated parallax maps.
				◦ Developed player movement, NPC AI traversal & attack algorithms.
				◦ Strengthened understanding of recursion via implementation of modular algorithm designs.
				`,
			logo: "photos/java.png",
			banner: "https://github.com/chrstinalin/dungeonCrawl/raw/main/asset/demo.gif",
			linkText: "View Project",
			link: "https://github.com/chrstinalin/dungeonCrawl",
		},

		{
			title: "CodaCat 101 (2020)",
			subtitle: "CSS, HTML5, Javascript, Typescript",
			description:
				`Lead Designer. Winner of Best Design at McHacks 2020. Alongside a cuddly mascot, CodaCat engages children to learn how to code at a young age in a simple and fun way – walking them through the process of making their own minigames.
				`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			banner: "photos/codacat.png",
			linkText: "View Project",
			link: "https://www.youtube.com/watch?v=ignTmGH9Qh4",
		},

		{
			title: "Brawler Game (2019)",
			subtitle: "C++, QT Creator",
			description:
				`Solo project. A two-player Street-Fighter game featuring custom characters with varying skillsets and unique maps. Made completely from scratch, without the aid of additional libraries.
				
				◦ Implemented four unique character movement & skillsets within three dynamic environments.
				◦ Developed understanding of menu designs & game development fundamentals.
				◦ Experienced developing from scratch and without libraries.
`,
			logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
			banner: "photos/brawler.gif",
			linkText: "View Project",
			link: "https://www.youtube.com/watch?v=AJlPQPhja2U",
		},
	],
}; 