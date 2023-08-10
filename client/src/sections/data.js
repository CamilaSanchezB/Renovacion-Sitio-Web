import MDQubeSat from '../components/MDQubeSAT';
import MDQSAT from '../components/PocketMDQSAT';

const data = [
  {
    id: 0,
    title: "MDQube Sat 1",
    description: [
      'PocketQube (2P)',
      '470 gr.',
      '100x100x50 mm',
      '280x280x50 mm',
      '"San Martin"',
      'January 14th 2022',
      'Falcon 9'
    ],
    modelo: MDQubeSat,
  },
  {
    id: 1,
    title: "MDQube Sat 1 A&B",
    description: [
      'CubeSats (0.5U)',
      '670 gr.',
      '100x100x50 mm',
      '280x280x50 mm',
      '"Juana Azurduy" & "Dibu Martinez"',
      'January 13th 2023',
      'Falcon 9'
    ],
    modelo: MDQSAT,
  },
];

export default data;
