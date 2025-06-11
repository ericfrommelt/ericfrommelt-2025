export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 p-4 py-4">
      <div className="py-4">
        <ul className="flex flex-col text-sm">
          <li>Los Angeles, CA</li>
        </ul>
      </div>

      <div className="py-4">
        <h6 className="text-sm bold">Contact</h6>
        <ul className="flex flex-col text-sm">
          <li>
            <a href="mailto:eric@ericfrommelt.com" className="hover:underline">
              eric@ericfrommelt.com
            </a>
          </li>
        </ul>
      </div>

      <div className="py-4">
        <h6 className="text-sm bold">Follow</h6>
        <ul className="flex flex-col text-sm">
          <li>
            <a href="https://bsky.app/profile/ericfrommelt.bsky.social" className="hover:underline">
              Bluesky
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/eric.frommelt/" className="hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ericfrommelt/" className="hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="py-4 text-sm">
        © {new Date().getFullYear()} Eric Frommelt
      </div>
    </footer>
  );
}