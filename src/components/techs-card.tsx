import { GrJava } from "react-icons/gr";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SiNestjs, SiSpringboot } from "react-icons/si";
import { Code2 } from "lucide-react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular, FaAws, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export default function TechsCard() {
  const techs = [
    {
      title: "Java",
      description: "Java é uma linguagem de programação criada pela Sun Microsystems",
      icon: <GrJava size={48} />,
    },
    {
      title: "Spring Boot",
      description: "Spring Boot é um framework para o desenvolvimento de aplicativos Java",
      icon: <SiSpringboot size={48} />,
    },
    {
      title: "Typescript",
      description: "Typescript é um superset do Javascript criado pela Microsoft",
      icon: <BiLogoTypescript size={48} />,
    },
    {
      title: "NestJS",
      description: "NestJS é um framework para o desenvolvimento de APIs Node.js",
      icon: <SiNestjs size={48} />,
    },
    {
      title: "React",
      description: "React é uma biblioteca JavaScript para criação de interfaces de usuário",
      icon: <FaReact size={48} />,
    },
    {
      title: "Angular",
      description: "Angular é um framework TypeScript para criação de interfaces de usuário",
      icon: <FaAngular size={48} />,
    },
    {
      title: "MongoDB",
      description: "MongoDB é uma base de dados NoSQL",
      icon: <DiMongodb size={48} />,
    },
    {
      title: "SQL",
      description: "SQL é uma linguagem de banco de dados",
      icon: <TbFileTypeSql size={48} />,
    },
    {
      title: "AWS",
      description: "AWS é uma plataforma de serviços em cloud",
      icon: <FaAws size={48} />,
    },
    {
      title: "Azure",
      description: "Azure é uma plataforma de serviços em cloud",
      icon: <VscAzure size={48} />,
    }
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex gap-2"><Code2 /> Tecnologias que uso:</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
          {techs.map((tech, index) => {
            return (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <Button className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-32 xl:h-32" variant="outline">{tech.icon}</Button>
                </HoverCardTrigger>
                <HoverCardContent>
                  <h2 className="font-bold">{tech.title}</h2>
                  <p className="opacity-80">{tech.description}</p>
                </HoverCardContent>
              </HoverCard>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}