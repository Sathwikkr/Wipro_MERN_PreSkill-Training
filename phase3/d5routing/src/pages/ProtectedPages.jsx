import withAuth from "../hoc/withAuth";

// Assuming these components exist in the same directory or adjust paths accordingly
import Admin from './Admin';
import Employee from './Employee';
import Courses from './Courses';

export const ProtectedEmployeePage = withAuth(Employee);
export const ProtectedAdminPage = withAuth(Admin);
export const ProtectedCoursesPage = withAuth(Courses);