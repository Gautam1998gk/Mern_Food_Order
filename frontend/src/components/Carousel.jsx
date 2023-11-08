import { useState } from "react";

const Carousel = ({ handleSearch }) => {
  const [search, setSearch] = useState("")
  const submitHandler = (e) => {
    e.preventDefault()
    handleSearch(search)
    setSearch("")
  }
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption z-2 position-absolute p-5 rounded-3">
            <form className="d-flex" onSubmit={submitHandler}>
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success bg-success text-white btn-sm m-1"
                type="submit"
              >
                Search
              </button>
              <button
                className="btn btn-outline-success bg-secondary text-white btn-sm m-1"
                type="submit"
              >
                clear
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              className="d-block w-100"
              alt="protienfood"
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              className="d-block w-100"
              alt="pizza"
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://images.unsplash.com/photo-1587314168485-3236d6710814"
              className="d-block w-100"
              alt="desserts"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
