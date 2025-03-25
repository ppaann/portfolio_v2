import React from 'react';
import { ProjectSummary } from '@/modules';
import ProjectDetail from './ProjectDetail';

const ProjectsPage: React.FC = () => {
  return (
    <article>
      <ProjectSummary
        heading='Case Study: Elevating UI-to-Code Workflow through UX Engineering'
        description='Project: Nuage Configuration Tool for Microsoft (Internal Tool – UI Confidential)'
      />
      <ProjectDetail />
    </article>
  );
};

export default ProjectsPage;
