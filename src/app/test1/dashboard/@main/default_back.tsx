import { CurrentRoute } from '@/app/test1/dashboard/_ui/current-route';
import { Boundary } from '@ui/boundary';
import Link from 'next/link';

export default function Default_back() {
  return (
    <Boundary labels={['@main/default.tsx']} color="blue" size="small">
      <div className="prose prose-sm prose-invert max-w-none">
        <h2 className="text-lg font-bold">Default UI</h2>

        <p>
          Default UI is rendered because the <code>@main</code> slot{' '}
          <strong>does not</strong> contain a route segment that matches the
          current{' '}
          <code>
            /<CurrentRoute slice={1} />
          </code>{' '}
          route.
        </p>

        <ul className="text-xs">
          <li>
            <code>
              @main/
              <CurrentRoute />
              /page.js
            </code>{' '}
            does not exist.
          </li>

          <li>
            <code>@main/default.js</code> exists.
          </li>
        </ul>
        <div className="not-prose flex">
          <Link
            href="/test1/dashboard"
            className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </Boundary>
  );
}
