import image1 from '../assets/home-icons/mail-home.svg';
import image2 from '../assets/home-icons/report-home.svg';

const ItemList = () => {
  const items = [
    {
      image: image1,
      text: 'Excel list to mail recipients converter',
      link: 'https://captdany.github.io/UniTools/exceltomail',
    },
    {
      image: image2,
      text: 'Internship report formatter (comming soon)',
      link: 'https://captdany.github.io/UniTools/estadias',
    },
  ];

  return (
    <div className="item-list">
      {items.map((item, index) => (
        <a key={index} href={item.link} className='item-link'>
            <div className="item">
                <div className="image-container">
                    <img src={item.image} alt={item.text} className="rounded-image" />
                </div>
                <div className="text-footer">{item.text}</div>
            </div>
        </a>
      ))}
    </div>
  );
};

export default ItemList;
