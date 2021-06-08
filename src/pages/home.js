import React, { useRef, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { firestore } from '../firebase';
import userContext from './userContext';

import '../styles/home.scss';

const GOOGLE_API_KEY = 'AIzaSyDD1bL9fKZ3r1YsNSBNd7kWwVyW3F4FkV4';
const ulaanbaatar = { lat: 47.919067, lng: 106.9175938 };

const Home = () => {
  const history = useHistory();
  const mapElmentRef = useRef();
  const mapRef = useRef(null);
  const trackingRef = useRef();
  const [markers, setMarkers] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener('load', onGoogleMapload);
  }, []);

  useEffect(() => {
    if (user.uid) trackMyLocation();
  }, [user]);

  const trackMyLocation = () => {
    trackingRef.current = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;

      firestore
        .collection('tracking')
        .doc(user.uid)
        .set({
          date: new Date(),
          position: { lat: latitude, lng: longitude },
          user: user.uid,
        });
    });
  };

  const onGoogleMapload = () => {
    mapRef.current = new window.google.maps.Map(mapElmentRef.current, {
      center: ulaanbaatar,
      zoom: 16,
    });

    firestore.collection('tracking').onSnapshot((querySnapshot) => {
      const markerList = [];
      querySnapshot.forEach((doc) => {
        markerList.push(doc.data());
      });
      setMarkers(markerList);
    });
  };
  console.log(user);

  useEffect(() => {
    let markerObjects = [];
    if (mapRef.current) {
      markerObjects = markers.map(
        (item) =>
          new window.google.maps.Marker({
            icon: user.icon,
            label: user.username,
            position: {
              lat: item.position.lat,
              lng: item.position.lng,
            },
            map: mapRef.current,
          })
      );
    }
    return () => {
      markerObjects.forEach((item) => item.setMap(null));
    };
  }, [markers]);

  return (
    <div className='home'>
      <div ref={mapElmentRef} className='map'></div>
      <div className='fixed'>
        <button className='btn-floating btn-large waves-effect waves-light'>
          <i
            className='material-icons'
            id='friendRequest'
            onClick={() => {
              history.push('/friendRequest');
            }}
          >
            assignment_ind
          </i>
        </button>
        <button className='btn-floating btn-large waves-effect waves-light'>
          <i className='material-icons' id='add'>
            add_circle_outline
          </i>
        </button>
        <button
          onClick={() => {
            history.push('/profile');
          }}
          className='btn-floating btn-large waves-effect waves-light'
        >
          <i className='material-icons' id='profile'>
            account_circle
          </i>
        </button>
      </div>
    </div>
  );
};

export default Home;
