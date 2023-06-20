import React, {useEffect} from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const CardsContainer = () => {
	const [users, setUsers] = React.useState([]);

	const renderUsers = () => {};

	return (
      <div className='px-4 py-8 md:px-6 md:py-10 lg:py-12'>
        <div className='mx-auto w-full max-w-6xl'>
          <div className='grid grid-cols-1 gap-16'>
						<Card name='Gosha' email="goshamartynovich@gmail.com" />
						<Card name='Dima' email="dimadima@gmail.com" />
						<Loading />
          </div>
        </div>
      </div>
	);
}
 
export default CardsContainer;