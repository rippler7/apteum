const dir = '/img'
export const images = [
    {
        id: 1,
        photo: dir + '/IMG_6256.JPG',
        name: 'Jerome',
        position: 'Data Engineer',
        featured: true,
        quote:"I come from Leyte, an Island province that neighbours Cebu. Since completing my Bachelor of Science in Information Technology in 2019, I’ve been working as a Data Engineer—mostly focusing on data extraction and maintaining permits, using languages like PHP and JavaScript. Working at Apteum, I love collaborating on projects with international clients, brining my technical skills to the table to keep things moving smoothly, and learning new skills when needed. Outside of work I enjoy playing guitar and getting out for some exercise!"
    },
    {
        id: 2,
        photo: dir + '/IMG_6259.JPG',
        name: 'Mitchie',
        position: 'Customer Service Specialist',
        featured: true,
        quote:"I grew up in Carcar, not far from Cebu City. Following my studies in Science and IT, I've held various roles in the BPO industry for almost a decade, including fraud analysis, advanced technical support and sales. At Apteum, I work in customer service, helping to ensure customer enquiries are quickly resolved, or escalated to the appropriate team. Problem-solving, resourcefulness, ingenuity, creative thinking and clear communication skills are central to my work. Outside of Apteum, I perform from time to time as a singer. It's always been a great love of mine!"
    },
    {
        id: 3,
        photo: dir + '/IMG_6252.JPG',
        name: 'Francis',
        position: 'Front End Engineer',
        featured: true,
        quote:"With 6 years in Software Development, I'm a proud product of City of Golden Friendship, Cagayan de Oro. I am a Computer Engineering graduate from The University of Science and Technology of Southern Philippines. Beyond code, I'm immersed in single-player RPGs like Legend of Zelda and The Witcher 3. Fun fact, I am also an avid driver, whether in a car or on a motorcycle, with dreams of owning a Big Bike. Anime has been staple for me since childhood as well. I joined Apteum as a Front-end Developer, diving into React, Next, Javascript, and front-end development. My workdays consist of being surrounded by colleagues who make even tough tasks enjoyable. Apteum's kind-hearted environment fosters a culture where extending a helping hand is second nature."
    },
    {
        id: 4,
        photo: dir + '/Judee.jpg',
        name: 'Judee',
        position: 'Architectural Documenter',
        featured: false,
        quote:"I was born and raised here in Cebu, where I studied architecture at Cebu Institute of Technology. As an Architectural Documenter for Apteum, I have experience working remotely for firms in Melbourne, for which I rely on my skills in collaboration, communication and problem-solving. In my role, I focus on architectural drawing, modelling and support documentation. Staying in sync with my Australian counterparts is central to my work. For as long as I can remember I’ve tinkered with things to learn how they work—even our household gadgets growing up (sorry, dad!). That love of technology and IT is what led me to architecture."
    },
    {
        id: 5,
        photo: dir + '/Iano.jpg',
        name: 'Iano',
        position: 'Architectural Documenter',
        featured: false,
        quote:"I spent my formative years in the province of Bukidnon, a picturesque region known for its vibrant cultural tapestry. My passion for arts and crafts, particularly sketching, led me to pursue architecture at university. Since joining Apteum, I’ve had the opportunity to put my skills to work using a variety of tools and software to create detailed architectural documentation to support projects in Australia. I pride myself on precise sketches and immersive renders that contribute to the success of our clients' projects. Outside of work, I love to discover new places, people and things to eat. Cebu, with all its island attractions, is just perfect for that. I've even taken up freediving!"
    },
    {
        id: 6,
        photo: dir + '/Karla.jpg',
        name: 'Karla',
        position: 'Operations & Accounts Administrator',
        featured: false,
        quote:"I come from a town called Ipil, in the province of Zamboanga Sibugay, Mindanao. Starting out as a digital marketer, I now work in business operations and support, with a focus on project management. I studied here in Cebu, at the University of the Philippines, where I completed a Bachelor of Science in Management. The skills I developed in uni are central to my work at Apteum, where I manage projects, generate reports, provide operational support and help to streamline projects. Outside of work, I love to relax at home reading and catching up on movies, or head out to explore restaurants in Cebu City."
    },
    {
        id: 7,
        photo: dir + '/Honilyn.jpg',
        name: 'Honilyn',
        position: 'Architectural Documenter',
        featured: false,
        quote:"I grew up right here in Cebu, where I studied architecture at the University of San Carlos. Having worked in the industry for five years, I've had a variety of experience with BIM and I consider myself very proficient at design, documentation and communication. After working as a construction site architect for several years, I joined Apteum to work on various architectural assignments, including town planning. Growing up, I was always interested in sustainability, urban planning, historical conservation  and bamboo architecture. These interests drive me to refine my approach as an architect, and always consider how my work will stand the test of time and give back to nature. Outside of work, I love to cook, play with my dogs and spend time outdoors."
    },
    {
        id: 8,
        photo: dir + '/Diane.jpg',
        name: 'Diane',
        position: 'Architectural Documenter',
        featured: false,
        quote:"I come from Cagayan de Oro City, in the region of Northern Mindanao. A long-held fascination with buildings and design from around the world led me to study architecture at the University of Science and Technology of Southern Philippines, before moving to Cebu City to pursue my career. Since joining the Apteum team, I've worked as an Architectural Documenter on a range of projects, including multi-residentials, creating drawings and models, and working in close collaboration with Australian clients. Outside of work, I love to travel internationally, immersing myself in diverse cultures to broaden my understanding of the world."
    },
    {
        id: 9,
        photo: dir + '/Miggs.jpg',
        name: 'Miguel',
        position: 'Data Engineer',
        featured: false,
        quote:"I'm a data analyst from Baao, a small town in southern Luzon. Since moving to Cebu City and joining the Apteum team, I’ve been working on a range of projects using GIS and SQL to process datasets and share them with the local team and our international clients. Despite being a data analyst, I studied Environmental Management at a tertiary level, and spent much of my time at university working as a student journalist—which helped me to develop the excellent communication skills I need to analyse and share data. Outside of work I love learning new skills, like combat sports, and making Pandesal for friends and family. It's a traditional Filipino bread that everyone should try some day."
    }

]

export const featuredImg = images.filter(img => img.featured)

export const getDataById = (id: number) => {
    return images.find(img => img.id === id);
}