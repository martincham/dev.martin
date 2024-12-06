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
    <section id="projects" className="">
      <div className="mx-auto text-center bg-secondary backdrop-blur-md border rounded-3xl p-4 ">
        <h2 className="text-3xl font-semibold py-2">Projects</h2>
        <div className="grid opacity-100 grid-cols-1 md:grid-cols-2  gap-8 p-4">
          <Card
            className="    cursor-pointer select-none
              active:translate-y-2  active:[box-shadow:0_0px_0_0_var(--border),0_0px_0_0_var(--muted)]
              active:border-b-[0px]
              transition-all duration-150 [box-shadow:0_6px_0_0_var(--border),0_9px_0_0_var(--muted)]
                "
          >
            <CardHeader>
              <CardTitle>Websites</CardTitle>
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
