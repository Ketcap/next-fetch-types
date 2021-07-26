
export default function Fact({ data }) {
  return (
    <div>
      <p>{data.text}</p>
    </div>
  )
}

// On request
export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://uselessfacts.jsph.pl/${id}.json`)
  const data = await res.json();
  return {
    props: {
      data
    },
  }
}



