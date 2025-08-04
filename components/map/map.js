"use client";
import React, { useState, useEffect } from 'react';
import { YMaps, Map, GeolocationControl } from '@pbe/react-yandex-maps';
import BtnComp from '../btn/BtnComp';

function MapComponent() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [distance, setDistance] = useState('');
  const [price, setPrice] = useState('');
  const [selectedTariff, setSelectedTariff] = useState(1.20); 
  const [ymapsLoaded, setYmapsLoaded] = useState(false);
  const [multiRoute, setMultiRoute] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const tariffs = {
    comfort: 1.20,
    business: 2.6,
    minivan: 1.60,
    standard: 1,
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`;
    script.async = true;
    script.onload = () => setYmapsLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const fetchSuggestions = async (query, type) => {
    if (!query) {
      if (type === 'from') {
        setFromSuggestions([]);
        setShowFromSuggestions(false);
      } else {
        setToSuggestions([]);
        setShowToSuggestions(false);
      }
      return;
    }
    
    try {
      const response = await fetch(`https://suggest-maps.yandex.ru/v1/suggest?apikey=8a14b480-5dff-4274-91b5-4f7836becaf9&types=geo&text=${query}&lang=ru_RU&results=5&origin=jsapi2Geocoder&print_address=1&bbox=-180,-90,180,90`);
      const data = await response.json();
      const suggestions = data.results || [];

      if (type === 'from') {
        setFromSuggestions(suggestions);
        setShowFromSuggestions(true);
      } else {
        setToSuggestions(suggestions);
        setShowToSuggestions(true);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  };

  const handleSuggestionClick = (suggestion, type) => {
    if (type === 'from') {
      setFrom(suggestion.address.formatted_address);
      setShowFromSuggestions(false);
    } else {
      setTo(suggestion.address.formatted_address);
      setShowToSuggestions(false);
    }
  };

  const handleCalculateRoute = () => {
    if (!ymapsLoaded || !window.ymaps) {
      console.error('ymaps is not loaded');
      return;
    }

    window.ymaps.ready(init);

    function init() {
      const newMultiRoute = new window.ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [from, to],
          params: { results: 1 }
        },
        { boundsAutoApply: true }
      );

      newMultiRoute.model.events.add('requestsuccess', () => {
        const activeRoute = newMultiRoute.getActiveRoute();
        const distanceText = activeRoute.properties.get('distance').text;
        const distanceKm = parseFloat(activeRoute.properties.get('distance').value) / 1000; // Convert to km
        setDistance(distanceKm.toFixed(2));
        calculatePrice(distanceKm, selectedTariff);
      });

      newMultiRoute.model.events.add('requestfail', () => {
        console.error('Route calculation failed');
      });

      setMultiRoute(newMultiRoute);
    }

    // Scroll down by 300px after calculating the route
    window.scrollBy({ top: 300, behavior: 'smooth' });
  };

  const calculatePrice = (distanceKm, tariffRate) => {
    let finalTariff = tariffRate;

    if (distanceKm <= 140) {
      finalTariff += 0.30;
    }

    const calculatedPrice = (distanceKm * finalTariff).toFixed(2);
    setPrice(calculatedPrice);
  };

  const handleTariffChange = (tariff) => {
    setSelectedTariff(tariffs[tariff]);
    if (distance) {
      calculatePrice(parseFloat(distance), tariffs[tariff]);
    }
  };

  return (
    <div className="sd:mt-12 xz:mt-6">
      {/* Radio buttons for tariff selection */}
      <div className='flex sd:flex-row xz:flex-col sd:space-x-4 xz:space-x-0 items-start sd:mb-7 xz:mb-3'>
        {Object.keys(tariffs).map((tariff) => (
          <div className="form-control" key={tariff}>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="tariff"
                defaultChecked={tariff === 'comfort'}
                className={`radio checked:bg-${tariff === 'comfort' ? 'blue-500' : tariff === 'business' ? 'purple-500' : tariff === 'minivan' ? 'cyan-500' : 'lime-500'}`}
                onChange={() => handleTariffChange(tariff)}
              />
              <span className="label-text ml-2 xz:font-normal xl:font-semibold">
                {tariff === 'comfort' ? 'Комфорт' : tariff === 'business' ? 'Бизнес' : tariff === 'minivan' ? 'Минивен' : 'Стандарт'}
              </span>
            </label>
          </div>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculateRoute();
        }}
        className='flex sd:flex-row xz:flex-col sd:items-end xz:items-start justify-between sd:mb-8 xz:mb-3 w-full sd:space-x-4 xz:space-x-0'
      >
        <div className='w-full relative'>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text xz:font-normal xl:font-semibold">
                Откуда:
              </span>
              <span className="label-text-alt text-gray-500">Обязательное поле</span>
            </div>
            <input
              type="text"
              placeholder="Введите адрес"
              className='input input-bordered w-full'
              value={from}
              onChange={(e) => {
                setFrom(e.target.value);
                fetchSuggestions(e.target.value, 'from');
              }}
              required
            />
            {/* Suggestions list */}
            {showFromSuggestions && fromSuggestions.length > 0 && (
              <ul className="absolute top-20 z-10 w-full bg-white border shadow-xl border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
                {fromSuggestions.map((suggestion, index) => (
                  <li 
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100 text-sm"
                    onClick={() => handleSuggestionClick(suggestion, 'from')}
                    dangerouslySetInnerHTML={{ __html: highlightMatch(suggestion.address.formatted_address, from) }}
                  />
                ))}
              </ul>
            )}
          </label>
        </div>
        <div className='w-full relative xz:mt-3 sd:mt-0'>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text xz:font-normal xl:font-semibold">
                Куда:
              </span>
              <span className="label-text-alt text-gray-500">Обязательное поле</span>
            </div>
            <input
              type="text"
              placeholder="Введите адрес"
              className='input input-bordered w-full'
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
                fetchSuggestions(e.target.value, 'to');
              }}
              required
            />
            {/* Suggestions list */}
            {showToSuggestions && toSuggestions.length > 0 && (
              <ul className="absolute top-20 z-50 w-full bg-white border shadow-xl border-gray-300 rounded-md mt-1 max-h-60 overflow-auto">
                {toSuggestions.map((suggestion, index) => (
                  <li 
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100 text-sm"
                    onClick={() => handleSuggestionClick(suggestion, 'to')}
                    dangerouslySetInnerHTML={{ __html: highlightMatch(suggestion.address.formatted_address, to) }}
                  />
                ))}
              </ul>
            )}
          </label>
        </div>
        <button
          type="submit"
          className='xz:mb-4 sd:mb-0 xz:mt-6 sd:mt-0 btn bg-[#83DB00] hover:skeleton hover:rounded-lg w-full sd:w-auto'
        >
          Рассчитать стоимость
        </button>
      </form>

      {/* Distance and Price Display */}
      <div
        className={`
        sd:mt-6 xz:mt-1 mb-3
        ${distance ? 'flex sd:flex-row xz:flex-col sd:space-x-6 xz:space-x-0 sd:items-center xz:items-start' : 'hidden'}
        `}>
        <p className={`font-semibold sd:text-2xl xz:text-lg`}>
          {distance && `Расстояние: ${distance} км.`}
        </p>
        <p className='font-semibold sd:text-2xl xz:text-lg'>
          {price && `Цена: ${price} бел.руб.`}<span className=''>*</span>
        </p>
        <div className='mt-4 mb-4'>
          <BtnComp title='Заказать авто' index={306} />
        </div>
      </div>

      <p className='mt-3 mb-6 sd:text-sm xz:text-xs text-gray-500 xz:font-light xl:font-normal'>
        <span className=''>*</span>Стоимость предварительная, окончательную стоимость вы сможете узнать по телефону:
        <a
          href='tel:+375291038800'
          className='text-gray-700 sd:inline-block xz:block sd:mt-0 xz:mt-1 sd:ml-1 xz:ml-0 xz:font-normal xl:font-semibold'
        >
         +375 (29) 103-88-00
        </a>
      </p>

      {distance ?
        <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY }}>
          <Map
            defaultState={{ center: [53.9, 27.5667], zoom: 10 }}
            style={{ width: '100%', height: '500px' }}
            instanceRef={(ref) => {
              if (ref && multiRoute) {
                ref.geoObjects.removeAll();
                ref.geoObjects.add(multiRoute);
              }
            }}
          >
            <GeolocationControl options={{ float: 'right' }} />
          </Map>
        </YMaps>
        :
        null
      }
    </div>
  );
}

export default MapComponent;
