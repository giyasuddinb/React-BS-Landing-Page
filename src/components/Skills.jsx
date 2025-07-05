import React from 'react';

const skillsData = [
  {
    key: 1,
    title: 'Bootstrap',
    description: 'Lorem ipsum',
  },
  {
    key: 2,
    title: 'React',
    description: "I'm 3-years experience in React App Developing",
  },
];

const Skills = () => {
  return (
    <div class="container px-4 py-5" id="icon-grid">
      {' '}
      <h2 class="pb-2 border-bottom">Skills</h2>
      {skillsData.map((skill, ind) => {
        return (
          <div
            class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
            key={ind}
          >
            {' '}
            <div class="col d-flex align-items-start">
              {' '}
              <svg
                class="bi text-body-secondary flex-shrink-0 me-3"
                width="1.75em"
                height="1.75em"
                aria-hidden="true"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>{' '}
              <div>
                {' '}
                <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">
                  {skill.title}
                </h3>{' '}
                <p>{skill.description}</p>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
