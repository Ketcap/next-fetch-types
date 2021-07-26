import Link from 'next/link'

export default function Home({data}) {
  return (
    <>
    <Link href='/ships'><a>Ships</a></Link>
    <ul>
      <li style={{listStyle:'none'}}><h3>History of Space X</h3></li>
      {data.map((item, index) => (
        <li key={index}>
          {item.title} /<br/>
          {item.details} / <br/>
          {item.links.article}
          <hr/>
        </li>
      ))}
    </ul>
</>
  )
}

// On Build Time
export async function getStaticProps(context) {
  const res = await fetch('https://api.spacexdata.com/v4/history')
  const data = await res.json();
  console.log(data.length)
  return {
    props: {
      data
    },
  }
}
