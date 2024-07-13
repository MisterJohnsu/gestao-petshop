// app/home/page.tsx
import Link from 'next/link';
import Menu from './menuLateral/page'

export default function Index() {
  return (
    <div>
    <header>
      <Menu />
      <section>
        <main className=''>
        <h1 className='pl-[5.4rem]'>Hello Word!</h1>
        </main>
      </section>
    </header>
    </div>
  );
}
