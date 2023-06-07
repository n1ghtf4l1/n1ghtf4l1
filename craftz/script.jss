const cardsContainer = document.getElementById('cards');

// Sample data (replace with your own)
const items = [
  {
    title: 'Item 1',
    image: 'item1.jpg',
    description: 'Description for Item 1',
  },
  {
    title: 'Item 2',
    image: 'item2.jpg',
    description: 'Description for Item 2',
  },
  {
    title: 'Item 3',
    image: 'item3.jpg',
    description: 'Description for Item 3',
  },
];

// Create cards dynamically
items.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';

  const image = document.createElement('div');
  image.className = 'card-image';
  image.style.backgroundImage = `url('${item.image}')`;

  const content = document.createElement('div');
  content.className = 'card-content';

  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = item.title;

  const description = document.createElement('p');
  description.className = 'card-description';
  description.textContent = item.description;

  content.appendChild(title);
  content.appendChild(description);

  card.appendChild(image);
  card.appendChild(content);

  cardsContainer.appendChild(card);
});
