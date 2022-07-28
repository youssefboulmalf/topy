import Link from 'next/link';


const Breadcrumb = () => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li><Link href="/"><a href="/"><i className="icon-home"></i></a></Link></li>
        <li>All Products</li>
      </ul>
    </div>
  </section>
);


export default Breadcrumb