import icons from './icons'
import images from './images'

export const country_list = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua &amp; Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia &amp; Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre &amp; Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts &amp; Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad &amp; Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks &amp; Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]

export const quizQuestions = [
  {
    id: 1,
    question: "What's your favorite type of project?",
    options: [
      { id: 1, score: 2, text: 'Making an art project.' },
      { id: 2, score: 1, text: 'Writing a research paper.' },
      { id: 3, score: 3, text: 'Preparing or giving a presentation.' },
      {
        id: 4,
        score: 4,
        text: 'Automating workflows / making something work.',
      },
    ],
  },
  {
    id: 2,
    question: 'How do you make important decisions?',
    options: [
      {
        id: 1,
        score: 4,
        text: 'After carefully analyzing every option and the predicted results.',
      },
      { id: 2, score: 2, text: 'After checking with friends.' },
      {
        id: 3,
        score: 3,
        text: 'I make an executive decision and everyone follows along.',
      },
      { id: 4, score: 2, text: 'Create a poll and ask social media.' },
      { id: 5, score: 1, text: 'Gut instinct.' },
      { id: 6, score: 1, text: 'Come up with the simplest possible solution.' },
    ],
  },
  {
    id: 3,
    question: 'What does success mean for you?',
    options: [
      { id: 1, score: 4, text: 'Earning a high income.' },
      { id: 2, score: 3, text: 'Autonomy to make high-level decisions.' },
      { id: 3, score: 1, text: 'Ability to balance work and life.' },
      { id: 4, score: 1, text: 'Creative control of my projects.' },
    ],
  },
  {
    id: 4,
    question: 'When you picture your ideal job, what are you doing?',
    options: [
      {
        id: 1,
        score: 4,
        text: 'Working in a fast-paced role that pushes me to produce results.',
      },
      {
        id: 2,
        score: 2,
        text: 'Getting creative and coming up with new ideas.',
      },
      { id: 3, score: 4, text: 'Thinking big-picture and solving problems.' },
      {
        id: 4,
        score: 1,
        text: 'Figuring out how the company operates, and finding ways to do it better.',
      },
      {
        id: 5,
        score: 3,
        text: 'Leading a team.',
      },
    ],
  },
  {
    id: 5,
    question: 'How do you feel about working in groups?',
    options: [
      { id: 1, score: 1, text: 'I love working in groups!' },
      {
        id: 2,
        score: 3,
        text: 'I like working with a group, as long as I can take the lead.',
      },
      { id: 3, score: 2, text: 'I can adapt to any situation.' },
      { id: 4, score: 4, text: 'I prefer to work by myself most of the time.' },
    ],
  },
  {
    id: 6,
    question: 'Which of these is your strongest skill?',
    options: [
      { id: 1, score: 1, text: 'Storytelling.' },
      { id: 2, score: 4, text: 'Logical Thinking' },
      { id: 3, score: 2, text: 'Creativity' },
      { id: 4, score: 4, text: 'Troubleshooting' },
      { id: 5, score: 3, text: 'Persuasive Communication' },
      { id: 6, score: 4, text: 'Math & Statistics' },
    ],
  },
  {
    id: 7,
    title: "Choose how much you'll love to do these among available choices.",
    question: 'Use my artistic abilities.',
    options: [
      { id: 1, score: 2, text: 'Very Interested' },
      { id: 2, score: 1, text: 'Interested' },
      { id: 3, score: 4, text: 'Slightly Interested' },
      { id: 4, score: 3, text: 'Not Interested' },
    ],
  },
  {
    id: 8,
    question: 'Code a website, mobile app, or software.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 2, text: 'Interested' },
      { id: 3, score: 1, text: 'Slightly Interested' },
      { id: 4, score: 3, text: 'Not Interested' },
    ],
  },
  {
    id: 9,
    question: 'Review data and present your findings.',
    options: [
      { id: 1, score: 3, text: 'Very Interested' },
      { id: 2, score: 2, text: 'Interested' },
      { id: 3, score: 1, text: 'Slightly Interested' },
      { id: 4, score: 4, text: 'Not Interested' },
    ],
  },
  {
    id: 10,
    question: 'Respond to a cyber attack.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 11,
    question: 'Set up computers and printers for a business.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 12,
    question: 'Learn how computer hardware and software works.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 13,
    question: 'Help people with their technology issues.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 14,
    question: 'Create graphics.',
    options: [
      { id: 1, score: 2, text: 'Very Interested' },
      { id: 2, score: 4, text: 'Interested' },
      { id: 3, score: 1, text: 'Slightly Interested' },
      { id: 4, score: 3, text: 'Not Interested' },
    ],
  },
  {
    id: 15,
    question: 'Learn multiple programming languages.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 16,
    question: 'Manage technology projects.',
    options: [
      { id: 1, score: 3, text: 'Very Interested' },
      { id: 2, score: 1, text: 'Interested' },
      { id: 3, score: 4, text: 'Slightly Interested' },
      { id: 4, score: 2, text: 'Not Interested' },
    ],
  },
  {
    id: 17,
    question: "Keep a business' computer systems safe and secure.",
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 18,
    question: 'Ensure a businesses computer networks are working effectively.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 19,
    question: 'Learn how computers and servers function.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 20,
    question: 'Fix and upgrade computers.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 21,
    question: 'Design a website, mobile app, or magazine layout.',
    options: [
      { id: 1, score: 2, text: 'Very Interested' },
      { id: 2, score: 1, text: 'Interested' },
      { id: 3, score: 4, text: 'Slightly Interested' },
      { id: 4, score: 3, text: 'Not Interested' },
    ],
  },
  {
    id: 22,
    question: 'Troubleshoot software code.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 23,
    question: 'Participate in business strategy sessions.',
    options: [
      { id: 1, score: 1, text: 'Venus' },
      { id: 2, score: 3, text: 'jkeh' },
      { id: 3, score: 2, text: 'kjsk' },
      { id: 4, score: 4, text: 'jksdhk' },
    ],
  },
  {
    id: 24,
    question: 'Learn how to hack computer systems to identify security risks.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 25,
    question: 'Apply software and operating system updates.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 26,
    question: 'Teach people how their computer works.',
    options: [
      { id: 1, score: 3, text: 'Very Interested' },
      { id: 2, score: 4, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 27,
    question: 'Learn marketing techniques.',
    options: [
      { id: 1, score: 1, text: 'Very Interested' },
      { id: 2, score: 2, text: 'Interested' },
      { id: 3, score: 3, text: 'Slightly Interested' },
      { id: 4, score: 4, text: 'Not Interested' },
    ],
  },
  {
    id: 28,
    question: 'Develop software or websites.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 29,
    question: 'Analyze information.',
    options: [
      { id: 1, score: 3, text: 'Very Interested' },
      { id: 2, score: 4, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 30,
    question: 'Identify the security vulnerabilities in software.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 31,
    question: 'Maintain a network of computers.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 32,
    question: 'Recommend software and hardware improvements to a company.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  {
    id: 33,
    question:
      'Recommend a phone, tablet, or computer based on a person’s needs.',
    options: [
      { id: 1, score: 4, text: 'Very Interested' },
      { id: 2, score: 3, text: 'Interested' },
      { id: 3, score: 2, text: 'Slightly Interested' },
      { id: 4, score: 1, text: 'Not Interested' },
    ],
  },
  // Add more questions here
]

export const links = [
  {
    name: 'Home',
    route: 'home',
    icon: icons.home,
    index: true,
  },
  {
    name: 'Roadmap',
    route: 'roadmap',
    icon: icons.roadmap,
    index: true,
  },
  {
    name: 'Jobs',
    route: 'jobs',
    icon: icons.jobs,
    index: true,
  },
  {
    name: 'Messages',
    route: 'messages',
    icon: icons.message,
    index: true,
  },
  {
    name: 'Activity',
    route: 'activity',
    icon: icons.notification2,
    index: true,
  },
]

export const exploreItems = [
  {
    text: 'Discover and learn the skills other world-class (career .name e.g ) mobile engineer has that makes them top-notch.',
    image: images.explore1,
    title: 'Learning path',
  },
  {
    text: 'Discover roles from top tech and finance companies.',
    image: images.explore2,
    title: 'Jobs',
  },
  {
    text: 'Link up with like-minded persons, peers, mentors and grow as a group.',
    image: images.explore3,
    title: 'Community',
  },
]

export const cardItem = [
  {
    name: 'Opened to Opportunities',
    text: 'You’re actively looking and/ or open to new opportunities. Your Profile is visible to  recruiters.',
    icon: icons.openBannerIcon,
  },
  {
    name: 'Closed to Opportunities',
    text: 'You’re not looking for new opportunities right now.',
    icon: icons.closeBannerIcon,
  },
]

export const levels = [
  {
    percentage: 10,
    name: 'Beginner',
  },
  {
    percentage: 20,
    name: 'Intermediate',
  },
  {
    percentage: 30,
    name: 'Advance',
  },
]

export const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'New York',
    image: images.job,
    location: 'New York',
    position: 'Junior Software Engineer',
    posted: '2021-09-23 14:30:00',
    applicants: 12,
  },
]

export const intern = [
  {
    id: '3dea2mnwKKh2a904opPk',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    isEmployer: false,
    isVerified: true,
    careerPath: 'Software Engineer',
    careerLevel: 'beginner',
    careerDescription: 'I am a software engineer',
    careerSkills: [
      { id: 1, name: 'Java', proficiency: 3 }, // 1 - 5
    ],
    careerExperience: [
      {
        id: 1,
        title: 'Software Engineer',
        company: 'Google',
        location: 'New York',
        description: 'I am a software engineer',
        startDate: '2021-09-23 14:30:00',
        endDate: '2021-09-23 14:30:00',
      },
    ],
    education: [
      {
        id: 1,
        school: 'University of Lagos',
        degree: 'BSc Computer Science',
        fieldOfStudy: 'Computer Science',
        gpa: '4.0',
        startDate: '2021-09-23 14:30:00',
        endDate: '2021-09-23 14:30:00',
      },
    ],
    certifications: [
      {
        id: 1,
        name: 'Java',
        authority: 'Oracle',
      },
    ],
    projects: [
      {
        id: 1,
        name: 'Java',
        description: 'Java',
        link: 'https://project.com',
        skillSet: ['Python', 'MongoDB', 'Express', 'React', 'Node'],
        description: 'A game project',
        startDate: '2021-09-23 14:30:00',
        endDate: '2021-09-23 14:30:00',
      },
    ],

    socials: {
      github: 'https://github.com/user',
      twitter: 'https://twitter.com/user',
      linkedin: 'https://linkedin.com/in/user',
      website: 'https://website.com',
    },
  },
]

export const employer = [
  {
    id: '3dea2mnwKKh2a904opPk',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe@gmail.com',
    isEmployer: true,
    isVerified: true,
    companyName: 'Moveable',
    companyDescription: 'Logistics company',
    companyWebsite: 'https://google.com',
    companySize: '1000-9000',
    companyLocation: 'New York',
    companyIndustry: 'Logistics',
    companyLogo: images.companyLogo,
    companyCover: images.companyCover,
    open: true,
    companySocials: {
      github: 'https://github.com/company',
      twitter: 'https://twitter.com/company',
      linkedin: 'https://linkedin.com/in/company',
      website: 'https://website.com',
    },
    jobs: [
      {
        id: 1,
        title: 'Software Engineer',
        company: 'Google',
        location: 'New York',
        image: images.job,
        location: 'New York',
        position: 'Junior Software Engineer',
        posted: '2021-09-23 14:30:00',
        max_applicants: 12,
        type: 'Full Time',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        requirements: [
          { id: 1, name: 'Java', proficiency: 3 }, // 1 - 5
        ],
        skills: [
          { id: 1, name: 'Java', proficiency: 3 }, // 1 - 5
        ],
        benefits: {
          salary: 100000,
          healthInsurance: true,
          pension: true,
          paidTimeOff: true,
          remote: true,
          relocation: true,
        },
      },
    ],
  },
]

const interns = [
  {
    id: '3dea2mnwKKh2a904opPk',
    firstName: 'John',
    lastName: 'Doe',
    email: 'joe#doe.com',
    image: images.user3,
    path: 'Software Engineer',
    level: 'beginner',
    projects: [
      {
        id: 1,
        name: 'Java',
        description: 'Java',
        link: 'https://project.com',
        skillSet: ['Python', 'MongoDB', 'Express', 'React', 'Node'],
        description: 'A game project',
        startDate: '2021-09-23 14:30:00',
        endDate: '2021-09-23 14:30:00',
      },
    ],
  },
]
