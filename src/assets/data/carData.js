const images = require.context('../all-images/our-works/little-camp', true);
const images1 = require.context('../all-images/our-works/gazel', true);
const images2 = require.context('../all-images/our-works/camper', true);
const images3 = require.context('../all-images/our-works/almaz', true);
const images4 = require.context('../all-images/our-works/palatka', true);
const imageList = (name) => name.keys().map((image) => name(image));

const carData = [
  {
    id: 1,
    brand: 'Автодом',
    carName: 'Кемпер',
    imgUrl: imageList(images),
    description:
      'Кемпер с рычажно-пружинной подвеской. В задней части отсек с кухней: газовая плита, газовый баллон, раковина, место для готовки. Кондиционер, солнечные батареи, бак 50 литров, маркиза, Трума 4 кВт.',
  },

  {
    id: 2,
    brand: 'Автодом',
    carName: 'Соболь для МЧС',
    imgUrl: imageList(images1),
    description:
      'Новый проект на базе полноприводного шасси (4х4) Соболь. По решению заказчика машина переоборудована под серверную комнату.',
  },

  {
    id: 3,
    brand: 'Автодом',
    carName: 'Автодом',
    imgUrl: imageList(images2),
    description:
      'Полная реставрация и переоборудование автодома. Покраска, отделка внутри и снаружи.',
  },

  {
    id: 4,
    brand: 'Автодом',
    carName: 'Мерседес автодом',
    imgUrl: imageList(images3),
    description:
      'Установлена мебель, 2 спальных места. Газовая плита, раковина, солнечные батареи, маркиза.',
  },

  {
    id: 5,
    brand: 'Автодом',
    carName: 'Прицеп для багги',
    imgUrl: imageList(images4),
    description:
      'Прицеп для перевозки багги, квадроциклов и другой техники. Изготавливали с нуля, усиленная подвеска.',
  },
];

export default carData;
