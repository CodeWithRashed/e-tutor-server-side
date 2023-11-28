const { model, Schema, default: mongoose } = require("mongoose");

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  enrollCount: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Course = model("Course", CourseSchema);

module.exports = Course;




// const teacherId = '6564c1249431dc33d4a1c218'; // Replace with the actual teacher ID

// const coursesData = [

//   {
//     title: 'Data Science Basics',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 39.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Explore the fundamentals of data science and analysis in this hands-on course.',
//     duration: '8 weeks',
//     level: 'Intermediate',
//     language: 'English',
//     enrollCount: 80,
//     rating: 4.2,
//   },
//   {
//     title: 'Mobile App Development with React Native',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 59.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Build cross-platform mobile apps using React Native in this comprehensive course.',
//     duration: '10 weeks',
//     level: 'Advanced',
//     language: 'English',
//     enrollCount: 120,
//     rating: 4.9,
//   },
//   {
//     title: 'Introduction to Machine Learning',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 44.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Learn the basics of machine learning and its applications in real-world scenarios.',
//     duration: '6 weeks',
//     level: 'Intermediate',
//     language: 'English',
//     enrollCount: 90,
//     rating: 4.7,
//   },
//   {
//     title: 'Graphic Design Fundamentals',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 34.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Master the fundamentals of graphic design and unleash your creative potential.',
//     duration: '5 weeks',
//     level: 'Beginner',
//     language: 'English',
//     enrollCount: 110,
//     rating: 4.4,
//   },
//   {
//     title: 'Cybersecurity Essentials',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 49.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Enhance your understanding of cybersecurity essentials and protect digital assets.',
//     duration: '7 weeks',
//     level: 'Intermediate',
//     language: 'English',
//     enrollCount: 100,
//     rating: 4.6,
//   },
//   {
//     title: 'Photography Masterclass',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 29.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Unlock the secrets of photography with this comprehensive masterclass.',
//     duration: '4 weeks',
//     level: 'Beginner',
//     language: 'English',
//     enrollCount: 130,
//     rating: 4.3,
//   },
//   {
//     title: 'UX/UI Design Principles',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 39.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Explore the principles of user experience and user interface design.',
//     duration: '6 weeks',
//     level: 'Intermediate',
//     language: 'English',
//     enrollCount: 95,
//     rating: 4.5,
//   },
//   {
//     title: 'Artificial Intelligence Applications',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 54.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Discover real-world applications of artificial intelligence in various industries.',
//     duration: '8 weeks',
//     level: 'Advanced',
//     language: 'English',
//     enrollCount: 85,
//     rating: 4.8,
//   },
//   {
//     title: 'Creative Writing Workshop',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 34.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Hone your creative writing skills through interactive workshops and exercises.',
//     duration: '5 weeks',
//     level: 'Beginner',
//     language: 'English',
//     enrollCount: 105,
//     rating: 4.4,
//   },
//   {
//     title: 'Digital Marketing Strategies',
//     teacher: mongoose.Types.ObjectId.createFromHexString(teacherId),
//     price: 44.99,
//     thumbnail: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9',
//     description: 'Explore effective digital marketing strategies to promote products and services.',
//     duration: '7 weeks',
//     level: 'Intermediate',
//     language: 'English',
//     enrollCount: 115,
//     rating: 4.6,
//   },

// ];

// Course.insertMany(coursesData)
//   .then((result) => {
//     console.log('Courses inserted successfully:', result);
//   })
//   .catch((error) => {
//     console.error('Error inserting courses:', error.message);
//   });
