import Link from "next/link";

export default function Ships({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <Link href={`/ships/${item.id}`} key={item.id} passHref>
          <li key={index}>
            <b>{item.name}</b>
            <hr />
          </li>
        </Link>
      ))}
    </ul>
  )
}

// On Build Time
export async function getStaticProps(context) {
  const res = await fetch('https://api.spacexdata.com/v4/ships')
  const data = await res.json();
  return {
    props: {
      data
    },
  }
}


