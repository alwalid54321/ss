const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = 3001;

    app.use(cors());

    const products = [
      {
        id: 1,
        name: 'A1',
        fob_sdpzu: 1200,
        cnf_aejea: 1800,
        cnf_inach1: 2100,
        cnf_cnahk: 1450,
        cnf_trmer: 1600,
        price: '1,300',
        last_update: '2 hours',
        forecast: 'up',
      },
      {
        id: 2,
        name: 'A2',
        fob_sdpzu: 1750,
        cnf_aejea: 1830,
        cnf_inach1: 2400,
        cnf_cnahk: 2380,
        cnf_trmer: 3100,
        price: '850',
        last_update: '6 hours',
        forecast: 'up',
      },
      {
        id: 3,
        name: 'B1',
        fob_sdpzu: 1300,
        cnf_aejea: 1900,
        cnf_inach1: 2200,
        cnf_cnahk: 1550,
        cnf_trmer: 1700,
        price: '1,400',
        last_update: '3 hours',
        forecast: 'down',
      },
      {
        id: 4,
        name: 'B2',
        fob_sdpzu: 1850,
        cnf_aejea: 1930,
        cnf_inach1: 2500,
        cnf_cnahk: 2480,
        cnf_trmer: 3200,
        price: '950',
        last_update: '7 hours',
        forecast: 'up',
      },
      {
        id: 5,
        name: 'C1',
        fob_sdpzu: 1400,
        cnf_aejea: 2000,
        cnf_inach1: 2300,
        cnf_cnahk: 1650,
        cnf_trmer: 1800,
        price: '1,500',
        last_update: '4 hours',
        forecast: 'up',
      },
      {
        id: 6,
        name: 'C2',
        fob_sdpzu: 1950,
        cnf_aejea: 2030,
        cnf_inach1: 2600,
        cnf_cnahk: 2580,
        cnf_trmer: 3300,
        price: '1050',
        last_update: '8 hours',
        forecast: 'down',
      },
    ];

    app.get('/api/sudastock/products', (req, res) => {
      res.json(products);
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
