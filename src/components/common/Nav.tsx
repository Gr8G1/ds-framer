import Link from 'next/link';
import paths from '../../../routes';

export default function Nav() {
  return (
    <ul className="flex flex-col gap-1.5 fixed left-5 top-5">
      {
        Object.entries(paths).map(([key, value]) => (
          <li key={key}>
            <Link href={value}>{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
          </li>
        ))
      }
    </ul>
  );
}