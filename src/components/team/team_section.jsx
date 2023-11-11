import React from 'react';
import one from "../../assets/images/team-members/member1.jpg";
import two from "../../assets/images/team-members/member2.jpg";

const loaderProp = ({ src }) => {
    return src;
}

const TeamSection = () => {
    return (
        <div className=" w-auto h-screen sm:wd-32  overflow- from-gray-100 ">
            <div className="team-section max-w-6xl  mx-auto h-full flex flex-col ">
                <div className="text-left flex-row mr-4 p-4 mt-16">
                    <hr className="border-t-2 border-pink-500 w-16 h-1 mb-2" />
                    <h2 className="text-2xl text-left sm:text-3xl  mb-2 text-gray-900">Know the Business</h2>
                    <p className="text-lg sm:text-xl text-gray-900  font-bold">Our Team</p>
                </div>

                <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 " >
                    <div className="flex flex-col justify-center  items-center " >
                        <div className="relative rounded-lg overflow-hidden" style={{ maxWidth: '80%' }}>
                            <img
                                src={one}
                                alt="Founder Naol Muhammed"
                                className="w-full h-70 sm:h-86 object-cover object-fit:cover"

                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <p className="text-xl sm:text-2xl font-semibold">Founder</p>
                                <p className="text-lg sm:text-xl font-semibold">Naol Muhammed</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center" >
                        <div className="relative rounded-lg overflow-hidden" style={{ maxWidth: '80%' }}>
                            <img
                                src={two}
                                alt="Founder Bereket Alemayehu"
                                className="w-full h-70 sm:h-86 object-cover object-fit:cover"
                                
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                                <p className="text-xl sm:text-2xl font-semibold">Founder</p>
                                <p className="text-lg sm:text-xl font-semibold">Bereket Alemayehu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;