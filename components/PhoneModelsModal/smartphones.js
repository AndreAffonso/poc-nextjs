const _8GB = '8GB';
const _16GB = '16GB';
const _32GB = '32GB';
const _64GB = '64GB';
const _128GB = '128GB';
const _256GB = '256GB';
const _512GB = '512GB';
const _1024GB = '1024GB';

const APPLE = {
  name: 'Apple',
  models: [
    { name: 'Iphone 5', memories: [_16GB, _32GB, _64GB] },

    { name: 'Iphone 5C', memories: [_16GB, _32GB, _8GB] },

    { name: 'Iphone 5S', memories: [_16GB, _32GB, _64GB] },

    { name: 'Iphone 6', memories: [_16GB, _32GB, _64GB, _128GB] },

    { name: 'Iphone 6 PLUS', memories: [_16GB, _64GB, _128GB] },

    { name: 'Iphone 6S', memories: [_16GB, _32GB, _64GB, _128GB] },

    { name: 'Iphone 6S PLUS', memories: [_16GB, _32GB, _64GB, _128GB] },

    { name: 'Iphone 7', memories: [_32GB, _128GB, _256GB] },

    { name: 'Iphone 7 PLUS', memories: [_32GB, _128GB, _256GB] },

    { name: 'Iphone 8', memories: [_64GB, _256GB] },

    { name: 'Iphone 8 PLUS', memories: [_64GB, _256GB] },

    { name: 'Iphone SE', memories: [_16GB, _32GB, _64GB, _128GB] },

    { name: 'Iphone X', memories: [_64GB, _256GB] },

    { name: 'Iphone XR', memories: [_64GB, _128GB, _256GB] },

    { name: 'Iphone XS', memories: [_64GB, _256GB, _512GB] },

    { name: 'Iphone XS MAX', memories: [_64GB, _256GB, _512GB] },
  ],
};

const SAMSUNG_GALAXY_S = {
  name: 'Samsung Galaxy S',
  models: [
    { name: 'Galaxy S8', memories: [_64GB] },

    { name: 'Galaxy S8 PLUS', memories: [_64GB, _128GB] },

    { name: 'Galaxy S9', memories: [_64GB, _128GB] },

    { name: 'Galaxy S9 PLUS', memories: [_64GB, _128GB] },

    { name: 'Galaxy S19', memories: [_128GB, _512GB] },

    { name: 'Galaxy S10 PLUS', memories: [_128GB, _512GB, _1024GB] },

    { name: 'Galaxy S10E', memories: [_128GB] },
  ],
};

const SAMSUNG_GALAXY_J = {
  name: 'Samsung Galaxy J',
  models: [
    { name: 'Galaxy J2 PRIME', memories: [_8GB, _16GB] },

    { name: 'Galaxy J5 PRIME', memories: [_32GB] },

    { name: 'Galaxy J7 PRIME', memories: [_32GB] },

    { name: 'Galaxy J7 PRIME 2', memories: [_32GB] },

    { name: 'Galaxy J2 PRO', memories: [_16GB] },

    { name: 'Galaxy J5 PRO', memories: [_32GB] },

    { name: 'Galaxy J7 PRO', memories: [_64GB] },

    { name: 'Galaxy J4 CORE', memories: [_16GB] },

    { name: 'Galaxy J4', memories: [_16GB, _32GB] },

    { name: 'Galaxy J4 PLUS', memories: [_32GB] },

    { name: 'Galaxy J6', memories: [_32GB, _64GB] },

    { name: 'Galaxy J6 PLUS', memories: [_32GB] },

    { name: 'Galaxy J7 DUO', memories: [_32GB] },

    { name: 'Galaxy J7 NEO', memories: [_16GB] },

    { name: 'Galaxy J8', memories: [_64GB] },
  ],
};

const SAMSUNG_GALAXY_A = {
  name: 'Samsung Galaxy A',
  models: [
    { name: 'Galaxy A10', memories: [_32GB] },

    { name: 'Galaxy A20', memories: [_32GB] },

    { name: 'Galaxy A30', memories: [_64GB] },

    { name: 'Galaxy A50', memories: [_64GB, _128GB] },

    { name: 'Galaxy A70', memories: [_128GB] },

    { name: 'Galaxy A80', memories: [_128GB] },

    { name: 'Galaxy A9', memories: [_128GB] },

    { name: 'Galaxy A8', memories: [_64GB] },

    { name: 'Galaxy A8 PLUS', memories: [_64GB] },

    { name: 'Galaxy A7', memories: [_64GB, _128GB] },

    { name: 'Galaxy A6', memories: [_64GB] },
  ],
};

const SAMSUNG_GALAXY_NOTE = [
  {
    name: 'Samsung Galaxy Note',
    models: [
      { name: 'Galaxy note 8', memories: [_64GB, _128GB] },

      { name: 'Galaxy note 9', memories: [_128GB] },

      { name: 'Galaxy note 10', memories: [_256GB] },

      { name: 'Galaxy note 10 PLUS', memories: [_256GB, _512GB] },
    ],
  },
];

const smartphones = [APPLE, SAMSUNG_GALAXY_S, SAMSUNG_GALAXY_J, SAMSUNG_GALAXY_A, SAMSUNG_GALAXY_NOTE];

export default smartphones;
