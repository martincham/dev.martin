import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-golden">
      <div className="mx-auto text-center p-4 ">
        <h2 className="text-background py-2">Projects</h2>
        <div className="grid opacity-100 grid-cols-1 sm:grid-cols-2  gap-8 p-4">
          <Card className="">
            <CardHeader>
              <CardTitle>Art Portfolio</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
          <Card className="w- backdrop-blur-sm ">
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
