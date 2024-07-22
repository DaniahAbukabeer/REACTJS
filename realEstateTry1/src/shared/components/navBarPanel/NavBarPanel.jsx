import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";


export default function NavBarPanel() {

    return(
       
            
            <nav className="bg-opacity-0 mx-0 px-0 font-mono font-semibold">
                <div className="max-w-screen flex px-10 justify-between py-3 mx-0">
                    <div className="flex justify-start ">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/buy" className="hover:text-indigo-700 hover:cursor-pointer" >
                                    Buy
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
                        <ul>
                            <li>
                                <Link to="/" className="hover:text-indigo-700 hover:cursor-pointer">
                                    LOGO
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