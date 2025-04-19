export const semesters = [
  '1st Semester',
  '2nd Semester',
  '3rd Semester',
  '4th Semester',
  '5th Semester',
  '6th Semester',
  '7th Semester',
  '8th Semester',
];

export const subjects = [
  'Computer Fundamentals',
  'Computer Engineering',
  'Programming',
  'Software Engineering',
  'Mathematics & Statistics',
  'Information Technology',
  'General Studies',
];

export interface SemesterData {
  slug: string;
  name: string;
  courses: string[];
}

export const semestersData: SemesterData[] = [
  {
    slug: '1stSem', name: '1st Semester', courses: [
      'Structured Programming',
      'Discrete Mathematics',
      'Calculus and Analytic Geometry',
      'Probability and Statistics for Engineers I',
      'Sociology',
      'Introduction to Software Engineering'
    ]
  },
  {
    slug: '2ndSem', name: '2nd Semester', courses: [
      "Data Structure & Algorithm",
      "Object Oriented Concepts I",
      "Ordinary Differential Equations",
      "Probability and Statistics for Engineers II",
      "Bangladesh Studies",
      "Computer Organization"
    ]
  },
  {
    slug: '3rdSem', name: '3rd Semester', courses: [
      "Combinatorial Optimization",
      "Object Oriented Concepts II",
      "Numerical Analysis for Engineers",
      "Theory of Computing",
      "Computer Networking",
      "Software Project Lab I"
    ]
  },
  {
    slug: '4thSem', name: '4th Semester', courses: [
      "Operating System & System Operating",
      "Software Requirements Specification & Analysis",
      "Information Security",
      "Database Management System I",
      "Business Psychology",
      "Business Studies for Engineers"
    ]
  },
  {
    slug: '5thSem', name: '5th Semester', courses: [
      "Design Patterns",
      "Web Technology",
      "Database Management System II",
      "Business Communications",
      "Professional Ethics for Information Systems",
      "Software Project Lab II"
    ]
  },
  {
    slug: '6thSem', name: '6th Semester', courses: [
      "Distributed System",
      "Artificial Intelligence",
      "Software Testing",
      "Software Design",
      "Software Metrics",
      "Software Security"
    ]
  },
  { slug: '7thSem', name: '7th Semester', courses: ['Internship'] },
  {
    slug: '8thSem', name: '8th Semester', courses: [
      "Software Project Management",
      "Machine Learning",
      "Pattern Recognition and Image Processing",
      "Software Maintenance",
      "Software Project Lab III"
    ]
  },
];