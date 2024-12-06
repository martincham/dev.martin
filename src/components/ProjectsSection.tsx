import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 backdrop-blur-sm border-translucent-white border rounded-3xl"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
