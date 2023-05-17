import Link from 'next/link'

export default function Hoge() {
  return (
    <>
      <h1>hoge</h1>
      <Link href={{pathname: "/hoge/blog/first", query: {ley: "value"}}}>
        <a>o7_router</a>
      </Link>
    </>
  )
}