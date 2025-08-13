// app/projects/page.tsx
import { Suspense } from "react";
import ProjectsPageContent from "./ProjectsPageContent";

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsPageContent />
    </Suspense>
  );
}
