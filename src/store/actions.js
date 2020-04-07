export const SET_VIEW = "SET_VIEW";
export function setview(view) {
    return {
      type: SET_VIEW,
      payload: view
    };
  }

export const SET_PROJECTS = "SET_PROJECTS";
export function setprojects(projects) {
    return {
      type: SET_PROJECTS,
      payload: projects
    };
  }
    

export const SET_CATEGORIES = "SET_CATEGORIES";
export function setcategories(categories) {
    return {
      type: SET_CATEGORIES,
      payload: categories
    };
  }
      
      