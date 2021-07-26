import Link from "next/link";

export default function Random({ data }) {
  return (
    <div>
      <Link href={`/random/${data.id}`} passHref>
        <p>{data.text}</p>
      </Link>
    </div>
  )
}

// On request
export async function getServerSideProps(context) {
  const res = await fetch('https://uselessfacts.jsph.pl/random.json?language=en')
  const data = await res.json();
  return {
    props: {
      data
    },
  }
}



