import Link from "next/link";

export default function Home() {
  return (<div><h1>Home page</h1>
  <div><Link href="/api/auth/login">LOGIN</Link></div></div>);
}
