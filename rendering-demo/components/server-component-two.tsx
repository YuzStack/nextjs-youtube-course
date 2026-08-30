import fs from 'fs';

export default function ServerComponentTwo() {
  fs.readFileSync('./components/server-component-two.tsx', 'utf-8');

  return <h1>Server Component Two</h1>;
}
