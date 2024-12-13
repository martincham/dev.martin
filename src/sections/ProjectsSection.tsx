import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-golden text-black">
      <div className="mx-auto text-left p-4 ">
        <h2 className=" ml-[10vw] py-2">Projects</h2>
        <div className="grid opacity-100 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <ScrollAnimation>
            <Card className="">
              <CardHeader>
                <CardTitle>Developer Portfolio</CardTitle>
                <CardDescription>
                  Built with React.js, Tailwind CSS,
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="justify-between">
                <a
                  href="https://github.com/martincham/martincham.github.io"
                  className="text-blue-600 hover:text-muted-foreground"
                >
                  GitHub -{">"}
                </a>
                <p className="text-black">2024</p>
              </CardFooter>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation>
            <Card className="">
              <CardHeader>
                <CardTitle>Art Portfolio Website</CardTitle>
                <CardDescription>
                  Built with React.js, Tailwind CSS,
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="justify-between">
                <a
                  href="https://github.com/martincham/martincham.github.io"
                  className="text-blue-600 hover:text-muted-foreground"
                >
                  GitHub -{">"}
                </a>
                <p className="text-black">2024</p>
              </CardFooter>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation>
            <Card className="">
              <CardHeader>
                <CardTitle>NBA Player Analyzer</CardTitle>
                <CardDescription>
                  Custom algorithm for evaluating player value. Pushes data to
                  Google Sheets API.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="justify-between">
                <a
                  href="https://github.com/martincham/espn-nba-fantasy-analyzer"
                  className="text-blue-600 hover:text-muted-foreground"
                >
                  GitHub -{">"}
                </a>
                <p className="text-black">2023-24</p>
              </CardFooter>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation>
            <Card className="">
              <CardHeader>
                <CardTitle>Machine Learning Parts Catalog</CardTitle>
                <CardDescription>
                  Art projects using Machine Learning to create a catalog of
                  useless parts.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="justify-between">
                <a
                  href="https://github.com/martincham/mcMasterImageMosaic"
                  className="text-blue-600 hover:text-muted-foreground"
                >
                  GitHub -{">"}
                </a>
                <p className="text-black">2021</p>
              </CardFooter>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
