export interface Project {
  id: string;
  title: string;
  details: string;
  importanceLevel: number;
  approved: boolean;
}

export const emptyProject = {
  id: null,
  title: '',
  details: '',
  importanceLevel: 0,
  approved: false,
};
