export default function ProductsPage({ params }) {
  const decodedName = decodeURIComponent(params.name);

  return (
    <main>
      <h1>{decodedName}</h1>
      This is a single products page
    </main>
  );
}
