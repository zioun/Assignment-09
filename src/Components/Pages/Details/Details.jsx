import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

//leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './map.css';

const Details = () => {
  const carts = useLoaderData();
  const { id } = useParams();
  const int = parseInt(id);
  const cart = carts.find((cart) => cart.id == int);
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    coordinates,
    facilities,
    year_built,
    num_bedrooms,
    num_bathrooms,
    garage_capacity,
    lot_size,
    hoa_fee,
    school_district,
    image_url,
    building_amenities,
    pet_policy,
    lease_terms,
    nearby_amenities,
    level_of_care,
    amenities,
    security_features,
    available_dates,
    minimum_stay,
    nearby_attractions,
    medical_services,
    architect,
    architect_design
  } = cart;
  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
}, []);

// Create a custom icon
const locationIcon = "https://i.ibb.co/FxgTyz7/marker-icon.png";
const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});
  
  return (
    <>
      <div className="bg-[#F8F8F8] px-5">
      <Helmet>
          <title>WSP_Residence-Details-{id}</title>
        </Helmet>
        <ScrollRestoration />
        <div className="container m-auto mb-20 mt-10">
          <div className="grid grid-cols-12 gap-5">
            <div data-aos="zoom-in-up" className="col-span-12 xl:col-span-7 bg-white rounded xl:my-10 shadow-md">
              <div>
                <div className="px-5 pt-5 flex flex-col text-center lg:text-left lg:flex-row justify-between items-center">
                  <div>
                    <div className="py-3 flex justify-center flex-col md:flex-row lg:justify-start gap-5">
                      <h1 className="px-5 py-1 rounded text-white bg-[#262525] text-[14px]">
                        {segment_name}
                      </h1>
                      <span className="px-5 py-1 rounded text-white bg-[#A62F03] text-[14px]">
                        For <span className="capitalize">{status}</span>
                      </span>
                    </div>
                    <h1 className="text-[35px] font-semibold">{estate_title}</h1>
                    <h2>
                      {location.address}, {location.city}, {location.state},{" "}
                      {location.zipcode}
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-[35px] text-[#A62F03]">{price}</h1>
                  </div>
                </div>
              </div>
              <div className="px-5 py-5">
                <img
                  className="rounded object-cover"
                  src={image_url}
                  alt=""
                />
                <div className="pt-5">
                  <div>
                    <h1 className="font-semibold">Description</h1>
                    <p className="text-[14px] py-2 text-[#54595F]">
                      {description}
                    </p>
                  </div>
                </div>
                <div className="my-5">
                  <Link to="/">
                    <span className="px-5 rounded bg-[#A62F03] text-white py-2 cursor-pointer">
                      Back to advertisements
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-up" className="col-span-12 xl:col-span-5 bg-white rounded xl:my-10 shadow-md mb-[20px] xl-mb-[0px]">
              <div className="px-5 py-5">
                <img
                  className="rounded object-cover"
                  src={architect}
                  alt="architect"
                />
                <div className="pt-5">
                  <div>
                    <h1 className="font-semibold">About Architects Design</h1>
                    <p className="text-[14px] py-2 text-[#54595F]">
                      {architect_design}
                    </p>
                    <div className="bg-[#F8F8F8] px-5 py-5 rounded flex flex-col gap-1">
                      {area && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Area : </h1>
                          {area ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {area}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {year_built && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Year Built : </h1>
                          {year_built ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {year_built}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {facilities && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Facilities : </h1>
                          <div className="text-center flex  gap-2">
                            {facilities.map((facilities) => (
                              <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                                {facilities}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      {building_amenities && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Building Amenities : </h1>
                          <div className="text-center flex  gap-2">
                            {building_amenities ? (
                              building_amenities.map((building_amenities) => (
                                <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                                  {building_amenities}
                                </p>
                              ))
                            ) : (
                              <span className="italic text-[#54595F]">None</span>
                            )}
                          </div>
                        </div>
                      )}
                      {pet_policy && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Pet Policy : </h1>
                          {pet_policy ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {pet_policy}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {num_bedrooms && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Bedrooms : </h1>
                          {num_bedrooms ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {num_bedrooms}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {num_bathrooms && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Bathrooms : </h1>
                          {num_bathrooms ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {num_bathrooms}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {garage_capacity && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Garage Capacity : </h1>
                          {garage_capacity ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {garage_capacity}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {lot_size && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Lot Size : </h1>
                          {lot_size ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {lot_size}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {hoa_fee && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Hoa Fee : </h1>
                          {hoa_fee ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {hoa_fee}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {school_district && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">School District : </h1>
                          {school_district ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {school_district}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {lease_terms && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Lease Terms : </h1>
                          {lease_terms ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {lease_terms}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {nearby_amenities && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Nearby Amenities : </h1>
                          {nearby_amenities ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {nearby_amenities}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {level_of_care && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Level Of Care : </h1>
                          {level_of_care ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {level_of_care}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {amenities && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Amenities : </h1>
                          {amenities ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {amenities}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {security_features && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Security Features : </h1>
                          {security_features ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {security_features}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {amenities && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Amenities : </h1>
                          <div className="text-center flex  gap-2">
                            {amenities.map((amenities) => (
                              <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                                {amenities}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      {available_dates && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Available Dates : </h1>
                          <div className="text-center flex  gap-2">
                            {available_dates.map((available_dates) => (
                              <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                                {available_dates}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      {minimum_stay && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Minimum Stay : </h1>
                          {minimum_stay ? (
                            <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                              {minimum_stay}
                            </p>
                          ) : (
                            <span className="italic text-[#54595F]">None</span>
                          )}
                        </div>
                      )}
                      {nearby_attractions && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Nearby Attractions : </h1>
                          <div className="text-center flex  gap-2">
                            {nearby_attractions.map((nearby_attractions) => (
                              <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                                {nearby_attractions}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      {medical_services && (
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                          <h1 className="font-semibold">Medical Services : </h1>
                          <div className="text-center flex  gap-2">
                            {medical_services.map((medical_services) => (
                              <p className="text-[12px] py-1 text-[#FFFFFF] bg-[#A62F03] px-2 rounded">
                                {medical_services}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container" data-aos="zoom-in-up">
            <MapContainer center={coordinates} zoom={13} style={{ height: "400px", width: "100%" }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={coordinates} icon={customIcon}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Details;
