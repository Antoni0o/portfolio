import { TerminalSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function MainCard() {
  return (
    <Card className="flex items-center lg:justify-between p-8 mb-6">
      <div className="flex flex-col items-center w-full lg:items-start lg:w-1/2">
        <div className="mb-28">
          <h1 className="text-5xl lg:text-7xl font-bold mb-2">Olá, mundo!</h1>
          <h2 className="text-xl font-medium text-zinc-400">Me chamo Antonio. Sou um desenvolvedor de software Full-Stack e entusiasta da tecnologia!</h2>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/Antoni0o">
            <Button className="flex items-center gap-2">
              <FaGithub size={22} /> Github
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/antonio-dias788/">
            <Button
              variant="outline"
              className="flex items-center gap-2"
            >
              <FaLinkedin size={22} />LinkedIn
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex lg:flex xl:flex">
        <TerminalSquare size={360} />
      </div>
    </Card>
  );
}