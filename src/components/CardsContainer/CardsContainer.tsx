import React, {useEffect, useState, useRef, useCallback} from "react";
import Loading from "../Loading/Loading";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import CardsPage from "../CardsPage/CardsPage";
import { UserEntry } from "@/types";

/**
 * Wrapper component for card pages with cards in them
 *
 * @component
 */
const CardsContainer = () => {
	const loadingRef = useRef<HTMLDivElement | null>(null);
	const [pageIDs, setPageIDs] = useState<Array<number>>([0]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string }>({ message: ''});

	const intersectionObserverOptions = {
		rootMargin: '0px',
		threshold: [0, 0.5]
	}

	const fetchUsers = useCallback(async () => {
		setIsLoading(true);
    const data = await fetch(`https://randomuser.me/api/?results=5&inc=name,email,picture&noinfo`);
		const json = await data.json();
		setIsLoading(false)

		if (json?.results) return json.results;
		return [];
	}, []);

	useEffect(() => {
    let target: any;
		const observer: IntersectionObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0.5 && !isLoading) {
					setPageIDs(prevState => [...prevState, prevState.length + 1])
				}
			})
		}, intersectionObserverOptions);

		target = loadingRef.current;

		if (target) observer.observe(target);

		return () => {
			if (observer && target) observer.unobserve(target);
		}
	}, [isLoading])

	if (isError) return <ErrorMessage message={`ERROR: ${error.message}`} />

	return (
      <div className='px-4 py-8 md:px-6 md:py-10 lg:py-12'>
        <div className='mx-auto w-full max-w-6xl'>
          <div className='flex flex-col items-center gap-12'>

						{pageIDs.map((id) => (
							<CardsPage key={id} fetchUsers={fetchUsers} />
						))}

						<div ref={loadingRef}>
							<Loading />
						</div>
          </div>
        </div>
      </div>
	);
}
 
export default CardsContainer;
