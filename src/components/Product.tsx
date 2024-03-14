import React from "react";

const Products = [
  {title: "Gym Weight",
  image: "/feature_prod_01.jpg",
  price: 240.00,
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sunt in culpa qui officia deserunt.",
  revirew: 212},
  {
    title: "Cloud Nike Shoes",
  image: "/feature_prod_02.jpg",
  price: 480.00,
  desc: "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
  revirew: 212
  },
  {
    title: "Summer Addides Shoes",
  image: "/feature_prod_03.jpg",
  price: 240.00,
  desc: "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
  revirew: 234
  }
]

const Product = () => {
  return (
    <div>
      <section className='bg-light'>
        <div className='container py-5'>
          <div className='row text-center py-3'>
            <div className='col-lg-6 m-auto'>
              <h1 className='h1'>Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          {Products.map((item) =>{
            return <>
            
            <div className='row'>
            <div className='col-12 col-md-4 mb-4'>
              <div className='card h-100'>
                <a href='shop-single.html'>
                  <img
                    src={item.image}
                    className='card-img-top'
                    alt='...'
                  />
                </a>
                <div className='card-body'>
                  <ul className='list-unstyled d-flex justify-content-between'>
                    <li>
                      <i className='text-warning fa fa-star'></i>
                      <i className='text-warning fa fa-star'></i>
                      <i className='text-warning fa fa-star'></i>
                      <i className='text-muted fa fa-star'></i>
                      <i className='text-muted fa fa-star'></i>
                    </li>
                    <li className='text-muted text-right'>$ {item.price}</li>
                  </ul>
                  <a
                    href='shop-single.html'
                    className='h2 text-decoration-none text-dark'>
                    {item.title}
                  </a>
                  <p className='card-text'>
                    {item.desc}
                  </p>
                  <p className='text-muted'>Reviews ({item.revirew})</p>
                </div>
              </div>
            </div>
          </div>
            </>
          })}
        </div>
      </section>
    </div>
  );
};

export default Product;
