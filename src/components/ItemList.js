import image1 from '../assets/home-icons/mail-home.svg';
import image2 from '../assets/home-icons/report-home.svg';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const items = [
    {
      image: image1,
      text: 'Excel list to mail recipients converter',
      link: '/UniTools/exceltomail',
    },
    {
      image: image2,
      text: 'Internship report formatter (comming soon)',
      link: '/UniTools/estadias',
    },
  ];

  return (
    <div className="item-list">
      {items.map((item, index) => (
        <Link key={index} to={item.link} className='item-link'>
            <div className="item">
                <div className="image-container">
                    <img src={item.image} alt={item.text} className="rounded-image" />
                </div>
                <div className="text-footer">{item.text}</div>
            </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;