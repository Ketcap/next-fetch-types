export default function Ship({ data: item }) {
  return (
    <li>
      <b>{item?.name}</b><br />
      {item?.roles?.join(' ')} /<br />
      {item?.type} / <br />
      {item?.home_port}
      <hr />
    </li>
  )
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://api.spacexdata.com/v4/ships/${id}`);
  const data = await res.json();
  if (!data) {
    return {
      redirect: {
        destination: '/ships',
        permanent: false
      }
    }
  }
  return {
    props: {
      data
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://api.spacexdata.com/v4/ships')
  const data = await res.json();
  return {
    paths: data.map(i => `/ships/${i.id}`),
    fallback: true
  }
}