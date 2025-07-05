import React from 'react';
import introDat from '../data/introData';

const Intro = () => {
  return (
    // <div>
    //   <h1>{introDat.name}</h1>
    //   <img src={introDat.img} />
    //   <p>{introDat.intro}</p>
    // </div>
    <div className="container">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        {' '}
        <div class="col-10 col-sm-8 col-lg-6">
          {' '}
          <img
            src={introDat.img}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />{' '}
        </div>{' '}
        <div class="col-lg-6">
          {' '}
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            {introDat.name}
          </h1>{' '}
          <p class="lead">{introDat.intro}</p>{' '}
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            {' '}
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Contacts
            </button>{' '}
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  );
};

export default Intro;
