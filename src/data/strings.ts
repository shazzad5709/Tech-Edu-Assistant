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
  courses: {
    code: string;
    title: string;
  }[];
}

export const semestersData: SemesterData[] = [
  {
    slug: '1stSem', name: '1st Semester', courses: [
      { code: "CSE101", title: "Structured Programming" },
      { code: "CSE102", title: "Discrete Mathematics" },
      { code: "STAT103", title: "Probability and Statistics for Engineers I" },
      { code: "MATH104", title: "Calculus and Analytical Geometry" },
      { code: "GE105", title: "Sociology" },
      { code: "SE106", title: "Introduction to Software Engineering" }
    ]
  },
  {
    slug: '2ndSem', name: '2nd Semester', courses: [
      { code: "CSE201", title: "Data Structure and Algorithm" },
      { code: "CSE211", title: "Computer Organization" },
      { code: "STAT203", title: "Probability and Statistics for Engineers II" },
      { code: "MATH204", title: "Ordinary Differential Equations" },
      { code: "GE212", title: "Bangladesh Studies" },
      { code: "SE206", title: "Object Oriented Concepts I" }
    ]
  },
  {
    slug: '3rdSem', name: '3rd Semester', courses: [
      { code: "CSE301", title: "Combinatorial Optimization" },
      { code: "SE312", title: "Theory of Computing" },
      { code: "CSE311", title: "Computer Networking" },
      { code: "MATH304", title: "Numerical Analysis for Engineers" },
      { code: "SE305", title: "Software Project Lab I" },
      { code: "SE306", title: "Object Oriented Concepts II" }
    ]
  },
  {
    slug: '4thSem', name: '4th Semester', courses: [
      { code: "CSE401", title: "Operating System and System Programming" },
      { code: "GE402", title: "Business Psychology" },
      { code: "CSE411", title: "Information Security" },
      { code: "CSE404", title: "Database Management System I" },
      { code: "BUS405", title: "Business Studies for Engineers" },
      { code: "SE406", title: "Software Requirements Specification and Analysis" }
    ]
  },
  {
    slug: '5thSem', name: '5th Semester', courses: [
      { code: "SE511", title: "Professional Ethics for Information Systems" },
      { code: "CSE502", title: "Web Technology" },
      { code: "BUS503", title: "Business Communications" },
      { code: "CSE504", title: "Database Management System II" },
      { code: "SE505", title: "Software Project Lab II" },
      { code: "SE506", title: "Design Patterns" }
    ]
  },
  {
    slug: '6thSem', name: '6th Semester', courses: [
      { code: "CSE601", title: "Distributed Systems" },
      { code: "SE611", title: "Software Metrics" },
      { code: "SE612", title: "Software Security" },
      { code: "CSE604", title: "Artificial Intelligence" },
      { code: "SE605", title: "Software Testing and Quality Assurance" },
      { code: "SE606", title: "Software Design and Analysis" }
    ]
  },
  {
    slug: '7thSem', name: '7th Semester', courses: [
      { code: "SE701", title: "Internship" }
    ]
  },
  {
    slug: '8thSem', name: '8th Semester', courses: [
      { code: "SE801", title: "Project" },
      { code: "SE811", title: "Software Maintenance" },
      { code: "SE803", title: "Software Project Management" },
      { code: "CSE837", title: "Machine Learning" },
      { code: "CSE829", title: "Pattern Recognition Image Processing" }
    ]
  },
];