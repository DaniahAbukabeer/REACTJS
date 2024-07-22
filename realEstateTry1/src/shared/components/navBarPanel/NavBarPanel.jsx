import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { icons } from "../../../assets/icons";

export default function NavBarPanel() {

    return(
       
            
            <nav className="bg-transparent fixed top-0 left-0 mt-3 text-white mx-0 px-0 w-full z-10 font-mono">
                <div className="max-w-screen flex px-10 justify-between py-3 mx-0">
                    <div className="flex justify-start ">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/buy" className="hover:text-indigo-700 hover:cursor-pointer" >
                                    <button>
                                        Buy 
                                        <img src={icons.dropdownWhite} className=" inline w-5 h-5 pl-1"/>
                                        </button> 
                                </Link>
                            </li>
                            <li>
                                <Link to="/rent" className="hover:text-indigo-700 hover:cursor-pointer">
                                    Rent
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="justify-center">
                        <ul className="flex space-x-1">
                            <li>
                                <Link to="/" className="font-semibold hover:text-indigo-700 hover:cursor-pointer">
                                    <button className="hover:fill-indigo-700">

                                    <img src={icons.houseBuildingWhite}  className=" w-10 h-10 inline pr-1"/>
                                ESTATE
                                    </button>
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="justify-end">
                        <ul className="flex space-x-4">
                            <li className="hover:text-indigo-700 hover:cursor-pointer">
                                Dark
                            </li>
                            <li className="hover:text-indigo-700 hover:cursor-pointer"> 
                                E
                            </li>
                        </ul>
                    </div>


                </div>

            </nav>

    )
};